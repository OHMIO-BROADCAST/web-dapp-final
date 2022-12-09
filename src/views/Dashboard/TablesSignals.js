import React from "react";
// Chakra imports
import {
  Button,
  Flex,
  Table,
  Tbody,
  Text,
  Th,
  Thead,
  Tr,
  useColorModeValue
} from "@chakra-ui/react";
// Custom components
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import TablesProjectRow from "components/Tables/TablesProjectRow";
import TablesTableRow from "components/Tables/TablesTableRow";
import ThreeView from 'components/Spiral/Treeview.js'
import { HiOutlineRefresh } from 'react-icons/hi'

import { tablesProjectData, tablesTableData } from "variables/general";

function TablesSignals() {
  const textColor = useColorModeValue("gray.700", "white");
  const borderColor = useColorModeValue("gray.200", "gray.600");

  return (
    <Flex direction="column" pt={{ base: "120px", md: "75px" }} >
      <Card overflowX={{ sm: "scroll", xl: "hidden" }} pb="0px">
        <CardHeader p="6px 0px 22px 0px">
          <Flex direction="column">
            <Text fontSize="xl" color={textColor} fontWeight="bold" pb=".5rem">
              Todas las señales
            </Text>
          </Flex>
        </CardHeader>
        <CardBody>
          <Table variant="simple" color={textColor}>
            <Thead>
              <div style={{ width: '100%', height: 'auto', justifyContent: 'center', alignItems: 'center' }}>
                <Button leftIcon={<HiOutlineRefresh />}>Actualizar</Button>
              </div>
              <Tr my=".8rem" pl="0px">
                <Th pl="0px" color="gray.400" borderColor={borderColor}>
                  PAR OPERADO
                </Th>
                <Th color="gray.400" borderColor={borderColor}>Precio</Th>
                <Th color="gray.400" borderColor={borderColor}>Hora (GMT-5)</Th>
                <Th color="gray.400" borderColor={borderColor}>Fecha</Th>
                <Th color="gray.400" borderColor={borderColor}>Tipo de Orden</Th>
                <Th color="gray.400" borderColor={borderColor}>Posición</Th>
                <Th color="gray.400" borderColor={borderColor}>Modo de adquisición</Th>

                <Th></Th>
              </Tr>
            </Thead>
            <Tbody>
              {tablesProjectData.map((row, index, arr) => {
                return (
                  <TablesProjectRow
                    logo={row.logo}
                    id={row.id}
                    pair={row.pair}
                    title={row.title}
                    description={row.description}
                    timestamp={row.timestamp}
                    type={row.type}
                    price={row.price}
                    time12h={row.time12h}
                    date={row.date}
                    position={row.position}
                    isManual={row.isManual}

                    isLast={index === arr.length - 1 ? true : false}
                    key={index}
                  />
                );
              })}
            </Tbody>
          </Table>
        </CardBody>
      </Card>
    </Flex>
  );
}

export default TablesSignals;
