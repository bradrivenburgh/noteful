import React, { useState, useContext } from 'react';
import { NotefulContext } from '../NotefulContext';
import { useHistory } from 'react-router-dom';
import { patchFolderData } from '../fetchData';
import ValidationError from './ValidationError';

function EditFolder() {
  // Get selectedFolder state and setter function from Context
  const { selectedFolder, setSelectedFolder } = useContext(NotefulContext);
  
  // Set form data
  const [formData, setFormData] = useState({
    folderName: selectedFolder.folderName || "",
  });

  // Get history from react-router to redirect upon submission
  const history = useHistory();

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData({ ...formData, [name]: value});  
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    patchFolderData(selectedFolder.id, formData);
    setSelectedFolder({});
    history.goBack();
  }

  const validateName = () => {
    const name = formData.folderName.trim();
    if (name.length === 0) {
      return 'A folder name is required';
    }
  }

  return (
    <form className='add-note' onSubmit={(e) => handleSubmit(e)}>
      <label htmlFor='name'>Name: </label>
      <input
        type='text'
        name='folderName'
        id='folderName'
        value={formData.folderName}
        onChange={(e) => handleChange(e)}
      />
      {formData.folderName.length === 0 && (
        <ValidationError message={validateName()} />
      )}
      <br />
      <button type='button' onClick={() => history.goBack()}>
        Cancel
      </button>
      <button type='submit' disabled={ validateName() }>
        Submit
      </button>
    </form>
  );
}

export default EditFolder;