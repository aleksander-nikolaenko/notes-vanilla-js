import { createIconFromCategory } from '../commonElements/createIconFromCategory';
import { createElement } from '../utils/createElement';
import { categoryList } from '../utils/tableData';

export const createSummaryTableBodyRow = (data) => {
  const { category, active, archive } = data;

  const tableRowArchive = createElement(
    'td',
    {
      class:
        'summaryTableRowArchive px-4 py-2 rounded-r bg-blue-100 text-gray-400',
    },
    createElement(
      'p',
      { class: 'summaryArchiveText w-10/12 truncate' },
      archive.toString()
    )
  );

  const tableRowActive = createElement(
    'td',
    {
      class: 'summaryTableRowActive px-4 py-2 bg-blue-100 text-gray-400',
    },
    createElement(
      'p',
      { class: 'summaryActiveText w-10/12 truncate' },
      active.toString()
    )
  );

  const tableRowCategory = createElement(
    'td',
    {
      class:
        'summaryTableRowCategory w-full px-4 py-2 flex items-center gap-2 rounded-l bg-blue-100 text-gray-900',
    },
    [
      createIconFromCategory(category, categoryList),
      createElement(
        'p',
        {
          class: 'summaryCategoryText w-8/12 shrink-0 truncate',
          title: category,
        },
        category
      ),
    ]
  );

  const row = createElement(
    'tr',
    {
      class: 'summaryTableBodyRow w-full',
    },
    [tableRowCategory, tableRowActive, tableRowArchive]
  );
  return row;
};
