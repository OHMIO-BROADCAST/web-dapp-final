import {
  Box,
  Button,
  Flex,
  Icon,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import { FaEye, FaPencilAlt, FaPrint, FaTrashAlt } from "react-icons/fa";

function BillingRow(props) {
  const textColor = useColorModeValue("gray.700", "white");
  const bgColor = useColorModeValue("#F8F9FA", "navy.900");
  const nameColor = useColorModeValue("gray.500", "white");
  const { name, company, email, number } = props;

  return (
    <Box p="24px" bg={bgColor} my="22px" borderRadius="12px">
      <Flex justify="space-between" w="100%">
        <Flex direction="column" maxWidth="70%">
          <Text color={nameColor} fontSize="md" fontWeight="bold" mb="10px">
            {name}
          </Text>
          <Text color="gray.400" fontSize="sm" fontWeight="semibold">
            Company Name:{" "}
            <Text as="span" color={nameColor}>
              {company}
            </Text>
          </Text>
          <Text color="gray.400" fontSize="sm" fontWeight="semibold">
            Email Address:{" "}
            <Text as="span" color={nameColor}>
              {email}
            </Text>
          </Text>
          <Text color="gray.400" fontSize="sm" fontWeight="semibold">
            Document ID:{" "}
            <Text as="span" color={nameColor}>
              {number}
            </Text>
          </Text>
        </Flex>
        <Flex
          direction={{ sm: "column", md: "row" }}
          align="flex-start"
          p={{ md: "24px" }}
        >
          <Button
            p="0px"
            bg="transparent"
            variant="no-effects"
            mb={{ sm: "10px", md: "0px" }}
            me={{ md: "12px" }}
          >
            <Flex color="blue.500" cursor="pointer" align="center" p="12px">
              <Icon as={FaEye} me="4px" />
              <Text fontSize="sm" fontWeight="semibold">
                VIEW
              </Text>
            </Flex>
          </Button>
          <Button p="0px" bg="transparent"
            variant="no-effects">
            <Flex color={textColor} cursor="pointer" align="center" p="12px">
              <Icon as={FaPrint} me="4px" />
              <Text fontSize="sm" fontWeight="semibold">
                PRINT
              </Text>
            </Flex>
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
}

export default BillingRow;
