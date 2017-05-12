package com.tjwl.pages;

import java.util.List;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.NoSuchElementException;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.openqa.selenium.support.ui.ExpectedConditions;

public class SearchResultsPage {
	 WebDriver driver;	 
	 WebDriverWait wait;

	    public SearchResultsPage(WebDriver driver) {
	        this.driver = driver;
	    }


	    public void filterByAirline() {
	    	boolean foundEmirates = false;
	        //waitForSearchResultsToAppear();
	        Actions builder = new Actions(driver);
			
			List<WebElement> airlinesList = driver.findElements(By.xpath("//label[(contains(@for,'flights-filters-airline-leg-0-check_'))]/span"));
			WebElement onlyLink;
			//Loop through airline names
			for (int i = 0; i < airlinesList.size(); i++) {
				String airlineName = airlinesList.get(i).getText();
				//System.out.println("Airline: " + airlineName);
				if (driver instanceof ChromeDriver){
					//Filter the results by 'Emirates' airline.
					if (airlineName.equals("EK: Emirates")){
						foundEmirates = true;
						//click on the corresponding only link and exit the loop
						builder.moveToElement(airlinesList.get(i)).build().perform();
						onlyLink= wait.until(ExpectedConditions.elementToBeClickable(airlinesList.get(i).findElement(By.xpath("./../../a"))));
						builder.moveToElement(onlyLink).click().build().perform();				
						break;
					} 
					if(foundEmirates == false){
						//filter based on another airline
						builder.moveToElement(airlinesList.get(0)).build().perform();
						onlyLink= wait.until(ExpectedConditions.elementToBeClickable(airlinesList.get(0).findElement(By.xpath("./../../a"))));
						builder.moveToElement(onlyLink).click().build().perform();		
						break;
					}
				}else if(driver instanceof FirefoxDriver){
					//implement functionality for firefox.
				}
			}//end for loop
			//return foundEmirates;
	    }

	    public boolean testResultsAppearForCompleteTrip() {
	        //waitForSearchResultsToAppear();
	        return isElementPresent(By.id("flights-results-tab-complete-trip-btn"));
	    }
	    
	    public String getTicketPrice(){
	    	String totalPriceOnSelectFlightPage = driver.findElement(By.xpath("(//span[@class='text-chambray font-weight-700 h2 no-margin'])[1]")).getText();
	    	return totalPriceOnSelectFlightPage;
	    }
	    
	    public void selectFlight(){
	    	WebElement selectFlightButton = wait.until(ExpectedConditions.elementToBeClickable(driver.findElement(By.id("flights-results-select-cta-btn-0"))));
	    	//Press the 'Select' button for the first flight result
			selectFlightButton.click();
	    }
	    private void waitForSearchResultsToAppear() {
			driver.manage().timeouts().implicitlyWait(35, TimeUnit.SECONDS);
			wait = new WebDriverWait(driver, 20);
	    	wait.until(ExpectedConditions.elementToBeClickable(driver.findElement(By.id("flights-results-select-cta-btn-0"))));
	    }

	    private boolean isElementPresent(By by) {
	        try {
	            driver.findElement(by);
	            return true;
	        } catch (NoSuchElementException e) {
	            return false;
	        }
	    }

}
