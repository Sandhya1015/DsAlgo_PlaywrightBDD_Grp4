
Feature: Queue functionality

Background:
    Given user launches the application
    And user clicks on sign in link
    And user enters "valid" credentials
    And user clicks login button
@functional @queue
Scenario: Navigate to Queue page
    When user clicks on Queue Get Started button
    Then user should be redirected to Queue page
@ui @queue
Scenario: Navigate to Implementation of Queue in Python page
    Given user is on Queue page
    When user clicks on "Implementation of Queue in Python"
    Then user should be navigated to Implementation of Queue in Python page
@ui @queue
Scenario: Navigate to Try Editor-Python
    Given user is on Implementation of Queue in Python page
    When user clicks Try Here button
    Then user should be navigated to try editor page

@functional @queue
Scenario: Run valid python code-Python
    Given user is on try editor page for Queue Implementation
    When user runs python code of type "valid"
    Then user should see output for "valid"
@functional @queue
Scenario: Run invalid python code-Python
   Given user is on try editor page for Queue Implementation
   When user runs python code of type "invalid"
   Then user should see output for "invalid"
@functional @queue
Scenario: Run empty python code-Python
    Given user is on try editor page for Queue Implementation
    When user runs python code of type "empty"
    Then user should see output for "empty"

@functional @queue
Scenario: Navigate back to Queue page from editor-Python
    Given user is on try editor page
    When user clicks browser back button
    Then user should be navigated back to Queue page
@ui @queue
Scenario: Navigate to Implementation using collections.deque page
    Given user is on Queue page
    When user clicks "Implementation using collections.deque"
    Then user should be redirected to Implementation using collections.deque page.
Scenario: Navigate to Try Editor-Deque
    Given user is on Implementation using collections.deque page
    When user clicks Try Here button
    Then user should be navigated to try editor page
@functional @queue
Scenario: Run valid python code-Deque
   Given user is on try editor page for Queue Implementation using collections.deque
   When user runs python code of type "valid"
   Then user should see output for "valid"
@functional @queue
Scenario: Run invalid python code-Deque
    Given user is on try editor page for Queue Implementation using collections.deque
    When user runs python code of type "invalid"
    Then user should see output for "invalid"
@functional @queue
Scenario: Run empty python code-Deque
    Given user is on try editor page for Queue Implementation using collections.deque
    When user runs python code of type "empty"
    Then user should see output for "empty"
@functional @queue
Scenario: Navigate back to Queue page from editor-Deque
    Given user is on try editor page
    When user clicks browser back button
    Then user should be navigated back to Queue page
@ui @queue
Scenario: Navigate to Implementation using array page
    Given user is on Queue page
    When user clicks on "Implementation using array"
    Then user should be navigated to Implementation using array page
@ui @queue
Scenario: Navigate to Try Editor-Array
    Given user is on Implementation using array page
    When user clicks Try Here button
    Then user should be navigated to try editor page
@functional @queue
Scenario: Run valid python code-Array
    Given user is on try editor page for Queue Implementation using array
    When user runs python code of type "valid"
    Then user should see output for "valid"
@functional @queue
Scenario: Run invalid python code-Array
    Given user is on try editor page for Queue Implementation using array
    When user runs python code of type "invalid"
    Then user should see output for "invalid"
@functional @queue
Scenario: Run empty python code-Array
    Given user is on try editor page for Queue Implementation using array
    When user runs python code of type "empty"
    Then user should see output for "empty"

@functional @queue
Scenario: Navigate back to Queue page from editor-Array
    Given user is on try editor page
    When user clicks browser back button
    Then user should be navigated back to Queue page
@ui @queue
Scenario: Navigate to Queue Operations page
    Given user is on Queue page
    When user clicks "Queue Operations"
    Then user should be redirected to Queue Operations page.
@ui @queue
Scenario: Navigate to Try Editor-Queue Operations
    Given user is on Queue Operations page
    When user clicks Try Here button
    Then user should be navigated to try editor page
@functional @queue
Scenario: Run valid python code-Queue Operations
    Given user is on try editor page for Queue Queue Operations
    When user runs python code of type "valid"
    Then user should see output for "valid"
@functional @queue
Scenario: Run invalid python code-Queue Operations
    Given user is on try editor page for Queue Queue Operations
    When user runs python code of type "invalid"
    Then user should see output for "invalid"
@functional @queue
Scenario: Run empty python code-Queue Operations
    Given user is on try editor page for Queue Queue Operations
    When user runs python code of type "empty"
    Then user should see output for "empty"
@functional @queue
Scenario: Navigate back to Queue page from editor-Queue Operations
    Given user is on try editor page
    When user clicks browser back button
    Then user should be navigated back to Queue page

@bug
Scenario: Navigate to Practice Questions page
     Given user is on Queue page
     When user clicks "Practice Questions"
     Then user should be redirected to practice questions page
