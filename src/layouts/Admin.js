// Chakra imports
import {
  Portal,
  useDisclosure,
  Stack,
  Box,
  useColorMode,
  Image,
} from "@chakra-ui/react";
import Configurator from "components/Configurator/Configurator";
import Footer from "components/Footer/Footer.js";
import {
  ArgonLogoDark,
  ArgonLogoLight,
  ChakraLogoDark,
  ChakraLogoLight,
} from "components/Icons/Icons";
// Layout components
import AdminNavbar from "components/Navbars/AdminNavbar.js";
import Sidebar from "components/Sidebar/Sidebar.js";
import React, { useEffect, useState } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import routes from "routes.js";
// Custom Chakra theme
import FixedPlugin from "../components/FixedPlugin/FixedPlugin";
// Custom components
import MainPanel from "../components/Layout/MainPanel";
import PanelContainer from "../components/Layout/PanelContainer";
import PanelContent from "../components/Layout/PanelContent";
import bgAdmin from "../assets/img/admin-background-violeta.png";

import LogoDark from '../assets/img/LogoTIPSparaDark.png';
import LogoLight from '../assets/img/LogoTIPSparaLight.png';

import BackgroundDashboard from "components/Animations/Background/BackgroundDashboard";
import { API, graphqlOperation, Auth } from "aws-amplify";
import * as queries from "../graphql/queries.js";
import * as mutations from "../graphql/mutations";

