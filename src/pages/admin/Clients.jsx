import React,{useEffect} from 'react'
import { getAllClients } from '../../redux/reducers/authSlice'
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'

function Clients() {

  const dispatch = useDispatch()


  useEffect(() => {
    axios.get('http://localhost:3000/users').then((res) => {
      console.log(res.data)
    }).catch(err => console.log(err))
}, [])


  return (
    <div className='clientdiv'>
        <table className='client-table'>
          <tr>
           <th>Name</th>
           <th>Email</th>
           <th>Address</th>
          </tr>
         <tr>
          <td>James Njorio</td>
          <td>jamesnjorio@gmail.com</td>
         <td>Kiambu</td>
         </tr>
       </table>
    </div>
  )
}

export default Clients