import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'


const Cart = (props) => {
    // console.log(props)
    const {cart} = props
    //use reducer for upgrade total cost
    const totalReducer = (previous,builder)=>previous + builder.salary;
    const total = cart.reduce(totalReducer,0)
    //font awesome icon
    const element = <FontAwesomeIcon icon={faShoppingCart} />
    return (
        <div>
             <h3>{element} Selected Builders: {cart.length}</h3>
             <h5>Total Cost: ${total} </h5>
             <div>
             {
                     cart.map(crt => <div className="d-flex align-items-center" key = {crt.key + Math.random(0.567)}><img src = {crt.img} className="w-25 h-25"/><h6>{crt.name}</h6></div>)
                 }
             </div>
             <button className="btn btn-secondary">{element} Hire</button>
        </div>
    );
};

export default Cart;