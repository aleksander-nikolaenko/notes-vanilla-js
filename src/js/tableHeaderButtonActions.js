import { updateMainTableBody } from './mainTable/updateMainTableBody';
import { getFromLocalStorage } from './utils/localStorage';
import { data } from './utils/tableData';

const buttonListRef = document.querySelector('.tableHeaderButtonList');
const buttonTrashRef = document.querySelector('.tableHeaderButtonTrash');
const buttonArchiveRef = document.querySelector('.tableHeaderButtonArchive');
const tableCaptionRef = document.querySelector('.tableCaption');

const active = getFromLocalStorage('activeNotes') || [];
const archived = getFromLocalStorage('archivedNotes') || [];

const activeTableData = active.length ? actual : data;
const archivedTableData = archived.length ? archived : data;

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
