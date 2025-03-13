import { Link } from "react-router-dom";

const Meal = ({ meal }) => {
  const { idMeal, strMeal, strMealThumb } = meal;
  return (
    <div className="postBox">
      <img className="imgWidth" src={strMealThumb} alt="" />
      <h2>Meal ID: {idMeal}</h2>
      <p>{strMeal}</p>
      <button>
        <Link to={`/meal/${idMeal}`}>Click Meal Detail</Link>
      </button>
    </div>
  );
};

export default Meal;
