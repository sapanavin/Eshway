
import React, { useState } from 'react' ;
import { CartContext } from "./CartContext";


const CartContextProvider = ({ children }) => {
   
    const [addtocart, SetAddToCart]  = useState(null);

    return (
        <CartContext.Provider value = {{ addtocart, SetAddToCart }}>
            { children}
        </CartContext.Provider>
    )
}

export default CartContextProvider;