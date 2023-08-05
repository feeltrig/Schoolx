export const objectToArray = (obj) => {
  return Object.keys(obj).map((objitem) => {
    return {[objitem]: obj[objitem]};
  });
};

// clear search text
export const clearStringState = (setstate) => {
  setstate("");
};

// clear search filter
export const clearSearchFilter = (initialData, setstate) => {
  setstate(initialData);
};
