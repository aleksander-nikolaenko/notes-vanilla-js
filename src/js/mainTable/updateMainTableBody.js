import { createTableBodyRows } from '../commonElements/createTableBodyRows';
import { clearElement } from '../utils/clearElement';
import { createTableBodyRow } from './createTableBodyRow';

export const updateMainTableBody = (data) => {
  const tableBodyRef = document.querySelector('.tableBody');

  data.sort((a, b) => new Date(b.created) - new Date(a.created));

  clearElement(tableBodyRef);
  tableBodyRef.append(...createTableBodyRows(data, createTableBodyRow));
};
