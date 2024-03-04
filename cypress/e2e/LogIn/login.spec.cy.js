/// <reference types="cypress" />
import LogInMethods from '../../support/Login/logInMethods';
const logInPage = new LogInMethods()

describe('S8: Log In Suite',function()
{
  this.beforeEach(function () {
    cy.visit('/')
  })

  it.only('TC_Login_01: Verify Log In with valid credentials.',function(){
    logInPage.logInWithUser();
  });
  it('TC_Login_02: To verify Log In with invalid credentials.',function(){
    logInPage.logInWithInvalidCredentials();
  });
  it('TC_Login_03: To verify "Register" link is functional on "Login" popup.',function(){
    logInPage.verifyRegisterLinkOnLogin();
  });
  it('TC_Login_04: To verify "Forgot Password" link is functional on "Login" popup.',function(){
    logInPage.verifyForgotPasswordLink();
  });
  it('TC_Login_05: To verify the "Login" popup gets closed when user clicks on the "Close" icon.',function(){
    logInPage.verifyCloseIcon();
  })
  it('TC_Login_06: To verify "Remember Me" checkbox is not selected by default.',function(){
    logInPage.verifyRememberMeCheckbox();
  })

});