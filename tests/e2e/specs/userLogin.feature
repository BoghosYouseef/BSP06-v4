Feature: User Login

I want to Login 

Scenario: The user is now logged in

    Given I am on the "user-login" page and I provide correct credentials
    When I enter "George312"
    And I enter "hsj%2*sc5$"
    And I Click the "Submit" button
    Then I should see written in a window user "George312 is now logged in!"

Scenario: The user provided wrong credentials

    Given I am on the "user-login" page and I provide incorrect credentials
    When I enter "George312"
    And I enter "hsj%2*sc5$3"
    And I Click the "Submit" button
    Then I should see written in a window user "Login Failed! wrong password"
