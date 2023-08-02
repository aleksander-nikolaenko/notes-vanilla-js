import { createElement } from '../utils/createElement';
import { createNoteCategorySelect } from './createNoteCategorySelect';
import { createNoteContentInput } from './createNoteContentInput';
import { createNoteNameInput } from './createNoteNameInput';

export const createNoteForm = (onSubmit, onClose, values = {}) => {
  const { name = null, category = null, content = null } = values;

  const buttonSave = createElement(
    'button',
    {
      type: 'submit',
      class:
        'saveButton px-4 py-1 mt-8 rounded border-solid border-gray-400 bg-gray-100 text-gray-900 hover:scale-105 active:scale-100',
    },
    'Save'
  );

  const buttonClose = createElement(
    'button',
    {
      type: 'button',
      class:
        'closeButton px-4 py-1 mt-8 rounded border-solid border-gray-400 bg-gray-100 text-gray-900 hover:scale-105 active:scale-100',
    },
    'Close'
  );

  buttonClose.addEventListener('click', onClose);

  const form = createElement(
    'form',
    {
      class:
        'noteForm py-2 px-4 flex flex-wrap justify-between items-start bg-blue-100 rounded',
    },
    [
      createNoteNameInput(name),
      createNoteCategorySelect(category),
      createNoteContentInput(content),
      buttonSave,
      buttonClose,
    ]
  );

  form.addEventListener('submit', onSubmit);

  return form;
};
