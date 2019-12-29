package com.SignUp.Utilities;

import org.assertj.core.api.SoftAssertions;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;

public class driver {

	public static WebDriver driver;
	public static SoftAssertions sAssert;
	public static Boolean isDemoMode = true;

	@Before
	public void setDriver() {

		if (driver == null) {
 
		driver =	CustomUtilities.startChromeBrowser();
		}
			// public setDriver() {
//			System.setProperty("webdriver.chrome.driver", "/Users/irfankhan/Desktop/chromedriver");
//			driver = new ChromeDriver();
//			// driver.get("http://www.amazon.com");
//			driver.manage().window().maximize();
//		}
			if (sAssert == null)
				sAssert = new SoftAssertions();

		
		base.driver = driver;
		base.isDemoMode = isDemoMode;
		base.sAssert = sAssert;
	}

	public static WebDriver getDriver() {
		return driver;
	}

	@After
	public void tearDown(Scenario scenario) {

		if (scenario.isFailed()) {
			final byte[] screenshot = ((TakesScreenshot) driver).getScreenshotAs(OutputType.BYTES);
			scenario.embed(screenshot, "image/png");

		}
		driver.close();
		driver.quit();
		 sAssert.assertAll();
	}
}
