Given('I am on the "user-registration" page and I want to resgister a new user', () => {

    cy.visit("http://localhost:8080/user-registration")
    this.isRegistered = false
    cy.log(this.isRegistered)
})

Given('I am on the "user-registration" page and I want to resgister an existing user', () => {
    this.isRegistered = true
    cy.visit("http://localhost:8080/user-registration")
    cy.log(this.isRegistered)  
})

When('I enter "George312"', () => {

    cy.get('input[type="text"]').should("be.visible").type("George312")
})

When('I enter "Michael"', () => {

    cy.get('input[type="text"]').should("be.visible").type("Michael")
})


And('I enter "hsj%2*sc5$"', () => {

    cy.get('input[type="password"]').should("be.visible").type("hsj%2*sc5$")   
})
And('I enter "hsj%2*sc5$"', () => {

    cy.get('input[type="password"]').should("be.visible").type("hsj%2*sc5$")   
})

And('I Click the "Submit" button', () => {

    
    if(this.isRegistered == false){
    cy.intercept("POST", "api/users", (req) => {

        req.reply({
            "body": { "isRegistered": false}
        })

    }).as("registerNewUser")

    }else{
        cy.intercept("POST", "api/users", (req) => {

            req.reply({
                "body": { "isRegistered": true}
            })
    
        }).as("registerExistingUser")


    }

    if(this.isRegistered == false){
        
        cy.get('button[id="RegisterUserBtn"]').should('be.visible').click()
        cy.wait(2000)
        cy.wait("@registerNewUser")
    }else{        
        cy.get('button[id="RegisterUserBtn"]').should('be.visible').click()
        cy.wait(2000)
        cy.wait("@registerExistingUser")}
})

Then('I should see written in a window User "George312 has been registered successfully!"', () => {

    cy.get("modal").contains("User George312 has been registered successfully!")
})

Then('I should see written in a window "User Michael is already registered!"', () => {

    cy.get("modal").contains("User Michael is already registered!")
})
