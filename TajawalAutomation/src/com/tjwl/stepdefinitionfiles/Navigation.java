package com.tjwl.stepdefinitionfiles;

import java.io.FileInputStream;
import java.io.IOException;
import java.util.Properties;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

import com.tjwl.common.CommonFeatures;
import com.tjwl.pages.SearchFlightsPage;
import com.tjwl.pages.SearchResultsPage;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;

public class Navigation{
	
	WebDriver driver;		
	
	SearchFlightsPage sf;
	SearchResultsPage sr;
	CommonFeatures cf;

	public Navigation(){
		Properties p=new Properties();
		try {
	    	FileInputStream fi=new FileInputStream("C:\\Tajawal\\TajawalAutomation\\global.properties");
			p.load(fi);
	    	} catch (IOException ioe){
	    		
	    	}
			if(p.getProperty("browser").contains("firefox"))
			{
				System.setProperty("webdriver.gecko.driver", "C:\\Tajawal\\TajawalAutomation\\lib\\geckodriver.exe");
				driver = new FirefoxDriver();
			} else if (p.getProperty("browser").contains("chrome")){
				System.setProperty("webdriver.chrome.driver", "C:\\Tajawal\\TajawalAutomation\\lib\\chromedriver.exe");
				driver = new ChromeDriver();
			}		
		}
	
	@Given("^I go to the page \"([^\"]*)\"$")
	public void goToLandingPage(String url){
		driver.get(url);
	}
	
	@Then("^I wait for ([^\"]*) seconds$")
	public void waitForTime(int seconds){
		cf = new CommonFeatures(driver);
		cf.ImplicitWait(seconds);
	}
	
	@Given("^I maximize the browser window$")
	public void maximizeWindow(){
		cf.maximizeBrowserWindow();
	}
		
	@Then("^I enter the departureCity$")
	public void enterDepartureCity(){
		sf = new  SearchFlightsPage(driver);
		sf.selectFlightsPage();
		sf.selectRoundTrip();
		sf.setDepartureCity("Dubai");

	}
	
	@Then("^I enter the destinationCity$")
	public void enterArrivalCity(){
		sf.setDestinationCity("Los Angeles");

	}
	
	@Then("^I select the departureDate$")
	public void selectDepartureDate(){
		sf.selectRandomDepartureDate();
	}
	
	@Then("^I select the returnDate$")
	public void selectReturnDate(){
		sf.selectRandomReturnDate();
	}
	
	@Then("^I select two Adult passengers$")
	public void incrementAdultPassengerCount(){
		sf.incrementAdultPassengersNumber();
	}
	
	@Then("^I click on the Search Flights button$")
	public void pressSearchFlightsButton(){
		sf.searchForTheJourney();	
		cf.ImplicitWait(1);
	}
	
	@Given("^I am at the Flight Search Results page$")
	public void verifySearchResultsPageAppears(){
		sr= new SearchResultsPage(driver);
		sr.testResultsAppearForCompleteTrip();				
	}
	
	@Then("^I filter by my favorite airline$")
	public void filterByAirline(){
		sr.filterByAirline();				
	}
	
	@Then("^I select the flight I want to take$")
	public void bookAFlight(){
		sr.selectFlight();				
	}	
	
	public WebDriver getDriver(){
		return driver;
	}
}
