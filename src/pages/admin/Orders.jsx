import React from 'react'
import { useSelector } from 'react-redux'

function Orders() {
  // const cart = useSelector(state => state.products.cart)
  const cart = [
    {
        "id": 65,
        "image": "https://loremflickr.com/480/640/nike air max 270 react",
        "name": "Nike Air Max 270 React",
        "description": "The Nike Air Max 270 React is a new addition to the Air Max family. It features a React foam midsole and a Max Air unit in the heel for a comfortable ride. The upper is made of a combination of mesh and synthetic materials. The shoe is available in a variety of colors and is a great addition to any sneaker collection.",
        "size": "6, 7, 8, 9, 10, 11, 12",
        "quantity": 10,
        "price": "100.0",
        "category_id": 25,
        "created_at": "2023-01-19T08:35:57.967Z",
        "updated_at": "2023-01-19T08:35:57.967Z"
    },
    {
        "id": 67,
        "image": "https://loremflickr.com/480/640/nike air max 95",
        "name": "Nike Air Max 95",
        "description": "The Nike Air Max 95 is a classic shoe that has been around for decades. It features a Max Air unit in the heel for a comfortable ride. The upper is made of a combination of mesh and synthetic materials. The shoe is available in a variety of colors and is a great addition to any sneaker collection.",
        "size": "6, 7, 8, 9, 10, 11, 12",
        "quantity": 10,
        "price": "100.0",
        "category_id": 25,
        "created_at": "2023-01-19T08:35:58.347Z",
        "updated_at": "2023-01-19T08:35:58.347Z"
    },
    {
        "id": 68,
        "image": "https://loremflickr.com/480/640/nike air max 97",
        "name": "Nike Air Max 97",
        "description": "The Nike Air Max 97 is a classic shoe that has been around for decades. It features a Max Air unit in the heel for a comfortable ride. The upper is made of a combination of mesh and synthetic materials. The shoe is available in a variety of colors and is a great addition to any sneaker collection.",
        "size": "6, 7, 8, 9, 10, 11, 12",
        "quantity": 10,
        "price": "100.0",
        "category_id": 25,
        "created_at": "2023-01-19T08:35:58.394Z",
        "updated_at": "2023-01-19T08:35:58.394Z"
    },
    {
        "id": 69,
        "image": "https://loremflickr.com/480/640/nike air max 720",
        "name": "Nike Air Max 720",
        "description": "The Nike Air Max 720 is a new addition to the Air Max family. It features a Max Air unit in the heel for a comfortable ride. The upper is made of a combination of mesh and synthetic materials. The shoe is available in a variety of colors and is a great addition to any sneaker collection.",
        "size": "6, 7, 8, 9, 10, 11, 12",
        "quantity": 10,
        "price": "100.0",
        "category_id": 25,
        "created_at": "2023-01-19T08:35:58.430Z",
        "updated_at": "2023-01-19T08:35:58.430Z"
    },
    {
        "id": 71,
        "image": "https://loremflickr.com/480/640/nike tshirt",
        "name": "Nike T-Shirt",
        "description": "The Nike T-Shirt is a classic Tee that has been around for decades. It features a stylish fit made of 100% cotton. The Tee is available in a variety of colors and is a great addition to any Tee collection.",
        "size": "S, M, L, XL",
        "quantity": 10,
        "price": "100.0",
        "category_id": 26,
        "created_at": "2023-01-19T08:35:58.497Z",
        "updated_at": "2023-01-19T08:35:58.497Z"
    },
    {
        "id": 72,
        "image": "https://loremflickr.com/480/640/nike cap",
        "name": "Nike Cap",
        "description": "The Nike Cap is a classic cap that has been around for decades. It features a stylish fit made of 100% cotton. The Cap is available in a variety of colors and is a great addition to any Cap collection.",
        "size": "S, M, L, XL",
        "quantity": 10,
        "price": "100.0",
        "category_id": 27,
        "created_at": "2023-01-19T08:35:58.536Z",
        "updated_at": "2023-01-19T08:35:58.536Z"
    }
]
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
      { cart.map((item, index) => 
        (<tr key= {`${item.id}-${index}`}>
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
        </tr>))
    }
      </tbody>
    </table>
  </div>
  )
}

export default Orders