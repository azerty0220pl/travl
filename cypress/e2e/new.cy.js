const number = "Z-303";
const type = "Double Bed";
const description1 = "Description shorter even than the shortest description ever...";
const offer = "Regular";
const price = 90;
const discount = 50;
const policy = "No cancellation possible for you, !#@%";

describe('tests new rooms and users', () => {
  beforeEach(() => {
    cy.visit('localhost:3000/#/dashboard');
    cy.viewport(1980, 1080);
    cy.login();
  });
  
  it("creates room and checks it out", () => {
    //goes to /rooms
    cy.get('[data-cy="menu-rooms"]').click();
    cy.get('[data-cy="page-rooms"]').should('be.visible');

    //goes to /rooms/new
    cy.get('[data-cy="rooms-newroom"]').click();
    cy.get('[data-cy="page-roomedit"]').should('be.visible');

    //Types inputs
    cy.get('[data-cy="newroom-number"]').type(number);
    cy.get('[data-cy="newroom-type"]').select(type);
    cy.get('[data-cy="newroom-description"]').type(description1);
    cy.get('[data-cy="newroom-offer"]').select(offer);
    cy.get('[data-cy="newroom-price"]').type(price);
    cy.get('[data-cy="newroom-discount"]').type(discount);
    cy.get('[data-cy="newroom-policy"]').type(policy);
    cy.get('[data-cy="newroom-submit"]').click();
    cy.get('[data-cy="page-rooms"]').should('exist');

    //new entry should not be visible
    cy.get('[data-cy="room-undefinedname"]').should('not.exist');

    //checking if room created correctly
    cy.get('[data-cy="rooms-order"]').select("ascending");
    cy.get('[data-cy="room-undefinedname"]').contains(number);
  });
});