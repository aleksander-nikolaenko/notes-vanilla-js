import { createElement } from '../utils/createElement';
import { createFormField } from './createFormField';

export const createNoteContentInput = (content) => {
  const input = createElement('textarea', {
    class: 'noteContentInput w-full py-2 px-2 rounded text-gray-900',
    id: 'noteContent',
    value: content,
    rows: 1,
    placeholder: 'Enter note content',
    required: true,
  });
  const label = createElement(
    'label',
    {
      class: 'noteContentLabel',
      for: 'noteContent',
    },
    'Content*'
  );

  const formField = createFormField([label, input]);

  return formField;
};
