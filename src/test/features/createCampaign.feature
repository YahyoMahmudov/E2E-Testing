@campaign
Feature: Report

Background: 
 Given User passes the authorization on "Auth Page"

 Scenario: Generate a new report
        Given User logins as a "admin"
        And User is in "Dashboard" page
        When User clicks "Create Campaign Button" on "Dashboard Page"
        And User clicks "Direct Advertiser Company Type" on "Campaign Wizard Page"
        And User enters "Company Name Input" as "YM" and selects "YM Company" from list on "Campaign Wizard Page"
        And User clears "Campaign Name Input" and enters "Test Automation Campaign" on "Campaign Wizard Page"
        And User clicks "Next Button" on "Campaign Wizard Page"
        And User clicks "Creatives Campaign Type" on "Campaign Wizard Page"
        And User clicks "Display Creative Category" on "Campaign Wizard Page"
        And User clicks "Yahya Test Product" on "Campaign Wizard Page"
        And User clicks "Next Button" on "Campaign Wizard Page"
        And User enters "Total Budget Input" as "10" on "Campaign Wizard Page"
        And User clicks "Next Button" on "Campaign Wizard Page"
        And User clicks "Add Creative Later Button" on "Campaign Wizard Page"
        And User enters "PO Number Input" as "PO123" on "Campaign Wizard page"
        And User clicks "Checkout Button" on "Campaign Wizard Page"
        Then User is in "Checkout" page