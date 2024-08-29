import React from 'react'
import NotFound from "../Assests/404.svg";
import ReciprCard from "../components/ReciprCard";
import { getRandomColor } from '../library/CardColorLibr';

const Favorites = () => {
  const fav = JSON.parse(localStorage.getItem("favorites")) || [];

  return (
    <>
      <div className='bg-[#faf9fb] flex-1 p-10 min-h-screen'>
        <div className='max-w-screen-lg mx-auto'>
          <p className='font-bold text-3xl md:text-5xl my-4'>My Favorites</p>

          {!fav && (
            <div className='h-[70vh] flex  flex-col items-cemter gap-4'>
              <img src={NotFound} alt="404 svg" className='h-3/4 ' />
            </div>
          )}

          <div className="grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {fav.map((recipe) => (
              <ReciprCard key={recipe.label} recipe={recipe}{...getRandomColor} />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Favorites
