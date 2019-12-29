package com.SignUp.Pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.SignUp.Utilities.base;

public class signupButton extends base{
	
	public signupButton() {
		
		PageFactory.initElements(driver,this);
	}
		@FindBy(id="u_0_w")
		
		public WebElement signbutton;
		
		
		

	}


