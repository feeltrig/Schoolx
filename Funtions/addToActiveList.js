const addToActiveList = (itemObj, setStateFn, isEmpty) => {
  const newDate = new Date();

  if (!isEmpty) {
    const currentShoppingList = {
      name: shoppingListName,
      list: itemObj,
      date: newDate.toLocaleDateString(),
      status: "incomplete",
    };

    setStateFn((prev) => {
      const newHistory = [...prev.history].concat(currentShoppingList);
      return { ...prev, history: newHistory, currentList: {} };
    });

    setshoppingListName("");
  } else {
    alert("fill up dickhead");
  }
};

export default addToActiveList;
