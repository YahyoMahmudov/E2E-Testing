Feature: Sign-up for a new account

Scenario: Successful Sign-up
  Given I am a new user interested in signing up for the service
  When I navigate to the sign-up page
  Then I should see the sign-up form with fields for Full Name, Company Name, Company Email Address, Confirm Email Address, Country, Default Currency, Industry, and Phone
  And all fields should be editable
  When I fill in all required fields with valid information
  And I confirm my email address correctly
  And I select my country and default currency
  And I choose an industry from the dropdown
  And I enter a valid phone number
  And I submit the form
  Then I should receive a confirmation email at the provided email address
  And I should be redirected to a thank you page indicating successful sign-up

Scenario: Unsuccessful Sign-up (Invalid Email)
  Given I am a new user interested in signing up for the service
  When I navigate to the sign-up page
  Then I should see the sign-up form with fields for Full Name, Company Name, Company Email Address, Confirm Email Address, Country, Default Currency, Industry, and Phone
  And all fields should be editable
  When I fill in all required fields with valid information
  And I enter an invalid email address format in the Company Email Address field
  And I confirm my email address incorrectly
  And I select my country and default currency
  And I choose an industry from the dropdown
  And I enter a valid phone number
  And I submit the form
  Then I should see an error message indicating that the email address is invalid
  And the form should not be submitted
  And I should remain on the sign-up page, allowing me to correct the errors
