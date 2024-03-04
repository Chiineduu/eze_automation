import Chance from 'chance';
const chance = new Chance();

import SignUpObjects from './signUpObjects';
const signUpObject = new SignUpObjects();

class SignUpMethods
{
    signUpWithNewUser()
    {
        cy.get(signUpObject.selectCountry()).click()
        cy.get(signUpObject.selectCountryName()).click()
        cy.get(signUpObject.button()).contains('Create an Account').click()
        cy.get(signUpObject.getFirstNameSelector()).type('Cypress')
        cy.get(signUpObject.getLastNameSelector()).type('Test')
        cy.get(signUpObject.getEmailSelector()).type(chance.email({domain: "ezewholesale.com"}))
        cy.get(signUpObject.companyNameSelector()).type('MVP Gadgets')
        cy.get(signUpObject.selectBusinessCountry()).select('Nigeria')
        cy.get('.arrow').click();
        cy.get(signUpObject.countryCode()).click()
        cy.get(signUpObject.getPhoneNumberSelector()).type('9034364269')
        cy.get(signUpObject.getPasswordSelector()).type('Test@1234')
        cy.get(signUpObject.getConfirmPasswordSelector()).type('Test@1234')
        cy.get('.infoOption > select').select('Media', { force: true });
        cy.get('.infoOption > label',{ timeout: 10000 }).should('exist').and('be.visible');
        cy.get(signUpObject.button()).contains('Register').click()
        cy.get(signUpObject.getWelcomeSelector(),{ timeout: 25000 }).should('include.text','Welcome to Eze!')
    }
    signUpwithInvalidPhoneNumber()
    {
        cy.get(signUpObject.selectCountry()).click({force:true})
        cy.get(signUpObject.selectCountryName()).click()
        cy.get(signUpObject.button()).contains('Create an Account').click()
        cy.get(signUpObject.getEmailSelector()).type(chance.email({domain: "gmail.com"}))
        cy.get(signUpObject.companyNameSelector()).type('MVP Gadgets')
        cy.get(signUpObject.selectBusinessCountry()).select('Nigeria')
        cy.get('.arrow').click();
        cy.get(signUpObject.getPhoneNumberSelector()).type('00000')
        cy.get(signUpObject.invalidPhoneMsg()).should('have.text',"Enter a valid phone number.")
    }
    signUpwithInvalidEmail()
    {
        cy.get(signUpObject.selectCountry()).click({force:true})
        cy.get(signUpObject.selectCountryName()).click()
        cy.get(signUpObject.button()).contains('Create an Account').click()
        cy.get(signUpObject.getEmailSelector()).type('hsk@hdsjk')
        cy.get(signUpObject.invalidEmailMsg()).should('have.text',"Enter a valid email address.")
    }
    signUpwithInvalidPwd()
    {
        cy.get(signUpObject.selectCountry()).click({force:true})
        cy.get(signUpObject.selectCountryName()).click()
        cy.get(signUpObject.button()).contains('Create an Account').click()
        cy.get(signUpObject.getPasswordSelector()).type('test@1234')
        cy.get(signUpObject.getConfirmPasswordSelector()).type('test@1234')
        cy.get(signUpObject.passwordFormatMsg()).should('have.text',"Password must be Alphanumeric which includes a number, uppercase/lowercase character and a special character.")
    }
    signUpWithWrongConfirmPwd()
    {
        cy.get(signUpObject.selectCountry()).click({force:true})
        cy.get(signUpObject.selectCountryName()).click()
        cy.get(signUpObject.button()).contains('Create an Account').click()
        cy.get(signUpObject.getPasswordSelector()).type('Test@1234')
        cy.get(signUpObject.getConfirmPasswordSelector()).type('test@12345')
        cy.get(signUpObject.passwordFormatMsg()).should('have.text',"Passwords do not match")
    }
    signUpWithAlreadyRegisteredUser()
    {
        cy.get(signUpObject.selectCountry()).click({force:true})
        cy.get(signUpObject.selectCountryName()).click()
        cy.get(signUpObject.button()).contains('Create an Account').click()
        cy.get(signUpObject.getFirstNameSelector()).type('Drob')
        cy.get(signUpObject.getLastNameSelector()).type('Ypsm')
        cy.get(signUpObject.getEmailSelector()).type('testerhub+101@ezewholesale.com')
        cy.get(signUpObject.companyNameSelector()).type(chance.string({ length: 5 }))
        cy.get(signUpObject.selectBusinessCountry()).select('India')
        cy.get(signUpObject.countryCode()).click({force:true}).type('+91')
        cy.get(signUpObject.getPhoneNumberSelector()).type('8888888888')
        cy.get(signUpObject.getPasswordSelector()).type('Test@1234')
        cy.get(signUpObject.getConfirmPasswordSelector()).type('Test@1234')
        cy.get(signUpObject.button()).contains('Register').click({force: true})
        cy.get(signUpObject.getInvalidPasswordMsg()).should('have.text',"Email address already exist!")
    }
    verifyLoginLink()
    {
        cy.get(signUpObject.selectCountry()).click({force:true})
        cy.get(signUpObject.selectCountryName()).click()
        cy.get(signUpObject.button()).contains('Create an Account').click()
        cy.get(signUpObject.getLoginLink()).click()
        cy.get(signUpObject.getLoginBtn()).should('have.text'," Login ")
    }
    verifyCloseIcon()
    {
        cy.get(signUpObject.selectCountry()).click({force:true})
        cy.get(signUpObject.selectCountryName()).click()
        cy.get(signUpObject.button()).contains('Create an Account').click()
        cy.get(signUpObject.getCloseIcon()).click()
        cy.get(signUpObject.getLogo()).should('be.visible')
    }

}
export default SignUpMethods;

