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
import { AiOutlineDotChart } from 'react-icons/ai';
import { SiMarketo } from 'react-icons/si';


import { FaTools } from 'react-icons/fa'

var dashRoutes = [
  {
    path: "/dashboard",
    name: "Home",
    icon: <HomeIcon color='inherit' />,
    component: Dashboard,
    layout: "/admin",
  },
  /* {
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
  }, */
  {
    name: "SUBSCRIPTIONS",
    category: "robots",
    state: "pageCollapse",
    views: [
      {
        path: "/forex",
        name: "Forex",
        icon: <SiMarketo color='inherit' />,
        component: Signals,
        layout: "/admin",
      }
    ]
  },
  {
    name: "SIGNALS",
    category: "robots",
    state: "pageCollapse",
    views: [
      {
        path: "/all-signals",
        name: "All Notifications",
        icon: <AiTwotoneNotification color='inherit' />,
        component: TablesSignals,
        layout: "/admin",
      }
    ]
  },
  {
    name: "ACCOUNT",
    category: "account",
    state: "pageCollapse",
    views: [
      {
        path: "/profile",
        name: "Profile",
        icon: <PersonIcon color='inherit' />,
        secondaryNavbar: true,
        component: Profile,
        layout: "/admin",
      }
    ],
  },

];
export default dashRoutes;
