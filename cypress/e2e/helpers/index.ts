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

export const testI18N = (locale: {
  homeLink: string;
  featuredPost: string;
  readMoreButton: string;
  aboutHeading: string;
  contactHeading: string;
}) => {
  const {
    homeLink,
    featuredPost,
    readMoreButton,
    aboutHeading,
    contactHeading,
  } = locale;

  cy.get(`a`).contains(homeLink).should('exist');
  cy.get('button').contains(readMoreButton).should('exist');
  scrollNTimes(1);
  cy.wait(1000);
  cy.get('h2').contains(featuredPost).should('exist');

  naviageToPage('/blog');
  cy.get('span').contains(featuredPost).should('exist');
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
