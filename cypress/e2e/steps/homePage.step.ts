import {Given,When,Then} from "@badeball/cypress-cucumber-preprocessor";

import homePage from "./src/pages/homePage";

Given ('I click on the PatientList menuCard',()=>{
  new homePage().PatientListMenuCard();
});

Given ('I click on the admission menuCard',()=>{
  new homePage().admissionMenuCard();
});

When('I should be redirected PatientList page',()=>{
  new homePage().redirectedTOPatientList();
});

When('I should be redirected admission page',()=>{
  new homePage().redirectedTOAdmission();
});

Then ('I should see the both PatientList and Admission menuCards',()=>{
  new homePage().menuCards();
});

Then ('I click on the back button should be redirected to the dashboard page',()=>{
  new homePage().redirectedToDashboard();
});


