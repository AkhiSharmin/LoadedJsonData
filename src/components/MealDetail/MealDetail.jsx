import { useLoaderData } from "react-router-dom";

const MealDetail = () => {
  const mealDetails = useLoaderData();
  const { idMeal, strMeal, strMealThumb } = mealDetails;
  return (
    <div className="postBox">
      <img className="imgWidth" src={strMealThumb} alt="" />
      <h2>Meal ID: {idMeal}</h2>
      <p>{strMeal}</p>
    </div>
  );
};

export default MealDetail;
