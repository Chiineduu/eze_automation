import Chance from 'chance';
const chance = new Chance();

import SignUpObjects from './signUpObjects';
const signUpObject = new SignUpObjects();

class SignUpMethods
{
    signUpWithNewUser()
    {
        cy.get(signUpObject.button()).contains('Create an Account').click({force:true});
        cy.get(signUpObject.FirstNameSelector()).eq(0).type('cypress',{force:true}); 
        cy.get(signUpObject.getLastNameSelector()).eq(1).type('Test',{force:true});
        cy.get(signUpObject.getEmailSelector()).type(chance.email({domain: "ezewholesale.com"}));
        cy.get(signUpObject.selectBusinessCountry()).click({force:true});
        cy.get(signUpObject.searchcountry()).type('Nigeria');
        cy.get(signUpObject.selectcountry()).click();
        // Intercept form submission
        cy.intercept('POST', '/api/auth/session', (req) => {
        // Prevent the default behavior of form submission
         req.reply({ statusCode: 200, body: {} });
  });
    
        cy.get(signUpObject.getPasswordSelector()).type('Test@1234');
        cy.get(signUpObject.saveandcontinuebtn()).contains('Save and Continue').click();
        cy.get(signUpObject.getWelcomeSelector(),{ timeout: 25000 }).should('include.text','We sent you a link!');
    }
    
    signUpwithInvalidEmail()
    {
        
        cy.get(signUpObject.button()).contains('Create an Account').click({force:true});
        cy.get(signUpObject.getEmailSelector()).should('not.be.disabled').type('test@');
        cy.get(signUpObject.invalidEmailMsg()).should('have.text',"Enter a valid email address.");
    }
    signUpwithInvalidPwd()
    {
        cy.get(signUpObject.button()).contains('Create an Account').click();
        cy.get(signUpObject.getPasswordSelector()).type('test@1234');
        cy.get(signUpObject.passwordFormatMsg()).should('have.text',"Password must be at least 8 characters and include a number, an uppercase, a lowercase, and a special character.");
    }
   
    signUpWithAlreadyRegisteredUser()
    {
      
        cy.get(signUpObject.button()).contains('Create an Account').click();
        cy.get(signUpObject.FirstNameSelector()).eq(0).type('Drob');
        cy.get(signUpObject.getLastNameSelector()).eq(1).type('Ypsm');
        cy.get(signUpObject.getEmailSelector()).type('testerhub+101@ezewholesale.com');
        cy.get(signUpObject.selectBusinessCountry()).click({force:true});
        cy.get(signUpObject.searchcountry()).type('Nigeria');
        cy.get(signUpObject.getPasswordSelector()).type('Test@1234')
        cy.get(signUpObject.saveandcontinuebtn()).contains('Save and Continue').click({force: true});
        cy.get(signUpObject.getInvalidPasswordMsg()).should('have.text',"Error: Email address already exist!")
    }
    verifyLoginLink()
    {
        cy.get(signUpObject.button()).contains('Create an Account').click();
        cy.get(signUpObject.getLoginLink()).click();
        cy.get(signUpObject.getLoginwelcomenote()).contains('Welcome Back').should('be.visible');
    }
    verifyCloseIcon()
    {
        cy.get(signUpObject.button()).contains('Create an Account').click();
        cy.get(signUpObject.getCloseIcon()).click();
        cy.get(signUpObject.getLogo()).should('be.visible');
    }

}
export default SignUpMethods;

