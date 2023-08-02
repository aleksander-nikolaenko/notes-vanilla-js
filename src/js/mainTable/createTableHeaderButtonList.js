import { createElement } from '../utils/createElement';

export const createHeaderButtonList = () => {
  const iconTrash = createElement('i', {
    class: 'tableHeaderIconTrash fa-solid fa-trash',
    style: 'color: #ffffff',
  });

  const buttonTrash = createElement(
    'button',
    {
      class: 'tableHeaderButtonTrash ease-in duration-200 hover:scale-125',
    },
    iconTrash
  );

  const buttonListItemTrash = createElement(
    'li',
    {
      class: 'tableHeaderButtonListItem',
      title: 'Archived notes',
    },
    buttonTrash
  );

  const iconArchive = createElement('i', {
    class: 'tableHeaderIconArchive fa-solid fa-file-arrow-down',
    style: 'color: #ffffff',
  });

  const buttonArchive = createElement(
    'button',
    { class: 'tableHeaderButtonArchive ease-in duration-200 hover:scale-125' },
    iconArchive
  );

  const buttonListItemArchive = createElement(
    'li',
    {
      class: 'tableHeaderButtonListItem',
      title: 'Active notes',
    },
    buttonArchive
  );

  const buttonList = createElement(
    'ul',
    {
      class: 'tableHeaderButtonList flex justify-center gap-x-3',
    },
    [buttonListItemArchive, buttonListItemTrash]
  );
  return buttonList;
};
