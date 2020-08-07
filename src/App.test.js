import React from 'react';
import App from './App';
import { notes, folders } from './store-for-tests'
import { createMemoryHistory } from 'history';
import { BrowserRouter as Router } from 'react-router-dom';
import { render, fireEvent, cleanup, screen} from '@testing-library/react';

afterEach(cleanup);

const promise = Promise.resolve() 

const emptyDataService = {
  getFolderData: () => promise,
  getNoteData: () => promise, 
};

const fakeDataService = {
  getFolderData: () => Promise.resolve(folders),
  getNoteData: () => Promise.resolve(notes),  
};
 
describe('App component', () => {
  test('renders without crashing', () => {
    render(
      <Router>
        <App service={emptyDataService}/>
      </Router>
    );

  });

  test('contains Noteful header', () => {
    const { getByText } = render(<Router><App  service={emptyDataService}/></Router>);
    getByText("Noteful");
  });

  test('contains main content class', () => {
    const { getByRole } = render(<Router><App  service={emptyDataService}/></Router>);
    expect(getByRole("main")).toHaveClass("App_main-content");
  });

  // TODO: We want to test that clicking on a link updates app someway
  test('full app rendering/navigating', () => {
    const history = createMemoryHistory();
    const { container, getByText } = render(
      <Router history={history}>
        <App  service={fakeDataService}/>
      </Router>
    );
    expect(container.innerHTML).toMatch("Noteful");
  
    fireEvent.click(getByText(/Noteful/i));
    expect(getByText(/Noteful/i).closest('a')).toHaveAttribute('href', '/');
    expect(history.location.pathname).toBe('/')
  });
});