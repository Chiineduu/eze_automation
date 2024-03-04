class LogInObjects
{
    // Log In button selector
    getLoginBtnSelector()
    {
        return ('._login');
    }
    // Buttons selector
    buttonSelector()
    {
        return 'button';
    }
    // Email Field selector
    getEmailFieldSelector()
    {
        return ':nth-child(1) > [data-testid="inputs"]';
    }
    //Password field selector
    getPasswordFieldSelector()
    {
        return '.input-group > [data-testid="inputs"]';
    }
    //Submit button selector
    getSubmitBtnSelector()
    {
        return ('form > [data-testid="button"]');
    }
    //User profile icon selector
    getProfileAvtarSelector()
    {
      return '.MuiAvatar-root';
    }
    //Error messages selector
    getErrorMessage()
    {
      return '.toast';
    }
    // Heading on Login Popup
    popupHeadingSelector()
    {
      return '.styles__Header-sc-5noga9-0 > p';
    }
    // Register link on login popup
    registerLinkSelector()
    {
        return 'p > a';
    }
    // Create Account heading Selector
    createAccountheadingSelector()
    {
        return '.styles__Header-sc-5noga9-0 > h2';
    }
    //Forgot Password link selector
    forgotPasswordLink()
    {
        return '.styles__ActionWrapper-sc-5noga9-2 > a';
    }
    //Checkbox selector
    rememberMeCheckbox()
    {
        return '.styles__CheckBox-sc-5noga9-3 > input';
    }
}
export default LogInObjects