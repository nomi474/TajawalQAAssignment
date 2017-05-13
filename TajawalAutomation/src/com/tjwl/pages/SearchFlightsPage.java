package com.tjwl.pages;

import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.WebDriverWait;

import com.tjwl.common.CommonFeatures;

import java.time.LocalDate;
import java.time.Period;
import java.util.ArrayList;
import java.util.List;
import java.util.Random;
import java.util.concurrent.TimeUnit;

public class SearchFlightsPage {
	
	WebDriver driver;
	WebDriverWait wait;
	private static LocalDate departureDate;
	private static LocalDate returnDate;
	CommonFeatures cf;
	
	public SearchFlightsPage(WebDriver driver){
		this.driver = driver;
	}
    
    public void selectFlightsPage(){
    	driver.findElement(By.id("nav-flights-cta")).click(); 
    	driver.manage().timeouts().implicitlyWait(25, TimeUnit.SECONDS);
    }
    
    public void selectRoundTrip(){
    	driver.findElement(By.id("flights-search-type-RoundTrip-inp")).click();
    	driver.manage().timeouts().implicitlyWait(15, TimeUnit.SECONDS);
    }
    
    public void enterRandomDepartureCity(){
    	Random rn = new Random();
    	ArrayList<String> departCityList = new ArrayList<String>();
    	departCityList.add("Dubai");
    	departCityList.add("Jakarta");
    	departCityList.add("Abu Dhabi");
    	departCityList.add("Jeddah");
    	departCityList.add("Mumbai");
    	int i = rn.nextInt(5);
    	driver.findElement(By.id("flights-search-origin-0")).clear();
    	driver.findElement(By.id("flights-search-origin-0")).sendKeys(departCityList.get(i));
    	driver.manage().timeouts().implicitlyWait(5, TimeUnit.SECONDS);
    	driver.findElement(By.id("flights-search-origin-0")).sendKeys(Keys.TAB);
    }
    
    public void enterRandomDestinationCity(){
    	Random rn = new Random();
    	int i = rn.nextInt(5);
    	ArrayList<String> destCityList = new ArrayList<String>();
    	destCityList.add("Sydney");
    	destCityList.add("Los Angeles");
    	destCityList.add("Paris");
    	destCityList.add("London");
    	destCityList.add("Cairo");
    	driver.findElement(By.id("flights-search-destination-0")).clear();
    	driver.findElement(By.id("flights-search-destination-0")).sendKeys(destCityList.get(i));
    	driver.manage().timeouts().implicitlyWait(5, TimeUnit.SECONDS);
    	driver.findElement(By.id("flights-search-destination-0")).sendKeys(Keys.TAB);
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
    

    public void searchForTheJourney() {
    	//Click on the 'Search flights' button.
    	driver.findElement(By.xpath("//span[contains(.,'Search flights')]")).click();	
    }
    
    private void generateRandomDates(){    	
    	departureDate = LocalDate.now().plus(Period.ofDays((new Random().nextInt(40))));
    	//LocalDate returnDate = LocalDate.now().plus(Period.ofDays((new Random().nextInt(20))));
    	returnDate = departureDate.now().plus(Period.ofDays((new Random().nextInt(40))));
    	while(returnDate.isBefore(departureDate) || returnDate.equals(departureDate)){
    		returnDate = LocalDate.now().plus(Period.ofDays((new Random().nextInt(40))));
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