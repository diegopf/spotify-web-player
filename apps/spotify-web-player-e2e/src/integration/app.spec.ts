import { getGreeting, getSearchInput, getThemeSwitch } from '../support/app.po';

describe('spotify-web-player', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    getGreeting().contains('Search for');
  });

  it('should open an artist view', () => {
    cy.visit('/search?q=band%20of');
    getSearchInput().should('have.value', 'band of');
    cy.get("a[href*='artist/0OdUWJ0sBjDrqHygGUXeCF']").should('exist').click();
    cy.get('[data-cy=artist-name').first().contains('Band of Horses');
  });

  it('should open an album view', () => {
    cy.visit('/search?q=Mordechai');
    getSearchInput().should('have.value', 'Mordechai');
    cy.get("a[href*='/album/2IzUZlhtBvPQYs74KeG6fb']").should('exist').click();
    cy.get('[data-cy=album-name').first().should('have.text', 'Mordechai');
  });

  it('Should set the dark theme', () => {
    cy.get('body').should('have.css', 'background-color', 'rgb(100, 179, 244)');
    getSearchInput().should('have.css', 'color', 'rgb(194, 229, 156)');
    getThemeSwitch().click();
    cy.get('body').should('have.css', 'background-color', 'rgb(9, 14, 17)');
    getSearchInput().should('have.css', 'color', 'rgb(27, 97, 98)');
    getThemeSwitch().click();
    cy.get('body').should('have.css', 'background-color', 'rgb(100, 179, 244)');
  });
});
