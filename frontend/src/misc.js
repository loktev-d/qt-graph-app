export function addSpacesToCamelCase(string) {
  return string.replace(/([A-Z])/g, " $1");
}

export function lowerFirstLetter(string) {
  return string.charAt(0).toLowerCase() + string.slice(1);
}
