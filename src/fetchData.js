export function getFolderData() {
  
  return fetch("http://localhost:9090/folders")
  .then(response => {
    if (!response.ok) {
      throw new Error(response.statusText)
    }
    return response.json();
  })
  .then(data => {
    return data;
  })
  .catch(error => {
    console.log(error.message)
  });

}

export function getNoteData() {
  return fetch("http://localhost:9090/notes")
  .then(response => {
    if (!response.ok) {
      throw new Error(response.statusText)
    }
    return response.json();
  })
  .then(data => {
    return data;
  })
  .catch(error => {
    console.log(error.message)
  });
}

export function postFolderData(data) {
  fetch("http://localhost:9090/folders", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  })
  .then(response => {
    if (!response.ok) {
      throw new Error(response.statusText)
    }
    return response.json();
  })
  .catch(error => {
    console.log(error.message)
  });
}

export function postNoteData(data) {
  fetch("http://localhost:9090/notes", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  })
  .then(response => {
    if (!response.ok) {
      throw new Error(response.statusText)
    }
    return response.json();
  })
  .catch(error => {
    console.log(error.message)
  });
}