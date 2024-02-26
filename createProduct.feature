Feature: Product creating
    As a user, I should be able to create a new product.
    So users can use it when creating a campaign

    Scenario: Create a new product
        Given User is B4M
        When Click + button
        And Enter the details and save
        Then New product is displayed

    Scenario: Create a new product
        Given User is B4M
        When Click + button
        And Leave Product name empty and save
        Then Error message is displayed