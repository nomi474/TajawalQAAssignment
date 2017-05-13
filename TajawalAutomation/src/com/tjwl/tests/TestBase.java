package com.tjwl.tests;

import java.io.FileInputStream;
import java.io.IOException;
import java.util.Properties;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

public class TestBase {
	private static WebDriver driver;

	private void setup(){
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
    public static WebDriver getDriver() {
        return driver;
      }
}
