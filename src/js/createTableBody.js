import { createElement } from './createElement';
import { createTableRow } from './createTableRow';
import { data } from './tableData';

export const createTableBody = () => {
  const createTableRows = (data) => {
    return data.map((item) => {
      return createTableRow(item);
    });
  };

  const tableBody = createElement(
    'tbody',
    {
      class: 'tableBody w-full',
    },
    createTableRows(data)
  );
  return tableBody;
};
