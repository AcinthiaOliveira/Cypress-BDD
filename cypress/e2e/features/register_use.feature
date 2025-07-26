
#passo 1

Feature:Register user

    Eu como cliente
    Quero me cadastrar na aplicação
    Para fazer um pedido de compra

    Background: Access register screen
        Given I am on register screen


    Scenario: Register com campo nome vazio   
        When  I am click on register
        Then  I see the message on register
        #I see the message "O campo nome deve ser prenchido" on register

    Scenario: Campo e-mail vazio       
        And   I fill name
        When  I am click on register
         Then  I see the message on e-mail register

    Scenario: Campo email inválido
        And I fill name
        And I fill e-mail "invalidEmail"
        When  I am click on register invalido
        Then  I see the message  email invalido on register
      
 Scenario: Campo senha vazio
        And I fill name senha
        And I fill e-mail senha 
        When  I am click on register
        Then  I see the message on register senha vazia

Scenario: Campo senha inválido       
        And I fill name
        And I fill e-mail senha invalida 
        And I fill password 
        When  I am click on register
        Then  I see the message invalida register

Scenario: Cadastro de usuário com sucesso        
        And I fill my datas of register  
        When  I am click on register
        Then  I see the message sucess "Cadastro realizado." on register
