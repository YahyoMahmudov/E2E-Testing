Feature: Login

Background: 
 Given User passes the authorization

 Scenario: Login to Core
        Given User is in landing page
        When User logins as a "admin"
        Then User is in Dashboard page