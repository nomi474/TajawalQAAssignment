package com.tjwl.stepdefinitionfiles;

import org.junit.runner.RunWith;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@Cucumber.Options(format={"html:output"})

public class TestRunner {
	Navigation nav = new Navigation();

}
