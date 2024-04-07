Feature: Create Promo code

        Background:
            Given User passes the authorization on "Auth Page"

        Scenario: Create and check Promo code
             When User logins as a "admin"
             Then User is in "Dashboard" page
             When User navigates to "Settings Tab" from "Dashboard Page"
              And User clicks "Promo Codes Tab" on "Settings Page"
              And User clicks "New Promo Code Button" on "Promo Code Page"
              And User selects "GAM Network" from "Channel List Dropdown" on "Promo Code Page"
              And User named Promo code to "Promo Code input" on "Promo Code Page"
              And User select dates to "Start Date Input" and "End Date Input" on "Promo Code Page"
              And User chooses "Percent" from "Discount Type Dropdown" on "Promo Code Page"
              And User fills "Discount Value Input" as "10" on "Promo Code Page"
              And User fills "Min Budget Input" as "1" on "Promo Code Page"
              And User fills "Max Budget Input" as "999" on "Promo Code Page"
              And User select "USD" from "Currency List Dropdown" on "Promo Code Page"
              And User fills "The code can be used" as "1" on "Promo Code Page"
              And User clicks "Save Button" on "Promo Code Page"
              And User clicks "Publish button" for activate Promo Code on "Promo Code Page"
              And User navigates to "Dashboard Tab" from "Dashboard Page"
              And User clicks "All Button" on "Dashboard Page"
              And User fills "Search Input" as "Test promo code" on "Dashboard Page"
              And User clicks "Draft campaign" on "Dashboard Page"
              And User clicks "Options Button" on "Campaign Wizard Page"
              And User clicks "Edit Button" on "Campaign Wizard Page"
              And User clicks "Checkout Button" on "Campaign Wizard Page"
              And User clicks "Add Promo Code Button" on "Campaign Wizard Page"
             Then User enters Promo Code to "Promo Code Input" on "Campaign Wizard Page"
              And User clicks "Apply Button" on "Campaign Wizard Page"
             Then User should see "Discount Info" on "Campaign Wizard Page"