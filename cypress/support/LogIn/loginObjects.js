class LogInObjects
{
    
    // Log In Selector 
    LogInSelector()
    {
      return '.nav-bar_log_in__bmM83';
    }

    // Email Field selector
    EmailFieldSelector()
    {
        return ':nth-child(3) > .input-field_input_wrap__xz574 > #ezeInput';
    }
    //Password field selector
    PasswordFieldSelector()
    {
        return ':nth-child(4) > .input-field_input_wrap__xz574 > #ezeInput';
    }
    //Sign in button selector
    SignBtnSelector()
    {
        return '.log-in_wrap__VC8XS > .button_wrap__q_XU_ > .button_primary__gqhgv';
    }
    //User profile icon selector
    ProfileAvatarSelector()
    {
      return '.sub-components_initials__VDGDe';
    }
    //Error messages selector
    ErrorMessage()
    {
      return '.log-in_error__PzeC3 > span';
    }
    // Heading on Login Popup
    popupHeadingSelector()
    {
      return '.log-in_wrap__VC8XS > span';
    }
    // Register link on login popup
    SignUpSelector()
    {
        return '.log-in_sign_up__TeztM > p > a';
    }
    // Create Account heading Selector
    createAccountheadingSelector()
    {
        return 'h1';
    }
    //Forgot Password link selector
    forgotPasswordLink()
    {
        return '.log-in_sign_up__TeztM > :nth-child(2)';
    }
    //Checkbox selector
    RememberCheckbox()
    {
        return '.checkbox_radio_element__xHgSZ';
    }

    // Close Modal Selector
    closebtnselector()
    {
        return '.log-in_left_box__pxuxG > :nth-child(1)';
    }

    // Forgot Password pop up 
    forgotPasswordPopup()
    {
        return '.forgot-password_wrap__VcRT0 > span';
    }
}
export default LogInObjects