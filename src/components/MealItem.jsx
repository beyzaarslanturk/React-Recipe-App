import React from 'react'
import { useNavigate } from 'react-router-dom';

const MealItem = ({ data }) => {
  console.log(data);
  let navigate = useNavigate();
  return (
    <>
      {
        (!data) ? "Not Found" : data.map(item => {
          return (
            <div 
            className="card p-3 bg-red-300 rounded-lg"
            key={item.idMeal}
            onClick={() => {navigate(`/${item.idMeal}`)}}>
              <img className='rounded-lg' src={item.strMealThumb} alt="" />
              <h3 className='text-slate-700 pt-3 text-lg'>{item.strMeal}</h3>
            </div>
          )
        })
      }

    </>
  )
}

export default MealItem