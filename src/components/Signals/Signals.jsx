/* eslint-disable */
import { useEffect } from "react";
import { Form, notification } from "antd";
import { useMemo, useState } from "react";

// Chakra imports
import {
  Avatar,
  AvatarGroup,
  Box,
  Button,
  Flex,
  Grid,
  Icon,
  Image,
  Link,
  Switch,
  Text,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
// Assets
import avatar2 from "assets/img/avatars/avatar2.png";
import avatar3 from "assets/img/avatars/avatar3.png";
import avatar4 from "assets/img/avatars/avatar4.png";
import avatar5 from "assets/img/avatars/avatar5.png";
import avatar6 from "assets/img/avatars/avatar6.png";
import plan1 from "assets/img/plan1.jpg";
import plan2 from "assets/img/plan2.jpg";
import plan3 from "assets/img/plan3.jpg";


// Custom components
import CardBody from "components/Card/CardBody";
import CardHeader from "components/Card/CardHeader";
import React from "react";
import {
  FaCube,
  FaFacebook,
  FaInstagram,
  FaPenFancy,
  FaPlus,
  FaTwitter,
} from "react-icons/fa";
import { IoDocumentsSharp } from "react-icons/io5";


// Custom components
import Card from "../Card/Card";
import ContractBuyABI from 'contracts/LicencseToken.json';

export default function Signals() {
  const [responses, setResponses] = useState({});
  const [contract, setContract] = useState();

  const [address, setAddress] = useState();

  const { colorMode } = useColorMode();

  // Chakra color mode
  const textColor = useColorModeValue("gray.700", "white");
  const iconColor = useColorModeValue("navy.500", "white");
  const bgProfile = useColorModeValue("hsla(0,0%,100%,.8)", "navy.800");
  const borderProfileColor = useColorModeValue("white", "transparent");
  const emailColor = useColorModeValue("gray.400", "gray.300");


  const styles = {
    title: {
      fontSize: "30px",
      fontWeight: "600",
    },
    header: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "5px",
    },
    card: {
      boxShadow: "0 0.5rem 1.2rem rgb(189 197 209 / 20%)",
      border: "1px solid #e7eaf3",
      borderRadius: "1rem",
      width: "450px",
      fontSize: "16px",
      fontWeight: "500",
    },
  };




  return (
    <Flex
      direction="column"
      pt={{ base: "120px", md: "75px" }}
      alignContent="center"
      alignItems="center"
    >
      <Card p='16px' my='24px'>
        <CardHeader p='12px 5px' mb='12px'>
          <Flex direction='column'>
            <Text fontSize='lg' color={textColor} fontWeight='bold'>
              Signal Packages
            </Text>
            <Text fontSize='sm' color='gray.400' fontWeight='400'>
              Please take a look of our premium signal packages
            </Text>
          </Flex>
        </CardHeader>
        <CardBody px='5px'>
          <Grid
            templateColumns={{ sm: "1fr", md: "1fr 1fr", xl: "repeat(3, 1fr)" }}
            templateRows={{ sm: "1fr 1fr 1fr auto", md: "1fr 1fr", xl: "1fr" }}
            gap='1rem'>
            <Flex direction='column' style={{ width: '20rem' }}>
              <Box mb='20px' position='relative' borderRadius='15px'>
                <Image src={plan1} borderRadius='15px' />
                <Box
                  w='100%'
                  h='100%'
                  position='absolute'
                  top='0'
                  borderRadius='15px'
                  bg='linear-gradient(360deg, rgba(49, 56, 96, 0.16) 0%, rgba(21, 25, 40, 0.88) 200%)'></Box>
              </Box>
              <Flex direction='column'>
                <Text fontSize='md' color='gray.400' fontWeight='600' mb='10px'>
                  Forex Signal Package #1
                </Text>
                <Text
                  fontSize='xl'
                  color={textColor}
                  fontWeight='bold'
                  mb='10px'>
                  2 Months
                </Text>
                <Text fontSize='md' color='gray.400' fontWeight='400' mb='20px'>
                  This package comprehends AUD, USD, EUR, CAD ForEX
                </Text>
                <Flex justifyContent='space-between'>
                  <Button variant='dark' minW='110px' h='36px'>
                    Pay with Crypto
                  </Button>
                  <Button variant='light' minW='110px' h='36px'>
                    Pay with FIAT
                  </Button>
                </Flex>
              </Flex>
            </Flex>
            <Flex direction='column' style={{ width: '20rem' }}>
              <Box mb='20px' position='relative' borderRadius='15px'>
                <Image src={plan2} borderRadius='15px' />
                <Box
                  w='100%'
                  h='100%'
                  position='absolute'
                  top='0'
                  borderRadius='15px'
                  bg='linear-gradient(360deg, rgba(49, 56, 96, 0.16) 0%, rgba(21, 25, 40, 0.88) 200%)'></Box>
              </Box>
              <Flex direction='column'>
                <Text fontSize='md' color='gray.400' fontWeight='600' mb='10px'>
                  Forex Signal Package #2
                </Text>
                <Text
                  fontSize='xl'
                  color={textColor}
                  fontWeight='bold'
                  mb='10px'>
                  5 Months
                </Text>
                <Text fontSize='md' color='gray.400' fontWeight='400' mb='20px'>
                  This package comprehends NASDAQ index
                </Text>
                <Flex justifyContent='space-between'>
                  <Button variant='dark' minW='110px' h='36px'>
                    Pay with Crypto
                  </Button>
                  <Button variant='light' minW='110px' h='36px'>
                    Pay with FIAT
                  </Button>
                </Flex>
              </Flex>
            </Flex>
            <Flex direction='column' style={{ width: '20rem' }}>
              <Box mb='20px' position='relative' borderRadius='15px'>
                <Image src={plan3} borderRadius='15px' />
                <Box
                  w='100%'
                  h='100%'
                  position='absolute'
                  top='0'
                  borderRadius='15px'
                  bg='linear-gradient(360deg, rgba(49, 56, 96, 0.16) 0%, rgba(21, 25, 40, 0.88) 200%)'></Box>
              </Box>
              <Flex direction='column' >
                <Text fontSize='md' color='gray.400' fontWeight='600' mb='10px'>
                  Forex Signal Package #3
                </Text>
                <Text
                  fontSize='xl'
                  color={textColor}
                  fontWeight='bold'
                  mb='10px'>
                  6 Months
                </Text>
                <Text fontSize='md' color='gray.400' fontWeight='400' mb='20px'>
                  This package comprehends S&P500 and S&P100
                </Text>
                <Flex justifyContent='space-between'>
                  <Button variant='dark' minW='110px' h='36px'>
                    Pay with Crypto
                  </Button>
                  <Button variant='light' minW='110px' h='36px'>
                    Pay with FIAT
                  </Button>
                </Flex>
              </Flex>
            </Flex>
            {/* <Button
              p='0px'
              bg='transparent'
              border='1px solid lightgray'
              borderRadius='15px'
              minHeight={{ sm: "200px", md: "100%" }}>
              <Flex direction='column' justifyContent='center' align='center'>
                <Icon as={FaPlus} color={textColor} fontSize='lg' mb='12px' />
                <Text fontSize='lg' color={textColor} fontWeight='bold'>
                  Create a New Project
                </Text>
              </Flex>
            </Button> */}
          </Grid>
        </CardBody>
      </Card>

    </Flex>
  );

}
