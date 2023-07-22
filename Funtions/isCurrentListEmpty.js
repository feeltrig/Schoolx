const isCurrentListEmpty = (obj) => {
  const allValues = Object.values(obj);
  let itsEmpty = true;

  allValues.forEach((item) => {
    if (item.length > 0) {
      itsEmpty = false;
    }
  });

  if (itsEmpty) {
    return itsEmpty;
  } else {
    return itsEmpty;
  }
};

export default isCurrentListEmpty;
