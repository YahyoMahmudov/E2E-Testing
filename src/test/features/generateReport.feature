@report
Feature: Report

Background: 
 Given User passes the authorization on "Auth Page"

 Scenario: Generate a new report
        When User logins as a "admin"
        Then User is in "Dashboard" page
        When User navigates to "Reports Tab" from "Dashboard Page"
        And User clicks "New Report Button" on "Reports Page"
        And User clicks "Advertisers Button" on "Reports Page"
        And User enters "Report Name Input" as "New test automation report" on "Reports Page"
        And User chooses "Month Day Year Option" for "Date Format Dropdown" on "Reports Page"
        And User chooses "Last Week Option" for "Time Period Dropdown" on "Reports Page" 
        And User chooses "Direct Option" for "Export Option Dropdown" on "Reports Page" 
        And User clicks "Save Button" on "Reports Page"
        Then Report is generated 

