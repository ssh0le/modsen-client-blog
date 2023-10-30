import type { Meta, StoryObj } from '@storybook/react';

import { Heading } from '..';

const meta = {
  title: 'Example/Heading',
  component: Heading,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Heading>;

export default meta;
type Story = StoryObj<typeof meta>;

const children = 'Heading Example';

export const Heading1: Story = {
  args: {
    children,
    type: 'h1',
  },
};

export const Heading2: Story = {
  args: {
    children,
    type: 'h2',
  },
};

export const Heading3: Story = {
  args: {
    children,
    type: 'h3',
  },
};

export const Heading4: Story = {
  args: {
    children,
    type: 'h4',
  },
};

export const Heading5: Story = {
  args: {
    children,
    type: 'h5',
  },
};
