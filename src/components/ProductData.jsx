import React from 'react'
import { iphone14 } from '../assets/icons';
import { macbook } from '../assets/icons';
import { iPadPro } from '../assets/icons';

export const ProductData = [
    {
        title: "iPhone 14",
        brand: "Apple",
        icon: <img src={iphone14} alt="" />,
        stock: 125,
        sales:2520,
        price: "$799.99",

    },

    { title: "Macbook Air M2",
        brand: "Apple",
        icon: <img src={macbook} alt="" />,
        stock: 40,
        sales:8,
        price: "$999.99",
    },

    {
        title: "iPad Pro",
        brand: "Apple",
        icon: <img src={iPadPro} alt="" />,
        stock: 107,
        sales:250,
        price: "$850.00",
    },
]
