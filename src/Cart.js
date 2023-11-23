import React from "react";
import { useCart } from "./CartContext";

const CartPage = () => {
    const { cart, removeOneFromCart, increaseQuantity } = useCart();

    return (
        <div>
            <br/><br/><br/><br/><br/>
            <h1>Корзина</h1>
            {cart.map((item) => (
                <div key={item.id}>
                    <p>{item.name}</p>
                    <img src={item.imgSrc} alt={item.name} />
                    <p>Количество: {item.quantity}</p>
                    <button onClick={() => removeOneFromCart(item.id)} className={'minus'}></button>
                    <button onClick={() => increaseQuantity(item.id)} className={'plus'}></button>
                    <br/><br/>
                </div>
            ))}
        </div>
    );
};

export default CartPage;