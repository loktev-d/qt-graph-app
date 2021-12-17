export function addSpacesToCamelCase(string) {
  return string.replace(/([A-Z])/g, " $1");
}

export function lowerFirstLetter(string) {
  return string.charAt(0).toLowerCase() + string.slice(1);
}

export function upperFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export function lowerFirstLetterOfObjKeys(obj) {
  let entries = Object.entries(obj).map(([key, value]) => [
    lowerFirstLetter(key),
    value,
  ]);

  return Object.fromEntries(entries);
}

export function upperFirstLetterOfObjKeys(obj) {
  let entries = Object.entries(obj).map(([key, value]) => [
    upperFirstLetter(key),
    value,
  ]);

  return Object.fromEntries(entries);
}