export default function Dashboard(props) {
  const { ...rest } = props;
  // states and functions
  const [fixed, setFixed] = useState(false);
  const { colorMode } = useColorMode();


  const [profile, setProfile] = useState({});
  const [message, setMessage] = useState("");
  const [userID, setUserID] = useState("");
  const [currentUser, setCurrentUser] = useState({});
  const [currentUserName, setCurrentUserName] = useState("");

  const [totalReward, setTotalReward] = useState();

  async function createUser() {
    console.log({ userID, currentUserName, currentUser })
    if ((userID != null && userID != "") && currentUser != null && currentUserName != null) {
      const userDetails = {
        "id": String(userID),
        "name": String(currentUser.name),
        "username": String(currentUserName),
        "phone": String(currentUser.phone_number),
        "email": String(currentUser.email),
      }
      console.log("Detalles de usuario a crear:", userDetails)

      const result = await API.graphql(
        graphqlOperation(mutations.createUser, { input: userDetails }),
      ).then(data => {
        console.log('responde created user', data)
      }).catch(err => {
        console.log('error creating user', err)
      })
    }

  }

  async function getUserProfile(sub) {
    console.log("current state", profile, message, userID, currentUserName, currentUser)
    try {
      const result = await API.graphql(
        graphqlOperation(queries.getUser, { id: sub })
      )
        .then(result => {
          console.log("Resultado de la consulta del usuario", result.data.getUser)
          setProfile(result.data.getUser)
          setTotalReward(result.data.getUser.totalReward)
          return result.data.getUser;
        })
        .catch(err => console.log(err));
      return result;

    } catch (error) {
      console.log("catch getuser")
      const result = error
      return result;
    }
  }

  async function componenteMontado() {
    //se obtiene ID usuario actual
    const userID = await Auth.currentSession()
      .then(data => {
        console.log("LLEGAAAAAAAAAAAA", data)
        setUserID(data.idToken.payload.sub);
        setCurrentUser(data.idToken.payload)
        return data.idToken.payload.sub;
      })
      .catch(err => console.log(err));
    const userName = await Auth.currentAuthenticatedUser()
      .then(data => {
        if (data.username != null) {
          console.log(data.username);
          return data.username;
        }
      })
      .catch(err => console.log(err))

    //VERIFICAMOS SI EXISTE USUARIO EN LA BASE DE DATOS
    const profile = await getUserProfile(userID);

    if (profile == null) {
      console.log("Usuario no creado en la BD, creando...")
      createUser()
    } else {
      console.log("El usuario en BD es =>", profile)
      setProfile(profile)
    }

  }


  useEffect(async () => {
    componenteMontado()
  }, [])








  const getRoute = () => {
    return window.location.pathname !== "/full-screen-maps";
  };
  const getActiveRoute = (routes) => {
    let activeRoute = "Default Brand Text";
    for (let i = 0; i < routes.length; i++) {
      if (routes[i].collapse) {
        let collapseActiveRoute = getActiveRoute(routes[i].views);
        if (collapseActiveRoute !== activeRoute) {
          return collapseActiveRoute;
        }
      } else if (routes[i].category) {
        let categoryActiveRoute = getActiveRoute(routes[i].views);
        if (categoryActiveRoute !== activeRoute) {
          return categoryActiveRoute;
        }
      } else {
        if (
          window.location.href.indexOf(routes[i].path) !== -1
        ) {
          return routes[i].name;
        }
      }
    }
    return activeRoute;
  };
  // This changes navbar state(fixed or not)
  const getActiveNavbar = (routes) => {
    let activeNavbar = false;
    for (let i = 0; i < routes.length; i++) {
      if (routes[i].category) {
        let categoryActiveNavbar = getActiveNavbar(routes[i].views);
        if (categoryActiveNavbar !== activeNavbar) {
          return categoryActiveNavbar;
        }
      } else {
        if (
          window.location.href.indexOf(routes[i].path) !== -1
        ) {
          if (routes[i].secondaryNavbar) {
            return routes[i].secondaryNavbar;
          }
        }
      }
    }
    return activeNavbar;
  };
  const getRoutes = (routes) => {
    return routes.map((prop, key) => {
      if (prop.collapse) {
        return getRoutes(prop.views);
      }
      if (prop.category === "account") {
        return getRoutes(prop.views);
      }
      if (prop.category === "robots") {
        return getRoutes(prop.views);
      }
      if (currentUser != null && currentUser.isCommercial == true && prop.category === "commercial") {
        return getRoutes(prop.views);
      }
      if (prop.category === "payments") {
        return getRoutes(prop.views);
      }
      if (prop.category === "distributor") {
        return getRoutes(prop.views);
      }
      if (prop.layout === "/admin") {
        return (
          <Route
            path={prop.path}
            component={prop.component}
            key={key}
          />
        );
      } else {
        return null;
      }
    });
  };
  const { isOpen, onOpen, onClose } = useDisclosure();
  document.documentElement.dir = "ltr";
  // Chakra Color Mode




  return (
    <Box>
      <Box
        style={{ height: '100px' }}
        w='100%'
        position='absolute'
        top='0'
      >
        <BackgroundDashboard />
      </Box>
      <Sidebar
        routes={routes}
        logo={
          <Stack direction='row' spacing='10px' align='center' justify='center'>
            {colorMode === "dark" ? (
              <Image src={LogoDark} style={{ width: '10rem', height: 'auto' }} />
            ) : (
              <Image src={LogoLight} style={{ width: '10rem', height: 'auto' }} />
            )}

          </Stack>
        }
        display='none'
        {...rest}
      />
      <MainPanel
        w={{
          base: "100%",
          xl: "calc(100% - 275px)",
        }}>
        <Portal>
          <AdminNavbar
            onOpen={onOpen}
            brandText={getActiveRoute(routes)}
            secondary={getActiveNavbar(routes)}
            fixed={fixed}
            money={currentUser.totalReward}
            {...rest}
          />
        </Portal>

        {getRoute() ? (
          <PanelContent>
            <PanelContainer>
              <Switch>
                {getRoutes(routes)}
                <Redirect from='/' to='/dashboard' />
              </Switch>
            </PanelContainer>
          </PanelContent>
        ) : null}

        <Footer />
        <Portal>
          <FixedPlugin
            secondary={getActiveNavbar(routes)}
            fixed={fixed}
            onOpen={onOpen}
          />
        </Portal>
        <Configurator
          secondary={getActiveNavbar(routes)}
          isOpen={isOpen}
          onClose={onClose}
          isChecked={fixed}
          user={profile}
          onSwitch={(value) => {
            setFixed(value);
          }}
        />
      </MainPanel>
    </Box>
  );



}
