import React from 'react';
import {Analytics} from '../assets/icons';
import {Overview} from '../assets/icons';
import {Orders} from '../assets/icons';
import {Products} from '../assets/icons';
import {Customers} from '../assets/icons';
import {Settings} from '../assets/icons';
import {Logout} from '../assets/icons';




export const MenuData = [
    {
        title: "Overview",
        icon: <img src={Overview} alt="" />,
        link: "/overview",
    },

    {
        title: "Analytics",
        icon: <img src={Analytics} alt="" />,
        link: "/analytics",
    },

    {
        title: "Orders",
        icon: <img src={Orders} alt="" />,
        link: "/orders",
    },

    {
        title: "Products",
        icon: <img src={Products} alt="" />,
        link: "/products",
    },

    {
        title: "Customers",
        icon: <img src={Customers} alt="" />,
        link: "/customers",
    },

    {
        title: "Settings",
        icon: <img src={Settings} alt="" />,
        link: "/settings",
    },

    {
        title: "Logout",
        icon: <img src={Logout} alt="" />,
        link: "/logout",
    },

]