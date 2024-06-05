class SignUpObjects
{
   
    //Create Account Button Selector
    getCreateAccountBtnSelector()
    {
        return '.MuiToolbar-root > :nth-child(4) > div > .MuiTypography-root';
    }
    // First Name Selector
    FirstNameSelector()
    {
        return '.input-field_input_wrap__xz574 input';
    }
    getLastNameSelector()
    {
        return '.input-field_input_wrap__xz574 input';
    }
    // Email Selector
    getEmailSelector()
    {
        return ':nth-child(2) > :nth-child(1) > .input-field_input_wrap__xz574 > #ezeInput';
    }
    // Company Name selector
    companyNameSelector()
    {
        return 'input[name="bizName"]';
    }
    // country select dropdown
    selectBusinessCountry()
    {
        return '.personal-details_country_select_group__rosn4 > .country-select_wrapper__2iUn2';
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
        return ':nth-child(5) > :nth-child(1) > .input-field_input_wrap__xz574 > #ezeInput';
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
     return '.nav-bar_create_account__Tr6SZ';
    }
    // Welcome Message Selector
    getWelcomeSelector()
    {
        return '.components_successHeader1__hRIoV';
    }
    // Error message for invalid password selector
    getInvalidPasswordMsg()
    {
        return '.go2072408551';
    }
    // Login link on popup selector
    getLoginLink()
    {
        return 'u';
    }
    // Login button name selector
    getLoginwelcomenote()
    {
    return 'h2';
    }
    // Close icon selector
    getCloseIcon()
    {
        return '.button_transparent__W8zyl';
    }
    // Logo selector on home page
    getLogo()
    {
       
      return '.nav-bar_nav_holder__Q59jw > .nav-bar_logo_holder__7dDnK'
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
        return '[style="padding-left: 17px; margin-top: 5px; font-size: 12px; color: rgb(211, 47, 47); margin-bottom: 0px; text-align: left;"]';
    }
    //Invalid phone number warning message
   invalidPhoneMsg()
   {
    return '.phone-input__Text-sc-1elldhw-0';
   }
   // Password validation format message
   passwordFormatMsg()
   {
    return ':nth-child(5) > .personal-details_bottomText__CgXMH';
   }
   anchorTag()
   {
    return 'a';
   }

   searchcountry()
   {
    return '.personal-details_country_select_group__rosn4 > .country-select_wrapper__2iUn2 > .country-select_drop_down__HWUAx > .country-select_input_holder__myJjc';
   }
   selectcountry()
   {
    return '.personal-details_country_select_group__rosn4 > .country-select_wrapper__2iUn2 > .country-select_drop_down__HWUAx > .country-select_rows_holder__dZ2Nn > #eze-country-select-dropdown-162-NG';
   }

//how did you hear about eze
howbtnselector()
{
    return '[style="flex-direction: column;"] > :nth-child(1) > .select-field_input_wrap__74ACx > .select-field_button_wrap__0rZzY > .select-field_caret__tvjk_ > svg'
}

//saveandcontinue button
saveandcontinuebtn()
{
    return '.button_primary__gqhgv';
}
}
export default SignUpObjects;