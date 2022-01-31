export const useAddNote = async (noteData) => {
  try {
    const res = await fetch(
      `https://capstone3-2abad-default-rtdb.firebaseio.com/notes.json`,
      {
        method: "POST",
        body: JSON.stringify(noteData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await res.json();
    console.log(data);
    return data;
  } catch (e) {
    return e;
  }
};
