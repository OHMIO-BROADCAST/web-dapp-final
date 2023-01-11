/*eslint-disable*/
import React, { useEffect, useState } from "react";
import { HamburgerIcon } from "@chakra-ui/icons";
// chakra imports
import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  Flex,
  Image,
  Stack,
  Text,
  useColorMode,
  useColorModeValue,
  useDisclosure
} from "@chakra-ui/react";
import IconBox from "components/Icons/IconBox";
import {
  renderThumbDark,
  renderThumbLight,
  renderTrack,
  renderTrackRTL,
  renderView,
  renderViewRTL
} from "components/Scrollbar/Scrollbar";
import { HSeparator } from "components/Separator/Separator";
import { SidebarHelp } from "components/Sidebar/SidebarHelp";
import { Scrollbars } from "react-custom-scrollbars";
import { NavLink, useLocation } from "react-router-dom";
import { API, graphqlOperation, Auth } from "aws-amplify";

import LogoLight from '../../assets/img/LogoTIPSparaLight.png';

import * as queries from "../../graphql/queries.js";
import * as mutations from "../../graphql/mutations";

// FUNCTIONS

function Sidebar(props) {
  // to check for active links and opened collapses
  let location = useLocation();
  // this is for the rest of the collapses
  const [state, setState] = React.useState({});
  const mainPanel = React.useRef();
  let variantChange = "0.2s linear";
  // verifies if routeName is the one active (in browser input)


  const [profile, setProfile] = useState({});
  const [message, setMessage] = useState("");
  const [userID, setUserID] = useState("");
  const [currentUser, setCurrentUser] = useState({});
  const [currentUserName, setCurrentUserName] = useState("");



  async function createUser() {
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

  async function getUserProfile(sub) {
    console.log("current state", profile, message, userID, currentUserName, currentUser)
    try {
      const result = await API.graphql(
        graphqlOperation(queries.getUser, { id: sub })
      )
        .then(result => {
          console.log("Resultado de la consulta del usuario", result.data.getUser)
          setProfile(result.data.getUser)
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
        setUserID(data.idToken.payload.sub);
        setCurrentUser(data.idToken.payload)
        return data.idToken.payload.sub;
      })
      .catch(err => console.log(err));
    const userName = await Auth.currentAuthenticatedUser()
      .then(data => {
        setCurrentUserName(data.username);
        return data.username;
      })
      .catch(err => console.log(err))

    //VERIFICAMOS SI EXISTE USUARIO EN LA BASE DE DATOS
    const profile = await getUserProfile(userID);

    if (profile == null) {
      console.log("Usuario no creado en la BD, creando...")
      //createUser()
    } else {
      console.log("El usuario en BD es =>", profile)
    }

  }


  useEffect(async () => {
    componenteMontado()
  }, [])



  const activeRoute = (routeName) => {
    return location.pathname === routeName ? "active" : "";
  };
  const { colorMode } = useColorMode;
  // this function creates the links and collapses that appear in the sidebar (left menu)
  const { sidebarVariant } = props;
  const createLinks = (routes) => {
    // Chakra Color Mode
    let activeBg = useColorModeValue("white", "navy.700");
    let inactiveBg = useColorModeValue("white", "navy.700");
    let activeColor = useColorModeValue("gray.700", "white");
    let inactiveColor = useColorModeValue("gray.400", "gray.400");
    let sidebarActiveShadow = "0px 7px 11px rgba(0, 0, 0, 0.04)";
    return routes.map((prop, key) => {
      if (prop.redirect || prop.path === '/signin' || prop.path === '/signup' || prop.path === '/forgot-password') {
        return null;
      }
      // console.log("usuario es comerical?=", profile.isCommercial)
      if ((profile.isCommercial == false || profile.isCommercial == null) && prop.category === "commercial") {
        return null;
      }
      if (prop.category == "payments") {
        return null;
      }
      if (prop.category) {
        var st = {};
        st[prop["state"]] = !state[prop.state];
        return (
          <>
            <Text
              color={activeColor}
              fontWeight="bold"
              mb={{
                xl: "6px",
              }}
              mx="auto"
              ps={{
                sm: "10px",
                xl: "16px",
              }}
              py="0.3rem"
            >
              {document.documentElement.dir === "rtl"
                ? prop.rtlName
                : prop.name}
            </Text>
            {createLinks(prop.views)}
          </>
        );
      }
      return (
        <NavLink to={prop.path} key={key}>
          {activeRoute(prop.path) === "active" ? (
            <Button
              boxSize="initial"
              justifyContent="flex-start"
              alignItems="center"
              boxShadow={sidebarActiveShadow}
              bg={activeBg}
              transition={variantChange}
              mb={{
                xl: "6px",
              }}
              mx={{
                xl: "auto",
              }}
              ps={{
                sm: "10px",
                xl: "16px",
              }}
              py="0.3rem"
              borderRadius="15px"
              _hover="none"
              w="100%"
              _active={{
                bg: "inherit",
                transform: "none",
                borderColor: "transparent",
              }}
              _focus={{
                boxShadow: "0px 7px 11px rgba(0, 0, 0, 0.04)",
              }}
            >
              <Flex>
                {typeof prop.icon === "string" ? (
                  <Icon>{prop.icon}</Icon>
                ) : (
                  <IconBox
                    bg="navy.500"
                    color="white"
                    h="30px"
                    w="30px"
                    me="0.3rem"
                    transition={variantChange}
                  >
                    {prop.icon}
                  </IconBox>
                )}
                <Text color={activeColor} my="auto" fontSize="sm">
                  {document.documentElement.dir === "rtl"
                    ? prop.rtlName
                    : prop.name}
                </Text>
              </Flex>
            </Button>
          ) : (
            <Button
              boxSize="initial"
              justifyContent="flex-start"
              alignItems="center"
              bg="transparent"
              mb={{
                xl: "6px",
              }}
              mx={{
                xl: "auto",
              }}
              py="0.3rem"
              ps={{
                sm: "10px",
                xl: "16px",
              }}
              borderRadius="15px"
              _hover="none"
              w="100%"
              _active={{
                bg: "inherit",
                transform: "none",
                borderColor: "transparent",
              }}
              _focus={{
                boxShadow: "none",
              }}
            >
              <Flex>
                {typeof prop.icon === "string" ? (
                  <Icon>{prop.icon}</Icon>
                ) : (
                  <IconBox
                    bg={inactiveBg}
                    color="navy.500"
                    h="30px"
                    w="30px"
                    me="0.3rem"
                    transition={variantChange}
                  >
                    {prop.icon}
                  </IconBox>
                )}
                <Text color={inactiveColor} my="auto" fontSize="sm">
                  {document.documentElement.dir === "rtl"
                    ? prop.rtlName
                    : prop.name}
                </Text>
              </Flex>
            </Button>
          )}
        </NavLink>
      );
    });
  };
  const { logo, routes } = props;

  var links = <>{createLinks(routes)}</>;
  //  BRAND
  //  Chakra Color Mode
  let sidebarBg = useColorModeValue("white", "navy.800");
  let sidebarRadius = "20px";
  let sidebarMargins = "0px";
  var brand = (
    <Box pt={"25px"} mb="0.3rem">
      {logo}
      <HSeparator my="26px" />
    </Box>
  );

  // SIDEBAR
  return (
    <Box ref={mainPanel}>
      <Box display={{ sm: "none", xl: "block" }} position="fixed">
        <Box
          bg={sidebarBg}
          transition={variantChange}
          w="260px"
          maxW="260px"
          ms={{
            sm: "16px",
          }}
          my={{
            sm: "16px",
          }}
          h="calc(100vh - 32px)"
          ps="20px"
          pe="20px"
          m={sidebarMargins}
          filter="drop-shadow(0px 5px 14px rgba(0, 0, 0, 0.05))"
          borderRadius={sidebarRadius}
        >
          <Scrollbars
            autoHide
            renderTrackVertical={
              document.documentElement.dir === "rtl"
                ? renderTrackRTL
                : renderTrack
            }
            renderThumbVertical={useColorModeValue(
              renderThumbLight,
              renderThumbDark
            )}
            renderView={
              document.documentElement.dir === "rtl"
                ? renderViewRTL
                : renderView
            }
          >
            <Box>{brand}</Box>
            <Stack direction="column" mb="40px">
              <Box>{links}</Box>
            </Stack>
            <SidebarHelp sidebarVariant={sidebarVariant} />
          </Scrollbars>
        </Box>
      </Box>
    </Box>
  );
}

// FUNCTIONS

export function SidebarResponsive(props) {
  // to check for active links and opened collapses
  let location = useLocation();
  const { logo, routes, colorMode, hamburgerColor, ...rest } = props;

  // this is for the rest of the collapses
  const [state, setState] = React.useState({});
  const mainPanel = React.useRef();
  // verifies if routeName is the one active (in browser input)
  const activeRoute = (routeName) => {
    return location.pathname === routeName ? "active" : "";
  };
  // Chakra Color Mode
  let activeBg = useColorModeValue("white", "navy.700");
  let inactiveBg = useColorModeValue("white", "navy.700");
  let activeColor = useColorModeValue("gray.700", "white");
  let inactiveColor = useColorModeValue("gray.400", "white");
  let sidebarActiveShadow = useColorModeValue(
    "0px 7px 11px rgba(0, 0, 0, 0.04)",
    "none"
  );
  let sidebarBackgroundColor = useColorModeValue("white", "navy.800");

  // this function creates the links and collapses that appear in the sidebar (left menu)
  const createLinks = (routes) => {
    return routes.map((prop, key) => {
      if (prop.redirect || prop.path === '/signin' || prop.path === '/signup' || prop.path === '/forgot-password') {
        return null;
      }
      if (prop.category) {
        var st = {};
        st[prop["state"]] = !state[prop.state];
        return (
          <>
            <Text
              color={activeColor}
              fontWeight="bold"
              mb={{
                xl: "6px",
              }}
              mx="auto"
              ps={{
                sm: "10px",
                xl: "16px",
              }}
              py="0.3rem"
            >
              {document.documentElement.dir === "rtl"
                ? prop.rtlName
                : prop.name}
            </Text>
            {createLinks(prop.views)}
          </>
        );
      }
      return (
        <NavLink to={prop.path} key={key}>
          {activeRoute(prop.path) === "active" ? (
            <Button
              boxSize="initial"
              justifyContent="flex-start"
              alignItems="center"
              bg={activeBg}
              boxShadow={sidebarActiveShadow}
              mb={{
                xl: "6px",
              }}
              mx={{
                xl: "auto",
              }}
              ps={{
                sm: "10px",
                xl: "16px",
              }}
              py="0.3rem"
              borderRadius="15px"
              _hover="none"
              w="100%"
              _active={{
                bg: "inherit",
                transform: "none",
                borderColor: "transparent",
              }}
              _focus={{
                boxShadow: "none",
              }}
            >
              <Flex>
                {typeof prop.icon === "string" ? (
                  <Icon>{prop.icon}</Icon>
                ) : (
                  <IconBox
                    bg="navy.500"
                    color="white"
                    h="30px"
                    w="30px"
                    me="0.3rem"
                  >
                    {prop.icon}
                  </IconBox>
                )}
                <Text color={activeColor} my="auto" fontSize="sm">
                  {document.documentElement.dir === "rtl"
                    ? prop.rtlName
                    : prop.name}
                </Text>
              </Flex>
            </Button>
          ) : (
            <Button
              boxSize="initial"
              justifyContent="flex-start"
              alignItems="center"
              bg="transparent"
              mb={{
                xl: "6px",
              }}
              mx={{
                xl: "auto",
              }}
              py="0.3rem"
              ps={{
                sm: "10px",
                xl: "16px",
              }}
              borderRadius="15px"
              _hover="none"
              w="100%"
              _active={{
                bg: "inherit",
                transform: "none",
                borderColor: "transparent",
              }}
              _focus={{
                boxShadow: "none",
              }}
            >
              <Flex>
                {typeof prop.icon === "string" ? (
                  <Icon>{prop.icon}</Icon>
                ) : (
                  <IconBox
                    bg={inactiveBg}
                    color="navy.500"
                    h="30px"
                    w="30px"
                    me="0.3rem"
                  >
                    {prop.icon}
                  </IconBox>
                )}
                <Text color={inactiveColor} my="auto" fontSize="sm">
                  {document.documentElement.dir === "rtl"
                    ? prop.rtlName
                    : prop.name}
                </Text>
              </Flex>
            </Button>
          )}
        </NavLink>
      );
    });
  };

  var links = <>{createLinks(routes)}</>;

  //  BRAND

  var brand = (
    <Box pt={"35px"} mb="8px" pl={'1rem'}>
      <Image src={LogoLight} style={{ width: '10rem', height: 'auto' }} />
      <HSeparator my="26px" />
    </Box>
  );

  // SIDEBAR
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  // Color variables
  return (
    <Flex
      display={{ sm: "flex", xl: "none" }}
      ref={mainPanel}
      alignItems="center"
      justifyContent={'space-between'}
      my="1rem"
    >
      <HamburgerIcon
        color={hamburgerColor}
        w="2.5rem"
        h="2.5rem"
        ml={'1rem'}
        ref={btnRef}
        onClick={onOpen}
      />
      <Drawer
        isOpen={isOpen}
        onClose={onClose}
        placement={document.documentElement.dir === "rtl" ? "right" : "left"}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent
          w="250px"
          maxW="250px"
          ms={{
            sm: "16px",
          }}
          my={{
            sm: "16px",
          }}
          borderRadius="16px"
          bg={sidebarBackgroundColor}
        >
          <DrawerCloseButton
            _focus={{ boxShadow: "none" }}
            _hover={{ boxShadow: "none" }}
          />
          <DrawerBody maxW="250px" px="1rem">
            <Box maxW="100%" h="100vh">
              <Box>{brand}</Box>
              <Stack direction="column" mb="40px">
                <Box>{links}</Box>
              </Stack>
              <SidebarHelp />
            </Box>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Flex>
  );
}

export default Sidebar;
