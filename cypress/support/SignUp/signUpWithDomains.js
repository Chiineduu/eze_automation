import Chance from 'chance';
const chance = new Chance();

import SignUpObjects from './signUpObjects';
const signUpObject = new SignUpObjects();

class SignUpDomainMethods {
    signUpWithGmail() {
        cy.get(signUpObject.selectCountry()).click();
        cy.get(signUpObject.selectCountryName()).click();
        cy.get(signUpObject.button()).contains('Create an Account').click();
        cy.get(signUpObject.getFirstNameSelector()).type('Drob');
        cy.get(signUpObject.getLastNameSelector()).type('Ypsm');
        cy.get(signUpObject.getEmailSelector()).type(chance.email({ domain: "gmail.com" }));
        cy.get(signUpObject.companyNameSelector()).type(chance.string({ length: 5 }));
        cy.get(signUpObject.selectBusinessCountry()).select('India');
        cy.get(signUpObject.countryCode()).type('+91');
        cy.get(signUpObject.getPhoneNumberSelector()).type('8888888888');
        cy.get(signUpObject.getPasswordSelector()).type('Test@1234');
        cy.get(signUpObject.getConfirmPasswordSelector()).type('Test@1234');
        cy.get(signUpObject.button()).contains('Register').click();
        cy.get(signUpObject.getWelcomeSelector(), { timeout: 25000 }).should('include.text', 'Welcome to Eze!');
    }

    signUpWithYahoo() {
        cy.get(signUpObject.selectCountry()).click();
        cy.get(signUpObject.selectCountryName()).click();
        cy.get(signUpObject.button()).contains('Create an Account').click();
        cy.get(signUpObject.getFirstNameSelector()).type('Drob');
        cy.get(signUpObject.getLastNameSelector()).type('Ypsm');
        cy.get(signUpObject.getEmailSelector()).type(chance.email({ domain: "yahoo.com" }));
        cy.get(signUpObject.companyNameSelector()).type(chance.string({ length: 5 }));
        cy.get(signUpObject.selectBusinessCountry()).select('India');
        cy.get(signUpObject.countryCode()).type('+91');
        cy.get(signUpObject.getPhoneNumberSelector()).type('8888888888');
        cy.get(signUpObject.getPasswordSelector()).type('Test@1234');
        cy.get(signUpObject.getConfirmPasswordSelector()).type('Test@1234');
        cy.get(signUpObject.button()).contains('Register').click();
        cy.get(signUpObject.getWelcomeSelector(), { timeout: 25000 }).should('include.text', 'Welcome to Eze!');
    }

    signUpWithOutlook() {
        cy.get(signUpObject.selectCountry()).click();
        cy.get(signUpObject.selectCountryName()).click();
        cy.get(signUpObject.button()).contains('Create an Account').click();
        cy.get(signUpObject.getFirstNameSelector()).type('Drob');
        cy.get(signUpObject.getLastNameSelector()).type('Ypsm');
        cy.get(signUpObject.getEmailSelector()).type(chance.email({ domain: "outlook.com" }));
        cy.get(signUpObject.companyNameSelector()).type(chance.string({ length: 5 }));
        cy.get(signUpObject.selectBusinessCountry()).select('India');
        cy.get(signUpObject.countryCode()).type('+91');
        cy.get(signUpObject.getPhoneNumberSelector()).type('8888888888');
        cy.get(signUpObject.getPasswordSelector()).type('Test@1234');
        cy.get(signUpObject.getConfirmPasswordSelector()).type('Test@1234');
        cy.get(signUpObject.button()).contains('Register').click();
        cy.get(signUpObject.getWelcomeSelector(), { timeout: 25000 }).should('include.text', 'Welcome to Eze!');
    }

    signUpWithHotmail() {
        cy.get(signUpObject.selectCountry()).click();
        cy.get(signUpObject.selectCountryName()).click();
        cy.get(signUpObject.button()).contains('Create an Account').click();
        cy.get(signUpObject.getFirstNameSelector()).type('Drob');
        cy.get(signUpObject.getLastNameSelector()).type('Ypsm');
        cy.get(signUpObject.getEmailSelector()).type(chance.email({ domain: "hotmail.com" }));
        cy.get(signUpObject.companyNameSelector()).type(chance.string({ length: 5 }));
        cy.get(signUpObject.selectBusinessCountry()).select('India');
        cy.get(signUpObject.countryCode()).type('+91');
        cy.get(signUpObject.getPhoneNumberSelector()).type('8888888888');
        cy.get(signUpObject.getPasswordSelector()).type('Test@1234');
        cy.get(signUpObject.getConfirmPasswordSelector()).type('Test@1234');
        cy.get(signUpObject.button()).contains('Register').click();
        cy.get(signUpObject.getWelcomeSelector(), { timeout: 25000 }).should('include.text', 'Welcome to Eze!');
    }

    signUpWithZoho() {
        cy.get(signUpObject.selectCountry()).click();
        cy.get(signUpObject.selectCountryName()).click();
        cy.get(signUpObject.button()).contains('Create an Account').click();
        cy.get(signUpObject.getFirstNameSelector()).type('Drob');
        cy.get(signUpObject.getLastNameSelector()).type('Ypsm');
        cy.get(signUpObject.getEmailSelector()).type(chance.email({ domain: "zoho.com" }));
        cy.get(signUpObject.companyNameSelector()).type(chance.string({ length: 5 }));
        cy.get(signUpObject.selectBusinessCountry()).select('India');
        cy.get(signUpObject.countryCode()).type('+91');
        cy.get(signUpObject.getPhoneNumberSelector()).type('8888888888');
        cy.get(signUpObject.getPasswordSelector()).type('Test@1234');
        cy.get(signUpObject.getConfirmPasswordSelector()).type('Test@1234');
        cy.get(signUpObject.button()).contains('Register').click();
        cy.get(signUpObject.getWelcomeSelector(), { timeout: 25000 }).should('include.text', 'Welcome to Eze!');
    }

    signUpWithCompany() {
        cy.get(signUpObject.selectCountry()).click();
        cy.get(signUpObject.selectCountryName()).click();
        cy.get(signUpObject.button()).contains('Create an Account').click();
        cy.get(signUpObject.getFirstNameSelector()).type('Drob');
        cy.get(signUpObject.getLastNameSelector()).type('Ypsm');
        cy.get(signUpObject.getEmailSelector()).type(chance.email({ domain: "testershub.co.in" }));
        cy.get(signUpObject.companyNameSelector()).type(chance.string({ length: 5 }));
        cy.get(signUpObject.selectBusinessCountry()).select('India');
        cy.get(signUpObject.countryCode()).type('+91');
        cy.get(signUpObject.getPhoneNumberSelector()).type('8888888888');
        cy.get(signUpObject.getPasswordSelector()).type('Test@1234');
        cy.get(signUpObject.getConfirmPasswordSelector()).type('Test@1234');
        cy.get(signUpObject.button()).contains('Register').click();
        cy.get(signUpObject.getWelcomeSelector(), { timeout: 25000 }).should('include.text', 'Welcome to Eze!');
    }
}

export default SignUpDomainMethods;
