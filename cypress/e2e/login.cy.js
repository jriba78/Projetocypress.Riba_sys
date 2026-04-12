describe("Login", () => {
    it("Should load login page", () => {
        cy.visit("/login");
        cy.contains("Welcome, Please Sign In!");
    });
});