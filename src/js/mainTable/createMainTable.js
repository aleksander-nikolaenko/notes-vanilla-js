import { createElement } from '../utils/createElement';
import { createTableBody } from './createTableBody';
import { createTableHeader } from './createTableHeader';

export const createMainTable = (data) => {
  const tableCaption = createElement(
    'caption',
    {
      class:
        'tableCaption sticky top-[-1px] caption-top bg-white text-gray-900 font-bold text-xl',
    },
    'Active notes'
  );

  const table = createElement(
    'table',
    {
      class: 'table table-fixed border-separate border-spacing-y-4 w-full',
    },
    [tableCaption, createTableHeader(), createTableBody(data)]
  );

  const tableContainer = createElement(
    'div',
    {
      class: 'tableContainer relative px-2 w-full h-[28rem] overflow-y-auto', // scrollbar-hide
    },
    table
  );

  return tableContainer;
};
