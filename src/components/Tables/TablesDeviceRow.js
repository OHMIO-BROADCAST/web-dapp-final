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
import { BsApple } from "react-icons/bs";
import { FaAndroid } from "react-icons/fa";

function TablesDeviceRow(props) {
  const {
    deviceOSName,
    deviceModelName,
    deviceName,
    deviceBrand,
    activeDate,
    deleteDevice,
  } = props;

  const textColor = useColorModeValue("gray.500", "white");
  const titleColor = useColorModeValue("gray.700", "white");
  const bgStatus = useColorModeValue("gray.400", "navy.900");
  const borderColor = useColorModeValue("gray.200", "gray.600");

  return (
    <Tr>
      <Td minWidth={{ sm: "150px" }} pl="0px" borderColor={borderColor}>
        <Flex
          align="center"
          py=".8rem"
          minWidth="50%"
          flexWrap="nowrap"
          alignItems={"center"}
        >
          {deviceOSName.toLowerCase() == "android" ? (
            <FaAndroid
              style={{ width: 50, height: 50, marginRight: "1rem" }}
              me="18px"
            />
          ) : (
            <BsApple
              style={{ width: 50, height: 50, marginRight: "1rem" }}
              me="18px"
            />
          )}
          <Flex direction="column">
            <Text
              fontSize="md"
              color={titleColor}
              fontWeight="bold"
              minWidth="50%"
            >
              {deviceOSName}
            </Text>
          </Flex>
        </Flex>
      </Td>

      <Td
        borderColor={borderColor}
        style={{ height: "100%", justifyContent: "center" }}
      >
        <Flex direction="column">
          <Text fontSize="md" color={textColor} fontWeight="bold">
            {deviceModelName}
          </Text>
        </Flex>
      </Td>
      <Td
        borderColor={borderColor}
        style={{ height: "100%", justifyContent: "center" }}
      >
        <Flex direction="column">
          <Text fontSize="md" color={textColor} fontWeight="bold">
            {deviceName}
          </Text>
        </Flex>
      </Td>
      <Td
        borderColor={borderColor}
        style={{ height: "100%", justifyContent: "center" }}
      >
        <Text fontSize="md" color={textColor} fontWeight="bold" pb=".5rem">
          {deviceBrand}
        </Text>
      </Td>
      <Td
        borderColor={borderColor}
        style={{ height: "100%", justifyContent: "center" }}
      >
        <Text fontSize="md" color={textColor} fontWeight="bold" pb=".5rem">
          {activeDate}
        </Text>
      </Td>
      <Td
        borderColor={borderColor}
        style={{ height: "100%", justifyContent: "center" }}
      >
        <Tooltip hasArrow label={"Erase this device"} fontSize="sm">
          <Button
            p="0px"
            bg="gray.200"
            variant="no-effects"
            onClick={() => deleteDevice()}
          >
            <AiFillDelete size={22} color="#EF4237" />
          </Button>
        </Tooltip>
      </Td>
    </Tr>
  );
}

export default TablesDeviceRow;
