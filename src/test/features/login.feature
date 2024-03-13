Feature: Login

Background: 
 Given User passes the authorization

 Scenario: Login to Core
        Given User clicks Log in button
        When User enters email and password as a "admin"
        And User clicks Submit button
        Then User is in Dashboard page