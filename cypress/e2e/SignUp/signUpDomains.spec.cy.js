/// <reference types="cypress" />
import SignUpDomainMethods from '../../support/SignUp/signUpWithDomains';
const domainPage = new SignUpDomainMethods()

describe('Create Your Account with different domains',function()
{
  this.beforeEach(function () {
    cy.visit('/')
    
  })
  it('TC_SignUp_01: To verify user is able to create account with Gmail.', function(){
    domainPage.signUpWithGmail();
  })
  it('TC_SignUp_02: To verify user is able to create account with Yahoo.', function(){
    domainPage.signUpWithYahoo();
  })
  it('TC_SignUp_03: To verify user is able to create account with Outlook.', function(){
    domainPage.signUpWithOutlook();
  })
  it('TC_SignUp_04: To verify user is able to create account with Hotmail.', function(){
    domainPage.signUpWithHotmail();
  })
  it('TC_SignUp_05: To verify user is able to create account with Zoho.', function(){
    domainPage.signUpWithZoho();
  })
  it('TC_SignUp_06: To verify user is able to create account with Company Name.', function(){
    domainPage.signUpWithCompany();
  })
})