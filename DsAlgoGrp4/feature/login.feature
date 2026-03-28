Feature: Login functionality
Scenario: Login using valid credentials
    Given user launches the application
    When user clicks on sign in link
    And user enters login credentials
    And user clicks login button
    Then user should login successfully
