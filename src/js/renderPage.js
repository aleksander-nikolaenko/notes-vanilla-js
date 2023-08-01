import { createMainTable } from './mainTable/createMainTable';
import { createContainerCreateNote } from './noteForm/createContainerCreateNote';
import { createSummaryTable } from './summaryTable/createSummaryTable';
import { getSummaryData } from './utils/getSummaryData';
import { activeData, archivedData } from './utils/tableData';

const containerRef = document.querySelector('.app');

const activeTableData = activeData || [];

const archivedTableData = archivedData || [];

const summaryTableData = getSummaryData(activeTableData, archivedTableData);

containerRef.append(
  createMainTable(activeTableData),
  createContainerCreateNote(),
  createSummaryTable(summaryTableData)
);
