import React, { useState, useEffect } from "react";
import { User as UserModel } from "../../models/index";
import { API, DataStore, graphqlOperation } from "aws-amplify";
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
  useColorModeValue,
  Spinner,
} from "@chakra-ui/react";
// Custom components
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import TablesProjectRow from "components/Tables/TablesProjectRow";
import TablesTableRow from "components/Tables/TablesTableRow";
import ThreeView from "components/Spiral/Treeview.js";

import { HiOutlineRefresh } from "react-icons/hi";
import { listUsers } from "graphql/queries";
import TablesDeviceRow from "components/Tables/TablesDeviceRow";

function TablesDevice(props) {
  const textColor = useColorModeValue("gray.700", "white");
  const borderColor = useColorModeValue("gray.200", "gray.600");
  const {
    deviceOSName,
    deviceModelName,
    deviceName,
    deviceBrand,
    activeDate,
    deleteDevice,
  } = props;

  return (
    <Flex direction="column">
      <Card overflowX={{ sm: "scroll", xl: "hidden" }} pb="0px">
        <CardBody style={{ height: "auto" }}>
          <Table variant="simple" color={textColor}>
            <Thead>
              <Tr my=".8rem" pl="0px" color="gray.400">
                <Th pl="0px" borderColor={borderColor} color="gray.400">
                  Operating System (OS)
                </Th>
                <Th borderColor={borderColor} color="gray.400">
                  Model
                </Th>
                <Th borderColor={borderColor} color="gray.400">
                  Name
                </Th>
                <Th borderColor={borderColor} color="gray.400">
                  Brand
                </Th>
                <Th borderColor={borderColor} color="gray.400">
                  Active Date
                </Th>
                <Th borderColor={borderColor}></Th>
              </Tr>
            </Thead>
            <Tbody>
              <TablesDeviceRow
                deviceOSName={deviceOSName}
                deviceModelName={deviceModelName}
                deviceName={deviceName}
                deviceBrand={deviceBrand}
                activeDate={activeDate}
                deleteDevice={deleteDevice}
              />
            </Tbody>
          </Table>
        </CardBody>
      </Card>
    </Flex>
  );
}

export default TablesDevice;
