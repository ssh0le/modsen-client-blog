import { validFormData } from '../mocks';

import { LocaleTestsProps } from './interfaces';

export const naviageToPage = (route: string) => {
  cy.get(`a[href*="${route}"]`).first().should('exist').click();
};

export const scrollNTimes = (amount: number) => {
  cy.wait(1500);
  cy.scrollTo(0, 6000);
  if (amount > 1) {
    scrollNTimes(amount - 1);
  }
};

export const testI18N = (locale: LocaleTestsProps) => {
  const {
    homeLink,
    featuredPost,
    readMoreButton,
    aboutHeading,
    contactHeading,
    blogHeading,
  } = locale;

  cy.get(`a`).contains(homeLink).should('exist');
  cy.get('button').contains(readMoreButton).should('exist');
  scrollNTimes(1);
  cy.wait(1000);
  cy.get('h2').contains(featuredPost).should('exist');

  naviageToPage('/blog');
  cy.get('h2').contains(blogHeading).should('exist');
  cy.get('button').contains(readMoreButton).should('exist');

  naviageToPage('/about');
  cy.get('h1').contains(aboutHeading).should('exist');

  naviageToPage('/contact');
  cy.get('h1').contains(contactHeading).should('exist');
};

export const getInputField = (name: string) => cy.get(`input[name='${name}']`);

export const getSelectField = (name: string) =>
  cy.get(`select[name='${name}']`);

export const typeInInput = (name: string, text: string) => {
  getInputField(name).clear().type(text);
};

export const selectOption = (name: string, option: string) => {
  getSelectField(name).select(option);
};

export const clickSubmitButton = () => {
  cy.get('button').contains('Send Message').click();
};

export const setValidData = () => {
  typeInInput(...validFormData[0]);
  typeInInput(...validFormData[1]);
  selectOption(...validFormData[2]);
  cy.get('textarea[name="message"]').type(validFormData[3][1]);
};

export const hasErrorMessage = (message: string) => {
  cy.get('span').contains(message).should('exist');
};
