const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
const itemSettings = document.querySelector('#item-settings');
// Check to see if 'items' is available from localStorage.
// If not, set items to be an empty array
const items = JSON.parse(localStorage.getItem('items')) || [];

function addItem(e) {
  e.preventDefault();
  const text = this.querySelector('[name=item]').value;
  const item = {
    text, 
    done: false
  }

  items.push(item);
  populateList(items, itemsList);
  // Set items in local storage. We have to stringify everything before hand.
  // Otherwise, the browser will return [object Object]
  localStorage.setItem('items', JSON.stringify(items))
  this.reset();
}

function populateList(plates = [], platesList) {
  platesList.innerHTML = plates.map((plate, i) => {
    return `
      <li>
        <input type="checkbox" data-index=${i} id="item${i}" ${plate.done ? 'checked' : ''}/>
        <label for="item${i}">${plate.text}</label>
      </li>
    `
  }).join('');
}

function toggleDone(e) {
  if(!e.target.matches('input')) return; // skip unless it's an input
  el = e.target;
  const index = el.dataset.index;
  items[index].done = !items[index].done;
  localStorage.setItem('items', JSON.stringify(items));
  populateList(items, itemsList);
}

function buttonActions(e) {
  if(!e.target.matches('input')) return;
  el = e.target;
  // Use of short circuit logic to handle the button actions
  el.dataset.button === 'check' && items.map(item => item.done = true);
  el.dataset.button === 'uncheck' && items.map(item => item.done = false);
  el.dataset.button === 'delete' && items.splice(0, items.length);
  localStorage.setItem('items', JSON.stringify(items));
  populateList(items, itemsList);
}

itemSettings.addEventListener('click', buttonActions)

addItems.addEventListener('submit', addItem);
itemsList.addEventListener('click', toggleDone);
itemSettings.addEventListener('click', buttonActions)

// For localStorage rendering purposes, we run populateList on page load.
// We attempt to populate a list from the items in local storage.
populateList(items, itemsList);