import { useLoaderData } from "react-router-dom";
import Meal from "../Meal/Meal";

const AllMeal = () => {
  const allMeal = useLoaderData();
  const mealAll = allMeal.meals;
  return (
    <div>
      <h2>Hello AllMeal: {mealAll.length}</h2>
      <div className="gridStyle">
        {mealAll.map((meal) => (
          <Meal key={meal.idMeal} meal={meal}></Meal>
        ))}
      </div>
    </div>
  );
};

export default AllMeal;
