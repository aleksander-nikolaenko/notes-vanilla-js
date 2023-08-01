import { createElement } from '../utils/createElement';
import { createTableBodyRows } from '../commonElements/createTableBodyRows';
import { createTableBodyRow } from './createTableBodyRow';

export const createTableBody = (data) => {
  const tableBody = createElement(
    'tbody',
    {
      class: 'tableBody w-full',
    },
    createTableBodyRows(data, createTableBodyRow)
  );
  return tableBody;
};
