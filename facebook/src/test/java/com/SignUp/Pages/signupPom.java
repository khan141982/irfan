package com.SignUp.Pages;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.SignUp.Utilities.base;

public class signupPom extends base {
	
	public signupPom() {
		
		PageFactory.initElements(driver,this);
	}
		
		@FindBy(id="u_0_f")
		
		public WebElement FirstName;
		
		@FindBy (id="u_0_h")
		public WebElement LastName;

		@FindBy(id="u_0_k") 
		public WebElement Emailorphone;
		
		@FindBy(id="u_0_n")
		public WebElement Reenteremailorphone;
		
		
		@FindBy(id="u_0_p")
		public WebElement password;
		
		
		
		
		
		
		
		
		
		
}
