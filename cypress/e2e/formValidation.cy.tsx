import {
  clickSubmitButton,
  hasErrorMessage,
  scrollNTimes,
  selectOption,
  setValidData,
  typeInInput,
} from './helpers';
import { validFormData } from './mocks';

describe('Validation', () => {
  beforeEach(() => {
    cy.visit('/en/contact');
  });

  it('validate empty form', () => {
    typeInInput('userName', '1');
    clickSubmitButton();
    hasErrorMessage('Your name has wrong length');
    cy.get(`span:contains("This field is required")`)
      .should('have.length', 2)
      .first()
      .should('have.css', 'color', 'rgb(255, 0, 0)');
    hasErrorMessage('Message has wrong length');
  });

  it('validate name min length', () => {
    setValidData();
    typeInInput('userName', '1');
    clickSubmitButton();
    cy.get('span').contains('Your name has wrong length').should('exist');
    typeInInput(...validFormData[0]);
  });

  it('validate name max length', () => {
    setValidData();
    typeInInput('userName', '1'.repeat(31));
    clickSubmitButton();
    hasErrorMessage('Your name has wrong length');
    typeInInput(...validFormData[0]);
  });

  it('validate wrong email', () => {
    setValidData();
    typeInInput('userEmail', 'wrong email');
    clickSubmitButton();
    hasErrorMessage('Wrong email format');
  });

  it('validate message min length', () => {
    setValidData();
    cy.get('textarea[name="message"]').clear().type('123');
    clickSubmitButton();
    hasErrorMessage('Message has wrong length');
  });

  it('validate message max length', () => {
    scrollNTimes(2);
    setValidData();
    cy.get('textarea[name="message"]').type('1'.repeat(101));
    clickSubmitButton();
    hasErrorMessage('Message has wrong length');
  });

  it('validate empty queryTopic', () => {
    setValidData();
    selectOption('queryTopic', '');
    clickSubmitButton();
    hasErrorMessage('This field is required');
  });
});
