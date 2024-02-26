Feature: Campaign Setup

Scenario: Creating a New Campaign
  Given I am a user on the campaign creation platform
  When I start a new campaign
  Then I should see the campaign setup page
  And I should be able to select a company from the available options
  And I should be able to enter a unique campaign name
  And I should be able to choose the campaign type
  And I should be able to upload or select creatives for the campaign
  And I should be able to add products to the campaign with their descriptions
  And I should be able to review the campaign details
  And I should be able to proceed to the next step
  Then  Setting Schedule and Budget
  Given I am on the schedule and budget page
  When I set the start and end dates for the campaign
  And I set the budget for the campaign
  Then I should be able to proceed to the next step
  And Setting Targeting
  Given I am on the targeting page
  When I set the targeting criteria for the campaign
  Then I should be able to proceed to the next step
  And Reviewing and Paying for the Campaign
  Given I am on the review and payment page
  When I review the campaign details
  And I enter the payment details
  And I confirm the payment
  Then I should receive confirmation of successful campaign creation
