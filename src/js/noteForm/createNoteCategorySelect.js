import { createElement } from '../utils/createElement';
import { categoryList } from '../utils/tableData';
import { createFormField } from './createFormField';

export const createNoteCategorySelect = (category) => {
  const createOption = (value, text) => {
    return createElement(
      'option',
      {
        class: 'categoryOption',
        value: value,
      },
      text
    );
  };

  const createOptions = (optionsList) => {
    return optionsList.map((option) => {
      return createOption(option, option);
    });
  };

  const select = createElement(
    'select',
    {
      class: 'noteCategorySelect h-10 py-2 px-2 rounded bg-white text-gray-900',
      id: 'noteCategory',
      value: category || categoryList[0],
    },
    createOptions(categoryList)
  );

  const label = createElement(
    'label',
    {
      class: 'noteCategoryLabel',
      for: 'noteCategory',
    },
    'Category*'
  );

  const formField = createFormField([label, select]);

  return formField;
};
