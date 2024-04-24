@native
Feature: Native ad

Background: 
 Given User passes the authorization on "Auth Page"

 Scenario: Add a new native ad
        Given User logins as a "admin"
        And User is in "Dashboard" page
        When User clicks "Create Campaign Button" on "Dashboard Page"
        And User selects "YM Company" for "Advertiser Type" on "Campaign Wizard Page"
        And User enters "Campaign Name Input" as "Test Automation Campaign" on "Campaign Wizard Page"
        And User clicks "Next Button" on "Campaign Wizard Page"
        And User clicks "Creatives Campaign Type" on "Campaign Wizard Page"
        And User clicks "Display Creative Category" on "Campaign Wizard Page"
        And User clicks "Yahya Test Product" on "Campaign Wizard Page"
        And User clicks "Next Button" on "Campaign Wizard Page"
        And User enters "Total Budget Input" as "10" on "Campaign Wizard Page"
        And User clicks "Next Button" on "Campaign Wizard Page"
        And User clicks "New Creative Button" on "Creatives Page"
        And User clicks "Build Your Creative Button" on "Creatives Page"
        And User uploads "img/logo.jpg" file to the native ad
        And User uploads "img/main.jpg" file to the native ad
        And User enters "Creative Name Input" as "Test creative" on "Creatives Page"
        And User enters "Destination Url Input" as "https://danads.com" on "Creatives Page"
        And User enters "Advertiser Name Input" as "Test Advertiser" on "Creatives Page"
        And User enters "Caption Input" as "Test creative" on "Creatives Page"
        And User clicks "Call To Action Dropdown" on "Creatives Page"
        And User clicks "Learn More Option" on "Creatives Page"
        And User clicks "Complete Button" on "Creatives Page"
        Then New "Native Creative" is displayed on "Creatives Page"