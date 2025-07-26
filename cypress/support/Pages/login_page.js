///< reference types="cypress" />

export default{
   Botao_logar(){   
    cy.get('#btnLogin')   
    .click()                     
   },
   
   Validarmensagem(message){
         cy.get('.invalid_input')         
         cy.should('have.text' , message)

   },
   Preencher_email(email){
     cy.get('#user')
        .type(email)

   },
   Preencher_senha(senha){
      cy.get('#password') 
      .type(senha)  
    
 
    },
    validamensagemdesucesso(email){
            cy.get('#swal2-title')
            .should('be.visible')
            .should('have.text','Login realizado.')

            cy.get('#swal2-html-container')
            .should('be.visible')
            .should('have.text', `Olá ,${email}`)

    }

}