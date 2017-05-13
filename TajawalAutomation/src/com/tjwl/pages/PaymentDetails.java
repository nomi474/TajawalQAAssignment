package com.tjwl.pages;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.Select;

import com.tjwl.common.CommonFeatures;

public class PaymentDetails {
	WebDriver driver;
	String totalPriceOnPaymentPage;
	CommonFeatures cf;
	
	public PaymentDetails(WebDriver driver){
		this.driver = driver;
	}
	
	public void verifyPaymentDetailsPageShowsCorrectly(){
		
		//cf.isElementPresent(By.id("common-credit-card-number"));
	}
	
	public void enterCardholderName(String chName){
		driver.findElement(By.id("common-credit-card-holder")).clear();
		driver.findElement(By.id("common-credit-card-holder")).sendKeys(chName);
	}
	
	public void enterCardNum(String cardNum){
		driver.findElement(By.id("common-credit-card-number")).clear();
		driver.findElement(By.id("common-credit-card-number")).sendKeys(cardNum);
	}
	
	public void selectExpirationMonth(String expMonth){
		WebElement select = driver.findElement(By.xpath("//select[@ng-model='vm.payment.card.expiryMonth']"));
		Select dropDown = new Select(select);
		dropDown.selectByVisibleText(expMonth);
	}
	
	public void selectExpirationYear(String expYear){
		WebElement select2 = driver.findElement(By.xpath("//select[@ng-model='vm.payment.card.expiryYear']"));
		Select dropDown2 = new Select(select2);
		dropDown2.selectByVisibleText(expYear);
	}
	
	public void enterSecurityCodeCVV(String cvvCode){
		driver.findElement(By.id("common-credit-card-cvv")).clear();
		driver.findElement(By.id("common-credit-card-cvv")).sendKeys(cvvCode);
	}
	
	public void verifyTotalMatchesWithTravelDetailsPage(){
		totalPriceOnPaymentPage = driver.findElement(By.xpath("//li[@class='total-payment__total']/span[2]")).getText();
		Assert.assertTrue(TravelerDetails.totalPriceOnTravelDetailsPage.equals(totalPriceOnPaymentPage));
	}
	
	public void verifyTotalOnPayNowButton(){
		String payNowButtonText = driver.findElement(By.xpath("//button[@id='flights-payment-paynow']")).getText();
		Assert.assertTrue(payNowButtonText.endsWith(totalPriceOnPaymentPage));
	}
	
}
