export const objectToArray = (obj) => {
  return Object.keys(obj).map((objitem) => {
    return {[objitem]: obj[objitem]};
  });
};

// clear search text
export const clearStringState = (setstate) => {
  setstate("");
};

// intialize state
export const initializeState = (initialData, setstate) => {
  setstate(initialData);
};

// filter strings in array
export const excludeStringFieldsArray = (arrayData, excludeArray) => {
  return arrayData.filter(
    (item) =>
      !lowerCaseArray(excludeArray).includes(item.toString().toLowerCase())
  );
};

// lowerCase all strings in array
export const lowerCaseArray = (arrayData) => {
  return arrayData.map((item) => item.toString().toLowerCase());
};

// array generator with length mentioned
export const arrayFromLength = (length) => {
  return Array.from({length});
};

// set data64 image url to state
export const toData64URLImage = (file, setstate) => {
  const reader = new FileReader();
  reader.onloadend = () => {
    setstate(reader.result);
  };
  reader.readAsDataURL(file);
};

// toggle state
export const toggleState = (state, value) => {
  state(value);
};

// toggle object state
export const toggleObjectState = (state, fieldName, value) => {
  state((obj) => ({...obj, [fieldName]: value}));
};

// ARRAY OF OBJECTS FUNCTIONS //

// set single field in array for all
export const setFieldValueAllArray = (state, fieldName, value) => {
  state((arr) => arr.map((i) => ({...i, [fieldName]: value})));
};

// set value in single item in array
export const setSingleItemInArrayByIndex = (state, fieldName, value, index) => {
  state((arr) =>
    arr.map((arrData, arrDataIndex) =>
      arrDataIndex === index ? {...arrData, [fieldName]: value} : arrData
    )
  );
};
export const setSingleItemInArrayByField = (
  state,
  fieldName,
  value,
  checkfield,
  checkfieldvalue
) => {
  state((arr) =>
    arr.map((arrData) =>
      arrData[checkfield] === checkfieldvalue
        ? {...arrData, [fieldName]: value}
        : arrData
    )
  );
};

// get all items from array with condition
export const getAllItemsWithConditionArray = (arr, fieldName, isEqualsTo) => {
  return arr.filter((arrItem) => {
    return arrItem[fieldName] === isEqualsTo;
  });
};
