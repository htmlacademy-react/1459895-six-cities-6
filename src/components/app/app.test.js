import React from 'react';
import {render, screen} from '@testing-library/react';
import App from './app';
import * as redux from "react-redux";
import configureStore from "redux-mock-store";
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import {offers} from '../../store/tests-mocks';
import {AppRoute} from "../../const";

const mockStore = configureStore({});
describe(`Test routing`, () => {
  jest.spyOn(redux, `useSelector`);
  jest.spyOn(redux, `useDispatch`);
  it(`Render mainPage when user navigate to "/" url, and all data loaded`, () => {
    const store = mockStore({
      MAIN: {
        isError: false,
        offers: offers.adapted,
        isDataLoaded: true
      },
      USER: {authInfo: null}
    });
    const history = createMemoryHistory();
    render(
        <redux.Provider store={store}>
          <Router history={history}>
            <App />
          </Router>
        </redux.Provider>
    );
    expect(screen.getByText(/Cities/i)).toBeInTheDocument();
    expect(screen.getByText(/Paris/i)).toBeInTheDocument();
    expect(screen.getByText(/Cologne/i)).toBeInTheDocument();
    expect(screen.getByText(/Brussels/i)).toBeInTheDocument();
    expect(screen.getByText(/Amsterdam/i)).toBeInTheDocument();
    expect(screen.getByText(/Hamburg/i)).toBeInTheDocument();
    expect(screen.getByText(/Dusseldorf/i)).toBeInTheDocument();
  });
  it(`Render Login when user navigate to "/login" url`, () => {
    const store = mockStore({
      USER: {authInfo: null}
    });
    const history = createMemoryHistory();
    history.push(`${AppRoute.LOGIN}`);
    render(
        <redux.Provider store={store}>
          <Router history={history}>
            <App />
          </Router>
        </redux.Provider>
    );
    expect(screen.getByTestId(/Sign in/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(`Email`)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(`Password`)).toBeInTheDocument();
  });
  it(`Render NotFound when user navigate to "/not-found-page" url`, () => {
    const store = mockStore({
      USER: {authInfo: null},
    });
    const history = createMemoryHistory();
    history.push(`${AppRoute.NOT_FOUND}`);
    render(
        <redux.Provider store={store}>
          <Router history={history}>
            <App />
          </Router>
        </redux.Provider>
    );
    expect(screen.getByText(/404 Not Found/i)).toBeInTheDocument();
    expect(screen.getByText(/Вернуться на главную/i)).toBeInTheDocument();
  });
});
