import React, { useEffect, useState } from 'react';
import Builder from '../Builder/Builder';
import Cart from '../Cart/Cart';
import Header from '../Header/Header';
import './ProjectBuilderContainer.css'
//set builders state
const ProjectBuilderContainer = () => {
    const [builders, setBuilders] = useState([])
    //set cart state by using add to cart button
    const [cart, setCart] = useState([])
    useEffect(()=>{
        fetch('./projectBuilder.JSON')
        .then(res => res.json())
        .then(data => setBuilders(data))
    },[])
    //handle add to cart button from builder.js
    const handleAddToCart = (builder) =>{
        const newCart = [...cart,builder]
        setCart(newCart)
    }
    return (
        <div>
            <Header/>
           <div className="row">
               <div className="col-md-9">
                 <div className="card-container mt-5">
                 {
                       builders.map(builder => <Builder builder = {builder} key={builder.key} handleAddToCart = {handleAddToCart} />)
                   }
                 </div>
               </div>
               <div className="col-md-3 mt-5 text-white">
               <Cart cart = {cart} />
               </div>
           </div>
        </div>
    
    );
};

export default ProjectBuilderContainer;