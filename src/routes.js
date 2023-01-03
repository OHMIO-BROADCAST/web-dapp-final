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
import { TbReportMoney } from 'react-icons/tb';
import { GiStairsGoal } from 'react-icons/gi';
import { HiDocumentAdd } from 'react-icons/hi';
import { GoLaw } from 'react-icons/go';

import { FaTools } from 'react-icons/fa'
import Comissions from 'views/Dashboard/Comissions';
import Refers from 'views/Dashboard/Refeers';
import Comercials from 'views/Dashboard/Comercials';
import Goal from 'views/Dashboard/Goal';
import Certificates from 'views/Dashboard/Certificates';
import KYC from 'views/Dashboard/KYC';

var dashRoutes = [
  {
    path: "/dashboard",
    name: "Home",
    icon: <HomeIcon color='inherit' size={22} />,
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
        icon: <SiMarketo color='inherit' size={22} />,
        component: Signals,
        layout: "/admin",
      }
    ]
  },
  {
    name: "REFEERS",
    category: "robots",
    state: "pageCollapse",
    views: [
      {
        path: "/my-refeers",
        name: "My Refeers",
        icon: <StatsIcon color='inherit' size={22} />,
        component: Refers,
        layout: "/admin",
      },
      {
        path: "/my-comissions",
        name: "Comissions",
        icon: <TbReportMoney color='inherit' size={22} />,
        component: Comissions,
        layout: "/admin",
      },
    ]
  },
  {
    name: "COMERCIAL",
    category: "robots",
    state: "pageCollapse",
    views: [
      {
        path: "/my-clients",
        name: "Clients",
        icon: <StarIcon color='inherit' size={22} />,
        component: Comercials,
        layout: "/admin",
      },
      {
        path: "/monthly-goal",
        name: "Monthly Goal",
        icon: <GiStairsGoal color='inherit' size={22} />,
        component: Goal,
        layout: "/admin",
      },
    ]
  },
  {
    name: "TERMS & CONDITIONS",
    category: "robots",
    state: "pageCollapse",
    views: [
      {
        path: "/all-certificates",
        name: "All Certificates",
        icon: <HiDocumentAdd color='inherit' size={22} />,
        component: Certificates,
        layout: "/admin",
      },
      {
        path: "/kyc",
        name: "KYC & AML",
        icon: <GoLaw color='inherit' size={22} />,
        component: KYC,
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
        icon: <PersonIcon color='inherit' size={22} />,
        secondaryNavbar: true,
        component: Profile,
        layout: "/admin",
      }
    ],
  },

];
export default dashRoutes;
