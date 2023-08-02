import { createNoteForm } from '../noteForm/createNoteForm';
import { archiveNote } from '../utils/archiveNote';
import { clearElement } from '../utils/clearElement';
import { createElement } from '../utils/createElement';
import { defineDataList } from '../utils/defineDataList';
import { deleteNote } from '../utils/deleteNote';
import { extractDatesFromString } from '../utils/extractDatesFromString';
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
    {
      class: 'buttonTrash ease-in duration-200 hover:scale-125',
    },
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
    {
      class: 'buttonArchive ease-in duration-200 hover:scale-125',
    },
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
      updateTables();
    }

    if (buttonArchive.contains(e.target)) {
      archiveNote(noteID);
      updateTables();
    }

    if (buttonEdit.contains(e.target)) {
      const tableRow = document.querySelector(`.tableBodyRow-${noteID}`);
      try {
        let note = {};
        const index = defineDataList().findIndex((note) => note.id === noteID);
        if (index !== -1) {
          note = defineDataList()[index];
        }

        clearElement(tableRow);

        tableRow.append(
          createElement(
            'td',
            {
              class: 'tableRowData',
              colSpan: 6,
            },
            createNoteForm(
              (e) => {
                e.preventDefault();

                const name = document.getElementById('noteName').value;
                const category = document.getElementById('noteCategory').value;
                const content = document.getElementById('noteContent').value;
                const created = note.created;
                const dates = extractDatesFromString(content);
                const id = note.id;

                const newNote = {
                  id,
                  name,
                  created,
                  category,
                  content,
                  dates,
                };
                defineDataList()[index] = newNote;

                updateTables();
              },

              (e) => {
                updateTables();
              },
              note
            )
          )
        );
      } catch (error) {
        updateTables();
        console.error(error.message);
      }
    }
  });

  return buttonList;
};
