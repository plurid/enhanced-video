import React from 'react';
import { shallow } from 'enzyme';
import { EnhancedVideo } from './';

it('renders without crashing', () => {
    shallow(<EnhancedVideo />);
});
