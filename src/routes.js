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

var dashRoutes = [
  {
    path: "/dashboard",
    name: "Home",
    icon: <HomeIcon color='inherit' />,
    component: Dashboard,
    layout: "/admin",
  },
  {
    name: "ROBOT LICENSES",
    category: "robots",
    state: "pageCollapse",
    views: [
      {
        path: "/contract",
        name: "Purchase",
        icon: <RocketIcon color='inherit' />,
        component: Contract,
        layout: "/admin",
      },
      {
        path: "/my-refeers",
        name: "Refeers",
        icon: <StarIcon color='inherit' />,
        component: QuickStart,
        layout: "/admin",
      },
      {
        path: "/purchase-payzen",
        name: "Purchase PayZen",
        icon: <CreditIcon color='inherit' />,
        component: Signals,
        layout: "/admin",
      },
    ]
  },
  {
    name: "INDEPENDET DISTRIBUTOR",
    category: "distributor",
    state: "pageCollapse",
    views: [
      {
        path: "/distributors",
        name: "My Refeer Link",
        icon: <RocketIcon color='inherit' />,
        component: Distributor,
        layout: "/admin",
      }
    ]
  },
  {
    name: "CRYPTO FUNCTIONS",
    category: "account",
    state: "pageCollapse",
    views: [
      {
        path: "/buy-crypto",
        name: "Buy Crypto",
        icon: <CreditIcon color='inherit' />,
        component: Buy,
        layout: "/admin",
      },
      {
        path: "/balances",
        name: "Balances",
        icon: <BalanceIcon color='inherit' />,
        component: ERC20Balance,
        layout: "/admin",
      }]
  },
  {
    path: "/tables",
    name: "Tables",
    icon: <StatsIcon color='inherit' />,
    component: Tables,
    layout: "/admin",
  },
  {
    path: "/billing",
    name: "Billing",
    icon: <BillIcon color='inherit' />,
    component: Billing,
    layout: "/admin",
  },
  {
    name: "ACCOUNT",
    category: "account",
    state: "pageCollapse",
    views: [
      {
        path: "/profile",
        name: "Profile",
        rtlName: "لوحة القيادة",
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
