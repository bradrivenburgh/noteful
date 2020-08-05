import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import FolderPanel from './FolderPanel';

// Providing for testing purposes
const folders=[
  {
    "id": "b0715efe-ffaf-11e8-8eb2-f2801f1b9fd1",
    "name": "Important"
  },
  {
    "id": "b07161a6-ffaf-11e8-8eb2-f2801f1b9fd1",
    "name": "Super"
  },
  {
    "id": "b07162f0-ffaf-11e8-8eb2-f2801f1b9fd1",
    "name": "Spangley"
  }
]

const note = {
  "id": "cbc787a0-ffaf-11e8-8eb2-f2801f1b9fd1",
  "name": "Dogs",
  "modified": "2019-01-03T00:00:00.000Z",
  "folderId": "b0715efe-ffaf-11e8-8eb2-f2801f1b9fd1",
  "content": "Est id aliquam et et molestiae non ipsa suscipit nesciunt. Consectetur dolore praesentium autem quis vel eos sint. Voluptatem temporibus omnis et occaecati ipsum et deserunt a. Temporibus itaque dolor consequatur voluptatem quia nesciunt sunt maiores sed. Qui nobis non numquam et quas ducimus voluptatibus consequatur. Error est ab eligendi unde aut beatae.\n \rAb ad distinctio quasi ab distinctio aut accusamus modi consequuntur. Tempore vel consequuntur laboriosam esse repellat. Et repudiandae aut ut ex omnis similique possimus. Accusantium vero fuga iusto in libero voluptatibus. Et fugit sit vero animi cumque quasi ullam. Consequatur unde dignissimos ratione velit esse et dolorem non quasi.\n \rIllum sit quia. Aspernatur sint quis aut voluptas ducimus quaerat debitis repudiandae. Facilis repudiandae autem sint nesciunt veniam molestias. Minus sit et quisquam laborum ad exercitationem quasi commodi sint. Dolor voluptas autem et fugiat non eos reiciendis quod."
}

const selectedNote = {
  "id": "cbc787a0-ffaf-11e8-8eb2-f2801f1b9fd1",
  "name": "Dogs",
  "modified": "2019-01-03T00:00:00.000Z",
  "folderId": "b0715efe-ffaf-11e8-8eb2-f2801f1b9fd1",
  "content": "Est id aliquam et et molestiae non ipsa suscipit nesciunt. Consectetur dolore praesentium autem quis vel eos sint. Voluptatem temporibus omnis et occaecati ipsum et deserunt a. Temporibus itaque dolor consequatur voluptatem quia nesciunt sunt maiores sed. Qui nobis non numquam et quas ducimus voluptatibus consequatur. Error est ab eligendi unde aut beatae.\n \rAb ad distinctio quasi ab distinctio aut accusamus modi consequuntur. Tempore vel consequuntur laboriosam esse repellat. Et repudiandae aut ut ex omnis similique possimus. Accusantium vero fuga iusto in libero voluptatibus. Et fugit sit vero animi cumque quasi ullam. Consequatur unde dignissimos ratione velit esse et dolorem non quasi.\n \rIllum sit quia. Aspernatur sint quis aut voluptas ducimus quaerat debitis repudiandae. Facilis repudiandae autem sint nesciunt veniam molestias. Minus sit et quisquam laborum ad exercitationem quasi commodi sint. Dolor voluptas autem et fugiat non eos reiciendis quod."
} 

describe('FolderPanel component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <Router>
        <FolderPanel
//          note={note}
//          selectedNote={selectedNote}
//          folders={folders}
        />
      </Router>, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});