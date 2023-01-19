import React from 'react'
import { useSelector } from 'react-redux'

function Orders() {
  const {cart} = useSelector(state => state.products)
  console.log('cart', cart)

  return (
    <div className='maindiv'>
    <table>
      <thead>
      <tr>
        <th>Images</th>
        <th>Product Name</th>
        <th>Description</th>
        <th>Price</th>
        <th>Quantity</th>
        <th>Status</th>
     </tr>
     </thead>
     <tbody>
      { cart.map((item) => 
        <tr>
         <td><img src={item.image} alt={item.name}/></td>
         <td>{item.name}</td>
         <td>{item.description}</td>
         <td>{item.price}</td>
         <td>{item.quantity}</td>
         <td>
         <select name='status' id='status' className='category'>
             <option value='Recieved'>Recieved</option>
             <option value='processing'>Processing</option>
             <option value='complete'>Complete</option>
           </select>
         </td>
        </tr>)
    }
      </tbody>
    </table>
  </div>
  )
}

export default Orders