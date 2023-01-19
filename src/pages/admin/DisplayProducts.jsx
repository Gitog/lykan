import {useEffect} from 'react'
import {isAdmin} from '../../utils'
import {useSelector, useDispatch} from 'react-redux'
import {addToAllProducts, addToProducts} from '../../redux/reducers/productSlice';
import axios from 'axios';

export default function DisplayProducts() {
    const dispatch = useDispatch()
    const {products} = useSelector(state => state.products)

    // useEffect(()=>{
    //    if(!isAdmin()){
    //     navigate("/signin")
    //    }
    // },[])

    useEffect(() => {
        axios({method: 'GET', url: 'http://localhost:3000/products'}).then((res) => {
            dispatch(addToProducts(res.data))
            dispatch(addToAllProducts(res.data))
        }).catch(err => console.log(err))
    }, [])

    const handleDelete = (id) => { // const delete =
      products.filter(product => product.id !== id)
      

        alert("Deleted")

    }

    return (
        <div className='maindiv'>
            <table>
                <thead>
                    <tr>
                        <th>Images</th>
                        <th>Product Name</th>
                        <th>Description</th>
                        <th>Price</th>
                        <th>Action</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody> {
                    products.map((product) => (
                        <tr key={
                            product.id
                        }>
                            <td><img src={
                                    product.image
                                }/></td>
                            <td>{
                                product.name
                            }</td>
                            <td style={
                                {fontSize: '11px'}
                            }>
                                {
                                product.description
                            }</td>
                            <td>{
                                product.price
                            }</td>
                            <td>
                                <button type="button">Edit</button>
                            </td>
                            <td>
                                <button type="button"
                                    onClick={() => handleDelete()}>Delete</button>
                            </td>
                        </tr>
                    ))
                } </tbody>
            </table>
        </div>
    )
}
