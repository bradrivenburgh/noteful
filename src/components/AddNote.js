import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { postNoteData } from '../fetchData';

function AddNote() {
  // Controlled component; need to establish state for form locally
  // Notes also have an id, modified,
  
  // How to assign id?  The first part of each note id
  // contains a random four digit alphanumeric string 
  // preceded by "e"
  // Pull folderId from react-router history?
  // How to get modified timestamp?
  const [formData, setFormData] = useState({
    id: "", 
    name: "",
    modified: "",
    folderId: "",
    content: "",
  });

  // TO DO: Get previous path if navigating from folder view
  // in order to grab the folderId
  const history = useHistory();
  const location = useLocation();
  console.log(history)
  console.log(location)
  
  // Set up fetch call to POST note in fetchData.js and import
  const handleSubmit = (e) => {
    e.preventDefault();
    postNoteData(formData);
    history.push("/");
  }

  // Set up handleChange to allow dynamic, controlled form
  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData({ ...formData, [name]: value});
  }

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