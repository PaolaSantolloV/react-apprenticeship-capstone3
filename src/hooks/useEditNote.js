export const useEditNote = async (idNote, noteData) => {
  try {
    const res = await fetch(
      `https://capstone3-2abad-default-rtdb.firebaseio.com/notes/${idNote}.json`,
      {
        method: "PUT",
        body: JSON.stringify(noteData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await res.json();
    return data;
  } catch (e) {
    return e;
  }
};
