import { activeData, archivedData } from './tableData';

export const archiveNote = (noteID) => {
  const tableCaptionRef = document.querySelector('.tableCaption');

  if (tableCaptionRef.textContent === 'Active notes') {
    const indexActive = activeData.findIndex((note) => note.id === noteID);
    if (indexActive !== -1) {
      const archivedNote = activeData.splice(indexActive, 1);
      archivedData.push(...archivedNote);
    }
  }

  if (tableCaptionRef.textContent === 'Archived notes') {
    const indexArchived = archivedData.findIndex((note) => note.id === noteID);
    if (indexArchived !== -1) {
      const activeNote = archivedData.splice(indexArchived, 1);
      activeData.push(...activeNote);
    }
  }
};
