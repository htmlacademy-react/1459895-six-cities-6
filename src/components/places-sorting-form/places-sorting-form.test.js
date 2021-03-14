import React from 'react';
import {render} from '@testing-library/react';
import PlacesSortingForm from './places-sorting-form';
import * as redux from "react-redux";
import configureStore from "redux-mock-store";
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';

const mockStore = configureStore({});
describe(`Test PlacesSortingForm component`, () => {
  jest.spyOn(redux, `useSelector`);
  it(`PlacesSortingForm component should render correctly`, () => {
    const store = mockStore({
      MAIN: {option: `Popular`}
    });
    const history = createMemoryHistory();
    const {container} = render(
        <redux.Provider store={store}>
          <Router history={history}>
            <PlacesSortingForm />
          </Router>
        </redux.Provider>
    );
    expect(container).toMatchSnapshot();
  });
});
