import React, { useState, useContext } from 'react';
import { NotefulContext } from '../NotefulContext';
import { useHistory } from 'react-router-dom';
import { postFolderData } from '../fetchData';
import ValidationError from '../components/ValidationError';

function AddFolder() {
  // set form state; the note id is automatically assigned by server
  // Get selectedFolder state and setter function from Context
  const {setSelectedFolder} = useContext(NotefulContext);
  const [formData, setFormData] = useState({
    folder_name: "",
  });

  // Get history from react-router to redirect to root path
  // upon submission.
  const history = useHistory();
  
  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData({ ...formData, [name]: value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    postFolderData(formData);
    setSelectedFolder({});
    history.goBack();
  }

  const validateName = () => {
    const name = formData.folder_name.trim();
    if (name.length === 0) {
      return 'Folder name is required';
    }
  }

  return(
    <form className="add-folder" onSubmit={(e) => handleSubmit(e)}>
      <label htmlFor="folder_name">Folder Name: </label>
        <input 
          type="text" 
          name="folder_name" 
          id="folder_name"
          value={formData.folder_name}
          onChange={(e) => handleChange(e)}
        />
      {formData.folder_name.length >= 0 && <ValidationError message={validateName()} />}        
      <br />
          <button type="button" onClick={() => history.goBack()}>Cancel</button>
          <button type="submit" disabled={validateName()}>Submit</button>
    </form>
  );
}

export default AddFolder;