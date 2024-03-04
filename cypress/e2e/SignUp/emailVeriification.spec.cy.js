/// <reference types="cypress-mailslurp" />
import SignUpObjects from '../../support/SignUp/signUpObjects';
const signUpObject = new SignUpObjects();
import LogInObjects from '../../support/Login/logInObjects';
const logInObject = new LogInObjects();

import Chance from 'chance';
const chance = new Chance();

// Describe the test suite
describe("User sign up test with mailslurp plugin", function () {

    // Before running the tests, set up mailslurp inbox
    before(function () {
        cy.log("Wrap inbox before test");
        return cy.mailslurp()
            .then(mailslurp => mailslurp.createInbox())
            .then(inbox => {
                cy.log(`Inbox id ${inbox.id}`);
                cy.wrap(inbox.id).as('inboxId');
                cy.wrap(inbox.emailAddress).as('emailAddress');
            });
    });

    // Test case: Visit Ezetech website and sign up
    it("01 - Visit to the Ezetech website.", function () {
        expect(this.emailAddress).to.contain("@mailslurp");

        // Visit the demo application
        cy.visit("https://v2-dev.ezewholesale.com/");

        // Fill sign-up form
        cy.get(signUpObject.selectCountry()).click();
        cy.get(signUpObject.selectCountryName()).click();
        cy.get(signUpObject.button()).contains('Create an Account').click();
        cy.get(signUpObject.getFirstNameSelector()).type('Drob');
        cy.get(signUpObject.getLastNameSelector()).type('Ypsm');
        cy.get(signUpObject.getEmailSelector()).type(this.emailAddress);
        cy.get(signUpObject.companyNameSelector()).type(chance.string({ length: 5 }));
        cy.get(signUpObject.selectBusinessCountry()).select('India');
        cy.get(signUpObject.countryCode()).click().type('+91');
        cy.get(signUpObject.getPhoneNumberSelector()).type('8888888888');
        cy.get(signUpObject.getPasswordSelector()).type('Test@1234');
        cy.get(signUpObject.getConfirmPasswordSelector()).type('Test@1234');
        cy.get(signUpObject.button()).contains('Register').click();

        // Verify successful sign-up
        cy.get(signUpObject.getWelcomeSelector(), { timeout: 25000 }).should('include.text','Welcome to Eze!');

        // Verify email verification process
        cy.mailslurp()
            .then(mailslurp => mailslurp.waitForLatestEmail(this.inboxId, 30000, true))
            .then(email => {
                expect(email.body).contains('Confirm Email');
                cy.state(signUpObject.documentId()).write(email.body);
                cy.get(signUpObject.confirmEmailBtn()).invoke("removeAttr","target").click({force: true});
                cy.wait(900);
                cy.get(signUpObject.getInvalidPasswordMsg(),{timeout:10000}).should('have.text','Email Verified');
                cy.get(signUpObject.getWelcomeSelector()).should('include.text','Welcome to Eze');
                cy.get(signUpObject.button()).contains('Start Trading Now').click({force: true});
                cy.get(signUpObject.anchorTag()).contains('Shop').should('be.visible');
                cy.get(logInObject.getProfileAvtarSelector(),{timeout:7000}).should('be.visible');
            });
    });
});
