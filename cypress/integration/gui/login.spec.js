/// <reference types="Cypress" />

describe('Login', () => {
    it.only('successfully', () => {
        cy.login()
        cy.get('.header-new-dropdown-toggle.has-tooltip.qa-new-menu-toggle').should('be.visible')
    })
  })
