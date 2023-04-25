export default function updateItems(map) {
  if (map instanceof Map) {
    for (const [key, val] of map.entries()) {
      if (val === 1) {
        map.set(key, 100);
      }
    }
  } else {
    throw new Error('Cannot process');
  }
  return map;
}
