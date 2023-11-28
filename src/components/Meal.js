import React, { useState } from 'react'
import MealList from './MealList'
function Meal() {
  const [search,setSearch]=useState();
  const [mymeal,setMeal]=useState()
  const searchMeal=(evt)=>{
    if(evt.key==="Enter"){
      fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
      .then(res=>res.json())
      .then(data=>
        setMeal(data.meals)
        )
    }
  }
  return (
    <div className='main'> 
        <div className='heading'>
            <h1>Search for your food recipe...</h1>
            <h4>Search it and cook it and have it</h4>
        </div>
        <div className='searchBox'>
            <input type='search' className='search-bar' placeholder='Enter Food name...' onChange={(e)=>setSearch(e.target.value)} value={search} onKeyPress={searchMeal}/>
        </div>
        <div className='container'>
            {
              (mymeal==null)? <p className='notFound'>Not Found</p> : mymeal.map((res)=>{
                return(
                  <MealList data={res}/>
                )
              })
            }
        </div>
    </div>
  )
}

export default Meal