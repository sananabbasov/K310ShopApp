import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { BASE_URL } from '../../api/Config'

const Header = () => {
    const [cat,setCat]=useState([])
    const getCat = async()=>{
      await fetch (BASE_URL + "products/categories")
      .then(c=>c.json())
      .then(c=>setCat(c))
      
    
    }
    useEffect(()=> {
      getCat()
    },[])

  return (
    <div>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        {
          cat.map(e=>(
            <Link to={"/category/" + e} >{e}</Link>
          ))
        }
        
    </div>
  )
}

export default Header