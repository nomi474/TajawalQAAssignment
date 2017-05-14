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
  "name": "I store Airport names for comparison",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I store depart and return dates for comparison",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I click on the Search Flights button",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I wait for 20 seconds",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 26,
      "value": "#Scenario: Select a flight"
    }
  ],
  "line": 27,
  "name": "I am at the Flight Search Results page",
  "keyword": "Given "
});
formatter.step({
  "line": 28,
  "name": "I wait for 50 seconds",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I verify departure and destination airports",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I verify departure and return dates",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I filter by my favorite airline",
  "keyword": "Then "
});
formatter.step({
  "line": 32,
  "name": "I wait for 20 seconds",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I get the ticket price",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I select the flight I want to take",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 36,
      "value": "#Scenario: \tEnter Traveler details"
    }
  ],
  "line": 37,
  "name": "I am at the Traveler details page",
  "keyword": "Given "
});
formatter.step({
  "line": 38,
  "name": "I select title for Traveler1 as Mr",
  "keyword": "Then "
});
formatter.step({
  "line": 39,
  "name": "I enter firstName for Traveler1 as Muslim",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "I enter lastName for Traveler1 as Brother",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "I select title for Traveler2 as Ms",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "I enter firstName for Traveler2 as Muslima",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "I enter lastName for Traveler2 as Sister",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "I select title in Contact details section as Mr",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "I enter firstName in Contact details section as Muslim",
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "I enter lastName in Contact details section as Brother",
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "I enter email in Contact details section as nomi474@yahoo.com",
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "I enter mobileNumber in Contact details section as 0529070789",
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "I verify that the Trip total price matches the total price on \"Select a Flight\" page",
  "keyword": "And "
});
formatter.step({
  "line": 50,
  "name": "I press the \"Continue to Payment\" button",
  "keyword": "And "
});
formatter.step({
  "line": 51,
  "name": "I wait for 25 seconds",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 53,
      "value": "#Scenario:\tEnter Payment info"
    }
  ],
  "line": 54,
  "name": "I am at the Payment page",
  "keyword": "Given "
});
formatter.step({
  "line": 55,
  "name": "I enter Cardholder name as \"Muslim Brother\"",
  "keyword": "Then "
});
formatter.step({
  "line": 56,
  "name": "I enter Card number as 4444144144444444",
  "keyword": "And "
});
formatter.step({
  "line": 57,
  "name": "I select expiration month as \"06 - June\"",
  "keyword": "And "
});
formatter.step({
  "line": 58,
  "name": "I select expiration year as 2018",
  "keyword": "And "
});
formatter.step({
  "line": 59,
  "name": "I enter security code cvv as 666",
  "keyword": "And "
});
formatter.step({
  "line": 60,
  "name": "I verify that the total on \"Pay now\" button shows correct amount",
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
  "duration": 24647480889,
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
  "duration": 16876998,
  "status": "passed"
});
formatter.match({
  "location": "Navigation.maximizeWindow()"
});
formatter.result({
  "duration": 1370875305,
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
  "duration": 12181484,
  "status": "passed"
});
formatter.match({
  "location": "Navigation.enterDepartureCity()"
});
formatter.result({
  "duration": 2694077533,
  "status": "passed"
});
formatter.match({
  "location": "Navigation.enterArrivalCity()"
});
formatter.result({
  "duration": 1679835084,
  "status": "passed"
});
formatter.match({
  "location": "Navigation.selectDepartureDate()"
});
formatter.result({
  "duration": 1178556065,
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
  "duration": 14132254,
  "status": "passed"
});
formatter.match({
  "location": "Navigation.selectReturnDate()"
});
formatter.result({
  "duration": 472860529,
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
  "duration": 9092685,
  "status": "passed"
});
formatter.match({
  "location": "Navigation.incrementAdultPassengerCount()"
});
formatter.result({
  "duration": 720758904,
  "status": "passed"
});
formatter.match({
  "location": "Navigation.saveAirportNames()"
});
formatter.result({
  "duration": 96460128,
  "status": "passed"
});
formatter.match({
  "location": "Navigation.saveDateValues()"
});
formatter.result({
  "duration": 5939406,
  "status": "passed"
});
formatter.match({
  "location": "Navigation.pressSearchFlightsButton()"
});
formatter.result({
  "duration": 540286716,
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
  "duration": 100786563,
  "status": "passed"
});
formatter.match({
  "location": "Navigation.verifySearchResultsPageAppears()"
});
formatter.result({
  "duration": 14882117013,
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
  "duration": 8787126,
  "status": "passed"
});
formatter.match({
  "location": "Navigation.verifyAirports()"
});
formatter.result({
  "duration": 5978007404,
  "status": "passed"
});
formatter.match({
  "location": "Navigation.verifyDates()"
});
formatter.result({
  "duration": 463252001,
  "status": "passed"
});
formatter.match({
  "location": "Navigation.filterByAirline()"
});
formatter.result({
  "duration": 31313588406,
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
  "duration": 23332246,
  "status": "passed"
});
formatter.match({
  "location": "Navigation.getTicketPrice()"
});
formatter.result({
  "duration": 5257491023,
  "status": "passed"
});
formatter.match({
  "location": "Navigation.bookAFlight()"
});
formatter.result({
  "duration": 2266315682,
  "status": "passed"
});
formatter.match({
  "location": "Navigation.verifyTravelerDetailsPageIsDisplayed()"
});
formatter.result({
  "duration": 7717331343,
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
  "duration": 12003849090,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"id\",\"selector\":\"flights-summary-travelers-form-title-0\"}\n  (Session info: chrome\u003d58.0.3029.96)\n  (Driver info: chromedriver\u003d2.29.461591 (62ebf098771772160f391d75e589dc567915b233),platform\u003dWindows NT 6.1.7601 SP1 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 11.98 seconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.4.0\u0027, revision: \u0027unknown\u0027, time: \u0027unknown\u0027\nSystem info: host: \u0027NOUMAN-PC\u0027, ip: \u0027192.168.1.107\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_101\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, mobileEmulationEnabled\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.29.461591 (62ebf098771772160f391d75e589dc567915b233), userDataDir\u003dC:\\Users\\Nouman\\AppData\\Local\\Temp\\scoped_dir6924_8309}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, hasTouchScreen\u003dfalse, version\u003d58.0.3029.96, platform\u003dXP, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dtrue, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue, unexpectedAlertBehaviour\u003d}]\nSession ID: 8a4fdf65b71e3e720ab5ba740e825fb1\n*** Element info: {Using\u003did, value\u003dflights-summary-travelers-form-title-0}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:215)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:167)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:671)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:410)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:453)\r\n\tat org.openqa.selenium.By$ById.findElement(By.java:218)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:402)\r\n\tat com.tjwl.pages.TravelerDetails.selectTitleForTraveler1(TravelerDetails.java:23)\r\n\tat com.tjwl.stepdefinitionfiles.Navigation.selectTitleForTraveler1(Navigation.java:146)\r\n\tat ✽.Then I select title for Traveler1 as Mr(com\\tjwl\\stepdefinitionfiles\\fligthBooking.feature:38)\r\n",
  "status": "failed"
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
  "status": "skipped"
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
  "status": "skipped"
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
  "status": "skipped"
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
  "status": "skipped"
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
  "status": "skipped"
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
  "status": "skipped"
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
  "status": "skipped"
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
  "status": "skipped"
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
  "status": "skipped"
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
  "status": "skipped"
});
formatter.match({
  "location": "Navigation.verifyTotalPriceMatchesWithSelectFlightsPage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Navigation.goToPaymentDetailsPage()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
});
formatter.match({
  "location": "Navigation.verifyPaymentDetailsPageAppears()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
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
  "status": "skipped"
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
  "status": "skipped"
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
  "status": "skipped"
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
  "status": "skipped"
});
formatter.match({
  "location": "Navigation.verifyTotalOnPayNowButton()"
});
formatter.result({
  "status": "skipped"
});
});