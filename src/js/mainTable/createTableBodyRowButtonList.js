import { archiveNote } from '../utils/archiveNote';
import { createElement } from '../utils/createElement';
import { deleteNote } from '../utils/deleteNote';
import { updateTables } from '../utils/updateTables';

export const createTableBodyRowButtonList = (noteID) => {
  const iconEdit = createElement('i', {
    class: 'icon fa-solid fa-pen',
    style: 'color: #9ca3af',
  });

  const buttonEdit = createElement(
    'button',
    { class: 'buttonEdit ease-in duration-200 hover:scale-125' },
    iconEdit
  );

  const buttonListItemEdit = createElement(
    'li',
    {
      class: 'buttonListItem',
    },
    buttonEdit
  );

  const iconTrash = createElement('i', {
    class: 'icon fa-solid fa-trash',
    style: 'color: #9ca3af',
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
    style: 'color: #9ca3af',
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
      class: 'buttonList flex justify-between',
    },
    [buttonListItemEdit, buttonListItemArchive, buttonListItemTrash]
  );

  buttonList.addEventListener('click', (e) => {
    if (buttonTrash.contains(e.target)) {
      deleteNote(noteID);
    }

    if (buttonArchive.contains(e.target)) {
      archiveNote(noteID);
    }
    updateTables();
  });

  return buttonList;
};
