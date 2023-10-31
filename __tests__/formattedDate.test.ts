import { getPostFormattedDate } from '@/helpers';

describe('formatted date', () => {
  it('returns correct date format', () => {
    const date = new Date(2022, 4, 21);
    const expectedDate = 'May 21, 2022';

    const actualDate = getPostFormattedDate(date);

    expect(actualDate).toBe(expectedDate);
  });
});
