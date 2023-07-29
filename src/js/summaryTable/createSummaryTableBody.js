import { createTableBodyRows } from '../createTableBodyRows';
import { createElement } from '../utils/createElement';
import { createSummaryTableBodyRow } from './createSummaryTableBodyRow';

export const createSummaryTableBody = (data) => {
  const summaryTableBody = createElement(
    'tbody',
    {
      class: 'summaryTableBody w-full',
    },
    createTableBodyRows(data, createSummaryTableBodyRow)
  );
  return summaryTableBody;
};
