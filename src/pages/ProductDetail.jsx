import React from 'react'
import { useParams } from 'react-router-dom';
import Detail from '../components/Product/Detail'

function ProductDetail() {
    const { id } = useParams();
  return (
    <>
        <Detail detailId={id} />
    </>
  )
}

export default ProductDetail