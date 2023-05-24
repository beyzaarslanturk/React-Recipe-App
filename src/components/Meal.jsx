import React, { useEffect, useState } from 'react'
import MealItem from './MealItem'
import RecipeIndex from './RecipeIndex'


const Meal = () => {
    const [url,setUrl] = useState("https://www.themealdb.com/api/json/v1/1/search.php?f=a")
    const [item,setItem] = useState();
    const [show,setShow] = useState(false);
    const [search, setSearch] = useState();

    useEffect (() => {
        fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data.meals);
            setItem(data.meals);
            setShow(true);
        })
    }, [url])

    const setIndex = (alpha) => {
        setUrl(`https://www.themealdb.com/api/json/v1/1/search.php?f=${alpha}`)
    }

    const searchRecipe = (evt) => {
        if(evt.key === "Enter") {
            setUrl(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
        }
    }

    return (
        <>
            <div className="main my-0 mx-auto text-center w-[80%]">
                <div className="heading pt-10">
                    <h1 className='text-4xl text-slate-700 font-bold'>Search Your Food Recipe</h1>
                    <h4 className='text-lg text-slate-700 font-bold py-3'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis fuga sapiente natus perspiciatis esse!</h4>
                </div>
                <div className="searchBox">
                    <input 
                    type="search" 
                    className="search-bar border-0 outline-0 rounded-xl py-1 px-10" 
                    onChange={e => setSearch(e.target.value)}
                    onKeyPress={searchRecipe}
                    />
                </div>
                <div className="container w-[90%] my-10 flex items-center justify-center mx-auto">
                    <div className="card-container grid gap-x-5 gap-y-10 my-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
                    
                    {
                        show ? <MealItem data={item} /> : "Not Found"
                    }
                    </div>
                </div>
                <div className="indexContainer flex flex-wrap justify-center">
                    <RecipeIndex alphaIndex= {(alpha) => setIndex(alpha)}/>
                </div>
            </div>
        </>
    )
}

export default Meal