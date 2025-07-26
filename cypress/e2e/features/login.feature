#Passo 1 criar meu cenário 

Feature:Login
    Eu como cliente
    Quero fazer login na aplicação
    Para fazer um pedido de compra

    Scenario: Login com campo e-mail vazio
        Given I am on login screen
        When  I am click on login
        Then  I see the message "E-mail inválido."

    Scenario: Login com campo senha vazio
       Given I am on login screen
       And I fill senha
       When I am click on  login
       Then  I see the message "Senha inválida."

     Scenario: Login com sucesso
         Given I am on login screen
         And fill my credencials
        When I am click on  login
        Then  I see the message sucess