import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';

export default function Note({ title, content, deleteNote, id }) {
  const [edit, setEdit] = useState(false);
  const getId = itemId => {
    console.log(itemId);
    setEdit(!edit);
  };

  return (
    <div className="note_card" onClick={() => getId(id)}>
      <div className="note_cardTitle">{title}</div>
      <br />
      <div className="note_cardContent">{content}</div>
      <div className="note_cardDelete">
        <Button onClick={deleteNote}>
          <DeleteOutlineIcon className="del_button"></DeleteOutlineIcon>
        </Button>
      </div>
    </div>
  );
}
