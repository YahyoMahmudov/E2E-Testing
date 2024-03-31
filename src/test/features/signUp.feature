Feature: Sign up

        Background:
            Given  User passes the authorization on "Auth Page"
            
        Scenario: Create a new user
             Then User clicks "Get Started Button" on "Landing Page"
              And User clicks "Register with Email Button" on "Landing Page"
              And User fills "Company Name" as "Test Company" on "Sign Up Page"
              And User fills "Phone Number" as "+12345678" on "Sign Up Page"
              And User fills "Company Details Label" as "Test Company" on "Sign Up Page"
              And User fills "Account Details Label" as "Test Account" on "Sign Up Page"
              And User fills "Full Name Input" as "Test Name" on "Sign Up Page"
              And User enters "Company Email" as "ilhomislamov38+" on "Sign Up Page"
              And User enters "Confirm Email" as "ilhomislamov38+" on "Sign Up Page"
              And User "Chooses Country" as "Uzbekistan" from "Country List" on "Sign Up Page"
              And User "Chooses Currency" as "BYN" from "Currency List" on "Sign Up Page"
              And User "Chooses Industry" as "Education" from "Industry List" on "Sign Up Page"
              And User should agree to "Terms and Conditions" on "Sign Up Page"
              And User should agree to "Privacy Policy" on "Sign Up Page"
              And User clicks "Register Button" on "Sign Up Page"
             Then User should see "Success Message" on "Sign Up Page"