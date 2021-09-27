import React from 'react';
import './CaartName.css'

const CartName = (props) => {
    return (
        <div className='name'>
            <h4>Dev: {props.name}</h4>
        </div>
    );
};

export default CartName;