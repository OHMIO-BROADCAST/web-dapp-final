// chakra imports
import { Avatar, Flex, Text, useColorModeValue } from "@chakra-ui/react";
import { ClockIcon } from "components/Icons/Icons";
import React from "react";
import { NavLink, useHistory } from "react-router-dom";

export function ItemContentProfile(props) {
  const navbarIcon = useColorModeValue("gray.500", "gray.200");
  const notificationColor = useColorModeValue("gray.700", "white");
  const spacing = " ";
  const history = useHistory();
  return (
    <Flex justifyContent='center' alignItems={'center'} onClick={() => { if (props.aRoute == "/profile") { history.push(props.aRoute) } }}>
      <Avatar
        name={props.aName}
        src={props.aSrc}
        borderRadius="12px"
        me="16px"
      />
      <Flex flexDirection="column" >
        <Text fontSize="14px" mb="5px" color={notificationColor}>
          <Text fontWeight="bold" fontSize="14px" as="span">
            {props.boldInfo}
            {spacing}
          </Text>
          {props.info}
        </Text>
      </Flex>
    </Flex>
  );
}
