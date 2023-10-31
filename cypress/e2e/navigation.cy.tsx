import { naviageToPage, scrollNTimes } from './helpers';

const blogRoute = '/blog';
const aboutRoute = '/about';
const contactRoute = '/contact';
const privacyRoute = '/privacy';

describe('Navigation', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it.skip('renders home', () => {
    cy.get('img[alt="Home hero"]').should('exist');
  });

  it.skip('renders blog', () => {
    naviageToPage(blogRoute);
    cy.get('span')
      .contains('Featured post')
      .should('exist')
      .should('have.css', 'text-transform', 'uppercase');
  });

  it.skip('renders about', () => {
    naviageToPage(aboutRoute);
    cy.get('h1')
      .contains('We are a team of content writers who share their learnings')
      .should('exist');
  });

  it('renders privacy', () => {
    naviageToPage(privacyRoute);
    cy.get('h1').contains('Privacy Policy').should('exist');
  });

  it.skip('renders conctact', () => {
    naviageToPage(contactRoute);
    cy.get('input[name="userName"]').should('exist');
    cy.get('input[name="userEmail"]').should('exist');
    cy.get('select[name="queryTopic"]').should('exist');
    cy.get('textarea[name="message"]').should('exist');
    cy.get('button[type="submit"]').should('exist');
  });

  it.skip('renders blogPost', () => {
    cy.get('button').contains('Read More >').first().should('exist').click();

    cy.get('h1')
      .contains('Step-by-step guide to choosing great font pairs')
      .should('exist');
  });

  it('renders author', () => {
    scrollNTimes(5);
    const authorName = 'Floyd Miles';
    cy.get('h3').contains(authorName).should('exist').click();

    cy.get('h1')
      .contains(`Hey there, I’m ${authorName} and welcome to my Blog`)
      .should('exist');
  });

  it('renders category', () => {
    scrollNTimes(3);
    const categoryName = 'startup';
    cy.get('h3').contains(categoryName).should('exist').click();

    cy.get('h2').contains(`Results`).should('exist');
  });
});
