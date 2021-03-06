package com.tjwl.pages;

import java.util.concurrent.TimeUnit;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.NoSuchElementException;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.Select;

import com.tjwl.common.CommonFeatures;

public class TravelerDetails {
	WebDriver driver;
	CommonFeatures cf;
	public static String totalPriceOnTravelDetailsPage;
    public TravelerDetails(WebDriver driver) {
        this.driver = driver;
    }	
	
	public void selectTitleForTraveler1(String title1){
		WebElement select = driver.findElement(By.id("flights-summary-travelers-form-title-0"));
		Select dropDown = new Select(select);
		dropDown.selectByValue(title1);
	}
	
	public void selectTitleForTraveler2(String title2){
		WebElement select2 = driver.findElement(By.id("flights-summary-travelers-form-title-1"));
		Select dropDown2 = new Select(select2);
		dropDown2.selectByValue(title2);
	}
	
	public void enterFirstNameForTraveler1(String fname1){
		driver.findElement(By.id("flights-summary-travelers-form-first-name-0")).clear();
		driver.findElement(By.id("flights-summary-travelers-form-first-name-0")).sendKeys(fname1);
	}
	
	public void enterFirstNameForTraveler2(String fname2){
		driver.findElement(By.id("flights-summary-travelers-form-first-name-1")).clear();
		driver.findElement(By.id("flights-summary-travelers-form-first-name-1")).sendKeys(fname2);
	}
	
	public void enterLastNameForTraveler1(String lname1){
		driver.findElement(By.id("flights-summary-travelers-form-last-name-0")).clear();
		driver.findElement(By.id("flights-summary-travelers-form-last-name-0")).sendKeys(lname1);
	}
	
	public void enterLastNameForTraveler2(String lname2){
		driver.findElement(By.id("flights-summary-travelers-form-last-name-1")).clear();
		driver.findElement(By.id("flights-summary-travelers-form-last-name-1")).sendKeys(lname2);
	}
	
	public void selectTitleForContact(String titleContact){
		WebElement select3 = driver.findElement(By.id("flights-summary-travelers-form-contact-title"));
		Select dropDown3 = new Select(select3);
		dropDown3.selectByValue(titleContact);
	}
	
	public void enterFirstNameInContactSection(String fnameContact){
		driver.findElement(By.id("flights-summary-travelers-form-contact-fname")).clear();
		driver.findElement(By.id("flights-summary-travelers-form-contact-fname")).sendKeys(fnameContact);
	}
	
	public void enterLastNameInContactSection(String lnameContact){
		driver.findElement(By.id("flights-summary-travelers-form-contact-lname")).clear();
		driver.findElement(By.id("flights-summary-travelers-form-contact-lname")).sendKeys(lnameContact);
	}
	
	public void enterEmailInContactSection(String emailContact){
		driver.findElement(By.id("flights-summary-travelers-form-contact-email")).clear();
		driver.findElement(By.id("flights-summary-travelers-form-contact-email")).sendKeys(emailContact);
	}
	
	public void enterMobileInContactSection(String mobileContact){
		driver.findElement(By.id("flights-summary-travelers-form-contact-phone")).clear();
		driver.findElement(By.id("flights-summary-travelers-form-contact-phone")).sendKeys(mobileContact);
	}
	
	public void verifyTotalPriceMatchesWithSelectFlightsPage(){
		totalPriceOnTravelDetailsPage = driver.findElement(By.xpath("(//*[@class='total-payment__total']/span[2])")).getText();
		Assert.assertTrue(totalPriceOnTravelDetailsPage.equals(SearchResultsPage.totalPriceOnSearchResultsPage));

	}
	
	public void verifyTravelerDetailsPageIsLaunched(){
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
		cf = new CommonFeatures(driver);
		cf.isElementPresent(By.id("flights-summary-go-to-payment-cta"));
	}
	
	public void goToPaymentDetailsPage(){
		driver.findElement(By.id("flights-summary-go-to-payment-cta")).click();		
	}
	  
}

