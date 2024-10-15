import { useEffect } from "react";
import { useState } from "react";
const app = () =>{
  const[meals,setmeals] = useState([]);
  const [search, setSearch] = useState("")
  useEffect (()=> {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
    .then((response)=> response.json())
    .then((data)=> setmeals(data.meals))
  },[search])
  console.log(meals);
  const handleInput=(e)=>{
    const value = e.target.value;
    setSearch(value)
  }
  return(
    <div>
      <h2 className="bg-yellow-500 text-5xl text-center"> MAHADI FOOD STORE!!! </h2> 
      <p className="text-3xl text-center">Let's search your favorite fooood!!! </p>
    <div className="text-center"> 
    <input type="text" placeholder="search Food Name" onChange={handleInput}/>
     <button className="bg-green-500 rounded-md px-2"> SEARCH </button>
    </div>
     <div className="grid grid-cols-4 gap-4">
      {
       meals.map((meal,index)=> <div className="p-3 shadow" key={meal.idMeal}>
      <img src={ meal.strMealThumb } className=" rounded-xl" alt=""/>
      <div className="flex items-center flex-item-center justify-between">
      <h2> {meal.strMeal} </h2>
      <span className="text-[15px] bg-green-500 text-white rounded-full px-2">
        {meal.strArea}</span>
         </div>
      </div>)
      }
    </div>
    </div>
  )
}
export default app


//<div className="flex-item-center justify-between"></div>