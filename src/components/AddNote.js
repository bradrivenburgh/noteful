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
    note_name: "",
    modified: new Date(),
    folder_name: selectedFolder.name || "",
    folder_id: `${selectedFolder.id}` || "",
    content: "",
  });

  // Get history from react-router to redirect upon submission
  const history = useHistory();

  const handleChange = (e) => {
    const {type, name, value} = e.target;
    const folder = folders.find(folder => folder.folder_name === value);    
    type === "select-one" && value
    ? setFormData({ ...formData, [name]: value, folder_id: folder.id})
    : setFormData({ ...formData, [name]: value});
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // Delete folder_name from note object bc it is not part of the data scheme
    delete formData.folder_name; 
    postNoteData(formData);
    setSelectedFolder({});
    history.goBack();
  }

  const validateName = () => {
    const name = formData.note_name.trim();
    if (name.length === 0) {
      return 'A note name is required';
    }
  }

  const validateFolder = () => {
    const folder = formData.folder_name;
    if (!folder || folder.length === 0) {
      return 'A folder must be selected';
    }
  }

  const folderOptions = folders.map(folder => 
    <option 
      key={folder.id}
      value={folder.folder_name}
    >
      {folder.folder_name}
    </option>
    )

  return (
    <form className='add-note' onSubmit={(e) => handleSubmit(e)}>
      <label htmlFor='name'>Name: </label>
      <input
        type='text'
        name='note_name'
        id='note_name'
        value={formData.note_name}
        onChange={(e) => handleChange(e)}
      />
      {formData.note_name.length === 0 && (
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
        name='folder_name'
        value={formData.folder_name}
        onChange={(e) => handleChange(e)}>
       
        <option value={null} />
        {folderOptions}
        
      </select>
      {!formData.folder_name && (
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