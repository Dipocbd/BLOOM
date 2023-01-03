import React from 'react'
import { useState } from 'react';
import { trendingProducts } from "../data";


const Search = () => {
  const[query, setQuery] = useState("");
  console.log(query);

  return (
    <div>
     <input type="text"
      placeholder='Search...'
       className='search'
        onChange={(e)=> setQuery(e.target.value)}/>
     <ul className='list'>
     {trendingProducts.filter(item=>item.title.toLowerCase().includes(query)).map(item =>(
        <li className='listItem' key={item.id}>{item.title}
        <img src={item.img}/>
        </li>
       ))}
     </ul>
    </div>
  )
}




export default Search