Feature: Login Page Navigation

I want to be able to navigate to the user Login page,
but still be able to go back to the main page.

Scenario: Navigate to user Login page

    Given I am on the main page
    When I click the "User Login" button
    Then I should navigate to the "user-login" page
    And I should see "User Login"
    But I can still go back to the main page

