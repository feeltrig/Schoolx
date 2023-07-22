const handleItemCount = (operation, setStateFn, itemObject) => {
  const itemCategory = itemObject.category;

  if (operation == "add") {
    setStateFn((prev) => {
      const newState = { ...prev };

      const newCurrentList = newState[itemCategory].map((item) => {
        if (item.name === itemObject.name) {
          item.quantity += 1;
          return item;
        } else {
          return item;
        }
      });

      newState[itemCategory] = newCurrentList;
      return newState;
    });
  } else if (operation == "subtract") {
    setStateFn((prev) => {
      const newState = { ...prev };

      const newCurrentList = newState[itemCategory].map((item) => {
        if (item.name === itemObject.name) {
          if (item.quantity == 1) {
            return { name: "remove" };
          }
          item.quantity -= 1;
          return item;
        } else {
          return item;
        }
      });

      const final = newCurrentList.filter((item) => {
        return item.name !== "remove";
      });

      newState[itemCategory] = final;
      return newState;
    });
  }
};

export default handleItemCount;
