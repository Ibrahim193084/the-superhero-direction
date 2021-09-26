import React from 'react';
import './Builder.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Builder = (props) => {
    // console.log(props.builder)
    //builder information
    const {name, age , country,  salary, projectBuild, img, catagory} = props.builder
    //font awesome icon
    const element = <FontAwesomeIcon icon={faShoppingCart} />

    return (
        <div className="card">
        <img className="card-img-top" src={img} alt="Card image cap"/>
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">Catagory: {catagory}</p>
          <p className="card-text">Age: {age}</p>
          <p className="card-text">Country: {country}</p>
          <p className="card-text">Project Build: {projectBuild}</p>
          <p className="card-text">Salary: ${salary}</p>
          <button onClick={()=>props.handleAddToCart(props.builder)}
           className="btn btn-secondary">{element} Add to cart</button>
          
        </div>
      </div>
    );
};

export default Builder;