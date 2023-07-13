describe('login', () => {
  beforeEach(() => {
    cy.visit('localhost:3000');
  });

  it("user input exists", () => {
    cy.get('[data-cy="user-input"]').should("be.visible");
  });

  it("password input exists", () => {
    cy.get('[data-cy="password-input"]').should("be.visible");
  });

  it("login button exists", () => {
    cy.get('[data-cy="login-button"]').should("be.visible");
  });

  it("no error on empty inputs", () => {
    cy.get('[data-cy="login-form"]').invoke('submit', (e) => {
      e.preventDefault();
      throw new Error('submitted when should not');
    });
    cy.get('[data-cy="login-button"]').click();
    cy.get('[data-cy="login-error"]').should('not.exist');
    cy.get('[data-cy="menu"]').should('not.exist');
    cy.get('[data-cy="login"]').should("be.visible");
  });

  it("no error on empty password", () => {
    cy.get('[data-cy="login-form"]').invoke('submit', (e) => {
      e.preventDefault();
      throw new Error('submitted when should not');
    });
    cy.get('[data-cy="user-input"]').type("wrong");
    cy.get('[data-cy="login-button"]').click();
    cy.get('[data-cy="login-error"]').should('not.exist');
    cy.get('[data-cy="menu"]').should('not.exist');
    cy.get('[data-cy="login"]').should("be.visible");
  });

  it("error on incorrect credentials", () => {
    cy.get('[data-cy="user-input"]').type("wrong");
    cy.get('[data-cy="password-input"]').type("credentials");
    cy.get('[data-cy="login-button"]').click();
    cy.get('[data-cy="login-error"]').should("be.visible");
    cy.get('[data-cy="menu"]').should('not.exist');
    cy.get('[data-cy="login"]').should("be.visible");
  });

  it("displays login when not logged", () => {
    cy.visit("localhost:3000/#/bookings");
    cy.get('[data-cy="menu"]').should('not.exist');
    cy.get('[data-cy="login"]').should("exist");
  });

  it("logs in with correct credentials", () => {
    cy.get('[data-cy="user-input"]').type("admin");
    cy.get('[data-cy="password-input"]').type("password");
    cy.get('[data-cy="login-button"]').click();
    cy.get('[data-cy="menu"]').should("be.visible");
    cy.get('[data-cy="login"]').should('not.exist');
  });
});