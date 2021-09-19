import React from 'react';

import { ACheckbox } from '../components/atoms';

export default {
  title: 'Atoms/Checkbox',
  component: ACheckbox,
  argTypes: {
    disabled: {
      control: 'boolean',
    },
    checked: {
      control: 'boolean',
    },
  },
};

const Template = (args) => <ACheckbox {...args} />;

export const Default = Template.bind({});
Default.args = {
};
