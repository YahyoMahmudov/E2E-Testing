Feature: Creating a new campaign
    As a user, I should be able to create a new campaign.
    So new order will be displayed

    Scenario: Create a new campaign
        Given User logs in to the Core application
        When User clicks Create Campaign button
        And User follows the steps and enters the data
        Then Order is displayed

    Scenario: Create a new campaign with invalid data 
        Given User logs in to the Core application
        When User clicks Create Campaign button
        And User follows the steps and enters invalid the data
        Then Order is not displayed

