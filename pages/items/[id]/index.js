const Somethingindex = () => {
  return <div>Nothing</div>;
};

export default Somethingindex;

export const getStaticprops = (context) => {
  const variable = `${context.params.id}`;

  return {
    props: {
      data: variable,
    },
  };
};
