import {
  naviageToPage,
  scrollNTimes,
  selectOption,
  typeInInput,
} from './helpers';

const validData = [
  ['userEmail', 'test@gmail.com'],
  ['userName', 'Boris'],
  ['queryTopic', 'Other'],
  ['messsage', 'e2e test message'],
] as const;

describe('Validation', () => {
  beforeEach(() => {
    cy.visit('/');
  });
  it('validate empty form', () => {
    naviageToPage('/contact');
    scrollNTimes(2);
    cy.get('button').contains('Send Message').click();
    cy.get('span')
      .contains('Your name has wrong length')
      .should('exist')
      .should('have.css', 'color', 'rgb(255, 0, 0)');
    cy.get(`span:contains("This field is required")`).should('have.length', 2);
    cy.get('span').contains('Message has wrong length').should('exist');
  });

  it('accept only valid data', () => {
    naviageToPage('/contact');
    scrollNTimes(2);
    cy.get('button').contains('Send Message').click();
    typeInInput(...validData[0]);
    typeInInput(...validData[1]);
    selectOption(...validData[2]);
    cy.get('textarea[name="message"]').type(validData[3][1]);
    cy.get('span').contains('Your name has wrong length').should('not.exist');
    cy.get(`span:contains("This field is required")`).should('have.length', 0);
    cy.get('span').contains('Message has wrong length').should('not.exist');
  });
});
