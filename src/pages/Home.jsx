import { Search } from "lucide-react";
import React, { useState, useEffect } from "react";
import ReciprCard from "../components/ReciprCard";

const APP_ID = "3abc6b39";
const APP_KEY = "8f90e4a26e7f26e1bb43258b3672b96f";

const Home = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setloading] = useState(true);

  const fetchRecipes = async (searchQuery) => {
    setloading(true);
    setRecipes([]);
    try {
      const res = await fetch(
        `https://api.edamam.com/api/recipes/v2/?app_id=${APP_ID}&app_key=${APP_KEY}&q=${searchQuery}&type=public`
      );
      const data = await res.json();
      console.log(data.hits)
      setRecipes(data.hits);
    } catch (error) {
      console.error(error);
    } finally {
      setloading(false);
    }
  };

  useEffect(() => {
    fetchRecipes("Meet");
  }, []);


  return (
    <>
      <div className="bg-[#faf9fb] p-10 flex-1">
        <div className="max-w-screen-lg mx-auto">
          <form>
            <label className="input flex shadow-md items-center gap-2">
              <Search size={24} />
              <input
                type="text"
                className="text-sm md:text-md grow"
                placeholder="What do you want to cook today"
              />
            </label>
          </form>
          <h1 className="font-bold text-3xl md:text-5xl mt-4">
            Recommended Recipes
          </h1>
          <p className="text-slate-500 font-semibold ml-1 my-2 text-sm tracking-tight ">
            Popular Choices
          </p>
        </div>

        <div className="grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {!loading &&
            recipes.map(({ recipe }, index) => (
              <ReciprCard key={index} recipe={recipe} />
            ))}

          {loading &&
            [...Array(9)].map((_, index) => (
              <div key={index} className="flex flex-col gap-4 w-full">
                <div className="skeleton h-32 w-full"></div>
                <div className="flex justify-between">
                  <div className="skeleton h-4 w-24"></div>
                  <div className="skeleton h-4 w-24"></div>
                </div>
                <div className="skeleton h-4 w-1/2"></div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default Home;
