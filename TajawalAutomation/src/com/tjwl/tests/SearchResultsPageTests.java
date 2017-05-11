package com.tjwl.tests;

import org.openqa.selenium.By;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.testng.annotations.BeforeMethod;
import org.testng.annotations.Test;
import org.openqa.selenium.WebDriver;

import com.tjwl.pages.SearchResultsPage;

public class SearchResultsPageTests extends BaseTest {
	WebDriver driver;
	SearchResultsPage sr;
	SearchFlightsPageTest sft;
	
	 @BeforeMethod
	 public void setup(){
		 driver = getDriver();
		 sft = new SearchFlightsPageTest();
		 sft.SearchFlightsTest();
		 sr = new SearchResultsPage(driver);
	 }
	 
	 @Test
	 public void testSearchResultsAppear(){
		 sr.testResultsAppearForCompleteTrip();		 
	 }
	 
	 @Test
	 public void testEmiratesAirlinePresent(){
		 boolean EmiratesPresent;
		 if (sr.filterByAirline()){
			 EmiratesPresent = true;
		 }
	 }
	 
	 @Test
	 public void testTicketPricesAppear(){
		 sr.getTicketPrice();
	 }
	 
	 @Test
	 public void testUserCanSelectFlight(){
		 sr.selectFlight(); 
	 }

}
