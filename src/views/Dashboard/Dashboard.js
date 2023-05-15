// Chakra imports
import {
  Box,
  Button,
  Flex,
  Grid,
  Progress,
  SimpleGrid,
  Stat,
  StatLabel,
  StatNumber,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
// Custom components
import React, { useEffect, useState } from "react";

import Card from "components/Card/Card.js";
import BarChart from "components/Charts/BarChart";
import LineChart from "components/Charts/LineChart";
import IconBox from "components/Icons/IconBox";
// Custom icons
import {
  CartIcon,
  DocumentIcon,
  GlobeIcon,
  WalletIcon,
} from "components/Icons/Icons.js";
// Variables
import {
  barChartData,
  barChartOptions,
  lineChartOptions,
} from "variables/charts";
import { pageVisits, socialTraffic } from "variables/general";
import { MdRefresh, MdSettingsInputAntenna } from "react-icons/md";
import { GiFactory } from "react-icons/gi";
import { FaWaveSquare } from "react-icons/fa";
import { Amplify, Auth, Hub, PubSub } from "aws-amplify";
import { AWSIoTProvider, CONNECTION_STATE_CHANGE } from "@aws-amplify/pubsub";
import {
  AiFillAlert,
  AiFillCheckCircle,
  AiFillCloseCircle,
} from "react-icons/ai";

const styles = {
  title: {
    fontSize: "20px",
    fontWeight: "700",
  },
  text: {
    fontSize: "16px",
  },
  card: {
    boxShadow: "0 0.5rem 1.2rem rgb(189 197 209 / 20%)",
    border: "1px solid #e7eaf3",
    borderRadius: "0.5rem",
  },
  timeline: {
    marginBottom: "-45px",
  },
  cardoffline: {
    boxShadow: "0 0.5rem 1.2rem rgb(189 197 209 / 20%)",
    border: "1px solid #e7eaf3",
    borderRadius: "1rem",
    width: "450px",
    fontSize: "16px",
    fontWeight: "500",
  },
};

export default function Dashboard() {
  // Chakra Color Mode
  const iconBlue = useColorModeValue("navy.500", "navy.500");
  const iconBoxInside = useColorModeValue("white", "white");
  const textColor = useColorModeValue("gray.700", "white");
  const tableRowColor = useColorModeValue("#F7FAFC", "navy.900");
  const borderColor = useColorModeValue("gray.200", "gray.600");
  const textTableColor = useColorModeValue("gray.500", "white");

  const { colorMode } = useColorMode();

  const [numberOHMIOBoxes, setnumberOHMIOBoxes] = useState(0);
  const [isActive, setisActive] = useState(false);
  const [currentMER, setCurrentMER] = useState(0);
  const [currentBER, setCurrentBER] = useState(0);
  const [currentCHANNEL, setCurrentCHANNEL] = useState(0);
  const [currentSTANDARD, setCurrentSTANDARD] = useState("");
  const [currentCOMPANY, setCurrentCOMPANY] = useState("");

  const [currentCloudSTATUS, setCurrentCloudSTATUS] = useState("");
  const [currentOhmioSTATUS, setCurrentOhmioSTATUS] = useState("");

  const [lineChartData, setLineChartData] = useState([
    {
      name: "MER",
      data: [5, 4, 30, 22, 50, 25, 40, 23, 50, 10, 20, 10],
    },
    {
      name: "BER",
      data: [3, 9, 4, 14, 29, 29, 34, 23, 40, 10, 20, 10],
    },
  ]);
  /* const [lineChartData, setLineChartData] = useState([
    {
      name: "MER",
      data: [0],
    },
    {
      name: "BER",
      data: [0],
    },
  ]); */

  const testPub = async () => {
    await PubSub.publish("ohmioboxtest/pub", {
      msg: "Hello motherfuckers!",
    }).then((data) => {
      console.log("un exito", data);
    });
  };

  useEffect(() => {
    Auth.currentCredentials().then((creds) =>
      console.log("CREDENCIALES", creds),
    );
    //esta funcion sirve para verificar pagos y suscripciones
    Amplify.addPluggable(
      new AWSIoTProvider({
        aws_pubsub_region: "us-east-1",
        aws_pubsub_endpoint:
          "wss://a10pxpt61w2oef-ats.iot.us-east-1.amazonaws.com/mqtt",
      }),
    );

    //Subscription
    PubSub.subscribe("$aws/events/presence/+/ohmioboxtest").subscribe({
      next: (data) => {
        if (data.value && data.value.evenType) {
          if (data.value.evenType == "disconnected") {
            setCurrentOhmioSTATUS("Disconnected");
          } else if (data.value.evenType == "connected") {
            setCurrentOhmioSTATUS("Connected");
          }
        }
      },
      error: (error) => console.error(error),
      close: () => console.log("Done"),
    });

    PubSub.subscribe("ohmioboxtest/pub").subscribe({
      next: (data) => {
        console.log("Message received", data);
      },
      error: (error) => console.error("Error subscribiendo al topioc", error),
      complete: () => console.log("Done"),
    });

    Hub.listen("pubsub", (data) => {
      const { payload } = data;

      if (payload.event == CONNECTION_STATE_CHANGE) {
        const connectionState = payload.data.connectionState;
        console.log("Cloud conexion", connectionState);
        setCurrentCloudSTATUS(connectionState);
        if (connectionState == "Connected") {
          if (numberOHMIOBoxes < 1) {
            setnumberOHMIOBoxes(1);
          }
        } else {
          if (numberOHMIOBoxes == 1) {
            setnumberOHMIOBoxes(0);
          }
        }
      }
    });
    testPub();
    return () => {
      Amplify.removePluggable("AWSIoTProvider");
    };
  }, []);

  /* return (
    <Flex
      direction="column"
      pt={{ base: "120px", md: "75px" }}
      alignContent="center"
      alignItems="center"
    >
      <Card style={styles.cardoffline}>
        <div
          style={{
            width: "auto",
            height: "300px",
            justifyContent: "center",
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Text align={"center"} fontWeight={"bold"} fontSize={25}>
            OHMIO Broadcast
          </Text>
          <Text align={"center"} fontWeight={300}>
            We are currently working on this main page
          </Text>
        </div>
      </Card>
    </Flex>
  ); */

  return (
    <Flex flexDirection="column" pt={{ base: "120px", md: "75px" }}>
      <SimpleGrid columns={{ sm: 1, md: 2, xl: 4 }} spacing="24px" mb="20px">
        <Card minH="125px">
          <Flex direction="column">
            <Flex
              flexDirection="row"
              align="center"
              justify="center"
              w="100%"
              mb="25px"
            >
              <Stat me="auto">
                <StatLabel
                  fontSize="xs"
                  color="gray.400"
                  fontWeight="bold"
                  textTransform="uppercase"
                >
                  OHMIO Box Status
                </StatLabel>
                <Flex flexDirection={"column"}>
                  <StatNumber fontSize="lg" color={textColor} fontWeight="bold">
                    {numberOHMIOBoxes} actives
                  </StatNumber>
                  <StatLabel
                    fontSize="xs"
                    color="gray.400"
                    fontWeight="bold"
                    textTransform="uppercase"
                    marginTop={"0.5rem"}
                  >
                    Web App Cloud
                  </StatLabel>
                  {(currentCloudSTATUS == "" ||
                    currentCloudSTATUS == "Disconnected") && (
                    <StatNumber
                      fontSize="md"
                      color={"white"}
                      bgColor={"red.400"}
                      padding={"0.2rem"}
                      borderRadius={10}
                      fontWeight="normal"
                      flexDirection={"row"}
                      display={"flex"}
                      alignItems={"center"}
                    >
                      <AiFillCloseCircle
                        color="white"
                        style={{ marginRight: "0.5rem" }}
                      />
                      Disconnected
                    </StatNumber>
                  )}
                  {currentCloudSTATUS == "Connected" && (
                    <StatNumber
                      fontSize="md"
                      color={"white"}
                      bgColor={"#4abeac"}
                      padding={"0.2rem"}
                      borderRadius={10}
                      fontWeight="normal"
                      flexDirection={"row"}
                      display={"flex"}
                      alignItems={"center"}
                    >
                      <AiFillCheckCircle
                        color="white"
                        style={{ marginRight: "0.5rem" }}
                      />
                      Connected
                    </StatNumber>
                  )}
                  {currentCloudSTATUS == "Connecting" && (
                    <StatNumber
                      fontSize="md"
                      color={textColor}
                      bgColor={"gray.400"}
                      padding={"0.2rem"}
                      borderRadius={10}
                      fontWeight="normal"
                      flexDirection={"row"}
                      display={"flex"}
                      alignItems={"center"}
                    >
                      <AiFillAlert
                        color="white"
                        style={{ marginRight: "0.5rem" }}
                      />
                      Connecting
                    </StatNumber>
                  )}
                  <StatLabel
                    fontSize="xs"
                    color="gray.400"
                    fontWeight="bold"
                    textTransform="uppercase"
                    marginTop={"0.5rem"}
                  >
                    OHMIO Cloud Presence
                  </StatLabel>
                  {(currentOhmioSTATUS == "" ||
                    currentOhmioSTATUS == "Disconnected") && (
                    <StatNumber
                      fontSize="md"
                      color={"white"}
                      bgColor={"red.400"}
                      padding={"0.2rem"}
                      borderRadius={10}
                      fontWeight="normal"
                      flexDirection={"row"}
                      display={"flex"}
                      alignItems={"center"}
                    >
                      <AiFillCloseCircle
                        color="white"
                        style={{ marginRight: "0.5rem" }}
                      />
                      Disconnected
                    </StatNumber>
                  )}
                  {currentOhmioSTATUS == "Connected" && (
                    <StatNumber
                      fontSize="md"
                      color={"white"}
                      bgColor={"#4abeac"}
                      padding={"0.2rem"}
                      borderRadius={10}
                      fontWeight="normal"
                      flexDirection={"row"}
                      display={"flex"}
                      alignItems={"center"}
                    >
                      <AiFillCheckCircle
                        color="white"
                        style={{ marginRight: "0.5rem" }}
                      />
                      Connected
                    </StatNumber>
                  )}
                  {currentOhmioSTATUS == "Connecting" && (
                    <StatNumber
                      fontSize="md"
                      color={textColor}
                      bgColor={"gray.400"}
                      padding={"0.2rem"}
                      borderRadius={10}
                      fontWeight="normal"
                      flexDirection={"row"}
                      display={"flex"}
                      alignItems={"center"}
                    >
                      <AiFillAlert
                        color="white"
                        style={{ marginRight: "0.5rem" }}
                      />
                      Connecting
                    </StatNumber>
                  )}
                </Flex>
              </Stat>
              <Flex
                height={"100%"}
                display={"flex"}
                alignItems={"center"}
                justifyContent={"center"}
                marginLeft={"0.1rem"}
              >
                <IconBox
                  borderRadius="50%"
                  as="box"
                  h={"45px"}
                  w={"45px"}
                  bg={iconBlue}
                >
                  <MdSettingsInputAntenna
                    h={"24px"}
                    w={"24px"}
                    color={iconBoxInside}
                  />
                </IconBox>
              </Flex>
            </Flex>
            {/*  <Text color="gray.400" fontSize="sm">
              <Text as="span" color="grey.500" fontWeight="bold">
                See{" "}
              </Text>
              All
            </Text> */}
          </Flex>
        </Card>
        <Card minH="125px">
          <Flex direction="column">
            <Flex
              flexDirection="row"
              align="center"
              justify="center"
              w="100%"
              mb="25px"
            >
              <Stat me="auto">
                <StatLabel
                  fontSize="xs"
                  color="gray.400"
                  fontWeight="bold"
                  textTransform="uppercase"
                >
                  Current MER
                </StatLabel>
                <Flex>
                  <StatNumber fontSize="lg" color={textColor} fontWeight="bold">
                    0.25
                  </StatNumber>
                </Flex>
                <StatLabel
                  fontSize="xs"
                  color="gray.400"
                  fontWeight="bold"
                  textTransform="uppercase"
                >
                  Current BER
                </StatLabel>
                <Flex>
                  <StatNumber fontSize="lg" color={textColor} fontWeight="bold">
                    0.25
                  </StatNumber>
                </Flex>
              </Stat>
              <IconBox
                borderRadius="50%"
                as="box"
                h={"45px"}
                w={"45px"}
                bg={iconBlue}
              >
                <GlobeIcon h={"24px"} w={"24px"} color={iconBoxInside} />
              </IconBox>
            </Flex>
            {/* <Text color="gray.400" fontSize="sm">
              <Text as="span" color="green.400" fontWeight="bold">
                STABLE{" "}
              </Text>
              Since last month
            </Text> */}
          </Flex>
        </Card>
        <Card minH="125px">
          <Flex direction="column">
            <Flex
              flexDirection="row"
              align="center"
              justify="center"
              w="100%"
              mb="25px"
            >
              <Stat me="auto">
                <StatLabel
                  fontSize="xs"
                  color="gray.400"
                  fontWeight="bold"
                  textTransform="uppercase"
                >
                  Current channel
                </StatLabel>
                <Flex>
                  <StatNumber fontSize="lg" color={textColor} fontWeight="bold">
                    102.9 MHz
                  </StatNumber>
                </Flex>
              </Stat>
              <IconBox
                borderRadius="50%"
                as="box"
                h={"45px"}
                w={"45px"}
                bg={iconBlue}
              >
                <FaWaveSquare h={"32px"} w={"32px"} color={iconBoxInside} />
              </IconBox>
            </Flex>
            <Text color="gray.400" fontSize="sm">
              <Text as="span" color="gray.500" fontWeight="bold">
                Switch{" "}
              </Text>
              frequency
              <MdRefresh />
            </Text>
          </Flex>
        </Card>
        <Card
          minH="125px"
          style={{
            background: "linear-gradient(70deg, #f9ae40 0%, #49bfad 100%)",
          }}
        >
          <Flex direction="column">
            <Flex
              flexDirection="row"
              align="center"
              justify="center"
              w="100%"
              mb="25px"
            >
              <Stat me="auto">
                <StatLabel
                  fontSize="xs"
                  color="white"
                  fontWeight="bold"
                  textTransform="uppercase"
                >
                  COMPANY
                </StatLabel>
                <Flex>
                  <StatNumber
                    fontSize="lg"
                    color={textColor}
                    fontWeight="bold"
                    color="white"
                    style={{ textDecoration: "underline" }}
                  >
                    ALBAVISION
                  </StatNumber>
                </Flex>
              </Stat>
              <Box
                borderRadius="50%"
                as="box"
                h={"45px"}
                w={"45px"}
                style={{ backgroundColor: "#ffffff", display: "flex" }}
                boxShadow="lg"
                justifyContent={"center"}
                alignItems={"center"}
              >
                <img
                  alt="logocompany"
                  src={require("../../assets/img/logoalbavision.png")}
                  style={{
                    width: "40px",
                    height: "40px",
                    objectFit: "contain",
                  }}
                />
                {/*                 <GiFactory h={"40px"} w={"40px"} color={"#4BBEAB"} />
                 */}{" "}
              </Box>
            </Flex>
            <Text color="gray.400" fontSize="sm">
              <Text as="span" color="white" fontWeight="bold">
                See info{" "}
              </Text>
            </Text>
          </Flex>
        </Card>
      </SimpleGrid>
      <Grid
        templateColumns={{ sm: "1fr", lg: "2fr 1fr" }}
        templateRows={{ lg: "repeat(2, auto)" }}
        gap="20px"
      >
        <Card
          bg={
            colorMode === "dark"
              ? "navy.800"
              : "linear-gradient(81.62deg, #313860 2.25%, #151928 79.87%)"
          }
          p="0px"
          maxW={{ sm: "320px", md: "100%" }}
        >
          <Flex direction="column" mb="40px" p="28px 0px 0px 22px">
            <Text color="#fff" fontSize="lg" fontWeight="bold" mb="6px">
              Real-time measures (MER) dB | Last Hour
            </Text>
            <Text color="#fff" fontSize="sm">
              <Text as="span" color="green.400" fontWeight="bold">
                MER{" "}
              </Text>
              Select
            </Text>
            <Text color="#fff" fontSize="sm">
              <Text as="span" color="green.400" fontWeight="bold">
                BER{" "}
              </Text>
              Select
            </Text>
          </Flex>
          <Box minH="300px">
            <LineChart
              chartData={lineChartData}
              chartOptions={lineChartOptions}
            />
          </Box>
        </Card>
        <Card p="0px" maxW={{ sm: "320px", md: "100%" }}>
          <Flex direction="column" mb="40px" p="28px 0px 0px 22px">
            <Text color="gray.400" fontSize="sm" fontWeight="bold" mb="6px">
              PERFORMANCE
            </Text>
            <Text color={textColor} fontSize="lg" fontWeight="bold">
              Proof of Use Spectrum (PoUE) Score
            </Text>
          </Flex>
          <Box minH="300px">
            <BarChart chartData={barChartData} chartOptions={barChartOptions} />
          </Box>
        </Card>
        <Card p="0px" maxW={{ sm: "320px", md: "100%" }}>
          <Flex direction="column">
            <Flex align="center" justify="space-between" p="22px">
              <Text fontSize="lg" color={textColor} fontWeight="bold">
                Last measures
              </Text>
              <Button variant="primary" maxH="30px">
                SEE ALL
              </Button>
            </Flex>
            <Box overflow={{ sm: "scroll", lg: "hidden" }}>
              <Table>
                <Thead>
                  <Tr bg={tableRowColor}>
                    <Th color="gray.400" borderColor={borderColor}>
                      ID
                    </Th>
                    <Th color="gray.400" borderColor={borderColor}>
                      Ubication
                    </Th>
                    <Th color="gray.400" borderColor={borderColor}>
                      MER
                    </Th>
                    <Th color="gray.400" borderColor={borderColor}>
                      Bounce rate
                    </Th>
                    <Th color="gray.400" borderColor={borderColor}>
                      TIMESTAMP
                    </Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {pageVisits.map((el, index, arr) => {
                    return (
                      <Tr key={index}>
                        <Td
                          color={textTableColor}
                          fontSize="sm"
                          fontWeight="bold"
                          borderColor={borderColor}
                          border={index === arr.length - 1 ? "none" : null}
                        >
                          {el.pageName}
                        </Td>
                        <Td
                          color={textTableColor}
                          fontSize="sm"
                          border={index === arr.length - 1 ? "none" : null}
                          borderColor={borderColor}
                        >
                          {el.visitors}
                        </Td>
                        <Td
                          color={textTableColor}
                          fontSize="sm"
                          border={index === arr.length - 1 ? "none" : null}
                          borderColor={borderColor}
                        >
                          {el.uniqueUsers}
                        </Td>
                        <Td
                          color={textTableColor}
                          fontSize="sm"
                          border={index === arr.length - 1 ? "none" : null}
                          borderColor={borderColor}
                        >
                          {el.bounceRate}
                        </Td>
                        <Td
                          color={textTableColor}
                          fontSize="sm"
                          border={index === arr.length - 1 ? "none" : null}
                          borderColor={borderColor}
                        >
                          {el.timestamp}
                        </Td>
                      </Tr>
                    );
                  })}
                </Tbody>
              </Table>
            </Box>
          </Flex>
        </Card>
        <Card p="0px" maxW={{ sm: "320px", md: "100%" }}>
          <Flex direction="column">
            <Flex align="center" justify="space-between" p="22px">
              <Text fontSize="lg" color={textColor} fontWeight="bold">
                Last rewards
              </Text>
              <Button variant="primary" maxH="30px">
                SEE ALL
              </Button>
            </Flex>
          </Flex>
          <Box overflow={{ sm: "scroll", lg: "hidden" }}>
            <Table>
              <Thead>
                <Tr bg={tableRowColor}>
                  <Th color="gray.400" borderColor={borderColor}>
                    Referral
                  </Th>
                  <Th color="gray.400" borderColor={borderColor}>
                    Visitors
                  </Th>
                  <Th color="gray.400" borderColor={borderColor}></Th>
                </Tr>
              </Thead>
              <Tbody>
                {socialTraffic.map((el, index, arr) => {
                  return (
                    <Tr key={index}>
                      <Td
                        color={textTableColor}
                        fontSize="sm"
                        fontWeight="bold"
                        borderColor={borderColor}
                        border={index === arr.length - 1 ? "none" : null}
                      >
                        {el.referral}
                      </Td>
                      <Td
                        color={textTableColor}
                        fontSize="sm"
                        borderColor={borderColor}
                        border={index === arr.length - 1 ? "none" : null}
                      >
                        {el.visitors}
                      </Td>
                      <Td
                        color={textTableColor}
                        fontSize="sm"
                        borderColor={borderColor}
                        border={index === arr.length - 1 ? "none" : null}
                      >
                        <Flex align="center">
                          <Text
                            color={textTableColor}
                            fontWeight="bold"
                            fontSize="sm"
                            me="12px"
                          >{`${el.percentage}%`}</Text>
                          <Progress
                            size="xs"
                            colorScheme={el.color}
                            value={el.percentage}
                            minW="120px"
                          />
                        </Flex>
                      </Td>
                    </Tr>
                  );
                })}
              </Tbody>
            </Table>
          </Box>
        </Card>
      </Grid>
    </Flex>
  );
}
