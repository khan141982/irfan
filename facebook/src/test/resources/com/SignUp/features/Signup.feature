Feature: user able to signup for facebook account
@Test
  Scenario: user able to create facebook accout
    #Given user able to open facebook url
    #Then user able to write first name into the first name field
    #And user able to write lastname into the last name field
    #Then user able to write phone number or email address into the field
    #When user able to re-write into the phone or email address field
    #And select the passord into the password field
    
    Given user able to open facebook url
    And verfiy the title "Facebook - Log In or Sign Up"
    Then user able to write "irfan" into the first name field
  	 And user able to write lastname into the "nigah" field
    Then user able to write "irfankhan.va@gmail.com" into the field
    When user able to re-write into the "irfankhan.va@gmail.com" field
    And select the passord into the "Irfankhan1" field
    

  #Scenario: user needs to select birthday
  #
  #Given user able to choose Month of the year
  #Then user able to select date of the year
  #And user should be able to select year of the bithday
 
  Scenario: user able to click and select the gender option
    Given user select gender

  Scenario: user able to click signup button
    Given user is able to click signup button
