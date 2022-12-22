import React from 'react'
import '../../css/admin/pages.css'

function NewProduct() {
  return (
    <div className='maindiv'>
      <form className='newproduct'>
        <label for="myfile">Select Product Image:</label>
        <input type="file" id="myfile" name="myfile"/>
        <input type='text' placeholder='Product Name' autoComplete='on' required />
        <textarea placeholder='Description' autoComplete='on' required />
        <input type='number' placeholder='Price' autoComplete='on' required />
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
        <input type='number' placeholder='Quantity' autoComplete='on' required />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default NewProduct