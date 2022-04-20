import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { BASE_URL } from '../../api/Config'
import '../Product/product.scss'
const Product = ({categoryName}) => {
    const [product, setProduct] = useState([])

    const getProducts = async () => {
        await fetch(BASE_URL + "products/category/"+categoryName)
            .then(s => s.json())
            .then(data => setProduct(data))
    }

    useEffect(() => {
        getProducts()
    }, [])


    return (
        <section id='product'>
            <h4>{categoryName}</h4>
            <div className="container">
                <div className="row">
                    {
                        product.map(e => (
                            <div className='col-lg-3' key={e.id}>
                                <Link to={"product/"+e.id}>
                                    <img className='img-fluid' src={e.image} alt="" />
                                    <h5>{e.title}</h5>
                                    <p>{e.price}</p>
                                </Link>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default Product