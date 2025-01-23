import React from 'react'
import Table from 'react-bootstrap/Table';
import { useDispatch, useSelector } from 'react-redux';
import { deleteBasket, minusBtn, plusBtn } from '../../redux/features/BasketSlice';

const Basket = () => {
  const dispatch = useDispatch()
  const { basket } = useSelector((state) => state.basket)
  const total = basket.reduce((acc, item) => acc + item.price * item.count, 0)


  return (
    <div>


      <Table striped bordered hover>
        <thead>
          <tr>
            <th>img</th>
            <th> Name</th>
            <th>Price</th>
            <th>Count</th>
            <th>Settings</th>
          </tr>
        </thead>
        <tbody>

          {
            basket && basket.length > 0 ? (
              basket.map((item) => (
                <tr key={item._id}>
                  <td><img style={{ width: "100px", height: "100px" }} src={item.image} alt="" /></td>
                  <td>{item.name}</td>
                  <td>{item.category}</td>
                  <td>${item.price * item.count}</td>
                  <td>
                    <button onClick={() => dispatch(minusBtn(item))}>-</button>
                    <p>{item.count}</p>
                    <button onClick={() => dispatch(plusBtn(item))}>+</button>
                  </td>
                  <td><button onClick={() => dispatch(deleteBasket(item._id))}>Delete</button></td>
                </tr>
              ))
            ) : (
              <tr>
                <th>
                  <h1>product not found</h1>
                </th>
              </tr>
            )
          }
        </tbody>
      </Table>
      <h1>Total Price: {total}</h1>
    </div>
  )
}

export default Basket