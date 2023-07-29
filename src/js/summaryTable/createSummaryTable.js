import { createElement } from '../utils/createElement';
import { createSummaryTableBody } from './createSummaryTableBody';
import { createSummaryTableHeader } from './createSummaryTableHeader';

export const createSummaryTable = (data) => {
  const summaryTableCaption = createElement(
    'caption',
    {
      class:
        'SummaryTableCaption sticky top-[-1px] caption-top text-gray-900 font-bold text-xl',
    },
    'Summary'
  );

  const summaryTable = createElement(
    'table',
    {
      class:
        'summaryTable table-fixed border-separate border-spacing-y-4 w-full',
    },
    [
      summaryTableCaption,
      createSummaryTableHeader(),
      createSummaryTableBody(data),
    ]
  );

  const SummaryTableContainer = createElement(
    'div',
    {
      class: 'summaryTableContainer relative px-2 w-full overflow-y-auto', // scrollbar-hide
    },
    summaryTable
  );

  return SummaryTableContainer;
};
