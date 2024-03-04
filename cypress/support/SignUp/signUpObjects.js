class SignUpObjects
{
    // Country
    selectCountry()
    {
        return ':nth-child(6) > #panel1a-header > .MuiAccordionSummary-content';
    }
    //Country name selector
    selectCountryName()
    {
        return '.MuiPaper-root.Mui-expanded > .MuiCollapse-root > .MuiCollapse-wrapper > .MuiCollapse-wrapperInner > #panel1a-content > .MuiAccordionDetails-root > .innerTable__TableContainer-sc-10uczqs-0 > .innerTable__TableBody-sc-10uczqs-1 > :nth-child(4)'
    }
    //Create Account Button Selector
    getCreateAccountBtnSelector()
    {
        return '.MuiToolbar-root > :nth-child(4) > div > .MuiTypography-root';
    }
    // First Name Selector
    getFirstNameSelector()
    {
        return 'input[name="firstName"]';
    }
    getLastNameSelector()
    {
        return 'input[name="lastName"]';
    }
    // Email Selector
    getEmailSelector()
    {
        return '.input__InputContainer-sc-582omh-0 input[name="email"]';
    }
    // Company Name selector
    companyNameSelector()
    {
        return 'input[name="bizName"]';
    }
    // country select dropdown
    selectBusinessCountry()
    {
        return 'select[name="countryOfBusiness"]';
    }
    //Country Code Selector
    countryCode()
    {
        return '.flag-dropdown';
    }
    // Phone Number Selector
    getPhoneNumberSelector()
    {
        return 'input[name="phone"]';
    }
    // Password Selector
    getPasswordSelector()
    {
        return 'input[name="password"]';
    }
    // Confirm Password Selector
    getConfirmPasswordSelector()
    {
        return 'input[name="confirmPassword"]';
    }
    // Register Button Selector
    getRegisterBtnSelector()
    {
        return 'form > [data-testid="button"]';
    }
    // button selector
    button()
    {
     return 'button';
    }
    // Welcome Message Selector
    getWelcomeSelector()
    {
        return '.content > :nth-child(1)';
    }
    // Error message for invalid password selector
    getInvalidPasswordMsg()
    {
        return '.toast-message';
    }
    // Login link on popup selector
    getLoginLink()
    {
        return 'p > a';
    }
    // Login button name selector
    getLoginBtn()
    {
    return 'form > [data-testid="button"]';
    }
    // Close icon selector
    getCloseIcon()
    {
        return '[data-testid="button"] > img';
    }
    // Logo selector on home page
    getLogo()
    {
       // return '.flex-1 > .logo__Wrapper-sc-19k2r6e-0 > .logo__LogoImageWithText-sc-19k2r6e-2';
      // return '.__logo_holder > :nth-child(1) > .logo__Wrapper-sc-19k2r6e-0 > .logo__LogoImageWithText-sc-19k2r6e-2'
      return '.__logo_holder > :nth-child(1) > .logo__Wrapper-sc-19k2r6e-0'
    }
    //Confirm Email Button
    confirmEmailBtn()
    {
        return '.primary > table > tbody > tr > td > a';
    }
    // Close Icon on country popup
    closeIconOnCountry()
    {
        return 'h4 svg';
    }
    //Document selector for receiving email from mailslurp
    ducumentId()
    {
        return 'document';
    }
    //Invalid email warning message
    invalidEmailMsg()
    {
        return '.input__Text-sc-582omh-1';
    }
    //Invalid phone number warning message
   invalidPhoneMsg()
   {
    return '.phone-input__Text-sc-1elldhw-0';
   }
   // Password validation format message
   passwordFormatMsg()
   {
    return '.input__Text-sc-582omh-1';
   }
   anchorTag()
   {
    return 'a';
   }
}
export default SignUpObjects;