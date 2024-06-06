import React, { createContext, useContext, useEffect, useState } from 'react';
// import { CategoryContext } from './Category';
import axios from "axios";
import { baseUrl } from '../Components/Constant';
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';

export const AppContext = createContext("");

export const AppProvider = ({ children }) => {

    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [message, setMessage] = useState('')
    const [cartItems, setCartItems] = useState([]);

    const navigate = useNavigate();

    //  const categoryValue = useContext(CategoryContext);
    const [category, setCategory] = useState([])
    const [subCategory, setSubCategory] = useState([])
    const [bestSeller, setBestSeller] = useState([])

    const handleProduct = async () => {
        await axios.get(`${baseUrl}/home/`)
            .then((res) => {
                console.log(res.data)
                setBestSeller(res.data.bestsaler)
                setCategory(res.data.category)
                setSubCategory(res.data.subcategory)

            })
            .catch((error) => {
                console.log(error)
            })
    }

    const userLogin = async (phoneNumber) => {
        console.log(phoneNumber)
        await axios.post(`${baseUrl}/accounts/user-login/`, { "phone_number": phoneNumber })
            .then((res) => {
                console.log(res.data)
                setMessage(res.data.message);
                setTimeout(() => {
                    setMessage('');
                }, 2000);
            })
            .catch((error) => {
                console.log(error)
                setMessage("Something Went Wrong");
            })
    }
    const verifyOtp = async (otp, phoneNumber) => {
        await axios.post(`${baseUrl}/accounts/verify-otp/`, { "phone_number": phoneNumber, 'otp': otp })
            .then((res) => {
                console.log(res.data)
                if (res.data.status === 200) {
                    localStorage.setItem('token', JSON.stringify(res.data.access));
                    localStorage.setItem('isLoggedIn', 'true');
                    setIsLoggedIn(true);
                    navigate("checkout")
                    setMessage(res.data.message);

                } else {
                    setMessage(res.data.message);
                    setTimeout(() => {
                        setMessage('');
                    }, 2000);
                    setIsLoggedIn(false);
                }
            })
            .catch((error) => {
                if (error.response && error.response.status === 400) {
                    setMessage("Wrong OTP. Please try again.");
                } else {
                    setMessage("An error occurred. Please try again later.");
                }

            })
    }

    const logout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem('isLoggedIn');
        setIsLoggedIn(false);

    }

    const AddCart = (item) => {
        const existingItem = cartItems.find((cartItem) => {
            return cartItem.uid === item.uid;
        });
        if (existingItem) {
            toast.warning('Item already added to cart'
            );

        } else {
            setCartItems((prevCart) => {
                const newCart = [...prevCart, { ...item, quantity: 1, totalPrice: item.dis_price }];
                // Update AsyncStorage with the latest state
                localStorage.setItem('cart', JSON.stringify(newCart));
                toast.success('Item added to cart');
                return newCart;
            });
        }
    }

    const handleDeleteItem = (item) => {
        const updatedCart = cartItems.filter(cartItem => cartItem.uid !== item.uid);
        setCartItems(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
        toast.error('Item delete Successfully');
    };

    useEffect(() => {
        // Check if user was logged in before
        const storedIsLoggedIn = localStorage.getItem('isLoggedIn');
        if (storedIsLoggedIn === 'true') {
            setIsLoggedIn(true);
        }

        const storedCartItems = localStorage.getItem('cart');
        if (storedCartItems) {
            setCartItems(JSON.parse(storedCartItems));
        }
    }, []);

    useEffect(() => {
        handleProduct();
    }, [])

    useEffect(() => {
        if (message) {
            toast.info(message);
        }
    }, [message])

    const myValue = {
        category, subCategory, userLogin, verifyOtp, message, isLoggedIn, logout, AddCart, cartItems, handleDeleteItem,bestSeller
    }

    return (
        <AppContext.Provider value={myValue}>
            {children}
        </AppContext.Provider>
    );
};


export const useGlobalContext = () => {
    const context = useContext(AppContext);
    if (!context) {
        throw new Error('useGlobalContext must be used within an AppProvider');
    }
    return context;
};
