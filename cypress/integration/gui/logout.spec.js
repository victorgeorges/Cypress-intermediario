/// <reference types="Cypress"/>

describe('Logout' , ()=>{
    beforeEach(()=>{cy.login()})
    it('logout succesfully' , ()=>{

        cy.logout()
        //baseurl é http://localhost
        cy.url().should('be.equal', `${Cypress.config('baseUrl')}users/sign_in`)
    })
})


  