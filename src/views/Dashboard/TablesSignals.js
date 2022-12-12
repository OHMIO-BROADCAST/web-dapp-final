import React, { useState, useEffect } from "react";
import { Notification as NotificationModel } from "../../models/index";
import { DataStore, API, graphqlOperation } from "aws-amplify";
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
import { listNotifications } from "graphql/queries";

//"b8a7ec00-5a96-43af-899e-b76c1af0c365" ID del modo actual

function TablesSignals() {
  const textColor = useColorModeValue("gray.700", "white");
  const borderColor = useColorModeValue("gray.200", "gray.600");

  const [Signals, setSignals] = useState([])
  useEffect(() => {
    getAllNotifications()
    /* //query the initial todolist and subscribe to data updates
    const subscription = DataStore.observeQuery(NotificationModel).subscribe((snapshot) => {
      //isSynced can be used to show a loading spinner when the list is being loaded. 
      const { items, isSynced } = snapshot;
      console.log("USUARIOS", items);
      setSignals(items);
    });

    //unsubscribe to data updates when component is destroyed so that you don’t introduce a memory leak.
    return async () => {
      subscription.unsubscribe();
      cleanDataStore();
    } */
  }, []);

  async function getAllNotifications() {
    console.log("obteniendo notificaciones...")
    try {
      const getAllNotificationsData = await (await API.graphql(graphqlOperation(listNotifications))).data
      if (getAllNotificationsData.listNotifications.items != null) {
        setSignals(getAllNotificationsData.listNotifications.items)
      }
    } catch (error) {
      console.log("Error actualizando usuarios", error)
    }
  }

  async function cleanDataStore() {
    try {
      await DataStore.clear();
    } catch (error) {
      console.log("error datastore clear", error)
    }
  }


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
                <Button leftIcon={<HiOutlineRefresh />} onClick={() => getAllNotifications()}>ACTUALIZAR</Button>
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
              {Signals.length > 0 && Signals.map((row, index, arr) => {
                /* const sanitySignal = {
                createdAt: "2022-12-11T02:06:57.084Z",
                date: "06/12/2022",
                description: "descriptionTest",
                id: "2ff685a9-014e-41ee-b1b3-8f3d16638e8d",
                isManual: false,
                pair: "AUDCAD",
                position: "Sell",
                price: 1.8,
                time12h: "12:10PM",
                timestamp: "timseStamp",
                title: "titleTest",
                type: "SELL",
                updatedAt: "2022-12-11T02:06:57.084Z",
               } */
                if (row) {
                  const sanitySignal = {
                    createdAt: "2022-12-11T02:06:57.084Z",
                    date: "06/12/2022",
                    description: "descriptionTest",
                    id: "2ff685a9-014e-41ee-b1b3-8f3d16638e8d",
                    isManual: false,
                    pair: "AUDCAD",
                    position: "Sell",
                    price: 1.8,
                    time12h: "12:10PM",
                    timestamp: "timseStamp",
                    title: "titleTest",
                    type: "SELL",
                    updatedAt: "2022-12-11T02:06:57.084Z",
                  }

                  return (
                    <TablesProjectRow
                      id={sanitySignal.id}
                      pair={sanitySignal.pair}
                      title={sanitySignal.title}
                      description={sanitySignal.description}
                      timestamp={sanitySignal.timestamp}
                      type={sanitySignal.type}
                      price={sanitySignal.price}
                      time12h={sanitySignal.time12h}
                      date={sanitySignal.date}
                      position={sanitySignal.position}
                      isManual={sanitySignal.isManual}
                      createdAt={sanitySignal.createdAt}

                      isLast={index === arr.length - 1 ? true : false}
                      key={index}
                    />
                  );
                }
                else {
                  return null
                }
              })}
            </Tbody>
          </Table>
        </CardBody>
      </Card>
    </Flex>
  );
}

export default TablesSignals;
