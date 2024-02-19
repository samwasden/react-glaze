import { Meta, StoryObj } from '@storybook/react';
import { InputField } from '../components/InputField';

const meta: Meta<typeof InputField> = {
  component: InputField
};

export default meta;
type Story = StoryObj<typeof InputField>;

export const Primary: Story = {
  args: {
    label: 'Label',
    placeholder: 'Placeholder',
    hint: 'This is a hint',
    error: 'This is an error'
  }
};
