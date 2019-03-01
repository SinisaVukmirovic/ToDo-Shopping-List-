// BUILDING SHOP LIST BY USING ES6 CONSTRUCTOR CLASS

// getting the DOM elements
const itemToAdd = document.getElementById('itemToAdd');
const addBtn = document.getElementById('addBtn');
const list = document.getElementById('list');
const listItem = document.getElementById('list-item');

// creating elements to be added to the DOM
class Item {
    constructor(itemName) {
        this.name = itemName;

        this.create();
    }

    // to create elements
    create() {
        let listItem = document.createElement('div');
        listItem.classList.add('list-item');

        let input = document.createElement('input');
        input.type = 'text';
        input.classList.add('item-name');
        input.value = this.name;
        input.disabled = true;

        let actions = document.createElement('div');
        actions.classList.add('item-actions');

        let editBtn = document.createElement('button');
        editBtn.classList.add('edit');
        editBtn.innerText = 'Edit';
        editBtn.addEventListener('click', () => this.update(input));

        let removeBtn = document.createElement('button');
        removeBtn.classList.add('remove');
        removeBtn.innerText = 'Remove';
        removeBtn.addEventListener('click', () => this.remove(listItem));

        // now appending created elements to the DOM/on the page
        actions.appendChild(editBtn);
        actions.appendChild(removeBtn);
        listItem.appendChild(input);
        listItem.appendChild(actions);
        list.appendChild(listItem);
    }

    // functionality for editing list item
    update(input) {
        input.disabled = !input.disabled;
        input.focus();
    }

    // functionality for removing list item
    remove(listItem) {
        listItem.parentNode.removeChild(listItem);
    }
}

// adding eventlistener for click event on Add button
addBtn.addEventListener('click', () => newItem());

function newItem() {
    if (itemToAdd.value !== '') {
        new Item(itemToAdd.value);
        itemToAdd.value = '';
        itemToAdd.focus();
    }
}