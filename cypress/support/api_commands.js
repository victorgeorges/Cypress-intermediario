/// <reference types="Cypress" />
const accessToken = Cypress.env('gitlab_access_token')

Cypress.Commands.add('api_createProject' , project=>{
    //esse request faz requisições HTTP
    cy.request({
        method: 'POST',
        url: `api/v4/projects/?private_token=${accessToken}`,
        body: {
            name: project.name,
            description: project.description,
            inicialize_with_readme: true
        }
    })
})



Cypress.Commands.add('api_createIssue' , issue=>{
    cy.api_createProject(issue.project)
    .then(response=>{
        cy.request({
            method: 'POST',
            // tu precisa do id da criação da issue. Dessa forma tu precisa pegar esse id
            //com o ${response.body.id}
            url:`api/v4/projects/${response.body.id}/issues?private_token=${accessToken}`,
            body: {
                title:issue.title,
                description: issue.description
            }
        })
    })
})

Cypress.Commands.add('api_createLabel', (projectId, label) => {
    cy.request({
      method: 'POST',
      url: `/api/v4/projects/${projectId}/labels?private_token=${accessToken}`,
      body: {
        name: label.name,
        color: label.color
      }
    })
  })
  