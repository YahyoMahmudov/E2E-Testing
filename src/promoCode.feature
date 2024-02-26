Feature: Promo Code Management

  Scenario: Admin successfully creates a new promo code
    Given settings page
    And the admin navigates to the promo code management section
    When the admin enters the following details for the new promo code:
      | Channel     | Code    | Start Date | End Date   | Discount Type | Discount Value | Min Budget | Max Budget | Currency | Usage Limit |
      | GAM NETWORK | NEW2024 | 2024-02-23 | 2024-03-31 | Percentage    | 20             | 100        | 1000       | USD      | 100         |
    And the admin submits the form
    Then the promo code "NEW2024" should be successfully created
    And the admin should see a confirmation message

  Scenario: Admin encounters error while creating a new promo code
    Given settings page
    And the admin navigates to the promo code management section
    When the admin enters invalid details for the new promo code:
      | Channel     | Code    | Start Date | End Date   | Discount Type | Discount Value | Min Budget | Max Budget | Currency | Usage Limit |
      | GAM NETWORK |         | 2024-02-23 | 2024-03-31 | Percentage    | 20             | 100        | 1000       | USD      | 100         |
    And the admin submits the form
    Then the admin should see validation error messages indicating the missing or invalid fields
    And the promo code "NEW2024" should not be created