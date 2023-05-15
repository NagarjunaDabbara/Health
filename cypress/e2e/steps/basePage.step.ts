import {Given,When,Then} from "@badeball/cypress-cucumber-preprocessor";

import loginPage from "./src/pages/loginPage";

Given("I am on the login page", ()=> {
  loginPage.load();
 });

Given("I should be redirected to the dashboard page", ()=> {
   loginPage.verifyUrl();
});

When("I enter valid credentials", ()=> {
   loginPage.enterValidCredentials();
});

When("I click on the logout button", ()=> {
   loginPage.logoutBtn();
});

Then("click on the login button", ()=> {
   loginPage.loginBtn();
});

Then('I should be redirected to the login page',()=>{
   loginPage.redirectedToLoginPage();
});
