import {
  Avatar,
  Badge,
  Button,
  Flex,
  Td,
  Text,
  Tooltip,
  Tr,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import { AiFillDelete } from "react-icons/ai";

function TablesTableRow(props) {
  const {
    name,
    email,
    phone_number,
    username,
    referredBy,
    forexSubscription,
    totalReward,
    totalReferred,
    hasPurchasedSomething,
    expoToken,
    date_register,
    isLast,
  } = props;
  const textColor = useColorModeValue("gray.500", "white");
  const titleColor = useColorModeValue("gray.700", "white");
  const bgStatus = useColorModeValue("gray.400", "navy.900");
  const borderColor = useColorModeValue("gray.200", "gray.600");

  return (
    <Tr>
      <Td
        minWidth={{ sm: "250px" }}
        pl="0px"
        borderColor={borderColor}
        borderBottom={isLast ? "none" : null}
      >
        <Flex align="center" py=".8rem" minWidth="100%" flexWrap="nowrap">
          <Avatar w="50px" borderRadius="100px" me="18px" />
          <Flex direction="column">
            <Text
              fontSize="md"
              color={titleColor}
              fontWeight="bold"
              minWidth="100%"
            >
              {name}
            </Text>
            <Text fontSize="sm" color="gray.400" fontWeight="normal">
              {email}
            </Text>
          </Flex>
        </Flex>
      </Td>

      <Td
        borderColor={borderColor}
        borderBottom={isLast ? "none" : null}
        style={{ height: "100%", justifyContent: "center" }}
      >
        <Flex direction="column">
          <Text fontSize="md" color={textColor} fontWeight="bold">
            {username}
          </Text>
          <Text fontSize="sm" color="gray.400" fontWeight="normal">
            {phone_number}
          </Text>
        </Flex>
      </Td>
      <Td
        borderColor={borderColor}
        borderBottom={isLast ? "none" : null}
        style={{ height: "100%", justifyContent: "center" }}
      >
        <Text fontSize="md" color={textColor} fontWeight="bold" pb=".5rem">
          {date_register}
        </Text>
      </Td>
      <Td
        borderColor={borderColor}
        borderBottom={isLast ? "none" : null}
        style={{ height: "100%", justifyContent: "center" }}
      >
        <Tooltip
          hasArrow
          label={"Token de Notificación: " + expoToken}
          fontSize="sm"
        >
          <Badge
            bg={expoToken != null && expoToken != "" ? "green.400" : "grey.500"}
            color={expoToken != null && expoToken != "" ? "white" : "white"}
            fontSize="16px"
            p="3px 10px"
            borderRadius="8px"
          >
            {expoToken != null && expoToken != "" ? "Activo" : "Inactivo"}
          </Badge>
        </Tooltip>
      </Td>
      <Td
        borderColor={borderColor}
        borderBottom={isLast ? "none" : null}
        style={{ height: "100%", justifyContent: "center" }}
      >
        <Badge
          bg={forexSubscription === true ? "green.400" : bgStatus}
          color={forexSubscription === true ? "white" : "white"}
          fontSize="16px"
          p="3px 10px"
          borderRadius="8px"
        >
          {forexSubscription == true ? "Activo" : "Inactivo"}
        </Badge>
      </Td>
      <Td
        borderColor={borderColor}
        borderBottom={isLast ? "none" : null}
        style={{ height: "100%", justifyContent: "center" }}
      >
        <Badge
          bg={totalReward === true ? "green.400" : bgStatus}
          color={totalReward === true ? "white" : "white"}
          fontSize="16px"
          p="3px 10px"
          borderRadius="8px"
        >
          {"$ " + totalReward.toString()}
        </Badge>
      </Td>
      <Td
        borderColor={borderColor}
        borderBottom={isLast ? "none" : null}
        style={{ height: "100%", justifyContent: "center" }}
      >
        <Badge
          bg={forexSubscription === true ? "orange.400" : bgStatus}
          color={forexSubscription === true ? "white" : "white"}
          fontSize="16px"
          p="3px 10px"
          borderRadius="8px"
        >
          {totalReferred}
        </Badge>
      </Td>
      <Td
        borderColor={borderColor}
        borderBottom={isLast ? "none" : null}
        style={{
          height: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text
          fontSize="md"
          color={textColor}
          fontWeight="bold"
          pb=".5rem"
          style={{ justifyContent: "center", display: "flex", height: "100%" }}
        >
          {hasPurchasedSomething == false ? "NO" : "SI"}
        </Text>
      </Td>
      <Td
        borderColor={borderColor}
        borderBottom={isLast ? "none" : null}
        style={{ height: "100%", justifyContent: "center" }}
      >
        <Text fontSize="md" color={textColor} fontWeight="bold" pb=".5rem">
          {referredBy}
        </Text>
      </Td>

      <Td
        borderColor={borderColor}
        borderBottom={isLast ? "none" : null}
        style={{ height: "100%", justifyContent: "center" }}
      >
        <Button p="0px" bg="transparent" variant="no-effects">
          <AiFillDelete size={22} color="#EF4237" />
        </Button>
      </Td>
    </Tr>
  );
}

export default TablesTableRow;
