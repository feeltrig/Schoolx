// goto page with data nextjs
export const gotoPageWithData = (router, pathname, data) => {
  router.push({
    pathname: pathname,
    query: data,
  });
};

export const gotoPage = (router, pathname) => {
  router.push({
    pathname: pathname,
  });
};
