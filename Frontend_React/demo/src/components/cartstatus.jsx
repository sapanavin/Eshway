import React from 'react'

import { useState, useEffect } from 'react';

const cartstatusstyle ={
   
    
}
function CartStatus() {
    const [totalPrice, settotalPrice] = useState(2524555.5400);
    const [totalQuantity, settotalQuantity] = useState(5);
 
 
  
  
  
    return (
    

<div className="cart-area d-n">

    <div className="total">{ totalPrice }
        <span>{ totalQuantity }</span> 
    </div> 
   

</div>
  )
}

export default CartStatus