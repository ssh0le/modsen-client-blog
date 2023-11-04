import { fireEvent, render } from '@testing-library/react';
import React from 'react';

import PostSearch from '@/components/PostSearch';

import '@testing-library/jest-dom';

jest.mock('../src/app/i18n/client', () => ({
  useTranslation: () => {
    return {
      t: (name: string) => {
        if (name === 'categories') {
          return [
            {
              id: '1',
              name: 'startup',
            },
            {
              id: '2',
              name: 'business',
            },
            {
              id: '3',
              name: 'economy',
            },
            {
              id: '4',
              name: 'technology',
            },
          ];
        } else if (name === 'searchPlaceholder') {
          return 'Search for tag...';
        } else {
          return name;
        }
      },
    };
  },
}));

const language = 'en';
const categoryID = '1';

describe('PostSearch', () => {
  it('should render the component', () => {
    const { getByPlaceholderText } = render(
      <PostSearch language={language} categoryId={categoryID} />,
    );
    expect(getByPlaceholderText('Search for tag...')).toBeInTheDocument();
  });

  it('displays search results', () => {
    const { getByPlaceholderText, container } = render(
      <PostSearch language={language} categoryId={categoryID} />,
    );

    const userInput = 'e';

    const searchInput = getByPlaceholderText('Search for tag...');

    fireEvent.change(searchInput, { target: { value: userInput } });

    const searchResults = container.querySelectorAll('ul > li > div');

    searchResults.forEach((result) => {
      expect(result.innerHTML.includes(userInput)).toBeTruthy();
    });
  });

  it('select tag on result click', () => {
    const { getByPlaceholderText, getByText, container } = render(
      <PostSearch language={language} categoryId={categoryID} />,
    );

    const userInput = 'busines';
    const searchInput = getByPlaceholderText('Search for tag...');

    fireEvent.change(searchInput, { target: { value: userInput } });
    fireEvent.click(container.querySelectorAll('ul > li')[0]);

    const selectedTag = getByText('Business').closest('b')?.closest('div');
    expect(selectedTag).toHaveClass('active');

    fireEvent.change(searchInput, { target: { value: userInput } });
    fireEvent.click(container.querySelectorAll('ul > li')[0]);

    expect(selectedTag).not.toHaveClass('active');
  });
});
