/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";

// Define the shape of the cart item
interface CartItem {
    id: string;
    name: string;
    price: number;
    quantity: number;
    image: string;
}

// Define the shape of the context
interface CartContextProps {
    cart: CartItem[];
    addToCart: (item: CartItem) => void;
    removeFromCart: (id: string) => void;
    clearCart: () => void;
}

// Create the context with default values
const CartContext = createContext<any | undefined>(undefined);

// Create a provider component
interface CartProviderProps {
    children: ReactNode;
}

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
    const [cart, setCart] = useState<CartItem[]>([]);
    const [isInitialized, setIsInitialized] = useState(false);

    // Load cart state from localStorage on the client side
    useEffect(() => {
        if (typeof window !== "undefined") {
            const storedCart = localStorage.getItem("cart");
            if (storedCart) {
                setCart(JSON.parse(storedCart));
            }
            setIsInitialized(true); // Mark initialization as complete
        }
    }, []);

    // Save cart to localStorage only after it is initialized
    useEffect(() => {
        if (isInitialized && typeof window !== "undefined") {
            localStorage.setItem("cart", JSON.stringify(cart));
        }
    }, [cart, isInitialized]);

    // Add item to cart
    const addToCart = (item: CartItem) => {
        setCart((prevCart) => {
            const existingItem = prevCart.find((cartItem) => cartItem.id === item.id);

            if (existingItem) {
                // Update quantity if the item already exists
                return prevCart.map((cartItem) =>
                    cartItem.id === item.id
                        ? { ...cartItem, quantity: cartItem.quantity + item.quantity }
                        : cartItem
                );
            }

            // Add new item
            return [...prevCart, item];
        });
    };

    // Remove item from cart
    const removeFromCart = (id: string) => {
        setCart((prevCart) => prevCart.filter((cartItem) => cartItem.id !== id));
    };

    // Clear the cart
    const clearCart = () => {
        setCart([]);
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
            {children}
        </CartContext.Provider>
    );
};


// Create a custom hook to use the cart context
export const useCartContext = (): CartContextProps => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error("useCartContext must be used within a CartProvider");
    }
    return context;
};
