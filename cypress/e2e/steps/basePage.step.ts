import {Given,When,Then} from "@badeball/cypress-cucumber-preprocessor";

import loginPage from "./src/pages/loginPage";

Given("I am on the login page", function () {
 new loginPage().load();
 
});

Given("I should be redirected to the dashboard page", function () {
  new loginPage().verifyUrl();
});

When("I enter valid credentials", function () {
  new loginPage().enterValidCredentials();
});

When("I click on the logout button", function () {
  new loginPage().logoutBtn();
});

Then("click on the login button", function () {
  new loginPage().loginBtn();
});

Then('I should be redirected to the login page',function (){
  new loginPage().redirectedToLoginPage();
});
