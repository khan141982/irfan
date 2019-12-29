package com.SignUp;
import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features= {"//Users/irfankhan/eclipse-workspace/-06 Version/facebook/src/test/resources/com/SignUp/features"},

plugin= {"html: target/cucumbr.html-report"},tags= {"@Test"},
dryRun = false)

public class SignUpRunner {

}



