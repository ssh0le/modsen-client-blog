import { testI18N } from './helpers';

describe('i18n', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('sets correct default language', () => {
    cy.get('a')
      .contains('en')
      .should('exist')
      .should('not.have.css', 'color', 'rgb(244, 244, 244)');
  });

  it('translate for en locale', () => {
    testI18N({
      homeLink: 'Home',
      featuredPost: 'Featured post',
      readMoreButton: 'Read More >',
      aboutHeading:
        'We are a team of content writers who share their learnings',
      contactHeading: 'Let’s Start a Conversation',
      blogHeading: 'All posts',
    });
  });

  it('translate for ru locale', () => {
    cy.get('a').contains('ru').click();
    testI18N({
      homeLink: 'Главная',
      featuredPost: 'Рекомендуемый пост',
      readMoreButton: 'Узнать больше >',
      aboutHeading: 'Мы - команда контент-писателей, делящихся своими знаниями',
      contactHeading: 'Начнем разговор',
      blogHeading: 'Все посты',
    });
  });
});
