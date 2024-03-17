Feature: Login
        Background:
            Given User passes the authorization
        Scenario: Login to Core
            Given User is in landing page
             When User clicks navigate to sign up page
             When I fill out the account registration form with valid information

           
