//Passo 2 transformar o Gherkin em método /ação
///< reference types="cypress" />
import {Given, When, Then} from "@badeball/cypress-cucumber-preprocessor"
import home_page from "../Pages/home_page"
import register_page from "../Pages/register_page"
import login_page from "../Pages/login_page"


Given("I am on register screen", () =>{
    home_page.accessRegister()
    
})
When("I am click on register",() =>{
    register_page.Botao_cadastrar()

})
Then ("I see the message on register",()=>{
    register_page.Validarmensagem("O campo nome deve ser prenchido")
})
Given("Campo e-mail vazio ", ()=>{
    home_page.accessRegister()         
    
    })
Then("I fill name", ()=>{
    register_page.Cadastrar_nome("Acinthia Oliveira") 
})

Then("I see the message on e-mail register",( )=>{
    register_page.Validarmensagem('O campo e-mail deve ser prenchido corretamente')
})

Given("Campo email inválido",()=>{
    home_page.accessRegister()    
})
 
Given("I fill e-mail {string}",()=>{
    register_page.Cadastrar_email("invalidEmail")
    
})
When("I am click on register invalido",()=>{
    register_page.Botao_cadastrar()
})

Then("I see the message  email invalido on register",()=>{
   register_page.Validarmensagem('O campo e-mail deve ser prenchido corretamente')

})
Given("Campo senha vazio",()=>{
    home_page.accessRegister() 
      
})
When ("I fill name senha",()=>{
    register_page.Cadastrar_nome("Acinthia Oliveira")
})
Then("I fill e-mail senha",()=>{
    register_page.Cadastrar_email("acinthia.oliveira@bradesco.com")
    register_page.Botao_cadastrar()
})
Then("I see the message on register senha vazia",()=>{
     register_page.Validarmensagem("O campo senha deve ter pelo menos 6 dígitos")
})


Given("Campo senha inválido",()=>{
    home_page.accessRegister() 
      
})
When ("I fill name senha invalida",()=>{
    register_page.Cadastrar_nome("Acinthia Oliveira")
})
Then("I fill e-mail senha invalida",()=>{
    register_page.Cadastrar_email("Jose@lindo.com")
    register_page.Botao_cadastrar()
})
Then("I fill password",()=>{
register_page.Cadastrar_senha("123")

})

Then("I see the message invalida register",()=>{
     register_page.Validarmensagem("O campo senha deve ter pelo menos 6 dígitos")
})

Given("Cadastro de usuário com sucesso",()=>{
    home_page.accessRegister()    
       
})
When("I fill my datas of register",()=>{
      register_page.Cadastrar_nome("Jesica Oliveira")
      register_page.Cadastrar_email("jessica.oliveira@Santander.com")
      register_page.Cadastrar_senha("123456789")
})
   
