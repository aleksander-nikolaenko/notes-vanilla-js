import { createElement } from '../utils/createElement';
import { createHeaderButtonList } from './createTableHeaderButtonList';

export const createTableHeader = () => {
  const tableHeaderButtons = createElement(
    'th',
    {
      class:
        'tableHeaderTitle py-2 px-4 w-2/12 rounded-r-lg bg-gray-400 text-white',
    },
    createHeaderButtonList()
  );
  const tableHeaderDates = createElement(
    'th',
    {
      class: 'tableHeaderTitle py-2 px-4 bg-gray-400 text-left text-white',
    },
    'Dates'
  );
  const tableHeaderContent = createElement(
    'th',
    {
      class:
        'tableHeaderTitle py-2 px-4 w-1/4 bg-gray-400 text-left text-white',
    },
    'Content'
  );
  const tableHeaderCategory = createElement(
    'th',
    {
      class: 'tableHeaderTitle py-2 px-4 bg-gray-400 text-left text-white',
    },
    'Category'
  );

  const tableHeaderCreated = createElement(
    'th',
    {
      class: 'tableHeaderTitle py-2 px-4 bg-gray-400 text-left text-white',
    },
    'Created'
  );

  const tableHeaderName = createElement(
    'th',
    {
      class:
        'tableHeaderTitle py-2 px-4 w-1/4 rounded-l-lg bg-gray-400 text-white',
    },
    'Name'
  );

  const row = createElement(
    'tr',
    {
      class: 'tableHeaderRow w-full',
    },
    [
      tableHeaderName,
      tableHeaderCreated,
      tableHeaderCategory,
      tableHeaderContent,
      tableHeaderDates,
      tableHeaderButtons,
    ]
  );

  const tableHeader = createElement(
    'thead',
    {
      class: 'tableHeader sticky top-[27px] w-full',
    },
    row
  );
  return tableHeader;
};
