package com.tjwl.pages;

import java.util.List;
import java.util.concurrent.TimeUnit;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.NoSuchElementException;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.openqa.selenium.support.ui.ExpectedConditions;

import com.tjwl.common.CommonFeatures;

public class SearchResultsPage {
	 WebDriver driver;	 
	 WebDriverWait wait;
	 JavascriptExecutor jse;
	 CommonFeatures cf;
	 SearchFlightsPage sf;
	 public static String totalPriceOnSearchResultsPage; 
	    public SearchResultsPage(WebDriver driver) {
	        this.driver = driver;
	    }

	    public void filterByAirline() {
	    	jse = (JavascriptExecutor)driver;
	    	boolean foundEmirates = false;        
			
			List<WebElement> airlinesList = driver.findElements(By.xpath("//label[(contains(@for,'flights-filters-airline-leg-0-check_'))]/span"));
			//Loop through airline names
			int j =0;
			for (int i = 0; i < airlinesList.size(); i++) {
				String airlineName = airlinesList.get(i).getText();
				//System.out.println("Airline: " + airlineName);
					//Filter the results by 'Emirates' airline.
					if (airlineName.contains("Emirates")){
						foundEmirates = true;
						j=i;
							
					}//end outer if
			}//end for loop
			for (int i = 0; i < airlinesList.size(); i++) {
					if (i !=j){
						driver.findElement(By.id("flights-filters-airline-leg-0-check_" + i)).click();
						driver.manage().timeouts().implicitlyWait(5, TimeUnit.SECONDS);
					}//end outer if
			}//end for loop
					if(foundEmirates == false){
						for (int i = 1; i < airlinesList.size(); i++) {
							driver.findElement(By.id("flights-filters-airline-leg-0-check_" + i)).click();
							driver.manage().timeouts().implicitlyWait(5, TimeUnit.SECONDS);
						}
					}//end outer if
	    }//end method

	    public boolean testResultsAppearForCompleteTrip() {
	    	cf = new CommonFeatures(driver);	    	
	        return cf.isElementPresent(By.id("flights-results-tab-complete-trip-btn"));
	    }
	    
	    public void getTicketPrice(){
	    	totalPriceOnSearchResultsPage = driver.findElement(By.xpath("(//span[@class='text-chambray font-weight-700 h2 no-margin'])[1]")).getText();
	    	//return SearchResultsPage.totalPriceOnSelectFlightPage;
	    }
	    
	    public void selectFlight(){

	    	JavascriptExecutor jse = (JavascriptExecutor)driver;
	    	jse.executeScript("scroll(0, -500);");
	    	driver.manage().timeouts().implicitlyWait(25, TimeUnit.SECONDS);
	    	WebElement selectFlightButton = driver.findElement(By.id("flights-results-select-cta-btn-0"));
	    	//Press the 'Select' button for the first flight result
			selectFlightButton.click();
	    }	  
	    
	    public void compareAirports(){
	    	List<WebElement> list = driver.findElements(By.xpath("//airport-code[@tip='true'][1]"));
	    	String departAirport = list.get(0).getText();
	    	//Assert.assertEquals(SearchFlightsPage.departureAirport, departAirport);	    	
	    	String destAirport = list.get(1).getText();
	    	//Assert.assertEquals(SearchFlightsPage.destinationAirport, destAirport);
	    	
	    }
	    public void compareDates(){
	    	WebElement elemDepartDate = driver.findElement(By.xpath("(.//span[@class='block font-weight-600 text-chambray'])[3]"));	    															 
	    	String departureDate = elemDepartDate.getText();
	    	//Assert.assertEquals(SearchFlightsPage.departureDateToCompare,departureDate);
	    	
	    	WebElement elemRetDate = driver.findElement(By.xpath("(.//span[@class='block font-weight-600 text-chambray'])[4]"));
	    	String returnDate = elemRetDate.getText();
	    	//Assert.assertEquals(SearchFlightsPage.returnDateToCompare,returnDate);
	    }
}