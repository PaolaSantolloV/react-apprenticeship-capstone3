export const useAllNotes = async () => {
  try {
    const res = await fetch(
      `https://capstone3-2abad-default-rtdb.firebaseio.com/notes.json`
    );
    const data = await res.json();
    return data;
  } catch (e) {
    return e;
  }
};
