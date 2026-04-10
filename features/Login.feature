Feature: Login Page
  Verify Functional and Non Functional Test cases for Login Page

  Background:
    Given User is on Login page

  # NON FUNCTIONAL - UI

  @login @ui
  Scenario: Verify user lands on Login page
    Then User should be able to land on Login page

  @login @ui
  Scenario: Verify Login page has username field
    Then User should see username input field on Login page

  @login @ui
  Scenario: Verify Login page has password field
    Then User should see password input field on Login page

  @login @ui
  Scenario: Verify Login page has Login button
    Then User should see Login button on Login page

  @login @ui
  Scenario: Verify Login button is enabled
    Then Login button should be in enabled state

  @login @ui
  Scenario: Verify Login page has Sign Up link
    Then User should see Sign Up link on Login page

  # FUNCTIONAL - POSITIVE

  @login @functional @positive
  Scenario: Verify registered user can login successfully
    When User enters username as "bunny@189.com"
    And User enters password as "Password@777"
    And User clicks Login button
    Then User should be redirected to Home page after login

  # FUNCTIONAL - NEGATIVE

  @login @functional @negative
  Scenario: Verify login fails with unregistered email
    When User enters username as "notregistered@test.com"
    And User enters password as "Password@777"
    And User clicks Login button
    Then User should see invalid credentials error message

  @login @functional @negative
  Scenario: Verify login fails with wrong password
    When User enters username as "bunny@189.com"
    And User enters password as "WrongPass@123"
    And User clicks Login button
    Then User should see invalid credentials error message

  @login @functional @negative
  Scenario: Verify login fails with empty username
    When User enters password as "Password@777"
    And User clicks Login button
    Then User should see please fill out this field message

  @login @functional @negative
  Scenario: Verify login fails with empty password
    When User enters username as "bunny@189.com"
    And User clicks Login button
    Then User should see please fill out this field message

  @login @functional @negative
  Scenario: Verify login fails with empty username and password
    When User clicks Login button
    Then User should see please fill out this field message

  # FUNCTIONAL - SIGN OUT

  @login @functional @signout
  Scenario: Verify registered user can sign out successfully
    When User enters username as "bunny@189.com"
    And User enters password as "Password@777"
    And User clicks Login button
    And User clicks Sign Out link
    Then User should see logged out successfully message
