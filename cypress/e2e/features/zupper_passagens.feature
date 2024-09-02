Feature: Zupper Passagens

    Funcionalidade que permite buscar por passagens 

    Scenario: teste de busca de passagens Ida e Volta
    Given que acesso a pagina principal
    When o usuario inserir corretamente a cidade de origem e cidade de destino
    And o usuario seleciona a data de ida e a data de volta
    And definido o número de passageiros 
    And  O usuario clica no botao Buscar
    Then  O sistema processa a busca e a pagina de resultados com as opções de voos disponiveis

    Scenario: teste de busca de passagem somente ida
    Given que acesso a pagina principal
    When seleciono a opção Somente Ida 
    And o usuario inserir corretamente a cidade de origem e cidade de destino
    And o usuario seleciona a data de ida
    And definido o número de passageiros
    And o usuario clica no botao Buscar Somente Ida
    Then o sistema processa a busca e a pagina de resultados com as opções de voos somente ida disponiveis

    Scenario: teste de busca de passagem Multi destinos
    Given que acesso a pagina principal
    When seleciono a opção Multi destinos 
    And o usuario inserir corretamente a cidade de origem e cidade de destino do trecho 1
    And o usuario seleciona a data de ida do trecho 1
    And o usuario inserir corretamente a cidade de origem e cidade de destino do trecho 2
    And o usuario seleciona a data de ida do trecho 2
    And definido o número de passageiros
    And o usuario clica no botao Buscar Multi destino
    Then o sistema processa a busca e a pagina de resultados com as opções de voos Multi destino disponiveis