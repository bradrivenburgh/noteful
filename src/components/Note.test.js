import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import { render, screen, cleanup } from '@testing-library/react';
import Note from './Note';

const note = {
  "id": 1,
  "noteName": "Important",
  "modified": "2019-01-03T00:00:00.000Z",
  "folderId": 1,
  "content": "Est id aliquam et et molestiae non ipsa suscipit nesciunt. Consectetur dolore praesentium autem quis vel eos sint. Voluptatem temporibus omnis et occaecati ipsum et deserunt a. Temporibus itaque dolor consequatur voluptatem quia nesciunt sunt maiores sed. Qui nobis non numquam et quas ducimus voluptatibus consequatur. Error est ab eligendi unde aut beatae.\n \rAb ad distinctio quasi ab distinctio aut accusamus modi consequuntur. Tempore vel consequuntur laboriosam esse repellat. Et repudiandae aut ut ex omnis similique possimus. Accusantium vero fuga iusto in libero voluptatibus. Et fugit sit vero animi cumque quasi ullam. Consequatur unde dignissimos ratione velit esse et dolorem non quasi.\n \rIllum sit quia. Aspernatur sint quis aut voluptas ducimus quaerat debitis repudiandae. Facilis repudiandae autem sint nesciunt veniam molestias. Minus sit et quisquam laborum ad exercitationem quasi commodi sint. Dolor voluptas autem et fugiat non eos reiciendis quod."
}

afterEach(cleanup);

describe('Note component', () => {
  it('renders without crashing', () => {
    render(<Router><Note /></Router>);
  });
  
  it('has a Delete Note button', () => {
    render(<Router><Note /></Router>);
    expect(screen.getAllByRole('button')).toBeTrue();
  });

  it('has a Note with content', () => {
    render(<Router><Note note={note} /></Router>);
    expect(screen.getByText('Important')).toBeInTheDocument();
  });

});