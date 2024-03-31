Feature: Login

        Background:
            Given User passes the authorization on "Auth Page"

        Scenario: Login to Core
             When User logins as a "admin"
             Then User is in "Dashboard" page