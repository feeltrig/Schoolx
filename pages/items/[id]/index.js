const Somethingindex = () => {
  return <div>Nothing</div>;
};

export default Somethingindex;

export const getStaticprops = (context) => {
  console.log("this is static");
  const variable = `${context.params.id}`;

  return {
    props: {
      data: variable,
    },
  };
};
