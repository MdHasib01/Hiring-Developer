import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Developer from '../Developer/Developer';
import './Body.css'

const Body = () => {
    const [developers, setDevelopers] =useState([])
    const [cart,setCart] = useState([])
    const [cartName,setCartName] = useState([])
    useEffect(()=>{
        fetch('./developer.JSON')
        .then(res=>res.json())
        .then(data=>setDevelopers(data))
    },[])
    // hire now button handler 
    const handleHire = (developer)=>{
        const newCart = [...cart, developer]
        setCart(newCart)

        // show name of developer in cart 
        for(const developer of newCart){
            const name = developer.name
            const newCartName = [...cartName, name]
            setCartName(newCartName)
        }
    }
    return (
        <div>
            <h2 className="list-head">
                Developers list:
            </h2>
            <div className="body">
            <div className="developers">
            {developers.map(developer=><Developer 
            developer={developer}
            key={developer.key}
            handleHire={handleHire}
            ></Developer>)}
        </div>
        <div className="cart">
            <Cart cart={cart} cartName={cartName}></Cart>
        </div>
        </div>
        </div>
    );
};

export default Body;