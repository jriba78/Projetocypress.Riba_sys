 export const AuthActions = {
  registerAndLogin(user) {
    cy.logoutIfLoggedIn();
    cy.registerUser(user);
    cy.contains("Your registration completed").should("be.visible");
    cy.login(user.email, user.password);
    cy.contains("Log out").should("be.visible");
  },
};