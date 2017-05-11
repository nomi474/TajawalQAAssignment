package com.tjwl.tests;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.WebDriver;
import org.testng.annotations.BeforeMethod;
import org.testng.annotations.Test;

import com.tjwl.pages.SearchFlightsPage;

public class SearchFlightsPageTest extends BaseTest{
	WebDriver driver;
	SearchFlightsPage sf;
	
	 @BeforeMethod
	 public void setup(){
		 driver = getDriver();
	     driver.get("http://www.tajawal.com");
		 sf = new SearchFlightsPage(driver);
	 }
	@Test
	public void SearchFlightsTest(){

		sf.selectFlightsPage();
		sf.selectRoundTrip();
		sf.setDepartureCity("Dubai");
		sf.setDestinationCity("Los Angeles");
		sf.selectRandomDepartureDate();
		sf.selectRandomReturnDate();
		sf.incrementAdultPassengersNumber();
		sf.searchForTheJourney();
	}

}
