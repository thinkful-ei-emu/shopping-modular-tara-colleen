'use strict'
/*global store*/

const store = (function() {
  
  let items = [
    { id: cuid(), name: 'apples', checked: false },
    { id: cuid(), name: 'oranges', checked: false },
    { id: cuid(), name: 'milk', checked: true },
    { id: cuid(), name: 'bread', checked: false }
  ];
  let hideCheckedItems = false;
  let searchTerm = '';
  
  function findById(id) {
    return items.find(item => id===item.id);
  }

  function addItem(name) {
    try {
      console.log(Item.validateName(name));
      this.items.push(Item.create(name));
      shoppingList.render();
    }
    catch(error) {
      console.log(`Cannot add item: ${error.message}`);
    }
  }

  function findAndToggleChecked(id) {
    const item = this.findById(id);
    item.checked = !item.checked;
  }

  function findAndUpdateName(id, newName) {
    const item = this.findById(id);
    try {
      Item.validateName(newName);
      item.name = newName;
      render();
    }
    catch(error) {
      console.log(`Cannot change item: ${error.message}`);
    }
  }

  function findAndDelete(id) {
    const item = this.findById(id);
    index = item.indexOf(item);
    store.items.splice(index, 1);
  }

  return {
    items,
    hideCheckedItems,
    searchTerm,
    findById,
    addItem,
    findAndToggleChecked,
    findAndUpdateName,
    findAndDelete
  }
}());