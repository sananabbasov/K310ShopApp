import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { BASE_URL } from '../api/Config';

const Category = () => {
    const {catName}=useParams();
    const [cat,setCat]=useState([])
  const getCat = async()=>{
    await fetch (BASE_URL + "products/category/"+ catName)
    .then(c=>c.json())
    .then(c=>setCat(c))
  }

  useEffect(()=> {
     getCat()
  },[catName])

  return (
    <div>
      {
          cat.map(e=>(
              <div>
                  <img src={e.image}/>
              </div>
          ))
      }
    </div>
  )
}

export default Category