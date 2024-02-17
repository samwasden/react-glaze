import { Meta, StoryObj } from '@storybook/react';
import { DatetimePicker } from '../components/DatetimePicker';

const meta: Meta<typeof DatetimePicker> = {
  component: DatetimePicker
};

export default meta;
type Story = StoryObj<typeof DatetimePicker>;

export const Primary: Story = {
  args: {}
};
