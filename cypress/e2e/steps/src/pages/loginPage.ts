class loginPage {
  
  load(): void {
    cy.visit("https://shorturl.at/hABX8");
  }

  enterValidCredentials(): void {
    cy.origin("https://test1-aim-bt-com.eu.auth0.com", () => {
      cy.get("#email").type("siva.thota@bt.com");
      cy.get("#password").type("Password01");
    });
  }

  enterInvalidCredentials(): void {
    cy.origin("https://test1-aim-bt-com.eu.auth0.com", () => {
      cy.get("#email").type("siva.tjjhota@bt.com");
      cy.get("#password").type("Password0123");
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

  logoutBtn(): void {
    cy.get("a[class='sc-jOxtWs eIyHTK']").click({ force: true });
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
export default new loginPage();
