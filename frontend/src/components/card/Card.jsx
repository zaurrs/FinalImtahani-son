import React from 'react'
import "./Card.scss"
import { useDispatch } from 'react-redux'
import { addBasket } from '../../redux/features/BasketSlice'
import { useNavigate } from 'react-router-dom'
const Card = ({ product }) => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    return (

        <div className="col-lg-3 col-md-6 col-sm-12 myCart" onClick={()=>navigate(`/detail/${product._id}`)}>
            <img src={product.image} alt="" />
            <div className="cardContainer">
                <h4>{product.name}</h4>
                <p>{product.price}</p>
                <button onClick={(e)=>{e.stopPropagation() ,dispatch(addBasket(product))}}>Add to cart</button>
            </div>
        </div>
    )
}

export default Card