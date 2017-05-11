package com.tjwl.tests;

import java.io.FileInputStream;
import java.io.IOException;
import java.util.Properties;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.support.ui.WebDriverWait;

public class BaseTest {

   WebDriver driver;
   Properties p;
   WebDriverWait wait;

    public BaseTest(){
    	p=new Properties();	
    	try {
    	FileInputStream fi=new FileInputStream("C:\\Workspaces\\Selenium\\global.properties");
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
		
    	driver.manage().timeouts().implicitlyWait(25, TimeUnit.SECONDS);
		driver.manage().window().maximize();
    	wait = new WebDriverWait(driver, 10);
    }


    public WebDriver getDriver(){
        return driver;
    }

}
