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
    <div className="bg-[url('/background.png')] bg-cover h-screen">
      <h2 className=" text-5xl text-center py-3 font-semibold text-yellow-500"> Mahadi Food Store </h2> 
      <p className="text-3xl text-center mt-3 font-semibold">Let's search your favorite <span className="text-yellow-500">fooood!!!</span> </p>
    <div className="text-center space-x-5 mt-3"> 
    <input className="w-[200px] h-[30px] px-3 py-5 border rounded-full" type="text" placeholder="Search food Name" onChange={handleInput}/>
     <button className="border border-black rounded-md px-4 py-1 hover:bg-green-500 hover:text-black "> Search </button>
    </div>
     <div className="grid grid-cols-5 gap-4 mt-3">
      {
       meals.map((meal,index)=> <div className="p-3 shadow" key={meal.idMeal}>
      <img src={ meal.strMealThumb } className=" rounded-xl" alt=""/>
      <div className="flex items-center flex-item-center justify-between py-3 ">
      <h2 className="text-[15px] bg-orange-500 rounded-full px-2 py-1 text-white"> {meal.strMeal} </h2>
      <span className="text-[15px] bg-green-500 text-white rounded-full px-2 py-1 ">
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