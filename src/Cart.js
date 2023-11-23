import React from "react";
import { useCart } from "./CartContext";

const CartPage = () => {
    const { cart, removeOneFromCart, increaseQuantity } = useCart();

    return (
        <div className="cart-container">
            {cart.map((item) => (
                <div key={item.id} className="cart-item">
                    <p className="item-name">{item.name}</p>
                    <img src={item.imgSrc} alt={item.name} className="item-image" />
                    <p className="item-quantity">Цена: {item.price} р.</p>
                    <p className="item-quantity">Количество: {item.quantity}</p>
                    <p className="item-quantity">Общая стоимость: {item.quantity*item.price} р.</p>
                    <button onClick={() => removeOneFromCart(item.id)} className="cart-button minus">-</button>
                    <button onClick={() => increaseQuantity(item.id)} className="cart-button plus">+</button>
                </div>
            ))}
        </div>
    );
};
export default CartPage;