import { createButtonCreateNote } from './createButtonCreateNote';
import { createMainTable } from './mainTable/createMainTable';
import { createSummaryTable } from './summaryTable/createSummaryTable';
import { getFromLocalStorage } from './utils/localStorage';
import { data } from './utils/tableData';

const containerRef = document.querySelector('.app');

const mainTableData = getFromLocalStorage('actualNotes') || data;

const summaryTableData = [
  {
    category: 'Task',
    active: 2,
    archive: 5,
  },
  {
    category: 'Random Thought',
    active: 1,
    archive: 3,
  },
  {
    category: 'Idea',
    active: 4,
    archive: 2,
  },
];

console.log(mainTableData);

containerRef.append(
  createMainTable(mainTableData),
  createButtonCreateNote(),
  createSummaryTable(summaryTableData)
);
