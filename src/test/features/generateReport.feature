@report
Feature: Report

Background: 
 Given User passes the authorization

 Scenario: Generate a new report
        Given User is in landing page
        When User logins as a "admin"
        Then User is in Dashboard page
        When User navigates to Reports tab
        And User clicks New Report button
        And User chooses "Advertisers" report type
        And User enters report name as "New test automation report"
        And User selects date format as "MM/DD/YYYY"
        And User chooses export option as "Direct"
        And User enters time period as "week"
        And User clicks Save button
        Then Report is generated 

