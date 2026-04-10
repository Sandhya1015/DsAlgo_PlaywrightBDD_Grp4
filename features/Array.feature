
Feature: Array Module
  As a logged in user of DSAlgo portal
  I want to verify the Array module functionality
  So that I can learn about Arrays

  # BACKGROUND: Login and navigate to Array page
  Background:
    Given User is logged in and on Home page
    When User clicks Get Started button under Array on Home page
    Then The user should be able to land on the Array page

  # ARRAY PAGE - NON FUNCTIONAL

  @array @nonfunctional @smoke @integration
  Scenario: Verify Array page loads successfully
    Then The user should be able to land on the Array page

  @array @nonfunctional
  Scenario: Verify Array title is displayed on top left corner
    Then The user should be able to see the Title "Array" on top left corner

  @array @nonfunctional
  Scenario: Verify Topics Covered sub title is present
    Then The user should be able to see Topics Covered sub title

  @array @nonfunctional
  Scenario: Verify Arrays in Python link is present
    Then The user should be able to see Arrays in Python link

  @array @nonfunctional
  Scenario: Verify Arrays Using List link is present
    Then The user should be able to see Arrays Using List link

  @array @nonfunctional
  Scenario: Verify Basic Operations in Lists link is present
    Then The user should be able to see Basic Operations in Lists link

  @array @nonfunctional
  Scenario: Verify Applications of Array link is present
    Then The user should be able to see Applications of Array link

  # ARRAYS IN PYTHON - NON FUNCTIONAL

  @array @arrayinpython @nonfunctional @smoke
  Scenario: Verify Arrays in Python link navigates to correct page
    When User clicks Arrays in Python link on Array page
    Then The user should be able to see the Title "Arrays in Python"

  @array @arrayinpython @nonfunctional
  Scenario: Verify Insertion sub title is present on Arrays in Python page
    When User clicks Arrays in Python link on Array page
    Then The user should be able to see Insertion sub title

  @array @arrayinpython @nonfunctional
  Scenario: Verify Deletion Operation sub title is present
    When User clicks Arrays in Python link on Array page
    Then The user should be able to see Deletion Operation sub title

  @array @arrayinpython @nonfunctional
  Scenario: Verify Search Operation sub title is present
    When User clicks Arrays in Python link on Array page
    Then The user should be able to see Search Operation sub title

  @array @arrayinpython @nonfunctional
  Scenario: Verify Update Operation sub title is present
    When User clicks Arrays in Python link on Array page
    Then The user should be able to see Update Operation sub title

  @array @arrayinpython @nonfunctional
  Scenario: Verify Practice Questions Link is present on Arrays in Python page
    When User clicks Arrays in Python link on Array page
    Then The user should be able to see Practice Questions link

  @array @arrayinpython @nonfunctional
  Scenario: Verify Try here link is present on Arrays in Python page
    When User clicks Arrays in Python link on Array page
    Then The user should be able to see Try here link at the bottom

  # ARRAYS IN PYTHON - FUNCTIONAL 

  @array @arrayinpython @functional
  Scenario: Verify Try here link is highlighted on hover
    When User clicks Arrays in Python link on Array page
    And User hovers on Try here link
    Then The Try here link should be highlighted

  @array @arrayinpython @functional @smoke
  Scenario: Verify Try here link navigates to Editor page
    When User clicks Arrays in Python link on Array page
    And User clicks on Try here link 
    Then The user should be able to land on Editor page

  @array @arrayinpython @functional @negative @bug
  Scenario: Verify RUN button with no data shows error on Arrays in Python editor
    When User clicks Arrays in Python link on Array page
    And User clicks on Try here link
    And User clicks RUN button without entering any data
    Then An error message should appear in the editor

  @array @arrayinpython @functional @bug
  Scenario: Verify new Array creation using Python code
    When User clicks Arrays in Python link on Array page
    And User clicks on Try here link
    And User enters python code from excel row "array_creation" and clicks RUN
    Then User should see the expected output from excel row "array_creation"

  @array @arrayinpython @functional @bug
  Scenario: Verify Array Insertion Operation
    When User clicks Arrays in Python link on Array page
    And User clicks on Try here link
    And User enters python code from excel row "array_insertion" and clicks RUN
    Then User should see the expected output from excel row "array_insertion"

  @array @arrayinpython @functional @bug
  Scenario: Verify Array Deletion Operation
    When User clicks Arrays in Python link on Array page
    And User clicks on Try here link
    And User enters python code from excel row "array_deletion" and clicks RUN
    Then User should see the expected output from excel row "array_deletion"

  @array @arrayinpython @functional @bug
  Scenario: Verify Array Search Operation
    When User clicks Arrays in Python link on Array page
    And User clicks on Try here link
    And User enters python code from excel row "array_search" and clicks RUN
    Then User should see the expected output from excel row "array_search"

  @array @arrayinpython @functional @bug
  Scenario: Verify Array Update Operation
    When User clicks Arrays in Python link on Array page
    And User clicks on Try here link
    And User enters python code from excel row "array_update" and clicks RUN
    Then User should see the expected output from excel row "array_update"

  @array @arrayinpython @functional
  Scenario: Verify back arrow navigates back to Arrays in Python page
    When User clicks Arrays in Python link on Array page
    And User clicks on Try here link
    And User clicks the back arrow to return to previous page
    Then User should be back on the Arrays in Python page

  # ARRAYS USING LIST - FUNCTIONAL

  @array @arrayusinglist @functional @smoke
  Scenario: Verify Arrays Using List link navigates to correct page
    When User clicks Arrays Using List link on Array page
    Then The user should be able to land on Arrays Using List page

  @array @arrayusinglist @functional
  Scenario: Verify Try here link is highlighted on hover on Arrays Using List page
    When User clicks Arrays Using List link on Array page
    And User hovers on Try here link
    Then The Try here link should be highlighted

  @array @arrayusinglist @functional
  Scenario: Verify Try here link navigates to Editor page from Arrays Using List
    When User clicks Arrays Using List link on Array page
    And User clicks on Try here link
    Then The user should be able to land on Editor page

  @array @arrayusinglist @functional @negative @bug
  Scenario: Verify RUN button with no data on Arrays Using List editor
    When User clicks Arrays Using List link on Array page
    And User clicks on Try here link
    And User clicks RUN button without entering any data
    Then An error message should appear in the editor

  @array @arrayusinglist @functional @negative @bug
  Scenario: Verify RUN button with wrong syntax on Arrays Using List editor
    When User clicks Arrays Using List link on Array page
    And User clicks on Try here link
    And User enters python code from excel row "list_wrong_syntax" and clicks RUN
    Then User should see the expected output from excel row "list_wrong_syntax"

  @array @arrayusinglist @functional
  Scenario: Verify back arrow navigates back to Arrays Using List page
    When User clicks Arrays Using List link on Array page
    And User clicks on Try here link
    And User clicks the back arrow to return to previous page
    Then User should be back on the Arrays Using List page

  # BASIC OPERATIONS IN LISTS - NON FUNCTIONAL

  @array @basicops @nonfunctional @smoke
  Scenario: Verify Basic Operations in Lists link navigates to correct page
    When User clicks Basic Operations in Lists link on Array page
    Then The user should land on Basic Operations in Lists page

  @array @basicops @nonfunctional
  Scenario: Verify Basic Operations in Lists title is displayed
    When User clicks Basic Operations in Lists link on Array page
    Then The user should be able to see the Title "Basic Operations in Lists"

  @array @basicops @nonfunctional
  Scenario: Verify Insertion in Lists sub title is present
    When User clicks Basic Operations in Lists link on Array page
    Then The user should be able to see Insertion in Lists sub title

  @array @basicops @nonfunctional
  Scenario: Verify Inserting at the beginning sub title is present
    When User clicks Basic Operations in Lists link on Array page
    Then The user should be able to see Inserting at the beginning of the array sub title

  @array @basicops @nonfunctional
  Scenario: Verify Inserting at any location sub title is present
    When User clicks Basic Operations in Lists link on Array page
    Then The user should be able to see Inserting at any location in the array sub title

  @array @basicops @nonfunctional
  Scenario: Verify Deletion in list sub title is present
    When User clicks Basic Operations in Lists link on Array page
    Then The user should be able to see Deletion in list sub title

  @array @basicops @nonfunctional
  Scenario: Verify Deletion in Array sub title is present
    When User clicks Basic Operations in Lists link on Array page
    Then The user should be able to see Deletion in Array sub title

  @array @basicops @nonfunctional
  Scenario: Verify Deleting From the End of an Array sub title is present
    When User clicks Basic Operations in Lists link on Array page
    Then The user should be able to see Deleting From the End of an Array sub title

  @array @basicops @nonfunctional
  Scenario: Verify Deleting From the Start of an Array sub title is present
    When User clicks Basic Operations in Lists link on Array page
    Then The user should be able to see Deleting From the Start of an Array sub title

  @array @basicops @nonfunctional
  Scenario: Verify Try here link is present on Basic Operations page
    When User clicks Basic Operations in Lists link on Array page
    Then The user should be able to see Try here link on Basic Operations page

  # BASIC OPERATIONS IN LISTS - FUNCTIONAL

  @array @basicops @functional
  Scenario: Verify Try here link is highlighted on hover on Basic Operations page
    When User clicks Basic Operations in Lists link on Array page
    And User hovers on Try here link
    Then The Try here link should be highlighted

  @array @basicops @functional @smoke
  Scenario: Verify Try here link navigates to Editor page from Basic Operations
    When User clicks Basic Operations in Lists link on Array page
    And User clicks on Try here link
    Then The user should be able to land on Editor page

  @array @basicops @functional @negative @bug
  Scenario: Verify RUN button with no data on Basic Operations editor
    When User clicks Basic Operations in Lists link on Array page
    And User clicks on Try here link
    And User clicks RUN button without entering any data
    Then An error message should appear in the editor

  @array @basicops @functional @negative @bug
  Scenario: Verify RUN button with wrong syntax on Basic Operations editor
    When User clicks Basic Operations in Lists link on Array page
    And User clicks on Try here link
    And User enters python code from excel row "basicops_wrong_syntax" and clicks RUN
    Then User should see the expected output from excel row "basicops_wrong_syntax"

  @array @basicops @functional
  Scenario: Verify back arrow navigates back to Basic Operations page
    When User clicks Basic Operations in Lists link on Array page
    And User clicks on Try here link
    And User clicks the back arrow to return to previous page
    Then User should be back on the Basic Operations in Lists page

  # APPLICATIONS OF ARRAY - NON FUNCTIONAL
  
  @array @applications @nonfunctional @smoke
  Scenario: Verify Applications of Array link navigates to correct page
    When User clicks Applications of Array link on Array page
    Then The user should land on Applications of Array page

  @array @applications @nonfunctional
  Scenario: Verify Applications of Array title is displayed
    When User clicks Applications of Array link on Array page
    Then The user should be able to see the Title "Applications of Array"

  @array @applications @nonfunctional
  Scenario: Verify Try here link is present on Applications of Array page
    When User clicks Applications of Array link on Array page
    Then The user should be able to see Try here link on Applications page

  # APPLICATIONS OF ARRAY - FUNCTIONAL
  
  @array @applications @functional
  Scenario: Verify Try here link is highlighted on hover on Applications page
    When User clicks Applications of Array link on Array page
    And User hovers on Try here link
    Then The Try here link should be highlighted

  @array @applications @functional @smoke
  Scenario: Verify Try here link navigates to Editor page from Applications
    When User clicks Applications of Array link on Array page
    And User clicks on Try here link
    Then The user should be able to land on Editor page

  @array @applications @functional @negative @bug
  Scenario: Verify RUN button with no data on Applications editor
    When User clicks Applications of Array link on Array page
    And User clicks on Try here link
    And User clicks RUN button without entering any data
    Then An error message should appear in the editor

  @array @applications @functional @negative @bug
  Scenario: Verify RUN button with wrong syntax on Applications editor
    When User clicks Applications of Array link on Array page
    And User clicks on Try here link
    And User enters python code from excel row "applications_wrong_syntax" and clicks RUN
    Then User should see the expected output from excel row "applications_wrong_syntax"

  @array @applications @functional
  Scenario: Verify back arrow navigates back to Applications of Array page
    When User clicks Applications of Array link on Array page
    And User clicks on Try here link
    And User clicks the back arrow to return to previous page
    Then User should be back on the Applications of Array page
  
  # PRACTICE QUESTIONS - NON FUNCTIONAL

  @array @practice @nonfunctional @smoke
  Scenario: Verify Practice Questions link navigates to Practice page
    When User clicks Arrays in Python link on Array page
    And User clicks Practice Questions link
    Then The user should be able to land on the Practice page

  @array @practice @nonfunctional
  Scenario: Verify Practice page title is NumpyNinja
    When User clicks Arrays in Python link on Array page
    And User clicks Practice Questions link
    Then The user should be able to see the Title "NumpyNinja" on Practice page

  @array @practice @nonfunctional
  Scenario: Verify Search the Array link is present on Practice page
    When User clicks Arrays in Python link on Array page
    And User clicks Practice Questions link
    Then The user should be able to see Search the Array link

  @array @practice @nonfunctional
  Scenario: Verify Max Consecutive Ones link is present on Practice page
    When User clicks Arrays in Python link on Array page
    And User clicks Practice Questions link
    Then The user should be able to see Max Consecutive Ones link

  @array @practice @nonfunctional
  Scenario: Verify Find Numbers with Even Number of Digits link is present
    When User clicks Arrays in Python link on Array page
    And User clicks Practice Questions link
    Then The user should be able to see Find Numbers with Even Number of Digits link

  @array @practice @nonfunctional
  Scenario: Verify Squares of a Sorted Array link is present on Practice page
    When User clicks Arrays in Python link on Array page
    And User clicks Practice Questions link
    Then The user should be able to see Squares of a Sorted Array link
  
  # PRACTICE QUESTIONS - FUNCTIONAL - Question 1
  @array @practice @functional @smoke
  Scenario: Verify Search the Array link navigates to Question 1 page
    When User clicks Arrays in Python link on Array page
    And User clicks Practice Questions link
    And User clicks Search the Array link
    Then The user should be able to land on Question 1 page

  @array @practice @functional
  Scenario: Verify RUN button is clickable on Question 1
    When User clicks Arrays in Python link on Array page
    And User clicks Practice Questions link
    And User clicks Search the Array link
    Then RUN button should be clickable on practice page

  @array @practice @functional
  Scenario: Verify SUBMIT button is clickable on Question 1
    When User clicks Arrays in Python link on Array page
    And User clicks Practice Questions link
    And User clicks Search the Array link
    Then SUBMIT button should be clickable on practice page

  @array @practice @functional @negative @bug
  Scenario: Verify RUN button with no data on Question 1
    When User clicks Arrays in Python link on Array page
    And User clicks Practice Questions link
    And User clicks Search the Array link
    And User clicks RUN button without entering any data
    Then An error message should appear in the editor

  @array @practice @functional @negative @bug
  Scenario: Verify RUN button with wrong syntax on Question 1
    When User clicks Arrays in Python link on Array page
    And User clicks Practice Questions link
    And User clicks Search the Array link
    And User enters python code from excel row "q1_wrong_syntax" and clicks RUN
    Then User should see the expected output from excel row "q1_wrong_syntax"

  @array @practice @functional @negative @bug
  Scenario: Verify SUBMIT button with no data on Question 1
    When User clicks Arrays in Python link on Array page
    And User clicks Practice Questions link
    And User clicks Search the Array link
    And User clicks SUBMIT button without entering any data
    Then An error message should appear in the editor

  @array @practice @functional @negative @bug
  Scenario: Verify SUBMIT button with wrong syntax on Question 1
    When User clicks Arrays in Python link on Array page
    And User clicks Practice Questions link
    And User clicks Search the Array link
    And User enters python code from excel row "q1_wrong_submit" and clicks SUBMIT
    Then User should see the expected output from excel row "q1_wrong_submit"

  @array @practice @functional
  Scenario: Verify back arrow navigates back to Practice page from Question 1
    When User clicks Arrays in Python link on Array page
    And User clicks Practice Questions link
    And User clicks Search the Array link
    And User clicks the back arrow to return to previous page
    Then User should be back on the Practice page

  
  # PRACTICE QUESTIONS - FUNCTIONAL - Question 2

  @array @practice @functional @smoke
  Scenario: Verify Max Consecutive Ones link navigates to Question 2 page
    When User clicks Arrays in Python link on Array page
    And User clicks Practice Questions link
    And User clicks Max Consecutive Ones link
    Then The user should be able to land on Question 2 page

  @array @practice @functional
  Scenario: Verify RUN button is clickable on Question 2
    When User clicks Arrays in Python link on Array page
    And User clicks Practice Questions link
    And User clicks Max Consecutive Ones link
    Then RUN button should be clickable on practice page

  @array @practice @functional
  Scenario: Verify SUBMIT button is clickable on Question 2
    When User clicks Arrays in Python link on Array page
    And User clicks Practice Questions link
    And User clicks Max Consecutive Ones link
    Then SUBMIT button should be clickable on practice page

  @array @practice @functional @negative @bug
  Scenario: Verify RUN button with no data on Question 2
    When User clicks Arrays in Python link on Array page
    And User clicks Practice Questions link
    And User clicks Max Consecutive Ones link
    And User clicks RUN button without entering any data
    Then An error message should appear in the editor

  @array @practice @functional @negative @bug
  Scenario: Verify RUN button with wrong syntax on Question 2
    When User clicks Arrays in Python link on Array page
    And User clicks Practice Questions link
    And User clicks Max Consecutive Ones link
    And User enters python code from excel row "q2_wrong_syntax" and clicks RUN
    Then User should see the expected output from excel row "q2_wrong_syntax"

  @array @practice @functional @negative @bug
  Scenario: Verify SUBMIT button with no data on Question 2
    When User clicks Arrays in Python link on Array page
    And User clicks Practice Questions link
    And User clicks Max Consecutive Ones link
    And User clicks SUBMIT button without entering any data
    Then An error message should appear in the editor

  @array @practice @functional @negative @bug
  Scenario: Verify SUBMIT button with wrong syntax on Question 2
    When User clicks Arrays in Python link on Array page
    And User clicks Practice Questions link
    And User clicks Max Consecutive Ones link
    And User enters python code from excel row "q2_wrong_submit" and clicks SUBMIT
    Then User should see the expected output from excel row "q2_wrong_submit"

  @array @practice @functional
  Scenario: Verify back arrow navigates back to Practice page from Question 2
    When User clicks Arrays in Python link on Array page
    And User clicks Practice Questions link
    And User clicks Max Consecutive Ones link
    And User clicks the back arrow to return to previous page
    Then User should be back on the Practice page

  
  # PRACTICE QUESTIONS - FUNCTIONAL - Question 3
  
  @array @practice @functional @smoke
  Scenario: Verify Find Numbers with Even Digits link navigates to Question 3 page
    When User clicks Arrays in Python link on Array page
    And User clicks Practice Questions link
    And User clicks Find Numbers with Even Number of Digits link
    Then The user should be able to land on Question 3 page

  @array @practice @functional
  Scenario: Verify RUN button is clickable on Question 3
    When User clicks Arrays in Python link on Array page
    And User clicks Practice Questions link
    And User clicks Find Numbers with Even Number of Digits link
    Then RUN button should be clickable on practice page

  @array @practice @functional
  Scenario: Verify SUBMIT button is clickable on Question 3
    When User clicks Arrays in Python link on Array page
    And User clicks Practice Questions link
    And User clicks Find Numbers with Even Number of Digits link
    Then SUBMIT button should be clickable on practice page

  @array @practice @functional @negative @bug
  Scenario: Verify RUN button with no data on Question 3
    When User clicks Arrays in Python link on Array page
    And User clicks Practice Questions link
    And User clicks Find Numbers with Even Number of Digits link
    And User clicks RUN button without entering any data
    Then An error message should appear in the editor

  @array @practice @functional @negative @bug
  Scenario: Verify RUN button with wrong syntax on Question 3
    When User clicks Arrays in Python link on Array page
    And User clicks Practice Questions link
    And User clicks Find Numbers with Even Number of Digits link
    And User enters python code from excel row "q3_wrong_syntax" and clicks RUN
    Then User should see the expected output from excel row "q3_wrong_syntax"

  @array @practice @functional @negative @bug
  Scenario: Verify SUBMIT button with no data on Question 3
    When User clicks Arrays in Python link on Array page
    And User clicks Practice Questions link
    And User clicks Find Numbers with Even Number of Digits link
    And User clicks SUBMIT button without entering any data
    Then An error message should appear in the editor

  @array @practice @functional @negative @bug
  Scenario: Verify SUBMIT button with wrong syntax on Question 3
    When User clicks Arrays in Python link on Array page
    And User clicks Practice Questions link
    And User clicks Find Numbers with Even Number of Digits link
    And User enters python code from excel row "q3_wrong_submit" and clicks SUBMIT
    Then User should see the expected output from excel row "q3_wrong_submit"

  @array @practice @functional
  Scenario: Verify back arrow navigates back to Practice page from Question 3
    When User clicks Arrays in Python link on Array page
    And User clicks Practice Questions link
    And User clicks Find Numbers with Even Number of Digits link
    And User clicks the back arrow to return to previous page
    Then User should be back on the Practice page

  
  # PRACTICE QUESTIONS - FUNCTIONAL - Question 4

  @array @practice @functional @smoke
  Scenario: Verify Squares of a Sorted Array link navigates to Question 4 page
    When User clicks Arrays in Python link on Array page
    And User clicks Practice Questions link
    And User clicks Squares of a Sorted Array link
    Then The user should be able to land on Question 4 page

  @array @practice @functional
  Scenario: Verify RUN button is clickable on Question 4
    When User clicks Arrays in Python link on Array page
    And User clicks Practice Questions link
    And User clicks Squares of a Sorted Array link
    Then RUN button should be clickable on practice page

  @array @practice @functional
  Scenario: Verify SUBMIT button is clickable on Question 4
    When User clicks Arrays in Python link on Array page
    And User clicks Practice Questions link
    And User clicks Squares of a Sorted Array link
    Then SUBMIT button should be clickable on practice page

  @array @practice @functional @negative @bug
  Scenario: Verify RUN button with no data on Question 4
    When User clicks Arrays in Python link on Array page
    And User clicks Practice Questions link
    And User clicks Squares of a Sorted Array link
    And User clicks RUN button without entering any data
    Then An error message should appear in the editor

  @array @practice @functional @negative @bug
  Scenario: Verify RUN button with wrong syntax on Question 4
    When User clicks Arrays in Python link on Array page
    And User clicks Practice Questions link
    And User clicks Squares of a Sorted Array link
    And User enters python code from excel row "q4_wrong_syntax" and clicks RUN
    Then User should see the expected output from excel row "q4_wrong_syntax"

  @array @practice @functional @negative @bug
  Scenario: Verify SUBMIT button with no data on Question 4
    When User clicks Arrays in Python link on Array page
    And User clicks Practice Questions link
    And User clicks Squares of a Sorted Array link
    And User clicks SUBMIT button without entering any data
    Then An error message should appear in the editor

  @array @practice @functional @negative @bug
  Scenario: Verify SUBMIT button with wrong syntax on Question 4
    When User clicks Arrays in Python link on Array page
    And User clicks Practice Questions link
    And User clicks Squares of a Sorted Array link
    And User enters python code from excel row "q4_wrong_submit" and clicks SUBMIT
    Then User should see the expected output from excel row "q4_wrong_submit"

  @array @practice @functional
  Scenario: Verify back arrow navigates back to Practice page from Question 4
    When User clicks Arrays in Python link on Array page
    And User clicks Practice Questions link
    And User clicks Squares of a Sorted Array link
    And User clicks the back arrow to return to previous page
    Then User should be back on the Practice page

  # FUNCTIONAL - Sign Out from Practice page

  @array @functional @signout @smoke @integration
  Scenario: Verify user can sign out successfully from Array Practice page
    When User clicks Arrays in Python link on Array page
    And User clicks Practice Questions link
    And User clicks Sign out from Practice page
    Then User should be redirected to Home page with logged out message
