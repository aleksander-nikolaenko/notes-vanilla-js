import { createNoteForm } from './noteForm/createNoteForm';
import { clearElement } from './utils/clearElement';
import { defineDataList } from './utils/defineDataList';
import { extractDatesFromString } from './utils/extractDatesFromString';
import { formatDate } from './utils/formatDate';
import { generateUuid } from './utils/generateUuid';
import { updateTables } from './utils/updateTables';

const createNoteButtonRef = document.querySelector('.createNoteButton');
const createFormContainerRef = document.querySelector('.createFormContainer');

const onSubmit = (e) => {
  e.preventDefault();

  const name = document.getElementById('noteName').value;
  const category = document.getElementById('noteCategory').value;
  const content = document.getElementById('noteContent').value;
  const created = formatDate(new Date());
  const dates = extractDatesFromString(content);
  const id = generateUuid();

  const newNote = {
    id,
    name,
    created,
    category,
    content,
    dates,
  };

  defineDataList().push(newNote);

  updateTables();

  clearElement(createFormContainerRef);
};

const onClose = (e) => {
  clearElement(createFormContainerRef);
};

createNoteButtonRef.addEventListener('click', (e) => {
  clearElement(createFormContainerRef);
  createFormContainerRef.append(createNoteForm(onSubmit, onClose));
});
