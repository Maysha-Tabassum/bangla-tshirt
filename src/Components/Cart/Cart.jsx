import React from 'react';
import './Cart.css'

const Cart = ({ cart, handleRemoveFromCart }) => {
    let message;
    if (cart.length === 0) {
        message = <p>Please add some items</p>
    }
    else {
        message = <p>Thanks for your purchase.</p>
    }
    return (
        <div>
            <h2 className={cart.length === 1 ? 'blue' : 'red'}>Total Item : {cart.length}</h2>
            {message}
            <p className={`bold border ${cart.length === 3 ? 'yellow' : 'purple'}`}>something something</p>
            {
                cart.length > 2
                    ? <span className='green'>Boroloxx</span>
                    : <span>Fokira</span>
            }
            {
                cart.length === 2 && <p>Double bonanza!!!</p>
            }
            {
                cart.length === 2 || <p>Woowwwwwwwwwww!!</p>
            }
            {
                cart.map(tshirt => <p
                    key={tshirt._id}
                >{tshirt.name} <button
                    onClick={() => handleRemoveFromCart(tshirt._id)}
                >X</button></p>)
            }
        </div>
    );
};

export default Cart;