Given("I am on the main page", () => {
    cy.visit("http://localhost:8080/") // try to visit the main page
    cy.title().should('eq',"Main Page")
})

When('I click the "User Registration" button', () => {

    cy.contains("button", "User Registration").should("be.visible").click()
})
Then('I should navigate to the "user-registration" page', () => {

    cy.title().should('eq',"User Registration Page")
    cy.url().should('eq', 'http://localhost:8080/user-registration')
    cy.get("p").contains("Please Enter New User Name and Password")
    cy.get('input[type="text"]').should("be.visible")
    cy.get('input[type="password"]').should("be.visible")
})
And('I should see "User Registration"', () => {
    cy.get("h1").contains("User Registration").should("be.visible")
})
But("I can still go back to the main page", () => {
    cy.get("button").contains("Home").should("be.visible").click()
    cy.wait(1000)
    cy.visit("http://localhost:8080/")
    cy.title().should('eq',"Main Page")
})
