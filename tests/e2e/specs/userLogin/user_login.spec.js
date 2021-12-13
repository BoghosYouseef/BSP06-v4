


Given('I am on the "user-login" page and I provide correct credentials', () => {
    cy.visit("http://localhost:8080/user-login")
    cy.title().should('eq',"User Login Page")
    this.isValid = true
    cy.log(this.isValid)
})
Given('I am on the "user-login" page and I provide incorrect credentials', () => {
    cy.log(this.isValid)
    cy.visit("http://localhost:8080/user-login")
    cy.title().should('eq',"User Login Page")

    this.isValid = false
    cy.log(this.isValid)
})
When('I enter "George312"', () => {
    
    cy.get('input[type="text"]').should("be.visible").type("George312")
})

When('I enter "George312"', () => {
    cy.get('input[type="text"]').should("be.visible").type("George312")
})


And('I enter "hsj%2*sc5$"', () => {

    cy.get('input[type="password"]').should("be.visible").type("hsj%2*sc5$")   
})

And('I enter "hsj%2*sc5$3"', () => {

    cy.get('input[type="password"]').should("be.visible").type("hsj%2*sc5$3")   
})

And('I Click the "Submit" button', () => {
    if(this.isValid){
        cy.intercept('api/users',
        {
            "body": { "isAuthenticated": true}
        }
      ).as("loginUser")
    }else{
        cy.intercept('api/users',
        {
            "body": { "isAuthenticated": false}
        }
      ).as("loginUserWrong")
    }
    
    if(this.isValid){
        cy.get('button[id="LoginBtn"]').should('be.visible').click()
        cy.wait(2000)
        cy.wait("@loginUser")
    }else{
        
    cy.get('button[id="LoginBtn"]').should('be.visible').click()
    cy.wait(2000)
    cy.wait("@loginUserWrong")
    }

})



Then('I should see written in a window user "George312 is now logged in!"', () => {

    cy.get("p").contains('user "George312 is now logged in!"').should("be.visible")


})

Then('I should see written in a window user "Login Failed! wrong password"', () => {

    cy.get("modal").contains("Login Failed! wrong password").should("be.visible")
})

// When(/^I click on login button$/, () => {
//     if (valid) {
//         cy.intercept('POST', '/login', {
//           statusCode: 201,
//           body: {
//             token: '8zwa76gtd87aotghz987uwaztdgho9p87zh',
//           },
//         }).as("intercept");
//       }
//       else {
//         cy.intercept("POST", "/login", (req) => {
//           req.reply(400);
//         }).as("errintercept");
//       }
//       cy.get("[data-testid=loginBtn").click();
//       if(valid)
//       cy.wait("@intercept");
//       else
//       cy.wait("@errintercept")
// });