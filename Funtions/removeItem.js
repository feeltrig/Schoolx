// removes item from currentList

const removeItem = (itemObj, setStateFn) => {
  setStateFn((prev) => {
    const newState = { ...prev, ...prev.currentList };
    const newCategory = newState.currentList[itemObj.category].filter(
      (item) => {
        return item.name !== itemObj.name;
      }
    );

    newState.currentList[itemObj.category] = newCategory;
    return newState;
  });
};

export default removeItem;
