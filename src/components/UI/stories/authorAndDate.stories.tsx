import type { Meta, StoryObj } from '@storybook/react';

import { AuthorAndDate } from '..';

const meta = {
  title: 'Example/AuthorAndDate',
  component: AuthorAndDate,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof AuthorAndDate>;

export default meta;
type Story = StoryObj<typeof meta>;

const author = 'Boris Stepanov';
const date: Date = new Date(2023, 9, 30);

export const Common: Story = {
  args: {
    author,
    date,
  },
};

export const Colored: Story = {
  args: {
    author,
    date,
    authorColor: 'yellow',
  },
};

export const ColoredBold: Story = {
  args: {
    author,
    date,
    authorColor: 'yellow',
    weight: '900',
  },
};
