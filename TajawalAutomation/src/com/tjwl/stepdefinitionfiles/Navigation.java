package com.tjwl.stepdefinitionfiles;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;

public class Navigation extends BaseTest{
	
	//WebDriver driver;
	@Given("^I am using ([^\"]*) browser$")
	public WebDriver getMyDriver(String aBrowser){
		String myBrowser = aBrowser;
		return getDriver(myBrowser);
	}
	
	//@Given("^I go to the page \"([^\"]*)\"$")
	@Given("^I go to the homepage$")
	public void goToLandingPage(){
		lauchHomePage("http://www.tajawal.ae");
	}
		
	@Then("^I enter the departureCity$")
	public void enterDepartureCity(){
		driver.findElement(By.id("flights-search-origin-0")).clear();
		driver.findElement(By.id("flights-search-origin-0")).sendKeys("Dubai");

	}

}
