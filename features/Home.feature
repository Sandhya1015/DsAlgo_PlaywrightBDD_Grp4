Feature: Home Page
  Verify Functional and Non Functional Test cases for Home Page

  Background:
    Given User is on Home page

  // NON FUNCTIONAL - UI

  @home @ui
  Scenario: Verify User lands on Home Page
    Then User should be able to land on Home page

  @home @ui
  Scenario: Verify Data Structures Dropdown is present in Home page
    Then User should see Data Structures dropdown in Home page

  @home @ui
  Scenario: Verify Data Structures dropdown has 6 options
    Then User should see 6 options in Data Structures dropdown

  @home @ui
  Scenario: Verify Data Structures dropdown options
    Then User should see Arrays option in dropdown
    And User should see Linked List option in dropdown
    And User should see Stack option in dropdown
    And User should see Queue option in dropdown
    And User should see Tree option in dropdown
    And User should see Graph option in dropdown

  @home @ui
  Scenario: Verify Register Link is present in Home page
    Then User should see Register link in Home page

  @home @ui
  Scenario: Verify Sign In Link is present in Home page
    Then User should see Sign In link in Home page

  @home @ui
  Scenario: Verify Data Structures Introduction card is displayed correctly
    Then User should see Data Structures Introduction card text in Home page
    And User should see Get Started button in Data Structures Introduction card
    And Get Started button should be enabled in Data Structures Introduction card

  @home @ui
  Scenario: Verify Array card is displayed correctly
    Then User should see Array card text in Home page
    And User should see Get Started button in Array card
    And Get Started button should be enabled in Array card

  @home @ui
  Scenario: Verify Linked List card is displayed correctly
    Then User should see Linked List card text in Home page
    And User should see Get Started button in Linked List card
    And Get Started button should be enabled in Linked List card

  @home @ui
  Scenario: Verify Stack card is displayed correctly
    Then User should see Stack card text in Home page
    And User should see Get Started button in Stack card
    And Get Started button should be enabled in Stack card

  @home @ui
  Scenario: Verify Queue card is displayed correctly
    Then User should see Queue card text in Home page
    And User should see Get Started button in Queue card
    And Get Started button should be enabled in Queue card

  @home @ui
  Scenario: Verify Tree card is displayed correctly
    Then User should see Tree card text in Home page
    And User should see Get Started button in Tree card
    And Get Started button should be enabled in Tree card

  @home @ui
  Scenario: Verify Graph card is displayed correctly
    Then User should see Graph card text in Home page
    And User should see Get Started button in Graph card
    And Get Started button should be enabled in Graph card

  // FUNCTIONAL - UNREGISTERED

  @home @functional @unregistered
  Scenario: Verify error when unregistered user clicks Data Structures Introduction card
    When Unregistered user clicks Get Started button in Data Structures Introduction card
    Then User should see error message "You are not logged in"

  @home @functional @unregistered
  Scenario: Verify error when unregistered user clicks Array card
    When Unregistered user clicks Get Started button in Array card
    Then User should see error message "You are not logged in"

  @home @functional @unregistered
  Scenario: Verify error when unregistered user clicks Linked List card
    When Unregistered user clicks Get Started button in Linked List card
    Then User should see error message "You are not logged in"

  @home @functional @unregistered
  Scenario: Verify error when unregistered user clicks Stack card
    When Unregistered user clicks Get Started button in Stack card
    Then User should see error message "You are not logged in"

  @home @functional @unregistered
  Scenario: Verify error when unregistered user clicks Queue card
    When Unregistered user clicks Get Started button in Queue card
    Then User should see error message "You are not logged in"

  @home @functional @unregistered
  Scenario: Verify error when unregistered user clicks Tree card
    When Unregistered user clicks Get Started button in Tree card
    Then User should see error message "You are not logged in"

  @home @functional @unregistered
  Scenario: Verify error when unregistered user clicks Graph card
    When Unregistered user clicks Get Started button in Graph card
    Then User should see error message "You are not logged in"

  // FUNCTIONAL - REGISTERED

  @home @functional @registered
  Scenario: Verify Registered user accesses Data Structures Introduction page
    When Registered user clicks Get Started button in Data Structures Introduction card
    Then User should land on Data Structures Introduction page

  @home @functional @registered
  Scenario: Verify Registered user accesses Array page
    When Registered user clicks Get Started button in Array card
    Then User should land on Array page

  @home @functional @registered
  Scenario: Verify Registered user accesses Linked List page
    When Registered user clicks Get Started button in Linked List card
    Then User should land on Linked List page

  @home @functional @registered
  Scenario: Verify Registered user accesses Stack page
    When Registered user clicks Get Started button in Stack card
    Then User should land on Stack page

  @home @functional @registered
  Scenario: Verify Registered user accesses Queue page
    When Registered user clicks Get Started button in Queue card
    Then User should land on Queue page

  @home @functional @registered
  Scenario: Verify Registered user accesses Tree page
    When Registered user clicks Get Started button in Tree card
    Then User should land on Tree page

  @home @functional @registered
  Scenario: Verify Registered user accesses Graph page
    When Registered user clicks Get Started button in Graph card
    Then User should land on Graph page
