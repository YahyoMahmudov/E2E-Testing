@report
Feature: Report

Background: 
 Given User passes the authorization on "Auth Page"

 Scenario: Generate a new report
        When User logins as a "admin"
        Then User is in "Dashboard" page
        When User navigates to "Reports Tab" from "Dashboard Page"
        And User clicks "New Report Button" on "Reports Page"
        And User chooses "Advertisers" for "Report Type"
        And User enters "Report Name Input" as "New test automation report" on "Reports Page"
        And User chooses "MM/DD/YYYY" for "Report Date" 
        And User chooses "Direct" for "Export Option" 
        And User chooses "week" for "Time Period" 
        And User clicks "Save Button" on "Reports Page"
        Then Report is generated 

