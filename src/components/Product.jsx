import React from 'react'
import laptop from "../assets/laptop.png";
import mobile from "../assets/mobile.png";
import watch from "../assets/watch.png";
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../CartSlice';
import { useNavigate } from 'react-router-dom';
const Product = () => {
    const dispatch=useDispatch();
    const cartitem=useSelector((state)=>state.cart.cartitems);
    const navigate=useNavigate();
    const productList=[
        {
            id:1,name:"laptop",price:33000,image:laptop
        }, 
        {
            id:2,name:"mobile",price:6500,image:mobile
        },
         {
            id:3,name:"watch",price:1300,image:watch
        }
    ]
  return (
    <div>
        <h1>Cart - {cartitem.length}</h1>
        <button onClick={()=>navigate("/showcart")}>Go to cart</button>
        <h1>Products</h1>
        <div style={{display:"flex",justifyContent:"space-around"}}>
            {productList.map((item,index)=>(
                <div key={index} style={{border:"1px solid black",padding:"16px"}}>
                    <img src={item.image} height={"200px"}/>
                    <h2>{item.name}</h2>
                    <p>&#8377;{item.price}</p>
                    <button onClick={()=>dispatch(addItem(item))}>Add to Cart</button><br/>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Product