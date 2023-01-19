import {useState} from 'react'
import '../../css/admin/pages.css'

function NewProduct() {
  const [image, setImage] = useState()
  const [name, setName] = useState()
  const [description, setDescription] = useState()
  const [price, setPrice] = useState()
  const [size, setSizes] = useState()
  const [category, setCategory] = useState()
  const [quantity, setQuantity] = useState()

  const Product={
    image,
    name,
    description,
    price,
    size,
    category,
    quantity
  }

  function handleSubmit(e){
    e.preventDefault()
    fetch("#",{
      method: "POST",
      headers:{
        'Content-Type': 'application/json'
      },
      credentials: "include",
      body: JSON.stringify(Product)
    }).then(response =>response.json())
  }
  
  return (
    <div className='maindiv'>
      <form className='newproduct' onSubmit={handleSubmit}>
        <label for="myfile">Select Product Image:</label>
        <input type="file" id="myfile" name="myfile" onChange={(e)=>setImage(e.target.value)}/>
        <input type='text' placeholder='Product Name' autoComplete='on' required onChange={e => setName(e.target.value)}/>
        <textarea placeholder='Description' autoComplete='on' required onChange={e => setDescription(e.target.value)}/>
        <input type='number' placeholder='Price' autoComplete='on' required onChange={e => setPrice(e.target.value)}/>
        <h2>Select Sizes</h2>
        <div className='sizes'>
          <input type="checkbox" id="small" name="small" value='small'/>
          <label for="small">Small</label>
          <input type="checkbox" id="small" name="small" value='small'/>
          <label for="medium">Medium</label>
          <input type="checkbox" id="small" name="small" value='small'/>
          <label for="large">Large</label>
        </div>
        <label for='categories'>Choose Product Category</label>
        <select name='category' id='category' className='category'>
          <option value='suits'>Suits</option>
          <option value='Blazer'>Blazer</option>
          <option value='socks'>Socks</option>
          <option value='Shoes'>Shoes</option>
        </select>
        <input type='number' placeholder='Quantity' autoComplete='on' required onChange={e => setQuantity(e.target.value)}/>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default NewProduct