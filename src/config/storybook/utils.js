export const sortByKey = (array, key) => array.sort((a, b) => {
  const x = a[key];
  const y = b[key];
  return x < y ? -1 : x > y ? 1 : 0;
});

export const sort = (key, side) => {
  console.log('sorting key:', key);
  console.log('sorting side:', side);
};
