Feature: Login

Background: 
 Given User navigates to the application
 And User clicks login button

 Scenario: Login to Core
        Given User enters username
        When User enters log in with email button
        And User enters password 
        And User clicks Login button
        Then User is in Dashboard page