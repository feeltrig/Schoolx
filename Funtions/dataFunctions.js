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

// clear search filter
export const excludeStringFieldsArray = (arrayData, excludeArray) => {
  return arrayData.filter(
    (item) =>
      !lowerCaseArray(excludeArray).includes(item.toString().toLowerCase())
  );
};

// lowerCase all string in array
export const lowerCaseArray = (arrayData) => {
  return arrayData.map((item) => item.toString().toLowerCase());
};

// array with length mentioned
export const arrayFromLength = (length) => {
  return Array.from({length});
};

// set data64 image url to state
export const toData64URLImage = (file, setstate) => {
  const reader = new FileReader();
  reader.onloadend = () => {
    console.log(reader.result);
    setstate(reader.result);
  };
  reader.readAsDataURL(file);
};
