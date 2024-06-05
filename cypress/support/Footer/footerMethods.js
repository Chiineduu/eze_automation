import FooterObjects from "./footerObjects";
const footerObject = new FooterObjects();
import LogInObjects from "../LogIn/logInObjects";
const logInObject = new LogInObjects();
import Chance from 'chance';
const chance = new Chance();

class FooterMethods
{
    goToShopButton()
    {
        cy.get(footerObject.button()).contains('Go to Shop').click({force:true});
        cy.wait(5000);
        cy.url().should('include','https://dev-enterprise.ezewholesale.com/shop');
    }

    // Subscribe to receive inventory & price updates
    successfulSubscription()
    {
        cy.get(footerObject.subscribeEmailField()).type(chance.email({domain: "gmail.com"}));
        cy.get(footerObject.subscribeButton()).click({force:true});
        cy.get(footerObject.subscribeMessage(),{timeout:10000}).should('include.text',"Thanks! You've successfully subscribed.");
    }
    alreadySubscribed()
    {
        cy.get(footerObject.subscribeEmailField()).type('novtest022@gmail.com');
        cy.get(footerObject.subscribeButton()).click({force:true});
        cy.get(footerObject.subscribeMessage(),{timeout:10000}).should('include.text','You are already subscribed!');
    }
    footerLinks()
    {
        // Eze
        cy.get(footerObject.blogOption()).invoke("removeAttr","target").click({force: true})
        cy.url().should('include','https://blog.ezewholesale.com/',{timeout:3000});
        cy.go('back');
        
         // How It Works
         cy.wait(2000)
        cy.get(footerObject.howItWorksOption()).click({force:true})
        cy.url().should('include','/how-it-works',{timeout:3000});
        cy.go('back');

       // Grading Process
        cy.wait(2000)
        cy.get(footerObject.gradingProcessOption()).click({force:true})
        //cy.get(footerObject.gradingProcessTitle(),{timeout:3000}).should('include.text', 'Eze Grading')
        cy.url().should('include','/grading',{timeout:3000}); 
        cy.go('back')

        
        // Shop
        cy.wait(5000)
        cy.get(footerObject.shopOption()).click({force:true})
        cy.url().should('include','/browse',{timeout:5000});
        cy.go('back')
        // Apply to Sell
        cy.wait(7000)
        cy.get(footerObject.applyToSellOption()).click({force:true})
        cy.wait(1000)
        cy.url().should('include', '/sellers',{timeout:5000})
        // White Paper
        cy.wait(2000)
        cy.get(footerObject.whitePaperOption()).click({force:true})
        cy.get(footerObject.whitePaperTitle(),{timeout:5000}).should('include.text', 'Coming Soon!',{timeout:3000})
        // Lowest Price
        cy.wait(2000)
        cy.get(footerObject.lowestPriceOption()).click({force:true})
        cy.wait(1000)
        cy.url().should('include','/lowest-price',{timeout:20000});
        cy.go('back')
        // Highest Bids
        cy.wait(5000)
        cy.get(footerObject.highestBidsOption()).click({force:true})
        cy.url().should('include','/highest-bids',{timeout:40000});

        cy.go('back')
        // Help
        // Shipping
        cy.wait(2000)
        cy.get(footerObject.shippingOption()).invoke("removeAttr","target").click({force: true})
        cy.url().should('include','https://help.ezewholesale.com/en/category/shipping-1cilnas/',{timeout:3000});
        cy.go('back');
        // Payments
        cy.wait(2000)
        cy.get(footerObject.paymentsOption()).invoke("removeAttr","target").click({force: true})
        cy.url().should('include','https://help.ezewholesale.com/en/category/payments-1bhbe3v/',{timeout:3000});
        cy.wait(1000)
        cy.go('back');
        // Contact Us
        cy.wait(2000)
        cy.get(footerObject.contactUsOption(),{timeout:15000}).click({force:true})
        cy.url().should('include','/contact-us');
        cy.wait(1000)
        cy.go('back');
        // Warranty Policies
        cy.wait(2000)
        cy.get(footerObject.warrantyPoliciesOption(),{timeout:15000}).invoke("removeAttr","target").click({force: true})
        cy.wait(1000)
        cy.url().should('include','https://help.ezewholesale.com');
        cy.go('back');
        // Can't Find a Device
        cy.wait(2000)
        cy.get(footerObject.cantFindADeviceOption()).invoke("removeAttr","target").click({force: true})
        cy.wait(1000)
        cy.url().should('include','https://form.typeform.com',{timeout:15000});
        cy.go('back');
     }
    socialIcons()
    {
        cy.get(signUpObject.selectCountry()).click({force:true})
        cy.get(signUpObject.selectCountryName()).click({force:true})
        // Facebook Icon
        cy.get(footerObject.facebookIcon(),{timeout:5000}).filter(':visible').invoke("removeAttr","target").click({force: true})
        cy.url().should('include','https://www.facebook.com/ezewholesale');
        cy.go('back');
        // Twitter Icon
        cy.get(footerObject.twitterIcon()).filter(':visible').invoke("removeAttr","target").click({force: true})
        cy.url().should('include','https://twitter.com/ezewholesale');
        cy.go('back');
        cy.wait(10000)
        // Instagram Icon
        cy.get(footerObject.instagramIcon()).filter(':visible').invoke("removeAttr","target").click({force: true})
        cy.url().should('include','https://www.instagram.com/ezewholesale.us_canada/');
        cy.go('back');
         // LinkedIn Icon
        cy.get(footerObject.linkedInIcon()).filter(':visible').invoke("removeAttr","target").click({force: true})
        cy.url().should('include','https://www.linkedin.com/company/ezewholesale/');
        cy.go('back');
        // Youtube Icon
        cy.get(footerObject.youtubeIcon()).filter(':visible').invoke("removeAttr","target").click({force: true})
        cy.url().should('include','https://www.youtube.com/channel/UC1InbWyI3hHWFf6l5P_Obrw');
        cy.go('back');
     }
}
export default FooterMethods;