import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { BASE_URL } from '../../api/Config';

function Detail({detailId}) {
    
    const [product, setProduct] = useState([]);

    const getProduct = async () => {
        await fetch(BASE_URL + "products/" + detailId)
            .then(s => s.json())
            .then(data => setProduct(data))
    }

    console.log(product);
    useEffect(() => {
        getProduct()
    }, [])
    return (
        <div>
            <div className="card">
                <div className="card-header">
                    <div className="row">
                        <div className="col-lg-4">
                            <img className='img-fluid' src={product.image} alt="" />
                        </div>
                        <div className="col-lg-8">
                            <h5>{product.title}</h5>
                            <p>{product.description}</p>
                        </div>
                    </div>
                </div>
                <div className="card-body">

                </div>
            </div>
        </div>
    )
}

export default Detail