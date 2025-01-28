const Category = async () => {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return <div>Category</div>;
};

export default Category;
