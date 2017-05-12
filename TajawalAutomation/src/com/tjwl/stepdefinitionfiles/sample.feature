Feature: Test the Flight Booking process on Tajawal's web site

In order to purchase tickets
As a traveler
I want to know how to purchase

@tester
Scenario:	Search for flights
	Given I go to the page "http://www.tajawal.com"
	And I wait for 5 seconds
	And I maximize the browser window
	And I enter the departureCity
	And I enter the destinationCity
	And I select the departureDate
	And I select the returnDate
	And I select two Adult passengers
	And I click on the Search Flights button
	And I wait for 20 seconds
	
Scenario: Select a flight
	Given I am at the Flight Search Results page
	And I wait for 20 seconds
	Then I filter by my favorite airline
	And I wait for 20 seconds
	And I select the flight I want to take
	
	
