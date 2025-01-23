import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getData } from '../../redux/features/productSlice.js'
import "./Product.scss"
import Card from '../card/Card.jsx'
const Products = () => {
    const dispatch = useDispatch()
    const { products } = useSelector((state) => state.products)
    console.log(products);

    useEffect(() => {
        dispatch(getData())
    }, [dispatch])

    return (
        <div>
            <div className="container">
                <div className="titlePro">
                    <h1>OUR PRODUCTS</h1>
                </div>
                <div className="row cardss">
                    {
                        products && products.length > 0 ? (
                            products.map((item) => (
                                <Card product={item} key={item._id} />
                            ))
                        ) : (
                            <h1>Product Not Found</h1>
                        )
                    }

                </div>
            </div>
        </div>

    )
}

export default Products