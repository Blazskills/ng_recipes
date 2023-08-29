
import { AllRecipes, FavoriteRecipe, Hero } from "../../components";
// import { Hero } from "../../components/Hero";

export const Home = () => {
  return (
    <div>
      <Hero/>
      <AllRecipes/>
      <FavoriteRecipe/>
    </div>
  );
};
