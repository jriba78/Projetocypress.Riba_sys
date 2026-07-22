 import { authSelectors as S } from "../selectors/auth.selectors";
Cypress.Commands.add("openRegister", () => {
  cy.get(S.registerLink).click();
});
Cypress.Commands.add("openLogin", () => {
  cy.get(S.loginLink).click();
});
Cypress.Commands.add("registerUser", (user) => {
  cy.openRegister();
  cy.get(S.genderMale).click();
  cy.get(S.firstName).type(user.firstName);
  cy.get(S.lastName).type(user.lastName);
  cy.get(S.email).type(user.email);
  cy.get(S.password).type(user.password, { log: false });
  cy.get(S.confirmPassword).type(user.password, { log: false });
  cy.get(S.registerButton).click();
});
Cypress.Commands.add("login", (email, password) => {
  cy.openLogin();
  cy.get(S.email).type(email);
  cy.get(S.password).type(password, { log: false });
  cy.get(S.loginButton).click();
});
Cypress.Commands.add("logoutIfLoggedIn", () => {
  cy.get("body").then(($body) => {
    if ($body.find("a[href='/logout']").length) {
      cy.get(S.logoutLink).click();
    }
  });
});