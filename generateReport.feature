Feature: Generating a new report
    As a user, I should be able to generate a report.
    So I can see my reports

    Scenario: Generate a report
        Given User is on Reports page
        When Click New Report button
        And choose the parameteres and save
        Then New report is generated