Feature: User Registration

I want to register a new user

Scenario: The new user is registered successfully

    Given I am on the "user-registration" page and I want to resgister a new user
    When I enter "George312"
    And I enter "hsj%2*sc5$"
    And I Click the "Submit" button
    Then I should see written in a window User "George312 has been registered successfully!"


Scenario: The user could not be registered because a registration with the same user name already exists

    Given I am on the "user-registration" page and I want to resgister an existing user
    When I enter "Michael"
    And I enter "hsj%2*sc5$"
    And I Click the "Submit" button
    Then I should see written in a window "User Michael is already registered!"
