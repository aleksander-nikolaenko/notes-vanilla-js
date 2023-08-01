import { createElement } from '../utils/createElement';
import { createFormField } from './createFormField';

export const createNoteNameInput = (value) => {
  const input = createElement('input', {
    class: 'noteNameInput py-2 px-2 rounded text-gray-900',
    id: 'noteName',
    type: 'text',
    placeholder: 'Enter note name',
    required: true,
  });
  const label = createElement(
    'label',
    {
      class: 'noteNameLabel',
      for: 'noteName',
    },
    'Name*'
  );

  input.value = value || '';

  const formField = createFormField([label, input]);

  return formField;
};
