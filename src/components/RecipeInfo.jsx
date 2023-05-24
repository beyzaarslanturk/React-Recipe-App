import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'


const RecipeInfo = () => {
    const [item, setItem] = useState();
    const { MealId } = useParams();


    useEffect(() => {
        if (MealId !== "") {
            fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${MealId}`)
                .then(res => res.json())
                .then(data => {
                    setItem(data.meals[0]);
                })
        }
    }, [MealId])
    
    if(item) {
        const url = item.strYoutube;
        const str = url.split("=");
        
    }

    return (
        <>
            {
                (!item) ? "" : (
                    <>

                        <div className="content flex items-center justify-center relative my-10">
                            <img className='md:w-[40%] md:h-[40%] w-[70%] h-[70%] rounded-xl' src={item.strMealThumb} alt="" />
                            <div className="inner-content absolute bg-white p-3 text-center font-bold text-slate-700 opacity-75">
                                <h1>{item.strMeal}</h1>
                                <h2>{item.strArea}</h2>
                                <h3>Category {item.strCategory}</h3>
                            </div>
                        </div>

                        <div className="recipe-details flex flex-col items-start md:flex-row justify-evenly mb-10 mx-10 md:mx-0">
                            <div className="ingredients">
                                <h2 className='font-bold text-xl text-slate-700 pb-3'>Ingredients</h2>
                                <h4 className='text-slate-700'>{item.strIngredient1} : {item.strMeasure1}</h4>
                                <h4 className='text-slate-700'>{item.strIngredient2} : {item.strMeasure2}</h4>
                                <h4 className='text-slate-700'>{item.strIngredient3} : {item.strMeasure3}</h4>
                                <h4 className='text-slate-700'>{item.strIngredient4} : {item.strMeasure4}</h4>
                                <h4 className='text-slate-700'>{item.strIngredient5} : {item.strMeasure5}</h4>
                                <h4 className='text-slate-700'>{item.strIngredient6} : {item.strMeasure6}</h4>
                                <h4 className='text-slate-700'>{item.strIngredient7} : {item.strMeasure7}</h4>
                                <h4 className='text-slate-700'>{item.strIngredient8} : {item.strMeasure8}</h4>
                                <h4 className='text-slate-700'>{item.strIngredient9} : {item.strMeasure9}</h4>
                            </div>
                            <div className="instructions text-slate-700 pt-10 md:pt-0 md:w-[70%] w-[90%]]">
                                <h2 className='font-bold text-xl pb-3'>Instructions</h2>
                                <h4>{item.strInstructions}</h4>
                            </div>
                        </div>
                        <div className="video mb-10">
                            <iframe title='title' className='rounded-xl w-[90%] h-[400px] md:h-[500px] mx-auto md:w-[70%]' src={`https://www.youtube.com/embed/${item.strYoutube.split("=").pop()}`}></iframe>
                        </div>

                    </>
                )
            }
        </>
    )
}

export default RecipeInfo