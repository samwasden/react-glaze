import { Meta, StoryObj } from '@storybook/react';
import { DatePicker } from '../components/DatePicker';

const meta: Meta<typeof DatePicker> = {
  title: 'Date Picker',
  component: DatePicker
};

export default meta;
type Story = StoryObj<typeof DatePicker>;

export const Primary: Story = {
  args: {
    label: 'Label',
    placeholder: 'Placeholder',
    hint: 'This is a hint',
    error: 'This is an error'
  }
};
