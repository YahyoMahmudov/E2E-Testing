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
        And User adds a new native creative and selects the following options for it
        """
        {
            "Creative name": "Test creative",
            "Destination url": "https://danads.com",
            "Advertiser name": "Tester",
            "Caption": "Test creative",
            "Call To Action": "Learn More"
        }
        """