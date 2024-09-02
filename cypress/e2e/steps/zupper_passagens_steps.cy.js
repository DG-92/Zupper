import ZupperPassangensPages from "../pages/zupper_passagens_pages";
import {Given, When, Then} from "cypress-cucumber-preprocessor/steps"

const zupperPassagens = new ZupperPassangensPages

Given(/^que acesso a pagina principal$/, () => {
	zupperPassagens.index()
});

When(/^o usuario inserir corretamente a cidade de origem e cidade de destino$/, () => {
	zupperPassagens.preencheOrigemEDestino()
});


When(/^o usuario seleciona a data de ida e a data de volta$/, () => {
	zupperPassagens.preencheDataIdaEvolta()
});


When(/^definido o número de passageiros$/, () => {
	zupperPassagens.preenchePassageiros()
});


When(/^O usuario clica no botao Buscar$/, () => {
	zupperPassagens.clicaBuscarPassagens()
});


Then(/^O sistema processa a busca e a pagina de resultados com as opções de voos disponiveis$/, () => {
	zupperPassagens.validaBuscaIdaEVolta()
});

When(/^seleciono a opção Somente Ida$/, () => {
	zupperPassagens.selecionarSomenteIda()
});

When(/^o usuario seleciona a data de ida$/, () => {
	zupperPassagens.preencherDataSomenteIda()
});


When(/^o usuario clica no botao Buscar Somente Ida$/, () => {
	zupperPassagens.clicaBuscarPassagens()
});


Then(/^o sistema processa a busca e a pagina de resultados com as opções de voos somente ida disponiveis$/, () => {
	zupperPassagens.validaBuscaSomenteIda()
});


When(/^seleciono a opção Multi destinos$/, () => {
	zupperPassagens.selecionarMultiDestinos()
});

When(/^o usuario inserir corretamente a cidade de origem e cidade de destino do trecho 1$/, () => {
	zupperPassagens.preencherOrigemEDestinoMultiTrecho1()
});

When(/^o usuario seleciona a data de ida do trecho 1$/, () => {
	zupperPassagens.preencheDataTrecho1()
});

When(/^o usuario inserir corretamente a cidade de origem e cidade de destino do trecho 2$/, () => {
	zupperPassagens.preencherOrigemEDestinoMultiTrecho2()
});

When(/^o usuario seleciona a data de ida do trecho 2$/, () => {
	zupperPassagens.preencheDataTrecho2()
});

When(/^o usuario clica no botao Buscar Multi destino$/, () => {
	zupperPassagens.clicaBuscarPassagensMultiDestino()
});

Then(/^o sistema processa a busca e a pagina de resultados com as opções de voos Multi destino disponiveis$/, () => {
	zupperPassagens.validaBuscaMultiDestino()
});