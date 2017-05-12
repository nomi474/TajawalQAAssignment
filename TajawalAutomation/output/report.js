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
  "duration": 16422351160,
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
  "duration": 23853049,
  "status": "passed"
});
formatter.match({
  "location": "Navigation.maximizeWindow()"
});
formatter.result({
  "duration": 1464507216,
  "status": "passed"
});
formatter.match({
  "location": "Navigation.enterDepartureCity()"
});
formatter.result({
  "duration": 8665094941,
  "status": "passed"
});
formatter.match({
  "location": "Navigation.enterArrivalCity()"
});
formatter.result({
  "duration": 948373651,
  "status": "passed"
});
formatter.match({
  "location": "Navigation.selectDepartureDate()"
});
formatter.result({
  "duration": 1921242739,
  "status": "passed"
});
formatter.match({
  "location": "Navigation.selectReturnDate()"
});
formatter.result({
  "duration": 692253762,
  "status": "passed"
});
formatter.match({
  "location": "Navigation.incrementAdultPassengerCount()"
});
formatter.result({
  "duration": 991326076,
  "status": "passed"
});
formatter.match({
  "location": "Navigation.pressSearchFlightsButton()"
});
formatter.result({
  "duration": 605259017,
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
  "duration": 15379300,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Select a flight",
  "description": "",
  "id": "test-the-flight-booking-process-on-tajawal\u0027s-web-site;select-a-flight",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 21,
  "name": "I am at the Flight Search Results page",
  "keyword": "Given "
});
formatter.step({
  "line": 22,
  "name": "I wait for 20 seconds",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I filter by my favorite airline",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "I wait for 20 seconds",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I select the flight I want to take",
  "keyword": "And "
});
formatter.match({
  "location": "Navigation.verifySearchResultsPageAppears()"
});
formatter.result({
  "duration": 7273823335,
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
  "duration": 7591728,
  "status": "passed"
});
formatter.match({
  "location": "Navigation.filterByAirline()"
});
formatter.result({
  "duration": 20575548448,
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
  "duration": 8579129,
  "status": "passed"
});
formatter.match({
  "location": "Navigation.bookAFlight()"
});
formatter.result({
  "duration": 20258816957,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"id\",\"selector\":\"flights-results-select-cta-btn-0\"}\n  (Session info: chrome\u003d58.0.3029.96)\n  (Driver info: chromedriver\u003d2.29.461591 (62ebf098771772160f391d75e589dc567915b233),platform\u003dWindows NT 6.1.7601 SP1 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 20.09 seconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.4.0\u0027, revision: \u0027unknown\u0027, time: \u0027unknown\u0027\nSystem info: host: \u0027NOUMAN-PC\u0027, ip: \u0027192.168.1.107\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_101\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, mobileEmulationEnabled\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.29.461591 (62ebf098771772160f391d75e589dc567915b233), userDataDir\u003dC:\\Users\\Nouman\\AppData\\Local\\Temp\\scoped_dir4996_7101}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, hasTouchScreen\u003dfalse, version\u003d58.0.3029.96, platform\u003dXP, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dtrue, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue, unexpectedAlertBehaviour\u003d}]\nSession ID: 86f8d05c42bb97c63bb8f3867ed28762\n*** Element info: {Using\u003did, value\u003dflights-results-select-cta-btn-0}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:215)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:167)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:671)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:410)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:453)\r\n\tat org.openqa.selenium.By$ById.findElement(By.java:218)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:402)\r\n\tat com.tjwl.pages.SearchResultsPage.selectFlight(SearchResultsPage.java:71)\r\n\tat com.tjwl.stepdefinitionfiles.Navigation.bookAFlight(Navigation.java:110)\r\n\tat ✽.And I select the flight I want to take(com\\tjwl\\stepdefinitionfiles\\sample.feature:25)\r\n",
  "status": "failed"
});
});