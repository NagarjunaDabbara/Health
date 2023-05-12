export default class homePage {
  load(): void {
    cy.visit(
      "https://healthyyou.test1.aim.bt.com/login?state=hKFo2SBkVFRzbk5KLWxCZFlFN2xWeGhiLUt6djVzRHdNdHA2YqFupWxvZ2luo3RpZNkgTmdpS0gzQjVjS1BIcVQ0SnEta1A4c0VSdmRQWkgtaG-jY2lk2SBHWm9zdVpXQUVHYTZxT3BKcnlDUUoyallibkw5YlZ1Mg&client=GZosuZWAEGa6qOpJryCQJ2jYbnL9bVu2&protocol=oauth2&redirect_uri=https%3A%2F%2Fhealthyyou.test1.aim.bt.com&scope=openid%20profile%20email%20offline_access&response_type=code&response_mode=query&nonce=U2p2Rm1kazFtRXBMVWQ0V0pvMmdFRE9yNFlUTG9BWURqcDU2QzFKS2llNQ%3D%3D&code_challenge=6MJYeOB3FVKERLGly3TFZSY1WdhBp05PK7C-NXEz-Dk&code_challenge_method=S256&auth0Client=eyJuYW1lIjoiYXV0aDAtcmVhY3QiLCJ2ZXJzaW9uIjoiMS4xMi4wIn0%3D"
    );
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
    cy.get(`[data-testid="patient-list-card"]`).should("be.visible");
    cy.get("#admission-card").should("be.visible", { timeout: 10000 });
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
    cy.get(`a[class='sc-jOxtWs eIyHTK']`).click({ force: true });
  }

  redirectedToLoginPage(): void {
    cy.origin("https://test1-aim-bt-com.eu.auth0.com", () => {
      cy.title().should("eq", "Health Portal Login");
    });
  }
}
