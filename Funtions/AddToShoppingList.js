const addToShoppingList = (itemObject, setStateFn) => {
  // item category
  const itemCategory = itemObject.category;

  setStateFn((prev) => {
    const newState = { ...prev, ...prev.currentList };
    const categoryExists = Object.keys(newState.currentList).includes(
      itemCategory
    );

    // if item and category exists in cart increase it by one
    if (categoryExists) {
      const doesItemExist = newState.currentList[itemCategory].find((item) => {
        return item.name == itemObject.name;
      });
      const newCurrentList = newState.currentList[itemCategory].map((item) => {
        if (item.name === itemObject.name) {
          item.quantity += 1;
          return item;
        } else {
          return item;
        }
      });

      // if item is not present add it
      if (doesItemExist == undefined) {
        newCurrentList.push({ ...itemObject, quantity: 1 });
      }

      newState.currentList[itemCategory] = newCurrentList;
      return newState;
    } else {
      // if category not found add category and item to it
      newState.currentList[itemCategory] = [{ ...itemObject, quantity: 1 }];
      console.log("second");

      return newState;
    }
  });

  return;
};

export default addToShoppingList;

// backup

// const addToShoppingList = (itemObject, setStateFn) => {
//   const itemCategory = itemObject.category;

//   setStateFn((prev) => {
//     const newState = { ...prev, ...prev.currentList };
//     const categoryExists = Object.keys(newState.currentList).includes(
//       itemCategory
//     );

//     if (categoryExists) {
//       const itemExists = newState.currentList[itemCategory].find((item) => {
//         return item.name == itemObject.name;
//       });
//       const newCurrentList = newState.currentList[itemCategory].filter(
//         (item) => {
//           return item.name !== itemObject.name;
//         }
//       );

//       if (itemExists) {
//         newCurrentList.push({
//           ...itemExists,
//           quantity: itemExists.quantity + 1,
//         });
//         newState.currentList[itemCategory] = newCurrentList;
//         return newState;
//       } else {
//         newState.currentList[itemCategory].push({ ...itemObject, quantity: 1 });
//         return newState;
//       }
//     } else {
//       newState.currentList[itemCategory] = [{ ...itemObject, quantity: 1 }];
//       console.log("second");

//       return newState;
//     }
//   });

//   return;
// };

// export default addToShoppingList;
