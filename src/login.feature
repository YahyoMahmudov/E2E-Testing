Feature:  Login
  As a registered user
  I want to log in to my account
Scenario: Successful Login
    Given I am on the login page
    When I enter my valid username "islamov" and password "123123"
    And I click the login button
    Then I should be redirected to the dashboard page
Scenario: Failed Login
    Given I am on the login page
    When I enter my invalid username "invaliduser" and password "invalidpass"
    And I click the login button
    Then I should see an error message