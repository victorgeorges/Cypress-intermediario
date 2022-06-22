/// <reference types="Cypress" />
const faker = require('faker')

describe('Create Issue' , ()=>{

    before(()=>{
        cy.login()
        cy.get('.btn.btn-success').click()
        cy.createProject()
    })
    it('sucessfully' , ()=>{
        cy.gui_createIssue()
    })
})

