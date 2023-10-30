import type { Meta, StoryObj } from '@storybook/react';

import CategoryCard from '@/components/CategoryCard';

import { ListProps } from '../List/interfaces';
import { List } from '..';

const meta = {
  title: 'Example/List',
  component: List,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof List>;

export default meta;
type Story = StoryObj<ListProps<{ name: string }>>;

export const Row: Story = {
  args: {
    renderItem: (category) => <CategoryCard name={category.name} />,
    options: [
      { name: 'economy' },
      { name: 'economy' },
      { name: 'economy' },
      { name: 'economy' },
    ],
  },
};

export const Column: Story = {
  args: {
    direction: 'column',
    renderItem: (category) => (
      <CategoryCard name={category.name} displayType="minimal" />
    ),
    options: [
      { name: 'economy' },
      { name: 'economy' },
      { name: 'economy' },
      { name: 'economy' },
    ],
  },
};
