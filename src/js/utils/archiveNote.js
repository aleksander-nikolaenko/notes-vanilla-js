import { defineDataList } from './defineDataList';
import { activeData, archivedData } from './tableData';

export const archiveNote = (noteID) => {
  const index = defineDataList().findIndex((note) => note.id === noteID);
  if (index !== -1) {
    const note = defineDataList().splice(index, 1);
    JSON.stringify(defineDataList()) === JSON.stringify(activeData)
      ? archivedData.push(...note)
      : activeData.push(...note);
  }
};
