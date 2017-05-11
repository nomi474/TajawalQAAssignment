package com.tjwl.pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;


import org.openqa.selenium.WebElement;

import java.time.LocalDate;
import java.time.Period;
import java.util.ArrayList;
import java.util.List;
import java.util.Random;
import java.util.concurrent.TimeUnit;

public class SearchFlightsPage {
	
	WebDriver driver;
	private static LocalDate departureDate;
	private static LocalDate returnDate;
	
    public SearchFlightsPage(WebDriver driver) {
    	this.driver = driver;
    }
    
    public void selectFlightsPage(){
    	driver.findElement(By.id("nav-flights-cta"));
    	driver.manage().timeouts().implicitlyWait(12, TimeUnit.SECONDS);
    }
    
    public void selectRoundTrip(){
    	driver.findElement(By.id("flights-search-type-RoundTrip-inp"));
    }
    
    public void setDepartureCity(String departureCity){
    	driver.findElement(By.id("flights-search-origin-0")).clear();
    	driver.findElement(By.id("flights-search-origin-0")).sendKeys(departureCity);

    }
    
    public void setDestinationCity(String destinationCity){
    	driver.findElement(By.id("flights-search-destination-0")).clear();
    	driver.findElement(By.id("flights-search-destination-0")).sendKeys(destinationCity);
    }

    
    public void selectRandomDepartureDate() {
    	generateRandomDates();
    	List<String> randomDepartureDate = splitDate(departureDate.toString());
    	String departureDay = randomDepartureDate.get(0);
    	int departureMonth = (Integer.parseInt(randomDepartureDate.get(1))-1);
    	String departureYear = randomDepartureDate.get(2);
    	driver.findElement(By.xpath(".//*[@id='flights-search-departureDate-RoundTrip-0']")).click();
    	
    	WebElement departureDate = driver.findElement(By.xpath("(.//*[@class='pika-button pika-day'][@data-pika-day='" 
    									+ departureDay + "']"
    									+ "[@data-pika-month='" + departureMonth 
    									+ "'][@data-pika-year='" + departureYear 
    									+  "'])[1]"));//.click();
    	departureDate.click();
    }

    public void selectRandomReturnDate() {
    	List<String> randomReturnDate = splitDate(returnDate.toString());
    	String returnDay = randomReturnDate.get(0);
    	int returnMonth = (Integer.parseInt(randomReturnDate.get(1))-1);
    	String returnYear = randomReturnDate.get(2);
    	
		try{						
			//Select return date
		WebElement returnDate =	driver.findElement(By.xpath("(.//*[@class='pika-button pika-day'][@data-pika-day='" 
											+ returnDay + "'][@data-pika-month='" + returnMonth 
											+ "'][@data-pika-year='" + returnYear
											+ "'])[2]"));//.click();
		returnDate.click();
		}catch(org.openqa.selenium.NoSuchElementException e){
			System.out.println("Return Date Selection failed with the message: " + e.getMessage());
		}
    }
    
    public void incrementAdultPassengersNumber(){
		//Click on Passengers dropdown
		driver.findElement(By.xpath(".//p[@translate-n='totalPax']")).click();
		//Click on plus sign for incrementing adult tickets
		driver.findElement(By.xpath(".//i[@class='tj-icon tj-icon--add-c']")).click();
    }
    

    public SearchResultsPage searchForTheJourney() {
    	//Click on the 'Search flights' button.
    	driver.findElement(By.xpath("//span[contains(.,'Search flights')]")).click();	
        return new SearchResultsPage(driver);
    }
    
    private void generateRandomDates(){    	
    	departureDate = LocalDate.now().plus(Period.ofDays((new Random().nextInt(20))));
    	//LocalDate returnDate = LocalDate.now().plus(Period.ofDays((new Random().nextInt(20))));
    	returnDate = departureDate.now().plus(Period.ofDays((new Random().nextInt(20))));
    	while(returnDate.isBefore(departureDate)){
    		returnDate = LocalDate.now().plus(Period.ofDays((new Random().nextInt(20))));
    	}
    }
    private List<String> splitDate(String date){
    	List<String> myList = new ArrayList<String>();
    	String[] splitDate = date.split("-",2);
      	String year = splitDate[0];
    	String[] monthAndDay = splitDate[1].split("-",2);
    	
    	String day = monthAndDay[1];
    	String month = monthAndDay[0];
    	if(month.startsWith("0")){
    		month = month.substring(1);
    	}
    	if(day.startsWith("0")){
    		day = day.substring(1);
    	}
    	myList.add(day);
    	myList.add(month);
    	myList.add(year);
    	return myList;
    }


}
