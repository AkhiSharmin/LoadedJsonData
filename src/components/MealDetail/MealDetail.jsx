import { useLoaderData } from "react-router-dom";

const MealDetail = () => {
  const mealDetails = useLoaderData();
  const meal = mealDetails.meals?.[0];
  const { strMealThumb, idMeal, strMeal } = meal;

  //   if (!meal) {
  //     return <h2>No meal found</h2>;
  //   }

  return (
    <div className="postBox">
      <img className="imgWidth" src={strMealThumb} alt={meal.strMeal} />
      <h2>Meal ID: {idMeal}</h2>
      <h3>{strMeal}</h3>
    </div>
  );
};

export default MealDetail;
