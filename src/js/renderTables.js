import { createElement } from './createElement';
import { createTableBody } from './createTableBody';
import { createTableHeader } from './createTableHeader';

const container = document.querySelector('.container');

const createNoteButton = createElement(
  'button',
  {
    class:
      'createNoteButton block mt-5 mr-0 ml-auto w-[120px] px-4 py-1 rounded border-solid border-gray-400 bg-gray-100 text-gray-900 hover:scale-105 active:scale-100',
  },
  'Create note'
);

const tableCaption = createElement(
  'caption',
  {
    class:
      'tableCaption sticky top-[-1px] caption-top bg-white text-gray-900 font-bold text-2xl',
  },
  'Actual notes'
);

const table = createElement(
  'table',
  {
    class: 'table table-fixed border-separate border-spacing-y-4 w-full',
  },
  [tableCaption, createTableHeader(), createTableBody()]
);

const tableContainer = createElement(
  'div',
  {
    class:
      'tableContainer relative w-full h-[29rem] overflow-y-scroll scrollbar-hide',
  },
  table
);

container.append(tableContainer, createNoteButton);
