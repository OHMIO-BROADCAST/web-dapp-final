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

function InvoicesRow(props) {
  const textColor = useColorModeValue("gray.700", "white");
  const { date, code, price, format, logo } = props;

  return (
    <Flex my={{ sm: "1rem", xl: "10px" }} alignItems="center">
      <Flex direction="column">
        <Text fontSize="md" color={textColor} fontWeight="bold">
          {date}
        </Text>
        <Text fontSize="sm" color="gray.400" fontWeight="semibold" me="16px">
          {code}
        </Text>
      </Flex>
      <Spacer />
      <Box me="12px">
        <Text fontSize="md" color="gray.400" fontWeight="semibold">
          {price}
        </Text>
      </Box>
      <Button p="0px" bg="transparent" variant="no-effects">
        <Flex alignItems="center" p="12px">
          <Icon as={logo} w="20px" h="auto" me="5px" color={textColor} />
          <a
            fontSize="md"
            color={textColor}
            fontWeight="bold"
            href="https://www.docdroid.net/8Sf1lf9/disclaimer-for-radio-advice-pdf"
            target={"_blank"}
            rel="noreferrer"
          >
            {format}
          </a>
        </Flex>
      </Button>
    </Flex>
  );
}

export default InvoicesRow;
