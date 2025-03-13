import { useLoaderData } from "react-router-dom";

const AllMeal = () => {
  const allMeal = useLoaderData();
  const mealsAll = allMeal.meals;
  return (
    <div>
      <h2>Hello AllMeal: {mealsAll.length}</h2>
    </div>
  );
};

export default AllMeal;
