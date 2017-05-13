$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("\u0027com\\tjwl\\stepdefinitionfiles\\sample.feature\u0027");
formatter.feature({
  "line": 1,
  "name": "Test the Flight Booking process on Tajawal\u0027s web site",
  "description": "\r\nIn order to purchase tickets\r\nAs a traveler\r\nI want to know how to purchase",
  "id": "test-the-flight-booking-process-on-tajawal\u0027s-web-site",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 8,
  "name": "Search for flights",
  "description": "",
  "id": "test-the-flight-booking-process-on-tajawal\u0027s-web-site;search-for-flights",
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
  "line": 9,
  "name": "I go to the page \"http://www.tajawal.com\"",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "I wait for 5 seconds",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I maximize the browser window",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I enter the departureCity",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I enter the destinationCity",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I select the departureDate",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I select the returnDate",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I select two Adult passengers",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I click on the Search Flights button",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I wait for 20 seconds",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 20,
      "value": "#Scenario: Select a flight"
    }
  ],
  "line": 21,
  "name": "I am at the Flight Search Results page",
  "keyword": "Given "
});
formatter.step({
  "line": 22,
  "name": "I wait for 50 seconds",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I filter by my favorite airline",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "I wait for 10 seconds",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I select the flight I want to take",
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
  "duration": 21494807917,
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
  "duration": 45008479,
  "status": "passed"
});
formatter.match({
  "location": "Navigation.maximizeWindow()"
});
formatter.result({
  "duration": 1408422531,
  "status": "passed"
});
formatter.match({
  "location": "Navigation.enterDepartureCity()"
});
formatter.result({
  "duration": 9471027792,
  "status": "passed"
});
formatter.match({
  "location": "Navigation.enterArrivalCity()"
});
formatter.result({
  "duration": 833341834,
  "status": "passed"
});
formatter.match({
  "location": "Navigation.selectDepartureDate()"
});
formatter.result({
  "duration": 1402205986,
  "status": "passed"
});
formatter.match({
  "location": "Navigation.selectReturnDate()"
});
formatter.result({
  "duration": 599912712,
  "status": "passed"
});
formatter.match({
  "location": "Navigation.incrementAdultPassengerCount()"
});
formatter.result({
  "duration": 772252815,
  "status": "passed"
});
formatter.match({
  "location": "Navigation.pressSearchFlightsButton()"
});
formatter.result({
  "duration": 436155664,
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
  "duration": 46643094,
  "status": "passed"
});
formatter.match({
  "location": "Navigation.verifySearchResultsPageAppears()"
});
formatter.result({
  "duration": 18498466435,
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
  "duration": 19808831,
  "status": "passed"
});
formatter.match({
  "location": "Navigation.filterByAirline()"
});
formatter.result({
  "duration": 17864282126,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 11
    }
  ],
  "location": "Navigation.waitForTime(int)"
});
formatter.result({
  "duration": 13895919,
  "status": "passed"
});
formatter.match({
  "location": "Navigation.bookAFlight()"
});
formatter.result({
  "duration": 6449389942,
  "status": "passed"
});
});