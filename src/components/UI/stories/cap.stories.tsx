import type { Meta, StoryObj } from '@storybook/react';

import { Cap } from '..';

const meta = {
  title: 'Example/Cap',
  component: Cap,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Cap>;

export default meta;
type Story = StoryObj<typeof meta>;

const children = 'Hello world!';

export const Common: Story = {
  args: {
    children: children,
  },
};
