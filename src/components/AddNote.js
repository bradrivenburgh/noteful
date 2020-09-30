import React, { useState, useContext } from 'react';
import { NotefulContext } from '../NotefulContext';
import { useHistory } from 'react-router-dom';
import { postNoteData } from '../fetchData';
import ValidationError from '../components/ValidationError';

function AddNote() {
  // Set form state; the note id is automatically assigned by server
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

  // Get history from react-router to redirect upon submission
  const history = useHistory();

  const handleChange = (e) => {
    const {type, name, value} = e.target;
    const folder = folders.find(element => element.name === value);    
    type === "select-one" && value
    ? setFormData({ ...formData, [name]: value, folderId: folder.id})
    : setFormData({ ...formData, [name]: value});
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // Delete folderName from note object bc it is not part of the data scheme
    delete formData.folderName; 
    postNoteData(formData);
    setSelectedFolder({});
    history.goBack();
  }

  const validateName = () => {
    const name = formData.name.trim();
    if (name.length === 0) {
      return 'A note title is required';
    }
  }

  const validateFolder = () => {
    const folder = formData.folderName;
    if (!folder || folder.length === 0) {
      return 'A folder must be selected';
    }
  }

  const folderOptions = folders.map(folder => 
    <option 
      key={folder.id}
      value={folder.name}
    >
      {folder.name}
    </option>
    )

  return (
    <form className='add-note' onSubmit={(e) => handleSubmit(e)}>
      <label htmlFor='name'>Title: </label>
      <input
        type='text'
        name='name'
        id='name'
        value={formData.name}
        onChange={(e) => handleChange(e)}
      />
      {formData.name.length === 0 && (
        <ValidationError message={validateName()} />
      )}
      <br />
      <label htmlFor='name'>Content: </label>
      <textarea
        type='text'
        name='content'
        id='content'
        value={formData.content}
        onChange={(e) => handleChange(e)}
      />
      <br />
      <label htmlFor='folder'>Folder: </label>
      <select
        name='folderName'
        value={formData.folderName}
        onChange={(e) => handleChange(e)}>
       
        <option value={null} />
        {folderOptions}
        
      </select>
      {!formData.folderName && (
        <ValidationError message={validateFolder()} />
      )}

      <br />
      <button type='button' onClick={() => history.goBack()}>
        Cancel
      </button>
      <button type='submit' disabled={validateName() || validateFolder()}>
        Submit
      </button>
    </form>
  );
}

export default AddNote;