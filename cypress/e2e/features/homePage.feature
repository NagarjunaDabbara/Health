Feature:Health Portal Home Page
    As a user
    I want to visit the home page
    So that I can see the website's content
    Background:
        Given I am on the login page
        When I enter valid credentials
        Then click on the login button

    Scenario:Visit the home page
        Given I should be redirected to the dashboard page
        Then I should see the both PatientList and Admission menuCards

    Scenario:User click on patientList menuCard
        Given I click on the PatientList menuCard
        When I should be redirected PatientList page
        Then I click on the back button should be redirected to the dashboard page

    Scenario:User click on admission menuCard
        Given I click on the admission menuCard
        When I should be redirected admission page
        Then I click on the back button should be redirected to the dashboard page

        When I click on the logout button
        Then I should be redirected to the login page