import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import configureStore from 'redux-mock-store';
import * as redux from 'react-redux';
import PlacesOptionsItems from './places-options-items';

const mockStore = configureStore({});

describe(`Test PlacesOptionsItems component`, () => {
  it(`PlacesOptionsItems component should render correctly`, () => {
    const option = `Popular`;
    const activeOption = `Popular`;
    const history = createMemoryHistory();

    render(
        <redux.Provider store={mockStore({})}>
          <Router history={history}>
            <PlacesOptionsItems
              option={option}
              activeOption={activeOption}
              onChangeOption={jest.fn()}
            />
          </Router>
        </redux.Provider>
    );

    expect(screen.getByText(/Popular/i)).toBeInTheDocument();
  });
});
