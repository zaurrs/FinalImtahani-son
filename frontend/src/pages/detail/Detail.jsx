import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { addBasket } from '../../redux/features/BasketSlice'
import { getData } from '../../redux/features/productSlice'
import "./Detail.scss"

const Detail = () => {
  const { id } = useParams()
  const dispatch = useDispatch()
  const { products } = useSelector((state) => state.products)
  const findProduct = products.find((item) => item._id === id)

  useEffect(() => {
    dispatch(getData())
  }, [dispatch, id])

  return (
    <div className='container'>
      <div className="row mt-5">
        <div className="col-lg-6 col-sm-12 detailImg">
          <img src={findProduct?.image} alt="" />

        </div>
        <div className="col-lg-6 col-sm-12 detail">
          <>
            <h1>{findProduct?.name}</h1>
            <h4>{findProduct?.category}</h4>
            <p>{findProduct?.price}</p>
            <button onClick={() => { dispatch(addBasket(findProduct)) }}>Add Cart</button>
            </>
        </div>
      </div>
    </div>
  )
}

export default Detail