import { createElement } from '../utils/createElement';

export const createFormField = (children) => {
  const formField = createElement(
    'div',
    { class: 'formField w-1/4 flex flex-col gap-1' },
    children
  );
  return formField;
};
