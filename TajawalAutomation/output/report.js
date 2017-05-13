$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("\u0027com\\tjwl\\stepdefinitionfiles\\fligthBooking.feature\u0027");
formatter.feature({
  "line": 1,
  "name": "Test the Flight Booking process on Tajawal\u0027s web site",
  "description": "\r\nIn order to purchase tickets\r\nAs a traveler\r\nI want to know how to purchase",
  "id": "test-the-flight-booking-process-on-tajawal\u0027s-web-site",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 8,
  "name": "Search and book a flight",
  "description": "",
  "id": "test-the-flight-booking-process-on-tajawal\u0027s-web-site;search-and-book-a-flight",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 7,
      "name": "@tester"
    }
  ]
});
formatter.step({
  "comments": [
    {
      "line": 9,
      "value": "#Scenario:\tSearch for flights"
    }
  ],
  "line": 10,
  "name": "I go to the page \"http://www.tajawal.com\"",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "I wait for 5 seconds",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I maximize the browser window",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I wait for 5 seconds",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I enter the departureCity",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I enter the destinationCity",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I select the departureDate",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I wait for 3 seconds",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I select the returnDate",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I wait for 3 seconds",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I select two Adult passengers",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I click on the Search Flights button",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I wait for 20 seconds",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 24,
      "value": "#Scenario: Select a flight"
    }
  ],
  "line": 25,
  "name": "I am at the Flight Search Results page",
  "keyword": "Given "
});
formatter.step({
  "line": 26,
  "name": "I wait for 50 seconds",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I filter by my favorite airline",
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "I wait for 20 seconds",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I get the ticket price",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I select the flight I want to take",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 32,
      "value": "#Scenario: \tEnter Traveler details"
    }
  ],
  "line": 33,
  "name": "I am at the Traveler details page",
  "keyword": "Given "
});
formatter.step({
  "line": 34,
  "name": "I select title for Traveler1 as Mr",
  "keyword": "Then "
});
formatter.step({
  "line": 35,
  "name": "I enter firstName for Traveler1 as Muslim",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I enter lastName for Traveler1 as Brother",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "I select title for Traveler2 as Ms",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "I enter firstName for Traveler2 as Muslima",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "I enter lastName for Traveler2 as Sister",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "I select title in Contact details section as Mr",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "I enter firstName in Contact details section as Muslim",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "I enter lastName in Contact details section as Brother",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "I enter email in Contact details section as nomi474@yahoo.com",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "I enter mobileNumber in Contact details section as 0529070789",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "I verify that the Trip total price matches the total price on \"Select a Flight\" page",
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "I press the \"Continue to Payment\" button",
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "I wait for 25 seconds",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 49,
      "value": "#Scenario:\tEnter Payment info"
    }
  ],
  "line": 50,
  "name": "I am at the Payment page",
  "keyword": "Given "
});
formatter.step({
  "line": 51,
  "name": "I enter Cardholder name as \"Muslim Brother\"",
  "keyword": "Then "
});
formatter.step({
  "line": 52,
  "name": "I enter Card number as 4444144144444444",
  "keyword": "And "
});
formatter.step({
  "line": 53,
  "name": "I select expiration month as \"06 - June\"",
  "keyword": "And "
});
formatter.step({
  "line": 54,
  "name": "I select expiration year as 2018",
  "keyword": "And "
});
formatter.step({
  "line": 55,
  "name": "I enter security code cvv as 666",
  "keyword": "And "
});
formatter.step({
  "line": 56,
  "name": "I verify that the total on Payment page matches the total on Traveler details page",
  "keyword": "And "
});
formatter.step({
  "line": 57,
  "name": "I verify that the total on \"Pay now\" button matches shows correct amount",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "http://www.tajawal.com",
      "offset": 18
    }
  ],
  "location": "Navigation.goToLandingPage(String)"
});
formatter.result({
  "duration": 32171184757,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 11
    }
  ],
  "location": "Navigation.waitForTime(int)"
});
formatter.result({
  "duration": 16853338,
  "status": "passed"
});
formatter.match({
  "location": "Navigation.maximizeWindow()"
});
formatter.result({
  "duration": 1377929750,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 11
    }
  ],
  "location": "Navigation.waitForTime(int)"
});
formatter.result({
  "duration": 11402373,
  "status": "passed"
});
formatter.match({
  "location": "Navigation.enterDepartureCity()"
});
formatter.result({
  "duration": 3318376702,
  "status": "passed"
});
formatter.match({
  "location": "Navigation.enterArrivalCity()"
});
formatter.result({
  "duration": 1331349691,
  "status": "passed"
});
formatter.match({
  "location": "Navigation.selectDepartureDate()"
});
formatter.result({
  "duration": 1246317903,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 11
    }
  ],
  "location": "Navigation.waitForTime(int)"
});
formatter.result({
  "duration": 10303807,
  "status": "passed"
});
formatter.match({
  "location": "Navigation.selectReturnDate()"
});
formatter.result({
  "duration": 469100610,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 11
    }
  ],
  "location": "Navigation.waitForTime(int)"
});
formatter.result({
  "duration": 9205722,
  "status": "passed"
});
formatter.match({
  "location": "Navigation.incrementAdultPassengerCount()"
});
formatter.result({
  "duration": 640110694,
  "status": "passed"
});
formatter.match({
  "location": "Navigation.pressSearchFlightsButton()"
});
formatter.result({
  "duration": 365916260,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "20",
      "offset": 11
    }
  ],
  "location": "Navigation.waitForTime(int)"
});
formatter.result({
  "duration": 18163148,
  "status": "passed"
});
formatter.match({
  "location": "Navigation.verifySearchResultsPageAppears()"
});
formatter.result({
  "duration": 15772318258,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "50",
      "offset": 11
    }
  ],
  "location": "Navigation.waitForTime(int)"
});
formatter.result({
  "duration": 40954901,
  "status": "passed"
});
formatter.match({
  "location": "Navigation.filterByAirline()"
});
formatter.result({
  "duration": 39677959969,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "20",
      "offset": 11
    }
  ],
  "location": "Navigation.waitForTime(int)"
});
formatter.result({
  "duration": 9277901,
  "status": "passed"
});
formatter.match({
  "location": "Navigation.getTicketPrice()"
});
formatter.result({
  "duration": 4943522263,
  "status": "passed"
});
formatter.match({
  "location": "Navigation.bookAFlight()"
});
formatter.result({
  "duration": 3434746728,
  "status": "passed"
});
formatter.match({
  "location": "Navigation.verifyTravelerDetailsPageIsDisplayed()"
});
formatter.result({
  "duration": 6833640175,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mr",
      "offset": 32
    }
  ],
  "location": "Navigation.selectTitleForTraveler1(String)"
});
formatter.result({
  "duration": 7298511571,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Muslim",
      "offset": 35
    }
  ],
  "location": "Navigation.enterFirstNameForTraveler1(String)"
});
formatter.result({
  "duration": 927379649,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Brother",
      "offset": 34
    }
  ],
  "location": "Navigation.enterLastNameForTraveler1(String)"
});
formatter.result({
  "duration": 941568134,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Ms",
      "offset": 32
    }
  ],
  "location": "Navigation.selectTitleForTraveler2(String)"
});
formatter.result({
  "duration": 475775252,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Muslima",
      "offset": 35
    }
  ],
  "location": "Navigation.enterFirstNameForTraveler2(String)"
});
formatter.result({
  "duration": 777583482,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sister",
      "offset": 34
    }
  ],
  "location": "Navigation.enterLastNameForTraveler2(String)"
});
formatter.result({
  "duration": 720598085,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mr",
      "offset": 45
    }
  ],
  "location": "Navigation.selectTitleForContact(String)"
});
formatter.result({
  "duration": 208727512,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Muslim",
      "offset": 48
    }
  ],
  "location": "Navigation.enterFirstNameInContactSection(String)"
});
formatter.result({
  "duration": 1135384888,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Brother",
      "offset": 47
    }
  ],
  "location": "Navigation.enterLastNameInContactSection(String)"
});
formatter.result({
  "duration": 1059653618,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "nomi474@yahoo.com",
      "offset": 44
    }
  ],
  "location": "Navigation.enterEmailInContactSection(String)"
});
formatter.result({
  "duration": 1534685424,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0529070789",
      "offset": 51
    }
  ],
  "location": "Navigation.enterMobileInContactSection(String)"
});
formatter.result({
  "duration": 1317482643,
  "status": "passed"
});
formatter.match({
  "location": "Navigation.verifyTotalPriceMatchesWithSelectFlightsPage()"
});
formatter.result({
  "duration": 43788,
  "status": "passed"
});
formatter.match({
  "location": "Navigation.goToPaymentDetailsPage()"
});
formatter.result({
  "duration": 484559447,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "25",
      "offset": 11
    }
  ],
  "location": "Navigation.waitForTime(int)"
});
formatter.result({
  "duration": 13443598,
  "status": "passed"
});
formatter.match({
  "location": "Navigation.verifyPaymentDetailsPageAppears()"
});
formatter.result({
  "duration": 21491566,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Muslim Brother",
      "offset": 28
    }
  ],
  "location": "Navigation.enterCardholderName(String)"
});
formatter.result({
  "duration": 10031193399,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4444144144444444",
      "offset": 23
    }
  ],
  "location": "Navigation.enterCardNum(String)"
});
formatter.result({
  "duration": 846982721,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "06 - June",
      "offset": 30
    }
  ],
  "location": "Navigation.selectExpirationMonth(String)"
});
formatter.result({
  "duration": 462743075,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2018",
      "offset": 28
    }
  ],
  "location": "Navigation.selectExpirationYear(String)"
});
formatter.result({
  "duration": 496903517,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "666",
      "offset": 29
    }
  ],
  "location": "Navigation.enterSecurityCodeCVV(String)"
});
formatter.result({
  "duration": 571264828,
  "status": "passed"
});
formatter.match({
  "location": "Navigation.verifyTotalMatchesWithTravelDetailsPage()"
});
formatter.result({
  "duration": 135626447,
  "error_message": "java.lang.NullPointerException\r\n\tat com.tjwl.pages.PaymentDetails.verifyTotalMatchesWithTravelDetailsPage(PaymentDetails.java:54)\r\n\tat com.tjwl.stepdefinitionfiles.Navigation.verifyTotalMatchesWithTravelDetailsPage(Navigation.java:221)\r\n\tat ✽.And I verify that the total on Payment page matches the total on Traveler details page(com\\tjwl\\stepdefinitionfiles\\fligthBooking.feature:56)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "Navigation.verifyTotalOnPayNowButton()"
});
formatter.result({
  "status": "skipped"
});
});