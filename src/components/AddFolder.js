import React, { useState, useContext } from 'react';
import { NotefulContext } from '../NotefulContext';
import { useHistory } from 'react-router-dom';
import { postFolderData } from '../fetchData';

function AddFolder() {
  // set form state; the note id is automatically assigned by server
  // Get selectedFolder state and setter function from Context
  const {selectedFolder, setSelectedFolder} = useContext(NotefulContext);
  const [formData, setFormData] = useState({
    id: "", 
    name: "",
  });

  // Get history from react-router to redirect to root path
  // upon submission.
  const history = useHistory();
  
  // Set up fetch call to POST folder in fetchData.js
  const handleSubmit = (e) => {
    e.preventDefault();
    postFolderData(formData);
    setSelectedFolder({});
    history.goBack();
  }

  // Set up handleChange to allow dynamic, controlled form
  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData({ ...formData, [name]: value});
  }


  // TO DO ----- Need to add form validation: no empty title field;

  return(
    <form className="add-folder" onSubmit={(e) => handleSubmit(e)}>
      <label htmlFor="name">Folder Name: </label>
        <input 
          type="text" 
          name="name" 
          id="name"
          value={formData.name}
          onChange={(e) => handleChange(e)}
        />
      <br />
          <button type="button" onClick={() => history.goBack()}>Cancel</button>
          <button type="submit">Submit</button>
    </form>
  );
}

export default AddFolder;