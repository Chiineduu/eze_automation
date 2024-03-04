import LogInObjects from './loginObjects';
const logInObject = new LogInObjects();
import SignUpObjects from './../SignUp/signUpObjects';
const signUpObject = new SignUpObjects();

class LogInMethods
{
    logInWithUser()
    {
        cy.get(signUpObject.selectCountry()).click({force:true})
        cy.get(signUpObject.selectCountryName()).click()
        cy.get(logInObject.buttonSelector,{timeout:5000}).contains('Log in').click();
        cy.get(logInObject.popupHeadingSelector()).should('have.text','Log in and start shopping for electronics')
        cy.get(logInObject.getEmailFieldSelector()).type('michealpinto1@gmail.com');
        cy.get(logInObject.getPasswordFieldSelector()).type('Nextdoor@1a');
        cy.get(logInObject.getSubmitBtnSelector()).click();
        cy.get(logInObject.getProfileAvtarSelector(),{timeout:7000}).should('be.visible')
    }
    logInWithInvalidCredentials()
    {
        cy.get(signUpObject.selectCountry()).click({force:true})
        cy.get(signUpObject.selectCountryName()).click()
        cy.get(logInObject.buttonSelector,{timeout:5000}).contains('Log in').click();
        cy.get(logInObject.getEmailFieldSelector()).type('testerhub+101@ezewholesale.com');
        cy.get(logInObject.getPasswordFieldSelector()).type('Seller');
        cy.get(logInObject.getSubmitBtnSelector()).click();
        cy.get(logInObject.getErrorMessage()).should('include.text','Please check your login credentials');
    }
    verifyRegisterLinkOnLogin()
    {
        cy.get(signUpObject.selectCountry()).click({force:true})
        cy.get(signUpObject.selectCountryName()).click()
        cy.get(logInObject.buttonSelector,{timeout:5000}).contains('Log in').click();
        cy.get(logInObject.popupHeadingSelector()).should('have.text','Log in and start shopping for electronics')
        cy.get(logInObject.registerLinkSelector()).click()
        cy.get(logInObject.createAccountheadingSelector()).should('have.text','Create your account');
    }
    verifyForgotPasswordLink()
    {
        cy.get(signUpObject.selectCountry()).click({force:true})
        cy.get(signUpObject.selectCountryName()).click()
        cy.get(logInObject.buttonSelector,{timeout:5000}).contains('Log in').click();
        cy.get(logInObject.popupHeadingSelector()).should('have.text','Log in and start shopping for electronics')
        cy.get(logInObject.forgotPasswordLink()).click()
        cy.get(logInObject.createAccountheadingSelector()).should('have.text','Forgot Password?');
    }
    verifyCloseIcon()
    {
        cy.get(signUpObject.selectCountry()).click({force:true})
        cy.get(signUpObject.selectCountryName()).click()
        cy.get(logInObject.buttonSelector,{timeout:5000}).contains('Log in').click();
        cy.get(signUpObject.getCloseIcon()).click()
        cy.get(signUpObject.button()).contains('Create an Account').should('be.visible')
    }
    verifyRememberMeCheckbox()
    { 
        cy.get(signUpObject.selectCountry()).click({force:true})
        cy.get(signUpObject.selectCountryName()).click()
        cy.get(logInObject.buttonSelector,{timeout:5000}).contains('Log in').click();
        cy.get(logInObject.rememberMeCheckbox()).should('not.be.checked')
        // verify if user is able to check the checkbox
        cy.get(logInObject.rememberMeCheckbox()).check()
    }
    sellerLogin()
    {
        cy.get(signUpObject.selectCountry()).click({force:true})
        cy.get(signUpObject.selectCountryName()).click()
        cy.get(logInObject.buttonSelector,{timeout:5000}).contains('Log in').click();
        cy.get(logInObject.popupHeadingSelector()).should('have.text','Log in and start shopping for electronics')
        cy.get(logInObject.getEmailFieldSelector()).type('testerhub+0112@ezewholesale.com',{force:true});
        cy.get(logInObject.getPasswordFieldSelector()).type('Pass@123',{force:true});
        cy.get(logInObject.getSubmitBtnSelector()).click();
        cy.get(logInObject.getProfileAvtarSelector(),{timeout:7000}).should('be.visible')
    }
    buyerLogin()
    {   
        cy.get(logInObject.buttonSelector,{timeout:5000}).contains('Log in').click();
        cy.get(logInObject.popupHeadingSelector()).should('have.text','Log in and start shopping for electronics')
        cy.get(logInObject.getEmailFieldSelector()).type('testerhub+30112@ezewholesale.com',{force:true});
        cy.get(logInObject.getPasswordFieldSelector()).type('Pass@123',{force:true});
        cy.get(logInObject.getSubmitBtnSelector()).click();
        cy.get(logInObject.getProfileAvtarSelector(),{timeout:7000}).should('be.visible')
    }
    logout()
    {
        cy.get(logInObject.getProfileAvtarSelector(),{timeout:7000}).click({force:true})
        cy.get('a').contains('Sign Out').click({force:true})
    }

}
export default LogInMethods