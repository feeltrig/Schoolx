// ADD CATEGORY
const AddCategory = (val, setState) => {
  setState((prev) => {
    const newState = { ...prev };
    newState.items[val] = [];
    return newState;
  });
};

export default AddCategory;
