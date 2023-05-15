class homePage {
 
  load(): void {
    cy.visit("https://shorturl.at/hABX8");
  }

  enterValidCredentials(): void {
    cy.origin("https://test1-aim-bt-com.eu.auth0.com", () => {   
      cy.get("#email").type("siva.thota@bt.com");
      cy.get("#password").type("Password01");
      });
  }

  loginBtn(): void {
    cy.origin("https://test1-aim-bt-com.eu.auth0.com", () => {
      cy.get("#btn-login").click();
    });
  }

  verifyUrl(): void {
    cy.url().should("include", "/home");
  }

  menuCards(): void {
    cy.get("#patient-list-card").should("be.visible");
    cy.get("#admission-card").should("be.visible", {
      timeout: 10000,
    });
  }

  PatientListMenuCard(): void {
    cy.get("#patient-list-card").click();
  }

  admissionMenuCard(): void {
    cy.get("#admission-card").click();
  }

  redirectedTOPatientList(): void {
    cy.url().should("include", "/patients");
  }

  redirectedTOAdmission(): void {
    cy.url().should("include", "/new-admission");
  }

  redirectedToDashboard(): void {
    cy.go(-1);
    cy.url().should("include", "/home");
  }

  logoutBtn(): void {
    cy.get("a[class='sc-jOxtWs eIyHTK']").click({ force: true });
  }

  redirectedToLoginPage(): void {
    cy.origin("https://test1-aim-bt-com.eu.auth0.com", () => {
      cy.title().should("eq", "Health Portal Login");
    });
  }
}
export default new homePage();