import {useEffect, useState} from 'react'
import '../../css/admin/pages.css'

function NewProduct() {
  const [image, setImage] = useState()
  const [name, setName] = useState()
  const [description, setDescription] = useState()
  const [price, setPrice] = useState()
  const [size, setSizes] = useState()
  const [categories, setCategories] = useState()
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

  useEffect(() => {
    fetch("http://localhost:3000/categories",{
      method: "GET",
      headers:{
        'Content-Type': 'application/json'
      },
      credentials: 'include',
    }).then(response =>response.json()).then(res => setCategories(res))

  }, [])

  function handleSubmit(e){
    e.preventDefault()

    fetch("http://localhost:3000/products",{
      method: "POST",
      headers:{
        'Content-Type': 'application/json'
      },
      credentials: 'include',
      body: JSON.stringify(Product)
    }).then(response =>response.json())
  }
  
  return (
    <div className='maindiv' style={{padding: '15px', marginTop: '15px', marginBottom: '15px'}}>
      <form className='newproduct' onSubmit={handleSubmit}>
        <label for="myfile">Enter product Url:</label>
        <input type="text" id="myfile" placeholder='url' onChange={(e)=>setImage(e.target.value)}/>
        <input type='text' placeholder='Product Name' autoComplete='on' required onChange={e => setName(e.target.value)}/>
        <textarea placeholder='Description' autoComplete='on' required onChange={e => setDescription(e.target.value)}/>
        <input style={{padding: '15px'}} type='number' placeholder='Price' autoComplete='on' required onChange={e => setPrice(e.target.value)}/>
        <label for='categories' style={{marginTop: '15px', marginBottom: '15px'}}>Choose Product Category</label>
        <select style={{width: '100%'}}name='category' id='category' className='category' onChange={e => setCategory(e.target.value)}>
          {categories?.map((c) => <option value={c.id}>{c.name}</option> )}
        </select>
        <input type='number' style={{padding: '15px', marginTop: '15px', marginBottom: '15px'}} placeholder='Quantity' autoComplete='on' required onChange={e => setQuantity(e.target.value)}/>
        <label for='categories'>Select sizes</label>
        <div className='sizes' style={{padding: '15px', marginTop: '15px', marginBottom: '15px'}}>
          <input type="checkbox" id="small" name="small" value='small'/>
          <label for="small">Small</label>
          <input type="checkbox" id="small" name="small" value='small'/>
          <label for="medium">Medium</label>
          <input type="checkbox" id="small" name="small" value='small'/>
          <label for="large">Large</label>
        </div>
        
        <button type="submit" style={{padding: '15px'}}>Submit</button>
      </form>
    </div>
  )
}

export default NewProduct