//Passo 2 transformar o Gherkin em método /ação
///< reference types="cypress" />
import {Given, When, Then} from "@badeball/cypress-cucumber-preprocessor"
 import home_page from "../Pages/home_page"
import login_page from "../Pages/login_page"

Given("I am on login screen", () =>{
     home_page.accessLogin()

})
Given("I fill email", () =>{      
      login_page.Preencher_email()
      login_page.Botao_logar()
      login_page.Validarmensagem('E-mail inválido')
 })
 Given("I fill senha", () =>{ 
      login_page.Preencher_email('acinthiaOliveira@teste.com') 
      login_page.Preencher_senha()
      login_page.Botao_logar()
      login_page.Validarmensagem("Senha inválida.")
 })
 Given("fill my credencials",() =>{      
      login_page.Preencher_email('acinthiaOliveira@teste.com')
      login_page.Preencher_senha('12345678')
      login_page.Botao_logar()
  })
When("I am click on login",()=>{  
      login_page.Botao_logar()
    
})
Then("I see the message {string}",(message)=>{
      login_page.Validarmensagem(message)
      login_page.Botao_logar()

})

Then("I see the message sucess",()=>{
      home_page.accessLogin()
      login_page.Preencher_email('acinthiaOliveira@teste.com')
      login_page.Preencher_senha('123456')
      login_page.Botao_logar()
      login_page.validamensagemdesucesso(email)
})