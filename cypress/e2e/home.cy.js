describe("Home", () => {
    it("Should load home page", () => {
        cy.contains("Demo Web Shop").should("be.visible");

    });
});