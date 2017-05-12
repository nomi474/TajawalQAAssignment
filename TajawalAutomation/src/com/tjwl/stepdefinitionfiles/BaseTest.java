package com.tjwl.stepdefinitionfiles;


import java.util.concurrent.TimeUnit;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.support.ui.WebDriverWait;

public class BaseTest {

   public static WebDriver driver;
    	
   	 public void setup(){
   	    WebDriverWait wait;		
    	driver.manage().timeouts().implicitlyWait(25, TimeUnit.SECONDS);
		driver.manage().window().maximize();
    	wait = new WebDriverWait(driver, 10);
   	 }
   	 
   	 public void lauchHomePage(String URL){
   		 driver.get(URL);
   	 }
    public WebDriver getDriver(String strBrowser){
    	String browser = strBrowser;
    	if(browser.contains("firefox"))
		{
			System.setProperty("webdriver.gecko.driver", "C:\\Tajawal\\TajawalAutomation\\lib\\geckodriver.exe");
			driver = new FirefoxDriver();
		} else if(browser.contains("chrome")){
			System.setProperty("webdriver.chrome.driver", "C:\\Tajawal\\TajawalAutomation\\lib\\chromedriver.exe");
			driver = new ChromeDriver();
		}		
        return driver;
    }
}
