import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '..';

const meta = {
  title: 'Example/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

const children = 'Hello world';

export const Colored: Story = {
  args: {
    styleType: 'colored',
    children: children,
  },
};

export const Base: Story = {
  args: {
    children,
  },
};
