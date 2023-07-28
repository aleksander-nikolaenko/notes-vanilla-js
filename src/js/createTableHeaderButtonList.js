import { createElement } from './createElement';

export const createHeaderButtonList = () => {
  const iconTrash = createElement('i', {
    class: 'icon fa-solid fa-trash',
    style: 'color: #ffffff',
  });

  const buttonTrash = createElement(
    'button',
    { class: 'buttonTrash ease-in duration-200 hover:scale-125' },
    iconTrash
  );

  const buttonListItemTrash = createElement(
    'li',
    {
      class: 'buttonListItem',
    },
    buttonTrash
  );

  const iconArchive = createElement('i', {
    class: 'icon fa-solid fa-file-arrow-down',
    style: 'color: #ffffff',
  });

  const buttonArchive = createElement(
    'button',
    { class: 'buttonArchive ease-in duration-200 hover:scale-125' },
    iconArchive
  );

  const buttonListItemArchive = createElement(
    'li',
    {
      class: 'buttonListItem',
    },
    buttonArchive
  );

  const buttonList = createElement(
    'ul',
    {
      class: 'buttonList flex justify-center gap-x-3',
    },
    [buttonListItemArchive, buttonListItemTrash]
  );
  return buttonList;
};
