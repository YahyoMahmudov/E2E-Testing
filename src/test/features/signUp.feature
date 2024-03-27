Feature: Sign up

        Background:
            Given User passes the authorization
            
        Scenario: Create a new user
            Given User is in landing page
             When User navigates to sign up page by clicking the sign-up button
             When User fill out the account registration form with valid information
                  | Full Name        | John Doe   |
                  | Company Name     | ABC Inc    |
                  | CompanyDetails   | test       |
                  | AccountDetails   | test       |
                  | Country          | Germany    |
                  | Default Currency | USD        |
                  | Industry         | Shopping   |
                  | Phone            | 1234567890 |
             Then The user should see a success message