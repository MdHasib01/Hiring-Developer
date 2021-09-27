import React from 'react';
import CartName from '../CartName/CartName';
import './Cart.css'

const Cart = (props) => {
    const {cart} = props
    const {cartName}=props
    let total = 0
    for(const developer of cart){
        total=total+developer.payment
    }
    console.log(props.cartName)
    return (
        <div className="cart">
            <h3>Developer added: {cart.length}</h3>
            <h4>Total cost: ${total}</h4>
            <button className="btn-primary"><i class="fas fa-share-square"></i>Hire now</button>

            {/* developer name  */}
            {
                cartName.map(name=><CartName name={name}></CartName>)
            }
        </div>
    );
};

export default Cart;