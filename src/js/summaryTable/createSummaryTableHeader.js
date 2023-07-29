import { createElement } from '../utils/createElement';

export const createSummaryTableHeader = () => {
  const tableHeaderArchived = createElement(
    'th',
    {
      class:
        'summaryTableHeaderArchived py-2 px-4 rounded-r-lg bg-gray-400 text-left text-white',
    },
    'Archived'
  );

  const tableHeaderActive = createElement(
    'th',
    {
      class:
        'summaryTableHeaderActive py-2 px-4 bg-gray-400 text-left text-white',
    },
    'Active'
  );

  const tableHeaderCategory = createElement(
    'th',
    {
      class:
        'summaryTableHeaderCategory py-2 px-4 rounded-l-lg bg-gray-400 text-white',
    },
    'Note category'
  );

  const row = createElement(
    'tr',
    {
      class: 'summaryTableHeaderRow w-full',
    },
    [tableHeaderCategory, tableHeaderActive, tableHeaderArchived]
  );

  const summaryTableHeader = createElement(
    'thead',
    {
      class: 'summaryTableHeader sticky top-[30px] w-full',
    },
    row
  );
  return summaryTableHeader;
};
