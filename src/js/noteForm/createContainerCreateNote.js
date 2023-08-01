import { createElement } from '../utils/createElement';
import { createButtonCreateNote } from './createButtonCreateNote';

export const createContainerCreateNote = () => {
  const formContainer = createElement('div', {
    class: 'createFormContainer grow',
  });

  const createNoteContainer = createElement(
    'div',
    {
      class:
        'createNoteContainer mt-5 pr-6 rounded flex flex-wrap gap-5 justify-between items-center',
    },
    [formContainer, createButtonCreateNote()]
  );
  return createNoteContainer;
};
