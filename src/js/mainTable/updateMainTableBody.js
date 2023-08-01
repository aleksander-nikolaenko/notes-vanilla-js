import { createTableBodyRows } from '../commonElements/createTableBodyRows';
import { clearElement } from '../utils/clearElement';
import { createTableBodyRow } from './createTableBodyRow';

export const updateMainTableBody = (data) => {
  const tableBodyRef = document.querySelector('.tableBody');
  clearElement(tableBodyRef);
  tableBodyRef.append(...createTableBodyRows(data, createTableBodyRow));
};
