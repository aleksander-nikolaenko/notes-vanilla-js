import { updateMainTableBody } from './mainTable/updateMainTableBody';
import { clearElement } from './utils/clearElement';
import { getFromLocalStorage } from './utils/localStorage';
import { data } from './utils/tableData';

const tableBodyRef = document.querySelector('.tableBody');
const createNoteButtonRef = document.querySelector('.createNoteButton');
const buttonListRef = document.querySelector('.tableHeaderButtonList');
const buttonTrashRef = document.querySelector('.tableHeaderButtonTrash');
const buttonArchiveRef = document.querySelector('.tableHeaderButtonArchive');
const tableCaptionRef = document.querySelector('.tableCaption');

const actual = getFromLocalStorage('actualNotes') || [];
const archived = getFromLocalStorage('archivedNotes') || [];

const actualTableData = actual.length ? actual : data;
const archivedTableData = archived.length ? archived : data;

// createNoteButtonRef.addEventListener('click', (e) => {
//   updateMainTableBody(mainTableData);
// });

// useOutsideClick(ref, (isInside, event) => {
//   const button = document.getElementById('sidebar-open-button');
//   if (!button.contains(event.target as Node)) {
//     setShowSideBar(isInside);
//   }
// });
