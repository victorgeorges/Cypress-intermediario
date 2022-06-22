/// <reference types="Cypress" />

describe('createProject', ()=>{
    beforeEach(()=>{cy.login()})
    it('succesfully' , ()=>{
        cy.get('.header-new-dropdown-toggle.has-tooltip.qa-new-menu-toggle').click()
        cy.get('.qa-global-new-project-link').click()
        cy.createProject()
    })
})
