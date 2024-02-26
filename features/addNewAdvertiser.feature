Feature: Registering a new advertiser
    As a admin, I need to be able to add a new advertiser to the platform.
    So that new advertiser can access its features.

    Scenario: Add a new advertiser
        Given User is in Companies page
        When Click New Advertiser button
        And Fill in the fields and save
        Then New advertiser is displayed on the list

    Scenario: Add a new advertiser with invalid data
        Given User is in Companies page
        When Click New Advertiser button
        And Enter invalid data and save
        Then Error message is displayed