import React, { useEffect, useState } from 'react'
import { BASE_URL } from '../../api/Config'
import '../Product/product.scss'
const Product = () => {
    const [product, setProduct] = useState([])


    const getProducts = async () => {
        await fetch(BASE_URL + "products")
            .then(res => res.json())
            .then(data => setProduct(data))
    }

    useEffect(() => {
        getProducts()
    }, [])

    return (
        <section id='product'>
            <div className="container">
                <div className="row">
                    {
                        product.map(e => (
                            <div className='col-lg-3' key={e.id}>
                                <img className='img-fluid' src={e.image} alt="" />
                                <h5>{e.title}</h5>
                                <p>{e.price}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default Product