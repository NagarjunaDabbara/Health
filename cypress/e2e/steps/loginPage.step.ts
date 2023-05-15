import {Given,When,Then} from "@badeball/cypress-cucumber-preprocessor";

import loginPage from "./src/pages/loginPage";

When("I enter invalid credentials", ()=>{
   loginPage.enterInvalidCredentials();
});

Then('I should see an error message',()=>{
   loginPage.LoginFailed()
});

