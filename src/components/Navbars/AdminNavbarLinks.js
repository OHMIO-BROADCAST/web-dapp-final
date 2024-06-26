import React, { useState, useEffect } from "react";
// Chakra Icons
import { BellIcon } from "@chakra-ui/icons";
// Chakra Imports
import {
  Avatar,
  Box,
  Button,
  Flex,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Stack,
  Text,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
// Assets
import avatar1 from "assets/img/avatars/profile.png";
import avatar2 from "assets/img/avatars/settings.png";
import avatar3 from "assets/img/avatars/logout.png";

import { ExternalLinkIcon } from "@chakra-ui/icons";
import { API, Auth } from "aws-amplify";

// Custom Icons
import {
  ArgonLogoDark,
  ArgonLogoLight,
  ChakraLogoDark,
  ChakraLogoLight,
  ProfileIcon,
  SettingsIcon,
} from "components/Icons/Icons";
// Custom Components
import { ItemContent } from "components/Menu/ItemContent";
import { SearchBar } from "components/Navbars/SearchBar/SearchBar";
import { SidebarResponsive } from "components/Sidebar/Sidebar";
import { NavLink, useHistory } from "react-router-dom";
import routes from "routes.js";
import { ItemContentProfile } from "components/Menu/ItemContentProfile";
import Swal from "sweetalert2";
import { FaCoins } from "react-icons/fa";

export default function HeaderLinks(props) {
  const {
    variant,
    children,
    fixed,
    scrolled,
    secondary,
    onOpen,
    money,
    ...rest
  } = props;

  const history = useHistory();

  const { colorMode } = useColorMode();

  const [user, setuser] = useState();

  useEffect(() => {
    Auth.currentAuthenticatedUser().then((user) => {
      console.log(user);
      setuser(user);
    });
  }, []);

  let navbarIcon = useColorModeValue("white", "gray.200");
  // Chakra color mode
  const textColor = useColorModeValue("gray.700", "white");
  const iconColor = useColorModeValue("navy.500", "white");
  const bgProfile = useColorModeValue("hsla(0,0%,100%,.8)", "navy.800");
  const borderProfileColor = useColorModeValue("white", "transparent");
  const emailColor = useColorModeValue("gray.400", "gray.300");

  let menuBg = useColorModeValue("white", "navy.800");
  if (secondary) {
    navbarIcon = "white";
  }
  return (
    <Flex
      pe={{ sm: "0px", md: "16px" }}
      w={{ sm: "100%", md: "auto" }}
      alignItems="center"
      flexDirection="row"
    >
      {/* <SearchBar me='18px' /> */}
      {/* <SettingsIcon
        cursor='pointer'
        ms={{ base: "16px", xl: "0px" }}
        me='16px'
        onClick={props.onOpen}
        color={navbarIcon}
        w='18px'
        h='18px'
      /> */}
      <Flex
        flexDirection={"row"}
        justify="center"
        justifyContent={"center"}
        alignItems="center"
        bg={"transparent"}
        px="1rem"
        style={{ borderRadius: "50" }}
        onClick={props.onOpen}
        visibility={{ xs: "hidden" }}
      >
        {money != null ? (
          <Text color={"white"} fontWeight={"bold"}>
            Total Accumulated by rewards: {money} OHMIO
          </Text>
        ) : (
          <Text color={"white"} fontWeight={"bold"}>
            Total Accumulated by rewards: 0 OHMIO
          </Text>
        )}

        <FaCoins size={14} color="#fff" style={{ marginLeft: "0.5rem" }} />
      </Flex>
      {/*   <Flex
        flexDirection={"row"}
        justify="center"
        justifyContent={"center"}
        alignItems="center"
        bg={"white"}
        px="1rem"
        style={{ borderRadius: "50" }}
        borderRadius={15}
        onClick={props.onOpen}
        visibility={{ xs: "hidden" }}
      >
        <Text color={"#f9ae40"} fontWeight={"bold"}>
          How to earn
        </Text>
        <ExternalLinkIcon
          cursor="pointer"
          ms={{ base: "0.5rem", xl: "0.5rem" }}
          onClick={props.onOpen}
          color={"#f9ae40"}
          w="18px"
          h="18px"
        />
      </Flex> */}
      {/* <Menu>
        <MenuButton marginLeft={'1rem'}>
          <BellIcon color={navbarIcon} w='18px' h='18px' />
        </MenuButton>
        <MenuList p='16px 8px' bg={menuBg}>
          <Flex flexDirection='column'>
            <MenuItem borderRadius='8px' mb='10px'>
              <ItemContent
                time='13 minutes ago'
                info='from Alicia'
                boldInfo='New Crypto Refeer'
                aName='Alicia'
                aSrc={avatar1}
              />
            </MenuItem>
            <MenuItem borderRadius='8px' mb='10px'>
              <ItemContent
                time='2 days ago'
                info='from Josh Henry'
                boldInfo='New FIAT Refeer'
                aName='Josh Henry'
                aSrc={avatar2}
              />
            </MenuItem>
            <MenuItem borderRadius='8px'>
              <ItemContent
                time='3 days ago'
                info='Payment succesfully completed!'
                boldInfo=''
                aName='Freedom LIVE Team'
                aSrc={avatar3}
              />
            </MenuItem>
          </Flex>
        </MenuList>
      </Menu> */}

      <Flex
        flexDirection={"row"}
        justify="center"
        justifyContent={"center"}
        alignItems="center"
        boxShadow="0px 2px 5.5px rgba(0, 0, 0, 0.02)"
        border="1.5px solid"
        borderColor={borderProfileColor}
        bg={"white"}
        borderRadius={45}
        pl="1rem"
        ml="1rem"
        visibility={{ xs: "hidden" }}
      >
        <Text color={"orange"} fontWeight={"bold"}>
          {user && user.attributes.name}
        </Text>
        <Menu>
          <MenuButton marginLeft={"0.5rem"}>
            <Avatar color={navbarIcon} w="2.3rem" h="2.3rem" me="0px" />
          </MenuButton>
          <MenuList p="16px 8px" bg={menuBg}>
            <Flex flexDirection="column">
              <MenuItem borderRadius="8px" mb="10px">
                <ItemContentProfile
                  boldInfo="Profile"
                  aSrc={avatar1}
                  aRoute={"/profile"}
                />
              </MenuItem>
              <MenuItem borderRadius="8px" mb="10px">
                <ItemContentProfile
                  boldInfo="Settings"
                  aSrc={avatar2}
                  aRoute={"/profile"}
                />
              </MenuItem>
              <MenuItem
                borderRadius="8px"
                onClick={async () => {
                  await Auth.signOut();
                  console.log("User Logout");
                }}
              >
                <ItemContentProfile boldInfo="Log Out" aSrc={avatar3} />
              </MenuItem>
            </Flex>
          </MenuList>
        </Menu>
      </Flex>

      <SidebarResponsive
        hamburgerColor={"white"}
        logo={
          <Stack direction="row" spacing="12px" align="center" justify="center">
            {colorMode === "dark" ? (
              <ArgonLogoLight w="74px" h="27px" />
            ) : (
              <ArgonLogoDark w="74px" h="27px" />
            )}
          </Stack>
        }
        colorMode={colorMode}
        secondary={props.secondary}
        routes={routes}
        {...rest}
      />
    </Flex>
  );
}
