Feature: Queue Page
  Verify Functional and Non Functional Test cases for Queue Page

  Background:
    Given User is logged in and on Queue page

  #  NON FUNCTIONAL
  @queue @nonfunctional @smoke
  Scenario: Verify user lands on Queue page
    Then The user should be able to land on Queue page

  @queue @nonfunctional
  Scenario: Verify Queue page has Implementation of Queue in Python link
    Then The user should be able to see Implementation of Queue in Python link

  @queue @nonfunctional
  Scenario: Verify Queue page has Implementation using collections.deque link
    Then The user should be able to see Implementation using collections.deque link

  @queue @nonfunctional
  Scenario: Verify Queue page has Implementation using array link
    Then The user should be able to see Implementation using array link

  @queue @nonfunctional
  Scenario: Verify Queue page has Queue Operations link
    Then The user should be able to see Queue Operations link

  #  IMPLEMENTATION OF QUEUE IN PYTHON
  @queue @queuepython @functional @smoke
  Scenario: Verify clicking Implementation of Queue in Python link navigates correctly
    When User clicks on Implementation of Queue in Python link
    Then The user should land on Implementation of Queue in Python page

  @queue @queuepython @functional @smoke
  Scenario: Verify Try Here link is visible on Implementation of Queue in Python page
    When User clicks on Implementation of Queue in Python link
    Then The user should be able to see Try here link

  @queue @queuepython @functional @smoke
  Scenario: Verify clicking Try Here navigates to editor page
    When User clicks on Implementation of Queue in Python link
    And User clicks on Try here link on Queue page
    Then The user should be able to land on Queue Editor page

  @queue @queuepython @functional @negative @bug
  Scenario: Verify RUN with no data shows error on Queue Python editor
    When User clicks on Implementation of Queue in Python link
    And User clicks on Try here link on Queue page
    And User clicks RUN button without entering any data on Queue page
    Then An error message should appear in the Queue editor

  @queue @queuepython @functional @negative
  Scenario: Verify RUN with invalid code shows dialog on Queue Python editor
    When User clicks on Implementation of Queue in Python link
    And User clicks on Try here link on Queue page
    And User enters queue python code from excel row "queue_python_invalid" and clicks RUN
    Then User should see the expected queue output from excel row "queue_python_invalid"

  @queue @queuepython @functional
  Scenario: Verify RUN with valid Queue Python code shows correct output
    When User clicks on Implementation of Queue in Python link
    And User clicks on Try here link on Queue page
    And User enters queue python code from excel row "queue_python_valid" and clicks RUN
    Then User should see the expected queue output from excel row "queue_python_valid"

  @queue @queuepython @functional
  Scenario: Verify back arrow returns to Implementation of Queue in Python page
    When User clicks on Implementation of Queue in Python link
    And User clicks on Try here link on Queue page
    And User clicks the back arrow on Queue page
    Then User should be back on the Queue sub page

  #  IMPLEMENTATION USING COLLECTIONS.DEQUE
  @queue @deque @functional @smoke
  Scenario: Verify clicking Implementation using collections.deque link navigates correctly
    When User clicks on Implementation using collections.deque link
    Then The user should land on Implementation using collections.deque page

  @queue @deque @functional @smoke
  Scenario: Verify Try Here link is visible on collections.deque page
    When User clicks on Implementation using collections.deque link
    Then The user should be able to see Try here link

  @queue @deque @functional @smoke
  Scenario: Verify clicking Try Here navigates to editor on deque page
    When User clicks on Implementation using collections.deque link
    And User clicks on Try here link on Queue page
    Then The user should be able to land on Queue Editor page

  @queue @deque @functional @negative @bug
  Scenario: Verify RUN with no data shows error on Deque editor
    When User clicks on Implementation using collections.deque link
    And User clicks on Try here link on Queue page
    And User clicks RUN button without entering any data on Queue page
    Then An error message should appear in the Queue editor

  @queue @deque @functional @negative
  Scenario: Verify RUN with invalid code shows dialog on Deque editor
    When User clicks on Implementation using collections.deque link
    And User clicks on Try here link on Queue page
    And User enters queue python code from excel row "queue_deque_invalid" and clicks RUN
    Then User should see the expected queue output from excel row "queue_deque_invalid"

  @queue @deque @functional
  Scenario: Verify RUN with valid Deque code shows correct output
    When User clicks on Implementation using collections.deque link
    And User clicks on Try here link on Queue page
    And User enters queue python code from excel row "queue_deque_valid" and clicks RUN
    Then User should see the expected queue output from excel row "queue_deque_valid"

  @queue @deque @functional
  Scenario: Verify back arrow returns to Deque page
    When User clicks on Implementation using collections.deque link
    And User clicks on Try here link on Queue page
    And User clicks the back arrow on Queue page
    Then User should be back on the Queue sub page

  #  IMPLEMENTATION USING ARRAY 

  @queue @queuearray @functional @smoke
  Scenario: Verify clicking Implementation using array link navigates correctly
    When User clicks on Implementation using array link
    Then The user should land on Implementation using array page

  @queue @queuearray @functional @smoke
  Scenario: Verify Try Here link is visible on Implementation using array page
    When User clicks on Implementation using array link
    Then The user should be able to see Try here link

  @queue @queuearray @functional @smoke
  Scenario: Verify clicking Try Here navigates to editor on array page
    When User clicks on Implementation using array link
    And User clicks on Try here link on Queue page
    Then The user should be able to land on Queue Editor page

  @queue @queuearray @functional @negative @bug
  Scenario: Verify RUN with no data shows error on Queue Array editor
    When User clicks on Implementation using array link
    And User clicks on Try here link on Queue page
    And User clicks RUN button without entering any data on Queue page
    Then An error message should appear in the Queue editor

  @queue @queuearray @functional @negative
  Scenario: Verify RUN with invalid code shows dialog on Queue Array editor
    When User clicks on Implementation using array link
    And User clicks on Try here link on Queue page
    And User enters queue python code from excel row "queue_array_invalid" and clicks RUN
    Then User should see the expected queue output from excel row "queue_array_invalid"

  @queue @queuearray @functional
  Scenario: Verify RUN with valid Queue Array code shows correct output
    When User clicks on Implementation using array link
    And User clicks on Try here link on Queue page
    And User enters queue python code from excel row "queue_array_valid" and clicks RUN
    Then User should see the expected queue output from excel row "queue_array_valid"

  @queue @queuearray @functional
  Scenario: Verify back arrow returns to Implementation using array page
    When User clicks on Implementation using array link
    And User clicks on Try here link on Queue page
    And User clicks the back arrow on Queue page
    Then User should be back on the Queue sub page

  #  QUEUE OPERATIONS
  @queue @queueops @functional @smoke
  Scenario: Verify clicking Queue Operations link navigates correctly
    When User clicks on Queue Operations link
    Then The user should land on Queue Operations page

  @queue @queueops @functional @smoke
  Scenario: Verify Try Here link is visible on Queue Operations page
    When User clicks on Queue Operations link
    Then The user should be able to see Try here link

  @queue @queueops @functional @smoke
  Scenario: Verify clicking Try Here navigates to editor on Queue Operations page
    When User clicks on Queue Operations link
    And User clicks on Try here link on Queue page
    Then The user should be able to land on Queue Editor page

  @queue @queueops @functional @negative @bug
  Scenario: Verify RUN with no data shows error on Queue Operations editor
    When User clicks on Queue Operations link
    And User clicks on Try here link on Queue page
    And User clicks RUN button without entering any data on Queue page
    Then An error message should appear in the Queue editor

  @queue @queueops @functional @negative
  Scenario: Verify RUN with invalid code shows dialog on Queue Operations editor
    When User clicks on Queue Operations link
    And User clicks on Try here link on Queue page
    And User enters queue python code from excel row "queue_ops_invalid" and clicks RUN
    Then User should see the expected queue output from excel row "queue_ops_invalid"

  @queue @queueops @functional
  Scenario: Verify RUN with valid Queue Operations code shows correct output
    When User clicks on Queue Operations link
    And User clicks on Try here link on Queue page
    And User enters queue python code from excel row "queue_ops_valid" and clicks RUN
    Then User should see the expected queue output from excel row "queue_ops_valid"

  @queue @queueops @functional
  Scenario: Verify back arrow returns to Queue Operations page
    When User clicks on Queue Operations link
    And User clicks on Try here link on Queue page
    And User clicks the back arrow on Queue page
    Then User should be back on the Queue sub page

  #  SIGN OUT
  @queue @functional @signout @smoke @integration
  Scenario: Verify user can sign out from Queue page
    When User clicks Sign out from Queue page
    Then User should be signed out successfully
