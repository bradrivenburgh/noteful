import React, { useState, useContext } from 'react';
import { NotefulContext } from '../NotefulContext';
import { useHistory } from 'react-router-dom';
import { postNoteData } from '../fetchData';

function AddNote() {
  // set form state; the note id is automatically assigned by server
  // Get selectedFolder state and setter function from Context
  const {selectedFolder, setSelectedFolder, folders} = useContext(NotefulContext);
  const [formData, setFormData] = useState({
    id: "", 
    name: "",
    modified: new Date(),
    folderName: selectedFolder.name || "",
    folderId: `${selectedFolder.id}` || "",
    content: "",
  });

  // Get history from react-router to redirect to root path
  // upon form submission.
  const history = useHistory();

  const handleChange = (e) => {
    const {type, name, value} = e.target;
    const folder = folders.find(element => element.name === value);
    type === "select-one" 
    ? setFormData({ ...formData, [name]: value, folderId: folder.id})
    : setFormData({ ...formData, [name]: value});
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    postNoteData(formData);
    setSelectedFolder({});
    history.goBack();
  }

  const folderOptions = folders.map(folder => 
    <option 
      key={folder.id}
      value={folder.name}
    >
      {folder.name}
    </option>
    )

  // TO DO ----- Need to add form validation: no empty title field;

  return(
    <form className="add-note" onSubmit={(e) => handleSubmit(e)}>
      <label htmlFor="name">Title: </label>
        <input 
          type="text" 
          name="name" 
          id="name"
          value={formData.name}
          onChange={(e) => handleChange(e)}
        />
      <br />
      <label htmlFor="name">Content: </label>
        <textarea 
          type="text" 
          name="content" 
          id="content"
          value={formData.content}
          onChange={(e) => handleChange(e)}
        />
        <br />
        <label htmlFor="folder">Folder: </label>
          <select
            name="folderName" 
            value={formData.folderName} 
            onChange={(e) => handleChange(e)}
          >
            {folderOptions}
          </select>
        <br />
          <button type="button" onClick={() => history.goBack()}>Cancel</button>
          <button type="submit">Submit</button>
    </form>
  );
}

export default AddNote;