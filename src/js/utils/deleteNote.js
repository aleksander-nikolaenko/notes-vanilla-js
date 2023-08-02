import { defineDataList } from './defineDataList';

export const deleteNote = (noteID) => {
  const index = defineDataList().findIndex((note) => note.id === noteID);
  if (index !== -1) defineDataList().splice(index, 1);
};
