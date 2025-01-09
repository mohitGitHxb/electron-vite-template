export function getTimestamp() {
  return new Date().getTime();
}

export function getUuid() {
  return `${getTimestamp()}-${Math.floor(Math.random() * 100000)}`;
}
