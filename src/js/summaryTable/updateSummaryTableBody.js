import { createTableBodyRows } from '../commonElements/createTableBodyRows';
import { clearElement } from '../utils/clearElement';
import { createSummaryTableBodyRow } from './createSummaryTableBodyRow';

export const updateSummaryTableBody = (data) => {
  const tableBodyRef = document.querySelector('.summaryTableBody');
  clearElement(tableBodyRef);
  tableBodyRef.append(...createTableBodyRows(data, createSummaryTableBodyRow));
};
