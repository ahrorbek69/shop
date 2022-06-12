import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Productcomponents from './Productcomponents'
import { setProduct } from '../redux/action/productAction'

const ProductList = () => {
    const products = useSelector(state => state)
    const dispatch = useDispatch()

    const fetchProduct = async () => {
        const response = await axios.get('https://fakestoreapi.com/products')
        .catch(e => console.log("errore",e.message))
        dispatch(setProduct(response.data))
    }

    useEffect(()=>{
        fetchProduct()
    },[])
    console.log(products)
  return (
    <div className='ui grid container' >
        <Productcomponents />
    </div>
  )
}

export default ProductList