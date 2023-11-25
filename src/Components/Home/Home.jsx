import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import TShirt from '../TShirt/TShirt';
import './Home.css'
import Cart from '../Cart/Cart';
import toast from 'react-hot-toast';

const Home = () => {
    const tshirts = useLoaderData();
    const [cart, setCart] = useState([]);
    // console.log(tshirts);

    const handleAddToCart = tshirt => {
        const exists = cart.find(ts => ts._id === tshirt._id)
        if (exists) {
            toast('Already added this item !!!')
        }
        else {
            const newCart = [...cart, tshirt]
            setCart(newCart);
        }
        // console.log(tshirt);
    }

    const handleRemoveFromCart = id => {
        console.log(id)
        const remaining = cart.filter(ts => ts._id !== id)
        setCart(remaining);
    }

    return (
        <div className='home-container'>
            <div className="tshirt-container">
                {
                    tshirts.map(tshirt => <TShirt
                        key={tshirt._id}
                        tshirt={tshirt}
                        handleAddToCart={handleAddToCart}
                    ></TShirt>)
                }
            </div>
            <div className="cart-container">
                <Cart
                    cart={cart}
                    handleRemoveFromCart={handleRemoveFromCart}
                ></Cart>
            </div>
        </div>
    );
};

export default Home;