Feature: Login

Background: 
 Given User passes the authorization

 Scenario: Login to Core
        Given User clicks Log in button
        When User enters email
        And User clicks Log in with email button
        And User enters password 
        And User clicks Submit button
        Then User is in Dashboard page