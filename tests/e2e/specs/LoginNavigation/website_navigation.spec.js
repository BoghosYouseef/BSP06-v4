Given("I am on the main page", () => {
    cy.visit("http://localhost:8080/") // try to visit the main page
    cy.title().should('eq',"Main Page")
})

When('I click the "User Login" button', () => {

    cy.contains("button", "User Login").should("be.visible").click()
})
Then('I should navigate to the "user-login" page', () => {

    cy.title().should('eq',"User Login Page")
    cy.url().should('eq', 'http://localhost:8080/user-login')
    cy.get("p").contains("Please Enter Your User Name and Password")
    cy.get('input[type="text"]').should("be.visible")
    cy.get('input[type="password"]').should("be.visible")
})
And('I should see "User Login"', () => {
    cy.get("h1").contains("User Login").should("be.visible")
})
But("I can still go back to the main page", () => {
    cy.get("button").contains("Home").should("be.visible").click()
    cy.wait(1000)
    cy.visit("http://localhost:8080/")
    cy.title().should('eq',"Main Page")
})

