import React, { useEffect, useState } from 'react'
import { BASE_URL } from '../api/Config'
import Product from '../components/Product/Product'

function Home() {

  const [category, setCategory] = useState([])

  const getCategories = async () => {
    await fetch(BASE_URL + "products/categories")
      .then(res => res.json())
      .then(data => setCategory(data))
  }

  useEffect(() => {
    getCategories()
  }, [])

  return (
    <>
      {
        category.map(cat => (
          <Product categoryName={cat} />
        ))
      }
    </>
  )
}

export default Home