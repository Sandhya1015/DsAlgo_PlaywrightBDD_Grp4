
 Feature: Launch Page
 Verify functional and non functional
  test cases for Launch pagenp


Background:
  Given User navigates to dsAlgo portal

Scenario: Verify user lands on DS Algo Portal
  Then User should be able to land on dsAlgo portal

Scenario: Verify launch page has 1 button
  Then User should see 1 button on launch page

Scenario: Verify Get Started button is enabled
  Then Button should be in enabled state

Scenario: Verify Get Started button text
  Then The button name should be "Get Started"

Scenario: Verify page title
  Then Page title should be "NumpyNinja"

Scenario: Verify launch page heading text
  Then User should see the heading text "Preparing for the Interviews"

  Scenario: Verify launch page sub-heading text
  Then User should see the sub-heading text "You are at the right place"

Scenario: Verify Get Started navigates to Home page
  When User clicks on Get Started button
  Then User should land on Home page