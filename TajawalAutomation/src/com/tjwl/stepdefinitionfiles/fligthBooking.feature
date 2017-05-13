Feature: Test the Flight Booking process on Tajawal's web site

In order to purchase tickets
As a traveler
I want to know how to purchase

@tester
Scenario:	Search and book a flight
#Scenario:	Search for flights
	Given I go to the page "http://www.tajawal.com"
	And I wait for 5 seconds
	And I maximize the browser window
	And I wait for 5 seconds
	And I enter the departureCity
	And I enter the destinationCity
	And I select the departureDate
	And I wait for 3 seconds
	And I select the returnDate
	And I wait for 3 seconds	
	And I select two Adult passengers
	And I click on the Search Flights button
	And I wait for 20 seconds
	
#Scenario: Select a flight	
	Given I am at the Flight Search Results page
	And I wait for 50 seconds
	Then I filter by my favorite airline	
	And I wait for 20 seconds
	And I get the ticket price
	And I select the flight I want to take
	
#Scenario: 	Enter Traveler details
	Given I am at the Traveler details page
	Then I select title for Traveler1 as Mr
	And I enter firstName for Traveler1 as Muslim
	And I enter lastName for Traveler1 as Brother
	And I select title for Traveler2 as Ms
	And I enter firstName for Traveler2 as Muslima
	And I enter lastName for Traveler2 as Sister
	And I select title in Contact details section as Mr
	And I enter firstName in Contact details section as Muslim
	And I enter lastName in Contact details section as Brother
	And I enter email in Contact details section as nomi474@yahoo.com
	And I enter mobileNumber in Contact details section as 0529070789
	And I verify that the Trip total price matches the total price on "Select a Flight" page
	And I press the "Continue to Payment" button
	And I wait for 25 seconds
	
#Scenario:	Enter Payment info
	Given I am at the Payment page
	Then I enter Cardholder name as "Muslim Brother"
	And I enter Card number as 4444144144444444
	And I select expiration month as "06 - June"
	And I select expiration year as 2018
	And I enter security code cvv as 666
	And I verify that the total on "Pay now" button shows correct amount
	And I verify that the total on Payment page matches the total on Traveler details page
	
	
	
	
	
	
