import React from "react";
import { useAuthContext } from "../../providers/Auth/Auth.provider";

function NotesPage() {
  const { userData } = useAuthContext();
  console.log(userData);
  return (
    <div title="notes">
      <h1>Notes Page</h1>
    </div>
  );
}

export default NotesPage;
