export async function loadFile() {
  await window.backend.openFile();
  let res = await window.backend.getTableData();
  return JSON.parse(res);
}

export async function editTableItem(index, item) {
  let res = await window.backend.editItem(index, item);
  return JSON.parse(res);
}

export async function addTableItem(item) {
  let res = window.backend.addItem(item);
  return JSON.parse(res);
}

export async function deleteTableItem(index) {
  let res = window.backend.deleteItem(index);
  return JSON.parse(res);
}

export async function saveTableData() {
  return window.backend.saveFile();
}

const api = {
  loadFile,
  editTableItem,
  addTableItem,
  deleteTableItem,
  saveTableData,
};

export default api;
