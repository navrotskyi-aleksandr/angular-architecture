import { argsToTemplate, type Meta, type StoryObj } from '@storybook/angular';
import { ButtonComponent } from './button.component';

import { expect, within } from '@storybook/test';

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
  render: (args) => ({
    template: `
    <navrik-button ${argsToTemplate(args)}>Button</navrik-button>`,
    props: args,
  }),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Button/gi)).toBeTruthy();
  },
};
