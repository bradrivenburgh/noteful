import React, { useState } from 'react';

export default function AddNote() {
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
    content: "",
  });

  
  // Set up fetch call to POST note in fetchData.js and import
  const handleSubmit = (e) => {
    e.preventDefault();

  }

  // Set up handleChange to allow dynamic, controlled form
  const handleChange = (e) = {
    const [name, value] = e.target;
    setFormData({ ...formData, [name]: value});
  }

  return(
    <form className="add-note">
      <label htmlFor="name">Something</label>
      <input type="text" name="name" id="name" value={formData.name} />
    </form>
  );
}