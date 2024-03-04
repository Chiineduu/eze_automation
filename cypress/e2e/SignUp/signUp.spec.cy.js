/// <reference types="cypress" />
import SignUpMethods from '../../support/SignUp/signUpMethods';
const signUpPage = new SignUpMethods()

describe('Create Your Account Suite',function()
{
  this.beforeEach(function () {
    cy.visit('/')
  })
  it('TC_CreateAccount_01: Sign up with a new user', function() {
    signUpPage.signUpWithNewUser();
  });

  it('TC_CreateAccount_02: Verify message by entering invalid email address format', function() {
    signUpPage.signUpwithInvalidEmail();
  });

  it('TC_CreateAccount_04: Verify message by entering wrong confirm password', function() {
    signUpPage.signUpWithWrongConfirmPwd();
  });

  it('TC_CreateAccount_07: Verify "Login" link functionality', function() {
    signUpPage.verifyLoginLink();
  });

  it('TC_CreateAccount_08: Verify the "Create Your Account" popup gets closed when user clicks on the "Close" icon', function() {
    signUpPage.verifyCloseIcon();
  });
});

