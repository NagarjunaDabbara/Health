Feature:Health Portal login Page
     As a user
     I want to login
     So that I can access my account

     Scenario:Login with valid credentials
          Given I am on the login page
          When I enter valid credentials
          Then click on the login button

     Scenario:Redirected to the dashboard page
          Given I am on the login page
          When I enter valid credentials
          Then click on the login button

          Given I should be redirected to the dashboard page
          When I click on the logout button
          Then I should be redirected to the login page

     Scenario:Login with invalid credentials
          Given I am on the login page
          When I enter invalid credentials
          And click on the login button
          Then I should see an error message








