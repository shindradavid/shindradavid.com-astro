/// <reference types="cypress" />

export {};

describe('It has header and functional navigational links', () => {
	before(() => {
		cy.visit('/');
	});
	it('link has accessible nav', () => {
		cy.get('header > nav').should('have.attr', 'aria-label', 'main navigation');
	});
});
