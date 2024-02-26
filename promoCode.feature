Feature: Using a promo code
    As a user, I should be able to add a new promo code.
    So, advertisers can use it when making a payment

    Scenario: Add a new promo code
        Given User is on Settings page
        When Click the New promo code button
        And Enter promo code details and save
        Then Promo code is used when making a payment

    Scenario: Add a new promo code
        Given User is on Settings page
        When Click the New promo code button
        And Enter invalid details and save
        Then Promo code is not saved

