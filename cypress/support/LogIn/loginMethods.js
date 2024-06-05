import LogInObjects from './logInObjects';
const logInObject = new LogInObjects();
import SignUpObjects from './../SignUp/signUpObjects';
const signUpObject = new SignUpObjects();

class LogInMethods
{
    logInWithUser()
    {
        cy.get(logInObject.LogInSelector()).contains('Log In').click();
        cy.get(logInObject.popupHeadingSelector()).should('have.text','Sign in and start shopping for electronics');
        cy.get(logInObject.EmailFieldSelector()).type('akosachinedu0@gmail.com');
        cy.get(logInObject.PasswordFieldSelector()).type('Nextdoor@1a');
        cy.get(logInObject.SignBtnSelector()).should('be.visible').click();
        cy.get(logInObject.ProfileAvatarSelector(),{timeout:10000}).should('be.visible')
    }
    logInWithInvalidCredentials()
    {
        cy.get(logInObject.LogInSelector()).contains('Log In').click();
        cy.get(logInObject.EmailFieldSelector()).type('testerhub+101@ezewholesale.com');
        cy.get(logInObject.PasswordFieldSelector()).type('Seller');
        cy.get(logInObject.SignBtnSelector()).click();
        cy.get(logInObject.ErrorMessage(),{timeout:5000}).should('include.text','Invalid credentials');
    }
    verifySignUpLinkOnLogin()
    {
        cy.get(logInObject.LogInSelector()).contains('Log In').click();
        cy.get(logInObject.popupHeadingSelector()).should('have.text','Sign in and start shopping for electronics');
        cy.get(logInObject.SignUpSelector(),{timeout:10000}).click({force:true});
        cy.get(logInObject.closebtnselector(),{timeout:5000}).click({force:true})
        cy.get(logInObject.createAccountheadingSelector()).should('have.text','Let’s get to know you');
    }
    verifyForgotPasswordLink()
    {
        cy.get(logInObject.LogInSelector()).contains('Log In').click();
        cy.get(logInObject.popupHeadingSelector()).should('have.text','Sign in and start shopping for electronics');
        cy.get(logInObject.forgotPasswordLink()).click();
        cy.get(logInObject.forgotPasswordPopup()).should('be.visible');
        
    }
    verifyCloseIcon()
    {
        cy.get(logInObject.LogInSelector()).contains('Log In').click({force:true});
        cy.get(logInObject.closebtnselector()).click({force:true});
        cy.get(signUpObject.button()).contains('Create an Account').should('be.visible')
    }
    verifyRememberMeCheckbox()
    { 
        cy.get(logInObject.LogInSelector()).contains('Log In').click({force:true});
        cy.get(logInObject.LogInSelector()).contains('Log In').click({force:true});
        cy.get(logInObject.RememberCheckbox()).should('not.be.checked');
        // verify if user is able to check the checkbox
        cy.get(logInObject.RememberCheckbox()).click();
    }

}
export default LogInMethods