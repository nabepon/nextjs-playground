/* eslint-env jest */
import { shallow } from 'enzyme';
import Link from 'next/link';
import React from 'react';

import Index from './index';

describe('PagesNav', () => {
  it('renders the checkbox with correct link', () => {
    const wrapper = shallow(<Index />);
    expect(wrapper.find(Link).length).toEqual(3);
  });
});
