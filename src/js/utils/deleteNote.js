import { activeData, archivedData } from './tableData';

export const deleteNote = (noteID) => {
  const data = {
    'Active notes': activeData,
    'Archived notes': archivedData,
  };

  const dataKey = document.querySelector('.tableCaption').textContent;

  const index = data[dataKey].findIndex((note) => note.id === noteID);
  if (index !== -1) data[dataKey].splice(index, 1);
};
