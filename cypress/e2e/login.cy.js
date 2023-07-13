describe('login', () => {
  beforeEach(() => {
    cy.visit('localhost:3000');
  });

  it("user input exists", () => {
    cy.get('[data-cy="user-input"]');
  });

  it("password input exists", () => {
    cy.get('[data-cy="password-input"]');
  });

  it("login button exists", () => {
    cy.get('[data-cy="login-button"]');
  });

  it("no error on empty inputs", () => {
    cy.get('[data-cy="login-button"]').click();
    cy.get('[data-cy="login-error"]').should('not.exist');
  });

  it("cannot login with incorrect credentials", () => {
    cy.get('[data-cy="user-input"]').type("wrong");
    cy.get('[data-cy="password-input"]').type("credentials");
    cy.get('[data-cy="login-button"]').click();
    cy.get('[data-cy="login-error"]');
  });

  it("displays login when not logged", () => {
    cy.visit("localhost:3000/#/bookings");
    cy.get('[data-cy="menu"]').should('not.exist');
    cy.get('[data-cy="login"]');
  });

  it("logs in with correct credentials", () => {
    cy.get('[data-cy="user-input"]').type("admin");
    cy.get('[data-cy="password-input"]').type("password");
    cy.get('[data-cy="login-button"]').click();
    cy.get('[data-cy="menu"]');
    cy.get('[data-cy="login"]').should('not.exist');
  });
});