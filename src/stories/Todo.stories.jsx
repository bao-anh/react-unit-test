import React from 'react';

import { ATodo } from '../components/molecules';

export default {
  title: 'Molecules/Todo',
  component: ATodo,
  argTypes: {
    checked: {
      control: 'boolean',
    },
  },
};

const Template = (args) => <ATodo {...args} />;

export const Default = Template.bind({});
Default.args = {
  content: 'Todo',
};
