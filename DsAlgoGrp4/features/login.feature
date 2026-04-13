Feature: Login functionality
Scenario: Login using valid credentials
    Given user launches the application
    When user clicks on sign in link
    And user enters "valid" credentials
    And user clicks login button
    Then user should login successfully

Scenario: Login using invalid credentials
    Given user launches the application
    When user clicks on sign in link
    And user enters "invalid" credentials
    And user clicks login button
    Then user should see an error message
Scenario: Login with valid username and invalid password
    Given user launches the application
    When user clicks on sign in link
    And user enters "validUserInvalidPassword" credentials
    And user clicks login button
    Then user should see an error message
Scenario: Login with invalid username and valid password
    Given user launches the application
    When user clicks on sign in link
    And user enters "invalidUserValidPassword" credentials
    And user clicks login button
    Then user should see an error message  

Scenario: Login with empty credentials
    Given user launches the application
    When user clicks on sign in link
    And user enters "empty" credentials
    And user clicks login button
    Then user should see validation messages for required fields
