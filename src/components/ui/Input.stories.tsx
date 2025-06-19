import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './Input';

const meta: Meta<typeof Input> = {
  title: 'UI/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    onChange: { action: 'changed' },
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    placeholder: 'Type here...',
    name: 'input',
  },
};

export const WithLabel: Story = {
  args: {
    label: 'Label',
    placeholder: 'Type here...',
    name: 'input',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled',
    disabled: true,
    placeholder: 'Type here...',
    name: 'input',
  },
};

export const Error: Story = {
  args: {
    label: 'With error',
    error: 'This field is required',
    placeholder: 'Type here...',
    name: 'input',
  },
}; 