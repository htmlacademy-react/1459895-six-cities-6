import React from 'react';
import {render} from '@testing-library/react';
import Spinner from './spinner';

describe(`Test Spinner component`, () => {
  it(`Spinner component should render correctly`, () => {
    const {container} = render(
        <Spinner/>
    );
    expect(container).toMatchSnapshot();
  });
});
