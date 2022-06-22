/// <reference types="Cypress" />
const faker = require('faker')

Cypress.Commands.add('login', () => {
    cy.visit('users/sign_in')
    //tu coloca os dados sensíveis no teu cypress.env.json
    //dessa forma, quando tu passa o type, tu poem ele como (Cypress.env('user_name'))
    //informarções essas que estão no apenas no teu pc e não precisam ser enviadas de forma explícita
    cy.get("[data-qa-selector='login_field']").type(Cypress.env('user_name'))
    cy.get("[data-qa-selector='password_field']").type(Cypress.env('user_password'))
    cy.get("[data-qa-selector='sign_in_button']").click()
  })
  
  Cypress.Commands.add('logout' , ()=>{
    cy.get('.header-user-avatar.qa-user-avatar.js-lazy-loaded.qa-js-lazy-loaded').click()
    cy.contains('Sign out').click()
    cy.contains('GitLab Community Edition').should('be.visible')
  })

  //fiz diferente da aula
  Cypress.Commands.add('createProject' , ()=>{
    const project = {
       name : faker.random.word() , 
       description : faker.random.word()
    }    
    cy.get('#project_name').type(project.name)
    cy.get('#project_description').type(project.description)
    cy.get('#project_initialize_with_readme').click()
    cy.contains('Create project').click()
    cy.contains(`${project.name}`).should('be.visible')

    Cypress.Commands.add('gui_createIssue', () => {
      cy.visit(`${Cypress.env('user_name')}/${project.name}/issues/new`)
      cy.get('.qa-issuable-form-title').type(project.name)
      cy.get('.qa-issuable-form-description').type(project.description)
      cy.contains('Submit issue').click()
  })
})

Cypress.Commands.add('gui_setLabelOnIssue', label => {
  cy.get('.qa-edit-link-labels').click()
  cy.contains(label.name).click()
  cy.get('body').click()
})
