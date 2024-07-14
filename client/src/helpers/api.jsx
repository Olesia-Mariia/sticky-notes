export const addNote = async () => {
  const blankNote = {
    text: "",
    cdate: new Date().toDateString(),
    bgcolor: "#feff9c",
    view: true,
  };

  try {
    const response = await fetch("http://localhost:5000/notes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blankNote),
    });

    window.location = "/";
  } catch (err) {
    console.error(err.mesage);
  }
};

export const getNotes = async () => {
  try {
    const response = await fetch("http://localhost:5000/notes");
    const jsonData = await response.json();

    return jsonData;
  } catch (err) {
    console.error(err.mesage);
  }
};

export const deleteNote = async (id) => {
  try {
    const response = await fetch(`http://localhost:5000/notes/${id}`, {
      method: "DELETE",
    });

  } catch (err) {
    console.error(err.mesage);
  }
}
