// import
import React, { Component } from 'react';
import Dashboard from "views/Dashboard/Dashboard.js";
import Tables from "views/Dashboard/Tables.js";
import Billing from "views/Dashboard/Billing.js";
import RTLPage from "views/RTL/RTLPage.js";
import Profile from "views/Dashboard/Profile.js";
import SignIn from "views/Pages/SignIn.js";
import ForgotPassword from "views/Pages/ForgotPassword.js";

import SignUp from "views/Pages/SignUp.js";

import Account from "components/Account/Account";
import Chains from "components/Chains";
import TokenPrice from "components/TokenPrice";
import ERC20Balance from "components/ERC20Balance";
import ERC20Transfers from "components/ERC20Transfers";
import DEX from "components/DEX";
import NFTBalance from "components/NFTBalance";
import Wallet from "components/Wallet";
import { Layout, Tabs } from "antd";
import "antd/dist/antd.css";
import NativeBalance from "components/NativeBalance";
import "./style.css";
import QuickStart from "components/QuickStart";
import Contract from "components/Contract/Contract";
import Text from "antd/lib/typography/Text";
import Ramper from "components/Ramper";
import MenuItems from "./components/MenuItems";
import Login from "views/Pages/SignIn";

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
import Buy from 'components/Buy';
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
  {
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
  },
  {
    path: "/signin",
    name: "Sign In",
    icon: <DocumentIcon color='inherit' />,
    component: SignIn,
    layout: "/auth",
  },
  {
    path: "/forgot-password",
    name: "Forgot Password",
    icon: <DocumentIcon color='inherit' />,
    component: ForgotPassword,
    layout: "/auth",
  },
  {
    path: "/signup",
    name: "Sign Up",
    icon: <RocketIcon color='inherit' />,
    component: SignUp,
    layout: "/auth",
  },
];
export default dashRoutes;
