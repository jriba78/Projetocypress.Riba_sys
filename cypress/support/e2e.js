 
 
import './commands';

beforeEach(() => {
    cy.visit("/");
    cy.openRegister();
});