Feature: Registration Page Navigation

I want to be able to navigate to the user Registration page,
but still be able to go back to the main page.


Scenario: Navigate to user Registration page

    Given I am on the main page
    When I click the "User Registration" button
    Then I should navigate to the "user-registration" page
    And I should see "User Registration"
    But I can still go back to the main page