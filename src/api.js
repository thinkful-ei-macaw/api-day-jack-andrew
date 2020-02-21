
const BASE_URL = 'https://thinkful-list-api.herokuapp.com/JackAndrew';

function getItems() {
  return fetchListApi(`${BASE_URL}/items`);
}

function createItem(name) {
  const newItem = JSON.stringify({
    name: name
  });
  
  return fetchListApi(`${BASE_URL}/items`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: newItem,
  });
}

function deleteItem(id) {
  return fetchListApi(`${BASE_URL}/items/${id}`, {
    method: 'DELETE'
  });

}

function updateItem(id, updateData) {
  return fetchListApi(`${BASE_URL}/items/${id}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json'},
    body: JSON.stringify(updateData),
  });
}

function fetchListApi(...args) {
  let error;
  return fetch(...args)
    .then(res => {
      if(!res.ok) {
        error = { code: res.status };
      }
      if (!res.headers.get('content-type').includes('json')) {
        error.message = res.statusText;
        return Promise.reject(error);
      }
      return res.json();
    })
    .then(data => {
      if(error) {
        error.message = data.message;
        return Promise.reject(error);
      }
      return data;
    });

}

export default {
  getItems,
  createItem,
  updateItem,
  deleteItem
};