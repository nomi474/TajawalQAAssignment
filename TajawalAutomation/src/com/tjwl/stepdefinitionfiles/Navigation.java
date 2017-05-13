package com.tjwl.stepdefinitionfiles;

import java.io.FileInputStream;
import java.io.IOException;
import java.util.Properties;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

import com.tjwl.common.CommonFeatures;
import com.tjwl.pages.PaymentDetails;
import com.tjwl.pages.SearchFlightsPage;
import com.tjwl.pages.SearchResultsPage;
import com.tjwl.pages.TravelerDetails;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;

public class Navigation{
	
	WebDriver driver;		
	
	SearchFlightsPage sf;
	SearchResultsPage sr;
	CommonFeatures cf;
	TravelerDetails td;
	PaymentDetails pd;

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
	
	@And("^I maximize the browser window$")
	public void maximizeWindow(){
		cf.maximizeBrowserWindow();
	}
		
	@And("^I enter the departureCity$")
	public void enterDepartureCity(){
		sf = new  SearchFlightsPage(driver);
		//f.selectRoundTrip();
		sf.enterRandomDepartureCity();
	}
	
	@And("^I enter the destinationCity$")
	public void enterArrivalCity(){
		sf.enterRandomDestinationCity();

	}
	
	@And("^I select the departureDate$")
	public void selectDepartureDate(){
		sf.selectRandomDepartureDate();
	}
	
	@And("^I select the returnDate$")
	public void selectReturnDate(){
		sf.selectRandomReturnDate();
	}
	
	@And("^I select two Adult passengers$")
	public void incrementAdultPassengerCount(){
		sf.incrementAdultPassengersNumber();
	}
	
	@And("^I click on the Search Flights button$")
	public void pressSearchFlightsButton(){
		sf.searchForTheJourney();	
	}
	
	@Given("^I am at the Flight Search Results page$")
	public void verifySearchResultsPageAppears(){
		sr= new SearchResultsPage(driver);
		sr.testResultsAppearForCompleteTrip();				
	}
	
	@And("^I filter by my favorite airline$")
	public void filterByAirline(){
		sr.filterByAirline();				
	}
	
	@And("^I get the ticket price$")
	public void getTicketPrice(){
		sr.getTicketPrice();
	}
	@And("^I select the flight I want to take$")
	public void bookAFlight(){
		sr.selectFlight();				
	}	
	
	@Given("^I am at the Traveler details page$")
	public void verifyTravelerDetailsPageIsDisplayed(){
		td = new TravelerDetails(driver);	
		td.verifyTravelerDetailsPageIsLaunched();
	}
	
	@Then("^I select title for Traveler1 as ([^\"]*)$")
	public void selectTitleForTraveler1(String title1){	
		td.selectTitleForTraveler1(title1);
	}
	
	@And("^I enter firstName for Traveler1 as ([^\"]*)$")
	public void enterFirstNameForTraveler1(String fname1){	
		td.enterFirstNameForTraveler1(fname1);
	}
	
	@And("^I enter lastName for Traveler1 as ([^\"]*)$")
	public void enterLastNameForTraveler1(String lname1){	
		td.enterLastNameForTraveler1(lname1);
	}
	
	@And("^I enter firstName for Traveler2 as ([^\"]*)$")
	public void enterFirstNameForTraveler2(String fname2){	
		td.enterFirstNameForTraveler2(fname2);
	}
	
	@And("^I select title for Traveler2 as ([^\"]*)$")
	public void selectTitleForTraveler2(String title2){	
		td.selectTitleForTraveler2(title2);
	}
	
	@And("^I enter lastName for Traveler2 as ([^\"]*)$")
	public void enterLastNameForTraveler2(String lname2){	
		td.enterLastNameForTraveler2(lname2);
	}
	
	@And("^I select title in Contact details section as ([^\"]*)$")
	public void selectTitleForContact(String titleContact){	
		td.selectTitleForContact(titleContact);
	}
	
	@And("^I enter firstName in Contact details section as ([^\"]*)$")
	public void enterFirstNameInContactSection(String fnameContact){	
		td.enterFirstNameInContactSection(fnameContact);
	}
	
	@And("^I enter lastName in Contact details section as ([^\"]*)$")
	public void enterLastNameInContactSection(String lnameContact){	
		td.enterLastNameInContactSection(lnameContact);
	}
	
	@And("^I enter email in Contact details section as ([^\"]*)$")
	public void enterEmailInContactSection(String emailContact){	
		td.enterEmailInContactSection(emailContact);
	}
	
	@And("^I enter mobileNumber in Contact details section as ([^\"]*)$")
	public void enterMobileInContactSection(String mobileContact){	
		td.enterMobileInContactSection(mobileContact);
	}
	
	@And("^I verify that the Trip total price matches the total price on \"Select a Flight\" page$")
	public void verifyTotalPriceMatchesWithSelectFlightsPage(){	
	}
	
	@And("^I press the \"Continue to Payment\" button$")
	public void goToPaymentDetailsPage(){	
		td.goToPaymentDetailsPage();
	}
	
	@Given("^I am at the Payment page$")
	public void verifyPaymentDetailsPageAppears(){
		pd = new PaymentDetails(driver);
		pd.verifyPaymentDetailsPageShowsCorrectly();				
	}
	
	@Then("^I enter Cardholder name as \"([^\"]*)\"$")
	public void enterCardholderName(String chName){
		pd.enterCardholderName(chName);				
	}
	
	@And("^I enter Card number as ([^\"]*)$")
	public void enterCardNum(String cardNum){
		pd.enterCardNum(cardNum);			
	}
	
	@And("^I select expiration month as \"([^\"]*)\"$")
	public void selectExpirationMonth(String expMonth){
		pd.selectExpirationMonth(expMonth);			
	}
	
	@And("^I select expiration year as ([^\"]*)$")
	public void selectExpirationYear(String expYear){
		pd.selectExpirationYear(expYear);			
	}
	
	@And("^I enter security code cvv as ([^\"]*)$")
	public void enterSecurityCodeCVV(String cvvCode){
		pd.enterSecurityCodeCVV(cvvCode);			
	}
	
	@And("^I verify that the total on Payment page matches the total on Traveler details page$")
	public void verifyTotalMatchesWithTravelDetailsPage(){
		pd.verifyTotalMatchesWithTravelDetailsPage();				
	}
	
	@And("^I verify that the total on \"Pay now\" button shows correct amount$")
	public void verifyTotalOnPayNowButton(){
		pd.verifyTotalOnPayNowButton();				
	}
	
}