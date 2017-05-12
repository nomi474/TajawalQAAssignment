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
  "name": "I am a traveler",
  "description": "",
  "id": "test-the-flight-booking-process-on-tajawal\u0027s-web-site;i-am-a-traveler",
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
  "name": "I am using firefox browser",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "I go to the homepage",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I enter the departureCity",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "firefox",
      "offset": 11
    }
  ],
  "location": "Navigation.getMyDriver(String)"
});
formatter.result({
  "duration": 25953671068,
  "status": "passed"
});
formatter.match({
  "location": "Navigation.goToLandingPage()"
});
formatter.result({
  "duration": 35408189750,
  "status": "passed"
});
formatter.match({
  "location": "Navigation.enterDepartureCity()"
});
formatter.result({
  "duration": 120918541822,
  "status": "passed"
});
});