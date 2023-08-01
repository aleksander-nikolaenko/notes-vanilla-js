import { updateMainTableBody } from './mainTable/updateMainTableBody';
import { activeData, archivedData } from './utils/tableData';

const buttonListRef = document.querySelector('.tableHeaderButtonList');
const buttonTrashRef = document.querySelector('.tableHeaderButtonTrash');
const buttonArchiveRef = document.querySelector('.tableHeaderButtonArchive');
const tableCaptionRef = document.querySelector('.tableCaption');

const activeTableData = activeData || [];
const archivedTableData = archivedData || [];

buttonListRef.addEventListener('click', (e) => {
  if (buttonTrashRef.contains(e.target)) {
    updateMainTableBody(archivedTableData);
    tableCaptionRef.textContent = 'Archived notes';
  }
  if (buttonArchiveRef.contains(e.target)) {
    updateMainTableBody(activeTableData);
    tableCaptionRef.textContent = 'Active notes';
  }
});
