import { createElement } from '../utils/createElement';

export const createButtonCreateNote = () => {
  const createNoteButton = createElement(
    'button',
    {
      type: 'button',
      class:
        'createNoteButton w-[120px] px-4 py-1 rounded border-solid border-gray-400 bg-gray-100 text-gray-900 hover:scale-105 active:scale-100',
    },
    'Create note'
  );
  return createNoteButton;
};
