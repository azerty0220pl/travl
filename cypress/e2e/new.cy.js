const number = "Z-303";
const type = "Double Bed";
const description1 = "Description shorter even than the shortest description ever...";
const offer = "Regular";
const price = 90;
const discount = 50;
const policy = "No cancellation possible for you, !#@%";
const fullName = "Some Name";
const email = "example@email.com";
const phone = 123456789;
const role = "reception";
const description2 = "Shortest description ever... btw, inactive, because why not?";
const statusValue = "Inactive"
const joined = "2001-01-01";
const password = "The Inguessable II";

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

  it("creates user and checks it out", () => {
    //goes to /users
    cy.get('[data-cy="menu-users"]').click();
    cy.get('[data-cy="page-users"]').should('be.visible');

    //goes to /users/new
    cy.get('[data-cy="users-newuser"]').click();
    cy.get('[data-cy="page-newuser"]').should('be.visible');

    //Types inputs
    cy.get('[data-cy="newuser-name"]').type(fullName);
    cy.get('[data-cy="newuser-email"]').type(email);
    cy.get('[data-cy="newuser-phone"]').type(phone);
    cy.get('[data-cy="newuser-role"]').select(role);
    cy.get('[data-cy="newuser-description"]').type(description2);
    cy.get('[data-cy="newuser-status"]').select(statusValue);
    cy.get('[data-cy="newuser-joined"]').type(joined);
    cy.get('[data-cy="newuser-password"]').type(password);
    cy.get('[data-cy="newuser-submit"]').click();
    cy.get('[data-cy="page-users"]').should('exist');

    //new entry should not be visible
    cy.get('[data-cy="users-undefineddescription"]').should('not.exist');

    //displaying user description
    cy.get('[data-cy="users-order"]').select("joined");
    cy.get('[data-cy="users-undefineddescription"]').click();
    cy.get('[data-cy="modal"]').should('be.visible');
    cy.get('[data-cy="modal-subject"]').contains(fullName);
    cy.get('[data-cy="modal-message"]').contains(description2);
    cy.get('[data-cy="modal-close"]').click();
    cy.get('[data-cy="modal"]').should('not.exist');
  });
});