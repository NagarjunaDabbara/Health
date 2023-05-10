export default class loginPage {
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

  enterInvalidCredentials(): void {
    cy.origin("https://test1-aim-bt-com.eu.auth0.com", () => {
      cy.get("#email").type("invalidusername@bt.com");
      cy.get("#password").type("invalidpassword");
    });
  }

  loginBtn(): void {
    cy.origin("https://test1-aim-bt-com.eu.auth0.com", () => {
      cy.get("#btn-login").click();
    });
  }

  verifyUrl(): void {
    cy.url().should('include', '/home');
  }

  logoutBtn(): void {
    cy.get(`a[class='sc-jOxtWs eIyHTK']`).click({ force: true });
  }

  redirectedToLoginPage(): void {
    cy.origin("https://test1-aim-bt-com.eu.auth0.com", () => {
      cy.title().should("eq", "Health Portal Login");
    });
  }

  LoginFailed(): void {
    cy.origin("https://test1-aim-bt-com.eu.auth0.com", () => {
      cy.get("#error-message").should("be.visible");
    });
  }
}
