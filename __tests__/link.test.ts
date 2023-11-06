import { createLinkToAuthor, createLinkToPostWithLocale } from '@/helpers';

describe('generates locale links', () => {
  it('for post', () => {
    const link = createLinkToPostWithLocale('en', '1');
    expect(link).toBe('/en/blog/1');
  });
  it('for author via pathname', () => {
    const link = createLinkToAuthor('/en/blog/2', '1');
    expect(link).toBe('/en/author/1');
  });
});
