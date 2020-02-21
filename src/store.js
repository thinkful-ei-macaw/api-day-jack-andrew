const items = [];
let hideCheckeditems = false;
let requestError = '';

const findById = function (id) {
  return this.items.find(currentItem => currentItem.id === id);
};

const addItem = function (item) {
  this.items.push(item);
};

const findAndDelete = function (id) {
  this.items = this.items.filter(currentItem => currentItem.id !== id);
};

const toggleCheckedFilter = function () {
  this.hideCheckedItems = !this.hideCheckedItems;
};

const findAndUpdate = function(id, newData) {
  const item = this.findById(id);
  Object.assign(item, newData);
};

const setError = function(error) {
  this.requestError = error;
}

const getError = function() {
  return this.requestError;
}

export default {
  items,
  hideCheckeditems,
  findById,
  addItem,
  findAndDelete,
  findAndUpdate,
  toggleCheckedFilter,
  setError,
  getError,
};