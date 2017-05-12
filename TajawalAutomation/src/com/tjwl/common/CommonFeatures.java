package com.tjwl.common;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class CommonFeatures {
	
	WebDriver driver;	
	
	public  CommonFeatures(WebDriver driver){
		this.driver = driver;
	}
	
	public void maximizeBrowserWindow(){
		driver.manage().window().maximize();
	}
	
	public void ImplicitWait(int seconds){
    	driver.manage().timeouts().implicitlyWait(seconds, TimeUnit.SECONDS);
	}
	
	public void waitForElementToAppear(By locator){
		WebDriverWait wait = new WebDriverWait(driver, 10);
    	wait.until(ExpectedConditions.elementToBeClickable(locator));
		
	}

}
