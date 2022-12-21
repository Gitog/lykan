import React from 'react'
import '../../css/admin/pages.css'

function NewProduct() {
  return (
    <div className='maindiv'>
      <label for="myfile">Select Product Image:</label>
      <form className='addproduct'>
      <input type="file" id="myfile" name="myfile"/>
       <input type='text' placeholder='Product Name' autoComplete='on' required />
       <textarea placeholder='Description' autoComplete='on' required />
       <input type='number' placeholder='Price' autoComplete='on' required />
       <input type='number' placeholder='Quantity' autoComplete='on' required />
       <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default NewProduct