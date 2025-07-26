///métodos de acordo com BDD
///< reference types="cypress" />


export default{
    Botao_cadastrar(){   
        cy.get('#btnRegister')   
        .click()                     
       },
       Validarmensagem(message){
        cy.get('#errorMessageFirstName')             
          .should('have.text' , message)

  },
      Cadastrar_nome(nome){
      cy.get('#user')
       .type(nome)
  },
      Cadastrar_email(email){
    cy.get('#email')
     .type(email)
      
},
    Cadastrar_senha(senha){
   cy.get('#password')
     .type(senha)

    },

    validamensagemdesucessos(email){
        cy.get('#swal2-title')
        .should('be.visible')
        .should('have.text','Login realizado.')

        cy.get('#swal2-html-container')
        .should('be.visible')
        .should('have.text', `Olá ,${email}`)

}
}
