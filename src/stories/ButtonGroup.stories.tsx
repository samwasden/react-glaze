import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { ButtonGroup } from '../components/ButtonGroup';
import { Button } from '../components/Button';

const meta: Meta<typeof ButtonGroup> = {
  title: 'Button Group',
  component: ButtonGroup
};

export default meta;
type Story = StoryObj<typeof ButtonGroup>;

export const Primary: Story = {
  args: {
    variant: 'outline',
    children: [<Button>Button A</Button>, <Button>Button B</Button>, <Button>Button C</Button>]
  }
};
