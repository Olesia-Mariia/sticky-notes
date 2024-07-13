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

    console.log(response)
  } catch (err) {
    console.error(err.mesage);
  }
};
