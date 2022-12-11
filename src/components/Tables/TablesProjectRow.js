import React from "react";
import {
  Tr,
  Td,
  Flex,
  Text,
  Progress,
  Icon,
  Button,
  useColorModeValue,
  Badge,
  Image,
} from "@chakra-ui/react";
import { FaEllipsisV } from "react-icons/fa";
import { Tooltip } from '@chakra-ui/react'

function DashboardTableRow(props) {
  const { logo, isLast, id,
    title,
    description,
    timestamp,
    createdAt,
    type,
    pair,
    price,
    time12h,
    date,
    position,
    isManual } = props;
  const textColor = useColorModeValue("gray.500", "white");
  const titleColor = useColorModeValue("gray.700", "white");
  const borderColor = useColorModeValue("gray.200", "gray.600");

  return (
    <Tr>
      <Td minWidth={{ sm: "100px" }} pl="0px" borderColor={borderColor} borderBottom={isLast ? "none" : null}>
        <Flex alignItems="center" py=".8rem" minWidth="100%" flexWrap="nowrap">

          {
            pair.toLowerCase() == 'audcad' &&
            <Tooltip
              hasArrow
              label={"Identificador: " + id}
              fontSize='sm'
            >
              <Image
                src={
                  require(`../../assets/img/pairs/audcad.png`)
                }
                style={{ width: 50, height: 50, borderRadius: 10, marginRight: 8 }}
              /></Tooltip>
          }

          {
            pair.toLowerCase() == 'usdcad' &&
            <Tooltip
              hasArrow
              label={"Identificador: " + id}
              fontSize='sm'
            ><Image
                src={
                  require(`../../assets/img/pairs/usdcad.png`)
                }
                style={{ width: 50, height: 50, borderRadius: 10, marginRight: 8 }}
              /></Tooltip>
          }

          {
            pair.toLowerCase() == 'nzdcad' &&
            <Tooltip
              hasArrow
              label={"Identificador: " + id}
              fontSize='sm'
            ><Image
                src={
                  require(`../../assets/img/pairs/nzdcad.png`)
                }
                style={{ width: 50, height: 50, borderRadius: 10, marginRight: 8 }}
              /></Tooltip>
          }

          {
            pair.toLowerCase() == 'eurusd' &&
            <Tooltip
              hasArrow
              label={"Identificador: " + id}
              fontSize='sm'
            ><Image
                src={
                  require(`../../assets/img/pairs/eurusd.png`)
                }
                style={{ width: 50, height: 50, borderRadius: 10, marginRight: 8 }}
              /></Tooltip>
          }

          {
            pair.toLowerCase() == 'cadchf' &&
            <Tooltip
              hasArrow
              label={"Identificador: " + id}
              fontSize='sm'
            ><Image
                src={
                  require(`../../assets/img/pairs/cadchf.png`)
                }
                style={{ width: 50, height: 50, borderRadius: 10, marginRight: 8 }}
              /></Tooltip>
          }
          <Text
            fontSize="md"
            color={titleColor}
            fontWeight="bold"
            minWidth="100%"
          >
            {pair.toUpperCase()}
          </Text>
        </Flex>
      </Td>
      <Td borderBottom={isLast ? "none" : null} borderColor={borderColor}>
        <Text fontSize="md" color={textColor} fontWeight="bold" pb=".5rem">
          @{price}
        </Text>
      </Td>
      <Td borderBottom={isLast ? "none" : null} borderColor={borderColor}>
        <Text fontSize="md" color={textColor} fontWeight="bold" pb=".5rem">
          {time12h}
        </Text>
      </Td>
      <Td borderBottom={isLast ? "none" : null} borderColor={borderColor}>
        <Tooltip
          hasArrow
          label={"Fecha de Lanzamiento por parte nuestra: " + createdAt}
          fontSize='sm'
        >
          <Text fontSize="md" color={textColor} fontWeight="bold" pb=".5rem">
            {date}
          </Text>
        </Tooltip>

      </Td>
      <Td borderBottom={isLast ? "none" : null} borderColor={borderColor}>

        <Text fontSize="md" color={textColor} fontWeight="bold" pb=".5rem">
          {type}
        </Text>
      </Td>
      <Td borderColor={borderColor} borderBottom={isLast ? "none" : null} style={{ height: '100%', justifyContent: 'center' }}>
        <Badge
          bg={position == "Buy" ? "green.400" : "red.400"}
          color={position == "Buy" ? "white" : "white"}
          fontSize="16px"
          p="3px 10px"
          borderRadius="8px"
        >
          {position == "Buy" ? "Comprar" : "Vender"}
        </Badge>
      </Td>
      <Td borderColor={borderColor} borderBottom={isLast ? "none" : null} style={{ height: '100%', justifyContent: 'center' }}>
        <Badge
          bg={isManual === true ? "black.400" : "yellow.400"}
          color={isManual === true ? "white" : "white"}
          fontSize="16px"
          p="3px 10px"
          borderRadius="8px"
        >
          {isManual == true ? "Manual" : "Automática"}
        </Badge>
      </Td>
      {/* <Td borderBottom={isLast ? "none" : null} borderColor={borderColor}>
        <Button p="0px" bg="transparent" variant="no-effects">
          <Icon as={FaEllipsisV} color="gray.400" cursor="pointer" />
        </Button>
      </Td> */}
    </Tr >
  );
}

export default DashboardTableRow;
