import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import { useDispatch, useSelector } from 'react-redux';
import { addData, deleteData, getData, searchInput, sortHigh, sortLow } from '../../redux/features/productSlice';
import { useFormik } from 'formik';
import { schema } from '../../schema/ProductSchema';
import "./Admin.scss"

const Admin = () => {

  const dispatch = useDispatch()
  const { products } = useSelector((state) => state.products)
  console.log(products);

  useEffect(() => {
    dispatch(getData())
  }, [dispatch])




  const { handleChange, handleSubmit, resetForm, values, errors } = useFormik({
    initialValues: {
      image: '',
      name: '',
      price: '',
      category: '',
    },
    onSubmit: values => {
      dispatch(addData(values))
    },
    validationSchema: schema
  });


  const [modal, setModal] = useState(false)
  const openModal = () => {
    setModal(true)
  }
  const closeModal = () => {
    setModal(false)
  }
  return (
    <div>
      {
        modal ? (
          <div className='overlay'></div>

        ) : (<p></p>)
      }
      {
        modal ? (
          <form action="" onSubmit={() => handleSubmit()} className='adminForm'>
            <div className='inp'>
              <label htmlFor="image">Image</label>
              <input placeholder='Image...' type="url" name="image" id="image" onChange={handleChange} defaultValue={values.image} />
              <span style={{ color: "red" }}>{errors.image}</span>
            </div>

            <div className='inp'>
              <label htmlFor="name">Name</label>
              <input placeholder='Name...' type="text" name="name" id="name" onChange={handleChange} defaultValue={values.name} />
              <span style={{ color: "red" }}>{errors.name}</span>

            </div>

            <div className='inp'>
              <label htmlFor="price">Price</label>
              <input type="number" name="price" id="price" placeholder='Price...' onChange={handleChange} defaultValue={values.price} />
              <span style={{ color: "red" }}>{errors.price}</span>

            </div>

            <div className='inp'>
              <label htmlFor="category">Category</label>
              <input placeholder='Category...' type="text" name="category" id="category" onChange={handleChange} defaultValue={values.category} />
              <span style={{ color: "red" }}>{errors.category}</span>

            </div>

            <button type='submit'>Submit</button>
            <button onClick={closeModal}>close</button>
          </form>
        ) : (<p></p>)
      }

      <button onClick={() => openModal()}>Create</button>
      <br />
      <button onClick={() => { dispatch(sortLow()) }}>Low to High</button>
      <input type="text" onChange={(e) => dispatch(searchInput(e.target.value))} />
      <button onClick={() => { dispatch(sortHigh()) }}>High to Low</button>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Category</th>
            <th>Price</th>
            <th>Settings</th>
          </tr>
        </thead>
        <tbody>
          {
            products && products.length > 0 ? (
              products.map((item) => (
                <tr key={item._id}>
                  <td><img style={{ width: "100px", height: "100px" }} src={item.image} alt="" /></td>
                  <td>{item.name}</td>
                  <td>{item.category}</td>
                  <td>${item.price}</td>
                  <td><button onClick={() => dispatch(deleteData(item._id))}>Delete</button></td>
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
    </div>
  )
}

export default Admin