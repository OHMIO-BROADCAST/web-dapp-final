// import
import React, { Component } from 'react';
import Dashboard from "views/Dashboard/Dashboard.js";
import Tables from "views/Dashboard/Tables.js";
import Billing from "views/Dashboard/Billing.js";
import RTLPage from "views/RTL/RTLPage.js";
import Profile from "views/Dashboard/Profile.js";


import { Layout, Tabs } from "antd";
import "antd/dist/antd.css";
import "./style.css";
import QuickStart from "components/QuickStart";
import Text from "antd/lib/typography/Text";
import MenuItems from "./components/MenuItems";

import { createIcon, StarIcon } from "@chakra-ui/icons";

import {
  HomeIcon,
  StatsIcon,
  CreditIcon,
  PersonIcon,
  DocumentIcon,
  RocketIcon,
  SupportIcon,
  BuyIcon,
  ExchangeIcon,
  BalanceIcon,
  BillIcon
} from "components/Icons/Icons";
import Distributor from 'components/Distributor/Distributor';
import Signals from 'components/Signals/Signals';
import TablesSignals from 'views/Dashboard/TablesSignals';
import Manual from 'views/Dashboard/Manual';

import { HiUsers } from 'react-icons/hi';
import { AiTwotoneNotification } from 'react-icons/ai';
import { FaTools } from 'react-icons/fa'

var dashRoutes = [
  {
    path: "/dashboard",
    name: "Home",
    icon: <HomeIcon color='inherit' />,
    component: Dashboard,
    layout: "/admin",
  },
  {
    name: "USUARIOS",
    category: "robots",
    state: "pageCollapse",
    views: [
      {
        path: "/users",
        name: "Todos",
        icon: <HiUsers color='inherit' />,
        component: Tables,
        layout: "/admin",
      },
    ]
  },
  {
    name: "SEÑALES",
    category: "robots",
    state: "pageCollapse",
    views: [
      {
        path: "/all-signals",
        name: "Todas",
        icon: <AiTwotoneNotification color='inherit' />,
        component: TablesSignals,
        layout: "/admin",
      },
      {
        path: "/manual-mode",
        name: "Modo Manual",
        icon: <FaTools color='inherit' />,
        component: Manual,
        layout: "/admin",
      }
    ]
  },
  /* {
    name: "Cuenta",
    category: "account",
    state: "pageCollapse",
    views: [
      {
        path: "/profile",
        name: "Perfil",
        icon: <PersonIcon color='inherit' />,
        secondaryNavbar: true,
        component: Profile,
        layout: "/admin",
      }
    ],
  }, */

];
export default dashRoutes;
