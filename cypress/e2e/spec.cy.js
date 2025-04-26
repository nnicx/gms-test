/// <reference types="cypress"/>

describe('US-012-Funcionalidade: Cadastro de membros', () => {
  it('Deve fazer o cadastro de campos obrigatorios', () => {
    
    cy.visit('http://127.0.0.1:8080/')
    cy.get('#signup-firstname').type('Testee')
    cy.get('#signup-lastname').type('Testee')
    cy.get('#signup-email').type('teste1@teste3.com')
    cy.get('#signup-phone').type('11954654652')
    cy.get('#signup-password').type('Teste@123')
    cy.get('#signup-button').click()
    cy.get('#signup-response').should('contain' , 'Cadastro realizado com sucesso!')
    cy.get('#search-input').type('Batman')
    cy.get('#search-button').click()
    cy.get(':nth-child(1) > h3').should('contain' , 'Batman Begins')
    cy.get('#clear-button').click()
  })
})