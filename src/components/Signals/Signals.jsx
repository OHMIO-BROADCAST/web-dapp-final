/* eslint-disable */
import React, { useEffect, useState, useMemo } from "react";
import { Form, notification } from "antd";

// Chakra imports
import {
  Avatar,
  AvatarGroup,
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
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
import CoinpaymentsButton1 from "./CoinpaymentsButton1";

import CoinpaymentsButton150 from "./CoinpaymentsButton150";
import CoinpaymentsButton430 from "./CoinpaymentsButton430";
import CoinpaymentsButton700 from "./CoinpaymentsButton700";
import { Auth, API, graphqlOperation } from "aws-amplify";
import * as queries from "../../graphql/queries.js";
import * as mutations from "../../graphql/mutations";
import { Loader } from "@aws-amplify/ui-react";

export default function Signals() {
  const [isLoading, setIsLoading] = useState(false);
  const [anually, setAnually] = useState(true);

  const [profile, setProfile] = useState({});
  const [message, setMessage] = useState("");
  const [userID, setUserID] = useState("");
  const [currentUser, setCurrentUser] = useState({});
  const [currentUserName, setCurrentUserName] = useState("");





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
    cardoffline: {
      boxShadow: "0 0.5rem 1.2rem rgb(189 197 209 / 20%)",
      border: "1px solid #e7eaf3",
      borderRadius: "1rem",
      width: "450px",
      fontSize: "16px",
      fontWeight: "500",
    },
  };

  async function getUserID() {
    const userID = await Auth.currentSession()
      .then(data => {
        setUserID(data.idToken.payload.sub);
        return data.idToken.payload.sub;
      })
      .catch(err => console.log(err));
    const userName = await Auth.currentAuthenticatedUser()
      .then(data => {
        setCurrentUserName(data.username);
        return data.username;
      })
      .catch(err => console.log(err))
  }


  useEffect(() => {
    getUserID()
  }, [])

  async function createUser() {
    const userDetails = {
      "id": String(userID),
      "name": String(currentUser.name),
      "username": String(currentUserName),
      "phone": String(currentUser.phone_number),
      "email": String(currentUser.email),
    }
    console.log("Detalles de usuario a crear:", userDetails)

    const result = await API.graphql(
      graphqlOperation(mutations.createUser, { input: userDetails }),
    ).then(data => {
      console.log('responde created user', data)
    }).catch(err => {
      console.log('error creating user', err)
    })
  }

  async function getUserProfile(sub) {
    console.log("current state", profile, message, userID, currentUserName, currentUser)
    setIsLoading(true)
    try {
      const result = await API.graphql(
        graphqlOperation(queries.getUser, { id: sub })
      )
        .then(result => {
          console.log("Resultado de la consulta del usuario", result.data.getUser)
          setProfile(result.data.getUser)
          setIsLoading(false)
          return result.data.getUser;
        })
        .catch(err => {
          console.log(err)
          setIsLoading(false)
        });
      return result;

    } catch (error) {
      console.log("catch getuser")
      const result = error
      return result;
    }
  }

  async function componenteMontado() {
    //se obtiene ID usuario actual
    const userID = await Auth.currentSession()
      .then(data => {
        setUserID(data.idToken.payload.sub);
        setCurrentUser(data.idToken.payload)
        return data.idToken.payload.sub;
      })
      .catch(err => console.log(err));
    const userName = await Auth.currentAuthenticatedUser()
      .then(data => {
        setCurrentUserName(data.username);
        return data.username;
      })
      .catch(err => console.log(err))

    //VERIFICAMOS SI EXISTE USUARIO EN LA BASE DE DATOS
    const profile = await getUserProfile(userID);

    if (profile == null) {
      console.log("Usuario no creado en la BD, creando...")
      createUser()
    } else {
      console.log("El usuario en BD es =>", profile)
    }

  }


  useEffect(async () => {
    componenteMontado()
  }, [])

  if (isLoading) {
    return (
      <Flex
        direction="column"
        pt={{ base: "120px", md: "75px" }}
        alignContent="center"
        alignItems="center"
      ><Card
        style={styles.cardoffline}

      >
          <div
            style={{
              width: "auto",
              height: "300px",
              justifyContent: 'center',
              display: 'flex',
              alignItems: 'center',
              flexDirection: 'column'
            }}
          >
            <Loader variation="linear" filledColor={"#f9a640"} />
          </div>
        </Card>
      </Flex>
    )
  }

  if (profile && profile.forexSubscription) {
    return (
      <Flex
        direction="column"
        pt={{ base: "120px", md: "75px" }}
        alignContent="center"
        alignItems="center"
      ><Card
        style={styles.cardoffline}

      >
          <div
            style={{
              width: "auto",
              height: "300px",
              justifyContent: 'center',
              display: 'flex',
              alignItems: 'center',
              flexDirection: 'column'
            }}
          >
            <Text align={'center'} fontWeight={'bold'} fontSize={25}>You have an active plan</Text>
            <Text align={'center'} fontWeight={300}>Expiration Date:</Text>
            {profile && (profile.forexSubscription ?
              <Text align={'center'} fontWeight={"bold"}>{profile && profile.expirationDate}</Text> : null)}

          </div>

        </Card>
      </Flex>
    );
  }
  else {
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
                REAL TIME NOTIFICATIONS PACKAGES
              </Text>
              <Text fontSize='sm' color='gray.400' fontWeight='bold'>
                Please take a look of our premium services
              </Text>
              {/* <FormControl display='flex' alignItems='center' width={"100%"} justifyContent="center">
                <FormLabel htmlFor='monthly-anually' mb='0' fontWeight={"bold"}>
                  MONTHLY
                </FormLabel>
                <Switch
                  id='monthly-anually' size='lg' colorScheme={"orange"}
                  value={anually} onChange={() => setAnually(!anually)} />
                <FormLabel htmlFor='monthly-anually' mb='0' ml={"1rem"} fontWeight={"bold"} >
                  ANUALLY
                </FormLabel>
              </FormControl> */}
            </Flex>
          </CardHeader>
          <CardBody px='5px'>
            <Grid
              templateColumns={
                anually ?
                  { sm: "1fr", md: "1fr 1fr", xl: "repeat(3, 1fr)" } :
                  "repeat(1, 1fr)"
              }
              templateRows={
                anually ?
                  { sm: "1fr", md: "1fr", xl: "1fr" } :
                  { sm: "1fr auto", md: "1fr", xl: "1fr" }
              }
              gap='1rem'
              justifyContent={"center"}
              alignItems="center"
            >

              {anually == true ? (<>
                <Flex direction='column' style={{ width: '20rem', borderWidth: '3px', padding: "1rem", borderRadius: 20, borderColor: (anually === true ? "green" : "orange") }}>
                  <Box mb='20px' position='relative' borderRadius='15px'>
                    <Box
                      w='100%'
                      h='100%'
                      position='absolute'
                      top='0'
                      borderRadius='15px'
                      bg='linear-gradient(360deg, rgba(49, 56, 96, 0.16) 0%, rgba(21, 25, 40, 0.88) 200%)'></Box>
                  </Box>
                  <Flex direction='column'>
                    <Text fontSize='md' color='gray.400' fontWeight='bold' mb='10px' textAlign="center">
                      ***PRUEBA***
                    </Text>
                    <Text
                      fontSize='xl'
                      color={textColor}
                      fontWeight='bold'
                      mb='10px' textAlign="center">
                      1 MONTH / $10 USD
                    </Text>

                    <Text fontSize='md' color='gray.400' fontWeight='400' mb='20px' >
                      This package comprehends current supporte pairs on Forex Market
                    </Text>
                    <Text fontSize='md' color='gray.400' fontWeight='400' mb='20px' >
                      Push Notifications in Real-Time
                    </Text>
                    <Text fontSize='md' color='gray.400' fontWeight='400' mb='20px' >
                      Support Assitance
                    </Text>
                    <Text fontSize='md' color='gray.400' fontWeight='400' mb='20px' >
                      1 Month Duration
                    </Text>
                    <Flex justifyContent='center'>
                      <CoinpaymentsButton1 userID={userID} />
                    </Flex>
                  </Flex>
                </Flex>
                <Flex direction='column' style={{ width: '20rem', borderWidth: '3px', padding: "1rem", borderRadius: 20, borderColor: (anually === true ? "green" : "orange") }}>
                  <Box mb='20px' position='relative' borderRadius='15px'>
                    <Box
                      w='100%'
                      h='100%'
                      position='absolute'
                      top='0'
                      borderRadius='15px'
                      bg='linear-gradient(360deg, rgba(49, 56, 96, 0.16) 0%, rgba(21, 25, 40, 0.88) 200%)'></Box>
                  </Box>
                  <Flex direction='column'>
                    <Text fontSize='md' color='gray.400' fontWeight='bold' mb='10px' textAlign="center">
                      PROFESSIONAL
                    </Text>
                    <Text
                      fontSize='xl'
                      color={textColor}
                      fontWeight='bold'
                      mb='10px' textAlign="center">
                      1 MONTH / $150 USD
                    </Text>

                    <Text fontSize='md' color='gray.400' fontWeight='400' mb='20px' >
                      This package comprehends current supporte pairs on Forex Market
                    </Text>
                    <Text fontSize='md' color='gray.400' fontWeight='400' mb='20px' >
                      Push Notifications in Real-Time
                    </Text>
                    <Text fontSize='md' color='gray.400' fontWeight='400' mb='20px' >
                      Support Assitance
                    </Text>
                    <Text fontSize='md' color='gray.400' fontWeight='400' mb='20px' >
                      1 Month Duration
                    </Text>
                    <Flex justifyContent='center'>
                      <CoinpaymentsButton150 userID={userID} />


                    </Flex>
                  </Flex>
                </Flex>
                <Flex direction='column' style={{ width: '20rem', borderWidth: '3px', padding: "1rem", borderRadius: 20, borderColor: (anually === true ? "green" : "orange") }}>
                  <Box mb='20px' position='relative' borderRadius='15px'>
                    <Box
                      w='100%'
                      h='100%'
                      position='absolute'
                      top='0'
                      borderRadius='15px'
                      bg='linear-gradient(360deg, rgba(49, 56, 96, 0.16) 0%, rgba(21, 25, 40, 0.88) 200%)'></Box>
                  </Box>
                  <Flex direction='column'>
                    <Text fontSize='md' color='gray.400' fontWeight='bold' mb='10px' textAlign="center">
                      PREMIUM
                    </Text>
                    <Text
                      fontSize='xl'
                      color={textColor}
                      fontWeight='bold'
                      mb='10px'
                      textAlign="center">
                      3 MONTH / $430 USD
                    </Text>

                    <Text fontSize='md' color='gray.400' fontWeight='400' mb='20px' >
                      This package comprehends current supporte pairs on Forex Market
                    </Text>
                    <Text fontSize='md' color='gray.400' fontWeight='400' mb='20px' >
                      Push Notifications in Real-Time
                    </Text>
                    <Text fontSize='md' color='gray.400' fontWeight='400' mb='20px' >
                      Support Assitance
                    </Text>
                    <Text fontSize='md' color='gray.400' fontWeight='400' mb='20px' >
                      3 Month Duration
                    </Text>
                    <Flex justifyContent='center'>
                      <CoinpaymentsButton430 userID={userID} />

                    </Flex>
                  </Flex>
                </Flex>
                <Flex direction='column' style={{ width: '20rem', borderWidth: '3px', padding: "1rem", borderRadius: 20, borderColor: (anually == true ? "green" : "orange") }}>
                  <Box mb='20px' position='relative' >
                    <Box
                      w='100%'
                      h='100%'
                      position='absolute'
                      top='0'
                      borderRadius='15px'
                      bg='linear-gradient(360deg, rgba(49, 56, 96, 0.16) 0%, rgba(21, 25, 40, 0.88) 200%)'></Box>
                  </Box>
                  <Flex direction='column' >
                    <Text fontSize='md' color='gray.400' fontWeight='bold' mb='10px' textAlign="center">
                      PLATINUM
                    </Text>
                    <Text
                      fontSize='xl'
                      color={textColor}
                      fontWeight='bold'
                      mb='10px'
                      textAlign="center">
                      5 MONTH / $730 USD
                    </Text>
                    <Text fontSize='md' color='gray.400' fontWeight='400' mb='20px' >
                      This package comprehends current supporte pairs on Forex Market
                    </Text>
                    <Text fontSize='md' color='gray.400' fontWeight='400' mb='20px' >
                      Push Notifications in Real-Time
                    </Text>
                    <Text fontSize='md' color='gray.400' fontWeight='400' mb='20px' >
                      Support Assitance
                    </Text>
                    <Text fontSize='md' color='gray.400' fontWeight='400' mb='20px' >
                      5 Month Duration
                    </Text>

                    <Flex justifyContent='center'>
                      <CoinpaymentsButton700 userID={userID} />

                    </Flex>
                  </Flex>
                </Flex></>) : (<><Flex direction='column' style={{ width: '20rem', borderWidth: '3px', padding: "1rem", borderRadius: 20, borderColor: (anually === true ? "green" : "orange") }}>
                  <Box mb='20px' position='relative' borderRadius='15px'>
                    {/* <Image src={plan1} borderRadius='15px' /> */}
                    <Box
                      w='100%'
                      h='100%'
                      position='absolute'
                      top='0'
                      borderRadius='15px'
                      bg='linear-gradient(360deg, rgba(49, 56, 96, 0.16) 0%, rgba(21, 25, 40, 0.88) 200%)'></Box>
                  </Box>
                  <Flex direction='column'>
                    <Text fontSize='md' color='gray.400' fontWeight='bold' mb='10px' textAlign="center">
                      PROFESSIONAL
                    </Text>
                    <Text
                      fontSize='xl'
                      color={textColor}
                      fontWeight='bold'
                      mb='10px' textAlign="center">
                      1 MONTH / $140 USD
                    </Text>
                    <Text fontSize='md' color='gray.400' fontWeight='400' mb='20px' decoration={"underline"} textAlign="center" >
                      Billed Anually
                    </Text>
                    <Text fontSize='md' color='gray.400' fontWeight='400' mb='20px' >
                      This package comprehends current supporte pairs on Forex Market
                    </Text>
                    <Text fontSize='md' color='gray.400' fontWeight='400' mb='20px' >
                      Push Notifications in Real-Time
                    </Text>
                    <Text fontSize='md' color='gray.400' fontWeight='400' mb='20px' >
                      Support Assitance
                    </Text>
                    <Text fontSize='md' color='gray.400' fontWeight='400' mb='20px' >
                      1 Month Duration
                    </Text>
                    <Flex justifyContent='center'>
                      <Button variant='dark' minW='110px' h='36px'>
                        Pay with Crypto
                      </Button>
                      {/* <Button variant='light' minW='110px' h='36px'>
                        Pay with FIAT
                      </Button> */}
                    </Flex>
                  </Flex>
                </Flex>
                  {/*<Flex direction='column' style={{ width: '20rem', borderWidth: '3px', padding: "1rem", borderRadius: 20, borderColor: (anually === true ? "green" : "orange") }}>
                    <Box mb='20px' position='relative' borderRadius='15px'>
                      <Box
                        w='100%'
                        h='100%'
                        position='absolute'
                        top='0'
                        borderRadius='15px'
                        bg='linear-gradient(360deg, rgba(49, 56, 96, 0.16) 0%, rgba(21, 25, 40, 0.88) 200%)'></Box>
                    </Box>
                    <Flex direction='column'>
                      <Text fontSize='md' color='gray.400' fontWeight='bold' mb='10px' textAlign="center">
                        PREMIUM
                      </Text>
                      <Text
                        fontSize='xl'
                        color={textColor}
                        fontWeight='bold'
                        mb='10px'
                        textAlign="center">
                        3 MONTH / $390 USD
                      </Text>
                      <Text fontSize='md' color='gray.400' fontWeight='400' mb='20px' decoration={"underline"} textAlign="center" >
                        Billed Anually
                      </Text>
                      <Text fontSize='md' color='gray.400' fontWeight='400' mb='20px' >
                        This package comprehends current supporte pairs on Forex Market
                      </Text>
                      <Text fontSize='md' color='gray.400' fontWeight='400' mb='20px' >
                        Push Notifications in Real-Time
                      </Text>
                      <Text fontSize='md' color='gray.400' fontWeight='400' mb='20px' >
                        Support Assitance
                      </Text>
                      <Text fontSize='md' color='gray.400' fontWeight='400' mb='20px' >
                        1 Month Duration
                      </Text>
                      <Flex justifyContent='center'>
                        <Button variant='dark' minW='110px' h='36px'>
                          Pay with Crypto
                        </Button>
                        <Button variant='light' minW='110px' h='36px'>
                          Pay with FIAT
                        </Button>
                      </Flex>
                    </Flex>
                  </Flex>
            <Flex direction='column' style={{ width: '20rem', borderWidth: '3px', padding: "1rem", borderRadius: 20, borderColor: (anually == true ? "green" : "orange") }}>
              <Box mb='20px' position='relative' >
                <Box
                  w='100%'
                  h='100%'
                  position='absolute'
                  top='0'
                  borderRadius='15px'
                  bg='linear-gradient(360deg, rgba(49, 56, 96, 0.16) 0%, rgba(21, 25, 40, 0.88) 200%)'></Box>
              </Box>
              <Flex direction='column' >
                <Text fontSize='md' color='gray.400' fontWeight='bold' mb='10px' textAlign="center">
                  PLATINUM
                </Text>
                <Text
                  fontSize='xl'
                  color={textColor}
                  fontWeight='bold'
                  mb='10px'
                  textAlign="center">
                  6 MONTH / $690 USD
                </Text>
                <Text fontSize='md' color='gray.400' fontWeight='400' mb='20px' decoration={"underline"} textAlign="center" >
                  Billed Anually
                </Text>
                <Text fontSize='md' color='gray.400' fontWeight='400' mb='20px' >
                  This package comprehends current supporte pairs on Forex Market
                </Text>
                <Text fontSize='md' color='gray.400' fontWeight='400' mb='20px' >
                  Push Notifications in Real-Time
                </Text>
                <Text fontSize='md' color='gray.400' fontWeight='400' mb='20px' >
                  Support Assitance
                </Text>
                <Text fontSize='md' color='gray.400' fontWeight='400' mb='20px' >
                  6 Month Duration
                </Text>
  
                <Flex justifyContent='center'>
                  <Button variant='dark' minW='110px' h='36px'>
                    Pay with Crypto
                  </Button>
                  <Button variant='light' minW='110px' h='36px'>
                    Pay with FIAT
                  </Button>
                </Flex>
              </Flex>
            </Flex> */}
                </>)}
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
        </Card >

      </Flex >
    );
  }


}
