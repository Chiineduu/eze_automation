import Chance from 'chance';
const chance = new Chance();

import SignUpObjects from './signUpObjects';
const signUpObject = new SignUpObjects();

class SignUpDomainMethods {
    signUpWithGmail() {
        
        cy.get(signUpObject.button()).contains('Create an Account').click();
        cy.get(signUpObject.FirstNameSelector()).eq(0).type('cypress',{force:true}); 
        cy.get(signUpObject.getLastNameSelector()).eq(1).type('Test',{force:true});
        cy.get(signUpObject.getEmailSelector()).type(chance.email({ domain: "gmail.com" }));
        cy.get(signUpObject.selectBusinessCountry()).click({force:true});
        cy.get(signUpObject.searchcountry()).type('Nigeria');
        cy.get(signUpObject.selectcountry()).click();   
        cy.get(signUpObject.getPasswordSelector()).type('Test@1234');
        cy.get(signUpObject.saveandcontinuebtn()).contains('Save and Continue').click();
        cy.get(signUpObject.getWelcomeSelector(),{ timeout: 25000 }).should('include.text','We sent you a link!');
    }

    signUpWithYahoo() {
        cy.get(signUpObject.button()).contains('Create an Account').click();
        cy.get(signUpObject.FirstNameSelector()).eq(0).type('cypress',{force:true}); 
        cy.get(signUpObject.getLastNameSelector()).eq(1).type('Test',{force:true});
        cy.get(signUpObject.getEmailSelector()).type(chance.email({ domain: "yahoo.com" }));
        cy.get(signUpObject.selectBusinessCountry()).click({force:true});
        cy.get(signUpObject.searchcountry()).type('Nigeria');
        cy.get(signUpObject.selectcountry()).click();   
        cy.get(signUpObject.getPasswordSelector()).type('Test@1234');
        cy.get(signUpObject.saveandcontinuebtn()).contains('Save and Continue').click();
        cy.get(signUpObject.getWelcomeSelector(),{ timeout: 25000 }).should('include.text','We sent you a link!');
    }

    signUpWithOutlook() {
        cy.get(signUpObject.button()).contains('Create an Account').click();
        cy.get(signUpObject.FirstNameSelector()).eq(0).type('cypress',{force:true}); 
        cy.get(signUpObject.getLastNameSelector()).eq(1).type('Test',{force:true});
        cy.get(signUpObject.getEmailSelector()).type(chance.email({ domain: "outlook.com" }));
        cy.get(signUpObject.selectBusinessCountry()).click({force:true});
        cy.get(signUpObject.searchcountry()).type('Nigeria');
        cy.get(signUpObject.selectcountry()).click();   
        cy.get(signUpObject.getPasswordSelector()).type('Test@1234');
        cy.get(signUpObject.saveandcontinuebtn()).contains('Save and Continue').click();
        cy.get(signUpObject.getWelcomeSelector(),{ timeout: 25000 }).should('include.text','We sent you a link!');
    }

    signUpWithHotmail() {
        cy.get(signUpObject.button()).contains('Create an Account').click();
        cy.get(signUpObject.FirstNameSelector()).eq(0).type('cypress',{force:true}); 
        cy.get(signUpObject.getLastNameSelector()).eq(1).type('Test',{force:true});
        cy.get(signUpObject.getEmailSelector()).type(chance.email({ domain: "hotmail.com" }));
        cy.get(signUpObject.selectBusinessCountry()).click({force:true});
        cy.get(signUpObject.searchcountry()).type('Nigeria');
        cy.get(signUpObject.selectcountry()).click();   
        cy.get(signUpObject.getPasswordSelector()).type('Test@1234');
        cy.get(signUpObject.saveandcontinuebtn()).contains('Save and Continue').click();
        cy.get(signUpObject.getWelcomeSelector(),{ timeout: 25000 }).should('include.text','We sent you a link!');
    }

    signUpWithZoho() {
        cy.get(signUpObject.button()).contains('Create an Account').click();
        cy.get(signUpObject.FirstNameSelector()).eq(0).type('cypress',{force:true}); 
        cy.get(signUpObject.getLastNameSelector()).eq(1).type('Test',{force:true});
        cy.get(signUpObject.getEmailSelector()).type(chance.email({ domain: "zoho.com" }));
        cy.get(signUpObject.selectBusinessCountry()).click({force:true});
        cy.get(signUpObject.searchcountry()).type('Nigeria');
        cy.get(signUpObject.selectcountry()).click();   
        cy.get(signUpObject.getPasswordSelector()).type('Test@1234');
        cy.get(signUpObject.saveandcontinuebtn()).contains('Save and Continue').click();
        cy.get(signUpObject.getWelcomeSelector(),{ timeout: 25000 }).should('include.text','We sent you a link!');
    }

    signUpWithCompany() {
        cy.get(signUpObject.button()).contains('Create an Account').click();
        cy.get(signUpObject.FirstNameSelector()).eq(0).type('cypress',{force:true}); 
        cy.get(signUpObject.getLastNameSelector()).eq(1).type('Test',{force:true});
        cy.get(signUpObject.getEmailSelector()).type(chance.email({ domain: "testershub.co.in" }));
        cy.get(signUpObject.selectBusinessCountry()).click({force:true});
        cy.get(signUpObject.searchcountry()).type('Nigeria');
        cy.get(signUpObject.selectcountry()).click();   
        cy.get(signUpObject.getPasswordSelector()).type('Test@1234');
        cy.get(signUpObject.saveandcontinuebtn()).contains('Save and Continue').click();
        cy.get(signUpObject.getWelcomeSelector(),{ timeout: 25000 }).should('include.text','We sent you a link!');
    }
}

export default SignUpDomainMethods;
