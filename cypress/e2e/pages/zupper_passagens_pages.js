/// <reference types="cypress"/>

const url = Cypress.config('baseUrl')

class ZupperPassangensPages{

    index(){
        cy.visit(url)
        cy.wait(2000)

        cy.get("#oPrivallyApp-AcceptBox").should('exist').click()

        cy.document().then(doc => {
            const iframes = doc.querySelectorAll('iframe');
            iframes.forEach(iframe => iframe.remove());
          });

    }

    selecionarSomenteIda(){
        cy.get('.search-options > :nth-child(2) > span').click()
    }

    selecionarMultiDestinos(){
        cy.get('.search-options > :nth-child(3) > span').click()
    }

    preencheOrigemEDestino(){
        cy.get('.origin-section > app-find-airports > .tripChoosenWithoutCode > .borderGray').type("SAO")
        cy.contains('SAO - Sao Paulo, Brasil » Todos Aeroportos da Cidade').click()
        cy.get('.destination-section > app-find-airports > .tripChoosenWithoutCode > .borderGray').type("REC")
        cy.contains('REC - Recife, Brasil » Guararapes Internacional').click()
    }

    preencherOrigemEDestinoMultiTrecho1(){
        cy.get(':nth-child(1) > .slice-fields > [data-zt="flightSearchOrigin"] > .tripChoosenWithoutCode > .borderGray').type("SAO")
        cy.contains('SAO - Sao Paulo, Brasil » Todos Aeroportos da Cidade').click()
        cy.get(':nth-child(1) > .slice-fields > [data-zt="flightSearchDestination"] > .tripChoosenWithoutCode > .borderGray').type("REC")
        cy.contains('REC - Recife, Brasil » Guararapes Internacional').click()
    }

    preencherOrigemEDestinoMultiTrecho2(){
        cy.get(':nth-child(2) > .slice-fields > [data-zt="flightSearchOrigin"] > .tripChoosenWithoutCode > .borderGray').type("SAO")
        cy.contains('SAO - Sao Paulo, Brasil » Todos Aeroportos da Cidade').click()
        cy.get(':nth-child(2) > .slice-fields > [data-zt="flightSearchDestination"] > .tripChoosenWithoutCode > .borderGray').type("REC")
        cy.contains('REC - Recife, Brasil » Guararapes Internacional').click()
    }

    preencherDataSomenteIda(){
        cy.get('.select-dates > :nth-child(1)').click()
        cy.get('[aria-label="domingo, 8 de setembro de 2024"] > .custom-day').click()
    }
    
    preencheDataIdaEvolta(){
        cy.get('.select-dates > :nth-child(1)').click()
        cy.get('[aria-label="domingo, 8 de setembro de 2024"] > .custom-day').click()
        cy.get('[aria-label="domingo, 15 de setembro de 2024"] > .custom-day').click()
    }

    preencheDataTrecho1(){
        cy.get(':nth-child(1) > .slice-fields > app-calendar > .select-dates').click()
        cy.get('[aria-label="sexta-feira, 13 de setembro de 2024"] > .custom-day').click()
    }

    preencheDataTrecho2(){
        cy.get(':nth-child(2) > .slice-fields > app-calendar > .select-dates').click()
        cy.get('[aria-label="sábado, 14 de setembro de 2024"] > .custom-day').click()
    }

    preenchePassageiros(){
        cy.get('.passenger-input').click()
        cy.get(':nth-child(2) > div > .fa-plus').click()
        cy.get(':nth-child(4) > div > .fa-plus').click()
        cy.get(':nth-child(6) > div > .fa-plus').click()
        cy.contains('Confirmar').click()
    }

    clicaBuscarPassagens(){
        cy.get('.find-hotels > button').click()
    }

    clicaBuscarPassagensMultiDestino(){
        cy.get('.send-slices > button').click()
    }

    validaBuscaIdaEVolta(){
        cy.contains('dom. 08 de set. - dom. 15 de set.')
    }

    validaBuscaSomenteIda(){
        cy.contains('dom. 08 de set.')
    }

    validaBuscaMultiDestino(){
        cy.contains('sex. 13 de set. - sáb. 14 de set.')
    }

}export default ZupperPassangensPages;