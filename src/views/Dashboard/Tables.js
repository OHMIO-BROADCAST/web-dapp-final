import React, { useState, useEffect } from "react";
import { User as UserModel } from "../../models/index";
import { DataStore } from "aws-amplify";
// Chakra imports
import {
  Flex,
  Table,
  Tbody,
  Text,
  Th,
  Button,
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

import { tablesProjectData, tablesTableData } from "variables/general";
import { HiOutlineRefresh } from 'react-icons/hi'

function Tables() {
  const textColor = useColorModeValue("gray.700", "white");
  const borderColor = useColorModeValue("gray.200", "gray.600");

  const [Signals, setSignals] = useState([])
  useEffect(() => {

    //query the initial todolist and subscribe to data updates
    const subscription = DataStore.observeQuery(UserModel).subscribe((snapshot) => {
      //isSynced can be used to show a loading spinner when the list is being loaded. 
      const { items, isSynced } = snapshot;
      console.log("USUARIOS", items);
      setSignals(items);
    });

    //unsubscribe to data updates when component is destroyed so that you don’t introduce a memory leak.
    return async () => {
      subscription.unsubscribe();
      cleanDataStore();
    }
  }, []);



  async function cleanDataStore() {
    try {
      await DataStore.clear();
    } catch (error) {
      console.log("error datastore clear", error)
    }
  }



  return (
    <Flex direction="column" pt={{ base: "120px", md: "75px" }}>
      <Card overflowX={{ sm: "scroll", xl: "hidden" }} pb="0px">
        <CardHeader p="6px 0px 22px 0px">
          <Text fontSize="xl" color={textColor} fontWeight="bold">
            Todos los usuarios
          </Text>
        </CardHeader>
        <CardBody style={{ height: '60rem' }}>

          <Table variant="simple" color={textColor}>
            <Thead>
              <div style={{ width: '100%', height: 'auto', justifyContent: 'center', alignItems: 'center' }}>
                <Button leftIcon={<HiOutlineRefresh />}>ACTUALIZAR</Button>
              </div>
              <Tr my=".8rem" pl="0px" color="gray.400" >
                <Th pl="0px" borderColor={borderColor} color="gray.400" >
                  Nombre / Email
                </Th>
                <Th borderColor={borderColor} color="gray.400" >Usuario / Telefono</Th>
                <Th borderColor={borderColor} color="gray.400" >Registrado</Th>
                <Th borderColor={borderColor} color="gray.400" >Notificaciones</Th>
                <Th borderColor={borderColor} color="gray.400" >Suscripción Forex</Th>
                <Th borderColor={borderColor} color="gra y.400" >Total Ganado</Th>
                <Th borderColor={borderColor} color="gray.400" >Total Referidos</Th>
                <Th borderColor={borderColor} color="gray.400" >Ha comprado algo?</Th>
                <Th borderColor={borderColor} color="gray.400" >Referido Por</Th>
                <Th borderColor={borderColor}></Th>
              </Tr>
            </Thead>
            <Tbody>
              {Signals.length > 0 && Signals.map((row, index, arr) => {

                /* const sanityUser = {
                  createdAt: "2022-12-06T16:32:01.877Z",
                  email: "juanesbe_102@hotmail.com",
                  expoToken: "ExponentPushToken[HuGY89Bqdvs2EpcPjV1Cz-]",
                  forexSubscription: null,
                  hasPurchasedSomething: null,
                  hasReferred: null,
                  id: "dc723af9-5189-4d19-9f2a-4dfc5e07dd07",
                  isReferred: null,
                  name: "juanesbe_102@hotmail.com",
                  phone: "+573012462199",
                  referredBy: null,
                  totalReferred: null,
                  totalReward: null,
                  updatedAt: "2022-12-06T16:32:01.877Z",
                  username: "juanesberrio",
                } */
                console.log("ITEM", row)
                if (row) {
                  const sanityUser = {
                    createdAt: row.createdAt,
                    email: row.createdAt,
                    expoToken: (row.expoToken == null ? "NO TIENE" : row.expoToken),
                    forexSubscription: (row.forexSubscription == null ? false : row.forexSubscription),
                    hasPurchasedSomething: (row.hasPurchasedSomething == null ? false : row.hasPurchasedSomething),
                    hasReferred: (row.hasReferred == null ? false : row.hasReferred),
                    id: row.id,
                    isReferred: (row.isReferred == null ? false : row.isReferred),
                    name: row.name,
                    phone: row.phone,
                    referredBy: (row.referredBy == null ? "NO TIENE" : row.referredBy),
                    totalReferred: (row.totalReferred == null ? 0 : row.totalReferred),
                    totalReward: (row.totalReward == null ? 0 : row.totalReward),
                    updatedAt: row.updatedAt,
                    username: row.username,
                  }

                  console.log("ROW", row)
                  console.log("SANITY", sanityUser)

                  return (
                    <TablesTableRow
                      name={sanityUser.name}
                      email={sanityUser.email}
                      phone_number={sanityUser.phone}
                      username={sanityUser.username}
                      expoToken={sanityUser.expoToken}
                      forexSubscription={sanityUser.forexSubscription}
                      totalReward={sanityUser.totalReward}
                      totalReferred={sanityUser.totalReferred}
                      hasPurchasedSomething={sanityUser.hasPurchasedSomething}
                      referredBy={sanityUser.referredBy}
                      date_register={sanityUser.createdAt}
                      isLast={index === arr.length - 1 ? true : false}
                      key={index}
                    />
                  );
                } else {
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

export default Tables;
