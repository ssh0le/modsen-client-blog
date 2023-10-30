import type { Meta, StoryObj } from '@storybook/react';
import Image from 'next/image';

import { ImageDecoration } from '..';

import image from './assets/reason1.jpg';

const meta = {
  title: 'Example/ImageDecoration',
  component: ImageDecoration,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof ImageDecoration>;

export default meta;
type Story = StoryObj<typeof meta>;

const children = <Image src={image} alt="example" />;

export const Circle: Story = {
  args: {
    type: 'circle',
    children,
  },
};

export const Rectangle: Story = {
  args: { type: 'rectangle', children },
};
