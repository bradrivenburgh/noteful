import React, { useState, useContext } from 'react';
import { NotefulContext } from '../NotefulContext';
import { useHistory } from 'react-router-dom';
import { postNoteData } from '../fetchData';
import ValidationError from '../components/ValidationError';

function AddNote() {
  // Get selectedFolder state and setter function from Context
  const {selectedFolder, folders} = useContext(NotefulContext);

  // Set form state; the note id is automatically assigned by server
  const [formData, setFormData] = useState({
    noteName: "",
    modified: new Date(),
    folderName: selectedFolder.folderName || "",
    folderId: selectedFolder.id || "",
    content: "",
  });

  // Get history from react-router to redirect upon submission
  const history = useHistory();

  const handleChange = (e) => {
    const {type, name, value} = e.target;
    const folder = folders.find(folder => folder.folderName === value);    
    type === "select-one" && value
    ? setFormData({ ...formData, [name]: value, folderId: folder.id})
    : setFormData({ ...formData, [name]: value});
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // Delete folderName from note object bc it is not part of the data scheme
    delete formData.folderName;
    postNoteData(formData);
    history.goBack();
  }

  const validateName = () => {
    const name = formData.noteName.trim();
    if (name.length === 0) {
      return 'A note name is required';
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
      value={folder.folderName}
    >
      {folder.folderName}
    </option>
    )

  return (
    <form className='add-note' onSubmit={(e) => handleSubmit(e)}>
      <label htmlFor='name'>Name: </label>
      <input
        type='text'
        name='noteName'
        id='noteName'
        value={formData.noteName}
        onChange={(e) => handleChange(e)}
      />
      {formData.noteName.length === 0 && (
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