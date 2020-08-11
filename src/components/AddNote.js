import React, { useState, useContext } from 'react';
import { NotefulContext } from '../NotefulContext';
import { useHistory } from 'react-router-dom';
import { postNoteData } from '../fetchData';

function AddNote() {
  // set form state; the note id is automatically assigned by server
  // Get selectedFolder state and setter function from Context
  const {selectedFolder, setSelectedFolder} = useContext(NotefulContext);
  const [formData, setFormData] = useState({
    id: "", 
    name: "",
    modified: new Date(),
    folderId: `${selectedFolder.id || ""}`,
    content: "",
  });

  // Get history from react-router to redirect to root path
  // upon submission.
  const history = useHistory();
  
  // Set up fetch call to POST note in fetchData.js and import
  const handleSubmit = (e) => {
    e.preventDefault();
    postNoteData(formData);
    setSelectedFolder({});
    history.push("/");
  }

  // Set up handleChange to allow dynamic, controlled form
  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData({ ...formData, [name]: value});
  }


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
          <button>Submit</button>
    </form>
  );
}

export default AddNote;