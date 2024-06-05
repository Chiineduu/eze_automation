///<reference types="cypress" />
import FooterMethods from "../../support/Footer/footerMethods";
const footerPage = new FooterMethods();

describe('Footer Suite',function()
{
  this.beforeEach(function () {
    cy.visit('/')
  })
  it('TC_Footer_01: To verify "Shop" page gets displayed when the user clicks on the "Go to Shop" button.',function(){
    footerPage.goToShopButton();
  });
  it('TC_Footer_02: To verify "Thanks! You have successfully subscribed" message for valid email address.',function(){
    footerPage.successfulSubscription();
  });
  it('TC_Footer_03: To verify "You are already subscribed!" message for subscribed email address.',function(){
    footerPage.alreadySubscribed();
  });
  it.only('TC_Footer_04: To verify links under "Eze", "Trading" and "Help" section in footer.',function(){
    footerPage.footerLinks();
  });
  it('TC_Footer_05: To verify Social media icons functionality.',function(){
    footerPage.socialIcons();
  }); 

})