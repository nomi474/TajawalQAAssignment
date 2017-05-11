package com.tjwl.tests;

import java.util.concurrent.TimeUnit;

import org.testng.annotations.BeforeSuite;
import org.testng.annotations.Test;

import com.google.common.base.Verify;
import com.tjwl.pages.SearchFlightsPage;
import com.tjwl.pages.SearchResultsPage;

public class FlightBookingTests extends BaseTest{
	SearchResultsPage sr;
	SearchFlightsPage sf;
	
	@BeforeSuite
	public void launchLandingPage(){
		 setup();
		 sf = new SearchFlightsPage(driver);
		 sr = new SearchResultsPage(driver);
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
	
	 @Test(dependsOnMethods={"SearchFlightsTest"})
	 public void testSearchResultsAppear(){
		 sr.testResultsAppearForCompleteTrip();		 
	 }
	 
	 @Test(dependsOnMethods={"testSearchResultsAppear"})
	 public void testFilterResultsByAirline(){
		 sr.filterByAirline("EK: Emirates");
	 }
	 
	 @Test(dependsOnMethods={"testFilterResultsByAirline"})
	 public void testTicketPricesAppear(){
		 sr.getTicketPrice();
	 }
	 
	 @Test(dependsOnMethods={"testTicketPricesAppear"})
	 public void testUserCanSelectFlight(){
		 sr.selectFlight(); 
	 }

}
