 import { AuthActions } from "../support/actions/auth.actions";

describe("Auth - Register", () => {
  it("Should register a new user successfully", () => {
    cy.fixture("user").then((user) => {
      const newUser = { ...user, email: `joseribamar.qa+${Date.now()}@mail.com` };
      cy.registerUser(newUser);
      cy.contains("Your registration completed").should("be.visible");
    });
  });
});