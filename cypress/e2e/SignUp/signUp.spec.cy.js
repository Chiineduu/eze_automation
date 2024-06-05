/// <reference types="cypress" />
import SignUpMethods from '../../support/SignUp/signUpMethods';
const signUpPage = new SignUpMethods()

describe('Create Your Account Suite',function()
{
  this.beforeEach(function () {
    cy.visit('https://dev-enterprise.ezewholesale.com/')
  })
  it('TC_CreateAccount_01: Sign up with a new user', function() {
    signUpPage.signUpWithNewUser();
  });

  it('TC_CreateAccount_02: Verify message by entering invalid email address format', function() {
    signUpPage.signUpwithInvalidEmail();
  });

  it('TC_CreateAccount_03: Verify message by entering wrong confirm password', function() {
    signUpPage.signUpwithInvalidPwd();
  });

  it('TC_CreateAccount_04: Verify "Login" link functionality', function() {
    signUpPage.verifyLoginLink();
  });

  it('TC_CreateAccount_05: Verify the "Create Your Account" popup gets closed when user clicks on the "Close" icon', function() {
    signUpPage.verifyCloseIcon();
  });

  it('TC_CreateAccount_06: Verify that user cant register with created account', function() {
    signUpPage.signUpWithAlreadyRegisteredUser();
  });
});

