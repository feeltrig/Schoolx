export const objectToArray = (obj) => {
  return Object.keys(obj).map((objitem) => {
    return {[objitem]: obj[objitem]};
  });
};
