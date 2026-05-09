Feature: Register Page
  Verify Functional and Non Functional Test cases for Register Page

  Background:
    Given User is on Register page

  # NON FUNCTIONAL - UI

  @register @ui
  Scenario: Verify user lands on Register page
    Then User should be able to land on Register page

  @register @ui
  Scenario: Verify Register page has username field
    Then User should see username field on Register page

  @register @ui
  Scenario: Verify Register page has password field
    Then User should see password field on Register page

  @register @ui
  Scenario: Verify Register page has confirm password field
    Then User should see confirm password field on Register page

  @register @ui
  Scenario: Verify Register page has Register button
    Then User should see Register button on Register page

  @register @ui
  Scenario: Verify Register button is enabled
    Then Register button should be in enabled state

  # FUNCTIONAL - POSITIVE

  @register @functional @positive
  Scenario: Verify valid registration is successful
  When User registers with data from excel row "valid_registration"
  Then User should be redirected to Home page after registration

  # FUNCTIONAL - NEGATIVE

  @register @functional @negative
  Scenario: Verify registration fails with empty username
    When User registers with data from excel row "empty_username"
    Then User should see form validation message

  @register @functional @negative
  Scenario: Verify registration fails with empty password
    When User registers with data from excel row "empty_password"
    Then User should see form validation message

  @register @functional @negative
  Scenario: Verify registration fails with password mismatch
    When User registers with data from excel row "password_mismatch"
    Then User should see error from excel row "password_mismatch"

  @register @functional @negative
  Scenario: Verify registration fails with short password
    When User registers with data from excel row "short_password"
    Then User should see form validation message

  @register @functional @negative
  Scenario: Verify registration fails with already registered email
    When User registers with data from excel row "already_registered"
    Then User should see error from excel row "already_registered"
