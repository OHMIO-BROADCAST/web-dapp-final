// Chakra Imports
import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  Flex, Link,
  Switch,
  Text,
  useColorMode,
  useColorModeValue
} from "@chakra-ui/react";
import ReferLink from "components/ReferLink/ReferLink";
import { HSeparator } from "components/Separator/Separator";
import React, { useState } from "react";
import GitHubButton from "react-github-btn";
import { FaFacebook, FaTwitter, FaWhatsapp, FaGoogle } from "react-icons/fa";

import './SharedSocial.css';

export default function Configurator(props) {
  const {
    sidebarVariant,
    setSidebarVariant,
    secondary,
    isOpen,
    onClose,
    fixed,
    ...rest
  } = props;
  const [switched, setSwitched] = useState(props.isChecked);

  const { colorMode, toggleColorMode } = useColorMode();

  let bgButton = useColorModeValue(
    "linear-gradient(81.62deg, #313860 2.25%, #151928 79.87%)",
    "white"
  );
  let colorButton = useColorModeValue("white", "gray.700");
  const secondaryButtonBg = useColorModeValue("white", "transparent");
  const secondaryButtonBorder = useColorModeValue("gray.700", "white");
  const secondaryButtonColor = useColorModeValue("gray.700", "white");
  const bgDrawer = useColorModeValue("white", "navy.800");
  const settingsRef = React.useRef();
  return (
    <>
      <Drawer
        isOpen={props.isOpen}
        onClose={props.onClose}
        placement={document.documentElement.dir === "rtl" ? "left" : "right"}
        finalFocusRef={settingsRef}
        blockScrollOnMount={false}
      >
        <DrawerContent bg={bgDrawer}>
          <DrawerHeader pt="24px" px="24px">
            <DrawerCloseButton />
            <Text fontSize="xl" fontWeight="bold" mt="16px" style={{ color: '#22589f' }}>
              MY REFER LINKS
            </Text>

            <HSeparator />
          </DrawerHeader>
          <DrawerBody w="340px" ps="24px" pe="40px">
            <Flex flexDirection="column">

              <Flex
                justifyContent="space-between"
                alignItems="center"
                mb="1rem"
              >
                <Text fontSize="md" fontWeight="600" mb="4px" style={{ color: '#22589f' }}>
                  GENERAL LINK
                </Text>
              </Flex>

              <HSeparator />

              <Box mt="1rem">
                <Flex
                  justifyContent="center"
                  alignItems="center"
                  w="100%"
                >
                  <ReferLink />
                </Flex>
              </Box>

              <HSeparator />

              <Box mt="1rem">
                <Box w="100%">
                  <Text fontWeight={"bold"} fontSize="1rem" mb="1rem" mt="1rem" textAlign="center" style={{ color: '#22589f' }}>
                    These are another social options
                  </Text>
                  <Flex
                    justifyContent="center"
                    alignContent="center"
                    flexDirection="column"
                    alignItems="center"
                  >
                    <Link
                      isExternal="true"
                      href="https://twitter.com/tipscorporativo"
                    >
                      <Button
                        colorScheme="twitter"
                        leftIcon={<FaTwitter />}
                        mb="0.5rem"
                      >
                        <Text>Tweet</Text>
                      </Button>
                    </Link>
                    <Link
                      isExternal="true"
                      href="https://www.facebook.com/sharer/sharer.php?u=https://www.creative-tim.com/product/argon-dashboard-chakra/"
                    >
                      <Button colorScheme="facebook" leftIcon={<FaFacebook />} mb="0.5rem"
                      >
                        <Text>Share</Text>
                      </Button>
                    </Link>
                    <Link
                      isExternal="true"
                      href="https://www.whatsapp.com/sharer/sharer.php?u=https://www.creative-tim.com/product/argon-dashboard-chakra/"
                    >
                      <Button colorScheme="red" leftIcon={<FaGoogle />} mb="0.5rem"
                      >
                        <Text>Share</Text>
                      </Button>
                    </Link>
                    <Link
                      isExternal="true"
                      href="https://www.whatsapp.com/sharer/sharer.php?u=https://www.creative-tim.com/product/argon-dashboard-chakra/"
                    >
                      <Button colorScheme="whatsapp" leftIcon={<FaWhatsapp />} mb="0.5rem"
                      >
                        <Text>Share</Text>
                      </Button>
                    </Link>
                  </Flex>
                </Box>
              </Box>
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
