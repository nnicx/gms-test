/// <reference types="cypress"/>

describe('US-012-Funcionalidade: Cadastro de membros', () => {
beforeEach(() => {
  cy.visit('/')
});

  it('Deve fazer o cadastro de campos obrigatorios', () => {
    var email = `teste${Date.now()}@teste.com`
    cy.preencherCadastro('teste' , 'teste' , email , '1191712345' , 'Teste@123')
    cy.get('#signup-response').should('contain' , 'Cadastro realizado com sucesso!')
 })

 //it.only('Deve validar mensagem de erro com o campo invalido' , () => {
  //cy.preencherCadastro('teste' , 'teste' , 'teste@email.com' , '1191712345' , 'Teste@123')
  //cy.get('#signup-response').should('contain' , 'Nome deve conter apenas caracteres alfabéticos')
 //})
})