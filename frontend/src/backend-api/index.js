export async function loadFile() {
  await window.backend.openFile();
  let res = await window.backend.getTableData();
  return JSON.parse(res);
}

export async function editTableItem(item) {
  let param = JSON.stringify(item);
  let res = await window.backend.editItem(param);
  return JSON.parse(res);
}

export async function addTableItem(item) {
  let param = JSON.stringify(item);
  let res = await window.backend.addItem(param);
  return JSON.parse(res);
}

export async function deleteTableItems(ids) {
  let param = JSON.stringify(ids);
  let res = await window.backend.deleteItems(param);
  return JSON.parse(res);
}

export async function saveTableData() {
  return window.backend.saveFile();
}

const api = {
  loadFile,
  editTableItem,
  addTableItem,
  deleteTableItems,
  saveTableData,
};

export default api;
