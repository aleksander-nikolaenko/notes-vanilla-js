import { createElement } from './createElement';
import { createRowButtonList } from './createTableRowButtonList';
import { categoryList } from './tableData';

export const createTableRow = (data) => {
  const { name, created, category, content, dates } = data;

  const createIconFromCategory = (category) => {
    let icon;
    switch (category) {
      case categoryList[0]:
        icon = createElement('i', {
          class: 'icon fa-solid fa-cart-shopping',
          style: 'color: #ffffff',
        });
        break;
      case categoryList[1]:
        icon = createElement('i', {
          class: 'icon fa-solid fa-head-side-virus',
          style: 'color: #ffffff',
        });
      case categoryList[2]:
        icon = createElement('i', {
          class: 'icon fa-solid fa-lightbulb',
          style: 'color: #ffffff',
        });
        break;
    }
    return createElement(
      'div',
      {
        class:
          'iconWrapper shrink-0 flex justify-center items-center w-10 h-10 rounded-full bg-gray-500',
      },
      icon
    );
  };

  const tableHeaderButtons = createElement(
    'th',
    {
      class:
        'tableHeaderTitle px-2 py-2 w-1/12 rounded-r bg-blue-100 text-gray-400',
    },
    createRowButtonList()
  );
  const tableRowDates = createElement(
    'td',
    {
      class: 'tableRowDates px-2 py-2 bg-blue-100 text-gray-400',
    },
    createElement(
      'p',
      { class: 'nameText w-10/12 truncate', title: dates },
      dates
    )
  );
  const tableRowContent = createElement(
    'td',
    {
      class: 'tableRowContent px-2 py-2 bg-blue-100 text-gray-400',
    },
    createElement(
      'p',
      { class: 'nameText w-10/12 truncate', title: content },
      content
    )
  );
  const tableRowCategory = createElement(
    'td',
    {
      class: 'tableRowCategory px-2 py-2 bg-blue-100 text-gray-400',
    },
    createElement('p', { class: 'nameText w-10/12 truncate' }, category)
  );

  const tableRowCreated = createElement(
    'td',
    {
      class: 'tableRowCreated px-2 py-2 bg-blue-100 text-gray-400',
    },
    createElement('p', { class: 'nameText w-10/12 truncate' }, created)
  );

  const tableRowName = createElement(
    'td',
    {
      class:
        'tableRowName w-full px-2 py-2 flex items-center gap-2 rounded-l bg-blue-100 text-gray-900',
    },
    [
      createIconFromCategory(category),
      createElement(
        'p',
        { class: 'nameText w-8/12 shrink-0 truncate', title: name },
        name
      ),
    ]
  );

  const row = createElement(
    'tr',
    {
      class: 'tableBodyRow w-full',
    },
    [
      tableRowName,
      tableRowCreated,
      tableRowCategory,
      tableRowContent,
      tableRowDates,
      tableHeaderButtons,
    ]
  );
  return row;
};
