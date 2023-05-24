import React from "react";

const RecipeIndex = ({alphaIndex}) => {
    const alpha = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M",
        "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

    var num = 0;

    return (
        <>
            {
                alpha.map(item => {
                    return (
                        <div 
                            className="numBox cursor-pointer w-[35px] bg-red-300 mx-2 flex justify-center items-center wrap mb-2 text-slate-700 font-bold"
                            key={num++}
                            onClick={() => alphaIndex(item)}>
                            <h3>{item}</h3>
                        </div>
                    )
                })
            }
        </>
    )
}

export default RecipeIndex;