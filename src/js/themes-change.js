import './refs';
import { LIGHT, DARK } from './theme';
import { load, save, remove } from './storage';


function onCheckboxChange() {
  refs.checkboxEl.checked ? onCheckboxChecked() : onCheckboxNotChecked();
}

function onCheckboxChecked() {
    refs.bodyEl.classList.add(DARK);
    refs.bodyEl.classList.remove(LIGHT);
}

function onCheckboxNotChecked() {
    refs.bodyEl.classList.add(LIGHT);
    refs.bodyEl.classList.remove(DARK);
}

refs.checkboxEl.addEventListener('change', onCheckboxChange); 