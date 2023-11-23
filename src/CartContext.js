import React, {createContext, useContext, useState} from "react";

const CartContext = createContext(); // Контекст как глобальная переменная для других функций

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]); // Инициализация состояния Контекса

    const addToCart = (product) => {
        const existingItem = cart.find((item) => item.id === product.id);

        if (existingItem) {
            setCart((prevCart) =>
                prevCart.map((item) =>
                    item.id === product.id ? {...item, quantity: item.quantity + 1} : item
                )
            );
        } else {
            setCart((prevCart) => [...prevCart, {...product, quantity: 1}]);
        }
    };

    const removeOneFromCart = (cartItemId) => {
        setCart((prevCart) =>
            prevCart
                .map((item) =>
                    item.id === cartItemId
                        ? {...item, quantity: item.quantity - 1}
                        : item
                )
                .filter((item) => item.quantity > 0)
        );
    };

    const increaseQuantity = (cartItemId) => {
        setCart((prevCart) =>
            prevCart.map((item) =>
                item.id === cartItemId ? {...item, quantity: item.quantity + 1} : item
            )
        );
    };

    return (
        <CartContext.Provider value={{cart, addToCart, removeOneFromCart, increaseQuantity}}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    return useContext(CartContext);
};