import {Given,When,Then} from "@badeball/cypress-cucumber-preprocessor";

import loginPage from "./src/pages/loginPage";

Given("I am on the login page", function () {
  this.browser = new loginPage();
  this.browser.load();
});

Given("I should be redirected to the dashboard page", function () {
  this.browser.verifyUrl();
});

When("I enter valid credentials", function () {
  this.browser.enterValidCredentials();
});

When("I enter invalid credentials", function () {
  this.browser.enterInvalidCredentials();
});

When("I click on the logout button", function () {
  this.browser.logoutBtn();
});

Then("click on the login button", function () {
  this.browser.loginBtn();
});

Then('I should be redirected to the login page',function (){
  this.browser.redirectedToLoginPage();
});

Then('I should see an error message',function (){
  this.browser.LoginFailed()
});

Then('I should see the both PatientList and Admission menuCards',function (){
  this.browser.menuCards()
});