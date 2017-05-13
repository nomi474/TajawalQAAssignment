package com.tjwl.tests;

import java.io.FileInputStream;
import java.io.IOException;
import java.util.Properties;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.NoSuchElementException;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class TestManager{
	
	static WebDriver driver;
	public static void setup(){
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
	
	public static WebDriver getDriver(){
		setup();
		return driver;
	}
	
	public void goToHomePage(String url){
		
		driver.get(url);
	}
	    
    public void clickButtonWithID( String elementLocation){    	
    	driver.findElement(By.id(elementLocation)).click();
    }
    public void clickButtonWithXPath( String elementLocation){    	
    	driver.findElement(By.xpath(elementLocation)).click();
    }
    
    
    //This method is for entering text into text boxes
    public void enterTextIntoWebElement( String elementLocation, String textToEnter){
    	driver.findElement(By.id(elementLocation)).clear();
    	driver.findElement(By.id(elementLocation)).sendKeys(textToEnter);
    }
    
    
	public void maximizeBrowserWindow(){
		driver.manage().window().maximize();
	}
	
	public void ImplicitWait(int seconds){
    	driver.manage().timeouts().implicitlyWait(seconds, TimeUnit.SECONDS);
	}
	
	public void waitForElementToAppear(By by){
		WebDriverWait wait = new WebDriverWait(driver, 10);
    	wait.until(ExpectedConditions.elementToBeClickable(by));
		
	}
    public boolean isElementPresent(By by) {
        try {
            driver.findElement(by);
            return true;
        } catch (NoSuchElementException e) {
            return false;
        }
    }
}
