import { createTableBodyRows } from '../createTableBodyRows';
import { clearElement } from '../utils/clearElement';

export const updateMainTableBody = (data) => {
  const tableBodyRef = document.querySelector('.tableBody');
  clearElement(tableBodyRef);
  tableBodyRef.append(...createTableBodyRows(data));
};
