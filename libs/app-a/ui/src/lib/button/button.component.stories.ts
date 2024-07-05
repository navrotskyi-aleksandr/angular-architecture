import type { Meta, StoryObj } from '@storybook/angular';
import { ButtonComponent } from './button.component';

import { expect } from '@storybook/jest';
import { within } from '@storybook/testing-library';

const meta: Meta<ButtonComponent> = {
  component: ButtonComponent,
  title: 'ButtonComponent',
};
export default meta;
type Story = StoryObj<ButtonComponent>;

export const Primary: Story = {
  args: {
    disabled: false,
  },
};

export const Heading: Story = {
  args: {
    disabled: false,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/button works!/gi)).toBeTruthy();
  },
};
