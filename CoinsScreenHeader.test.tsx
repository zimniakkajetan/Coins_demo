import React from 'react';
import CoinsScreenHeader from './CoinsScreenHeader';


import renderer from 'react-test-renderer';

it('renders correctly', () => {
    const tree = renderer
      .create(<CoinsScreenHeader
        currency={'USD'}
        leftTabAction={() => {}}
        rightTabAction={() => {}}
        />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

