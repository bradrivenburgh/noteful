import React from 'react';
import App from './App';
import { notes, folders } from './store-for-tests'
import { NotefulContext } from './NotefulContext';
import { createMemoryHistory } from 'history';
import { BrowserRouter as Router } from 'react-router-dom';
import { act, render, fireEvent, cleanup, screen} from '@testing-library/react';

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

  // test('updates Context value from child component', () => {
  //   const { container, getByText } = render(<Router><App /></Router>);
  //   expect(getByText(/Cats/i));

  //   screen.debug()
  // });

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
    const { container, getByRole } = render(
      <Router history={history}>
        <App  service={fakeDataService}/>
      </Router>
    );
    expect(container.innerHTML).toMatch("Noteful");
  
    fireEvent.click(getByRole("link"))
  });
});