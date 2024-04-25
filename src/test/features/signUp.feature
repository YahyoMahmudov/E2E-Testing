@signup
Feature: Sign up

        Background:
            Given  User passes the authorization on "Auth Page"
            
        Scenario: Create a new user
             Then User clicks "Get Started Button" on "Landing Page"
              And User clicks "Register with Email Button" on "Landing Page"
              And User fills "Company Name Input" as "Test Company" on "Sign Up Page"
              And User fills "Full Name Input" as "Test Name" on "Sign Up Page"
              And User fills "Company Email Input" as "ilhomislamov38" on "Sign Up Page"
              And User fills "Confirm Email Input" as "ilhomislamov38" on "Sign Up Page"
              And User chooses "India" from "Country List Dropdown" on "Sign Up Page"
              And User chooses "USD" from "Currency List Dropdown" on "Sign Up Page"
              And User should agree to "Terms and Conditions" on "Sign Up Page"
              And User should agree to "Privacy Policy" on "Sign Up Page"
              And User clicks "Register Button" on "Sign Up Page"
             Then User should see "Success Message" on "Sign Up Page"