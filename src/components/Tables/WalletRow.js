import {
  Box,
  Button,
  Flex,
  Icon,
  Spacer,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";

function WalletRow(props) {
  const textColor = useColorModeValue("gray.700", "white");
  const { name, network, address, logo } = props;

  return (
    <Flex my={{ sm: "1rem", xl: "10px" }} alignItems="center">
      <Flex direction="column">
        <Text fontSize="md" color={textColor} fontWeight="bold">
          {name}
        </Text>
        <Text fontSize="sm" color="gray.400" fontWeight="semibold" me="16px">
          {network}
        </Text>
      </Flex>
      <Spacer />
      <Box me="12px">
        <Text fontSize="md" color="gray.400" fontWeight="semibold">
          {address}
        </Text>
      </Box>
      <Button p="0px" bg="transparent" variant="no-effects">
        <Flex alignItems="center" p="12px">
          <Icon as={logo} w="20px" h="auto" me="5px" color={textColor} />
          <img
            src={require("../../assets/img/polygon-matic-logo.png")}
            style={{ width: "2rem" }}
            alt="network"
          />
        </Flex>
      </Button>
    </Flex>
  );
}

export default WalletRow;
