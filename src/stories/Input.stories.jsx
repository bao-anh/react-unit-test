import React from 'react';

import { AInput } from '../components/atoms';

export default {
  title: 'Atoms/Input',
  component: AInput,
  argTypes: {
    type: {
      options: ['text', 'password', 'textarea'],
      control: 'select',
    },
    size: {
      options: ['small', 'middle', 'large'],
      control: 'select',
    },
    disabled: {
      options: [true, false],
      control: 'boolean',
    },
    readonly: {
      options: [true, false],
      control: 'boolean',
    },
    allowClear: {
      options: [true, false],
      control: 'boolean',
    },
    autoSize: {
      options: [true, false],
      control: 'boolean',
    },
  },
};

const Template = (args) => <AInput {...args} />;

export const Default = Template.bind({});
Default.args = {
  value: 'input',
};
