Feature: Login

        Background:
            Given User passes the authorization
            
        Scenario: Create a new user
            Given User is in landing page
             When User navigates to sign up page
             When User fill out the account registration form with valid information
             Then User navigates to Login page