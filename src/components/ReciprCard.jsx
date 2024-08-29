import React from 'react'
import { Heart, HeartPulse, Soup } from "lucide-react";
// import fgh from "../Assests/1.jpg";


const ReciprCard = (recipe) => {
  return (
      <>
        <div className="flex flex-col rounded-md bg-[#ecf7d4]  p-3 relative">
            <a href="#" className="relative h-32">
                <img
                  src={recipe.image}
                  alt="Racipe Img"
                  className="rounded-md w-full h-full object-cover cursor-pointer"
                />
                <div className="absolute bottom-2 left-2 bg-white rounded-full p-1 cursor-pointer flex items-center gap-1 text-sm">
                  <Soup size={16}/><span>{recipe.yield} Servings</span>
              </div>
              <div className="absolute bg-slate-100 p-1 rounded-full top-1 right-1">
                <Heart size={20} className="hover:fill-red-500  hover:text-red-500"/>
              </div>

            </a>
            <div className="flex mt-1">
          <p className="font-bold tracking-wide">{ recipe.label}</p>
            </div>
        <p className="my-2 ">{ recipe.cuisineType} Kitchen</p>
            <div className="flex gap-2 mt-auto">
            <span className="badge rounded-[8px] bg-[#d6f497] p-1 py-3"><HeartPulse size={16} className="m-1"/> Badgedge</span>
            <span className="badge rounded-[8px] bg-[#d6f497] p-1 py-3"><HeartPulse size={16} className="m-1"/> Badgedge</span>
            </div>

          </div>  
    </>
  )
}

export default ReciprCard
