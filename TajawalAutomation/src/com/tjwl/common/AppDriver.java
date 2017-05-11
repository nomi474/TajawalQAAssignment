package com.tjwl.common;

import java.io.FileInputStream;
import java.io.IOException;
import java.util.Properties;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

public class AppDriver {

   WebDriver driver;
   Properties p;

    public AppDriver(){
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
    }


    public WebDriver getDriver(){
        return driver;
    }

}
