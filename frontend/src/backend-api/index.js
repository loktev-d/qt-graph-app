export async function loadFile() {
  await window.backend.openFile();
  let res = await window.backend.getGraphData();
  return JSON.parse(res);
}

const api = {
  loadFile,
};

export default api;
