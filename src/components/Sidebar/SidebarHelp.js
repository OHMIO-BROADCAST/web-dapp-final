import {
  Button,
  Flex,
  Image,
  Link,
  Stack,
  Text,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import SidebarHelpImage from "assets/img/SidebarHelpImage.png";
import React from "react";
import { FaApple } from "react-icons/fa";
import { MdOutlineAndroid } from "react-icons/md";
import Swal from "sweetalert2";

export function SidebarHelp(props) {
  // Pass the computed styles into the `__css` prop
  const { children, sidebarVariant, ...rest } = props;
  const textColor = useColorModeValue("gray.700", "white");
  const { colorMode } = useColorMode();
  return (
    <Stack
      justify="center"
      direction="column"
      align="center"
      spacing="10px"
      mb="22px"
      mt="auto"
      mx="20px"
    >
      <Image
        src={SidebarHelpImage}
        w="250px"
        h="auto"
        style={{ borderRadius: 45 }}
      />
      <Flex direction="column" textAlign="center">
        <Text fontSize="14px" color={textColor} fontWeight="bold">
          OHMIO App
        </Text>
        <Text fontSize="12px" color="gray.500">
          Unlock the power of Blockchain.
        </Text>
      </Flex>
      <Link
        href="https://play.google.com/store/apps/details?id=com.ohmio.app"
        target={"_blank"}
        minW="100%"
      >
        <Button
          variant="primary"
          minW="100%"
          rightIcon={<MdOutlineAndroid size={22} color="white" />}
          fontWeight="black"
        >
          Download Android
        </Button>
      </Link>
      <Link
        onClick={() => {
          Swal.fire({
            text: "Stay Up, for now we only supports Android",
            title: "Coming soon!",
            icon: "success",
          });
        }}
        minW="100%"
      >
        <Button
          variant={colorMode === "light" ? "dark" : "navy"}
          minW="100%"
          mb={window.innerWidth <= 1024 && "12px"}
          rightIcon={<FaApple size={22} color="white" />}
          fontWeight="black"
        >
          Download iOS
        </Button>
      </Link>
    </Stack>
  );
}
