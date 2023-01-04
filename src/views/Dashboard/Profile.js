import React, { useState, useEffect } from "react";
import { Auth } from 'aws-amplify'
// Chakra imports
import {
  Avatar,
  AvatarGroup,
  Badge,
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
import avatar5 from "assets/img/avatars/user.png";
import avatar6 from "assets/img/avatars/avatar6.png";
import ImageArchitect1 from "assets/img/ImageArchitect1.png";
import ImageArchitect2 from "assets/img/ImageArchitect2.png";
import ImageArchitect3 from "assets/img/ImageArchitect3.png";
// Custom components
import Card from "components/Card/Card";
import CardBody from "components/Card/CardBody";
import CardHeader from "components/Card/CardHeader";
import {
  FaCube,
  FaFacebook,
  FaInstagram,
  FaFileAlt,
  FaPlus,
  FaTwitter,
} from "react-icons/fa";
import { IoDocumentsSharp } from "react-icons/io5";
import { API, graphqlOperation } from "aws-amplify";

import * as queries from "../../graphql/queries.js";
import * as mutations from "../../graphql/mutations";

import { HiBellAlert } from 'react-icons/hi2'
import { Tooltip } from "antd";

function Profile() {
  const { colorMode } = useColorMode();

  // Chakra color mode
  const textColor = useColorModeValue("gray.700", "white");
  const iconColor = useColorModeValue("navy.500", "white");
  const bgProfile = useColorModeValue("hsla(0,0%,100%,.8)", "navy.800");
  const borderProfileColor = useColorModeValue("white", "transparent");
  const emailColor = useColorModeValue("gray.400", "gray.300");


  const [user, setuser] = useState()

  const [profile, setProfile] = useState({});
  const [message, setMessage] = useState("");
  const [userID, setUserID] = useState("");
  const [currentUser, setCurrentUser] = useState({});
  const [currentUserName, setCurrentUserName] = useState("");




  useEffect(() => {
    Auth.currentAuthenticatedUser().then((user) => {
      console.log(user);
      setuser(user);
    });
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
    try {
      const result = await API.graphql(
        graphqlOperation(queries.getUser, { id: sub })
      )
        .then(result => {
          console.log("Resultado de la consulta del usuario", result.data.getUser)
          setProfile(result.data.getUser)
          return result.data.getUser;
        })
        .catch(err => console.log(err));
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

  return (
    <Flex direction='column' pt={{ base: "120px", md: "75px", lg: "100px" }}>
      <Flex
        direction={{ sm: "column", md: "row" }}
        mb='24px'
        maxH='330px'
        justifyContent={{ sm: "center", md: "space-between" }}
        align='center'
        backdropFilter={{ md: 'blur(1px)', lg: 'blur(1px)', sm: 'none' }}
        boxShadow='0px 2px 5.5px rgba(0, 0, 0, 0.02)'
        border='1.5px solid'
        borderColor={borderProfileColor}
        bg={bgProfile}
        p='24px'
        borderRadius='20px'>
        <Flex
          align='center'
          mb={{ sm: "10px", md: "0px" }}
          direction={{ sm: "column", md: "row" }}
          w={{ sm: "100%" }}
          textAlign={{ sm: "center", md: "start" }}>
          <Avatar
            me={{ md: "22px" }}
            src={avatar5}
            w='80px'
            h='80px'
            borderRadius='100px'
          />
          <Flex direction='column' maxWidth='100%' my={{ sm: "14px" }}>
            <Text
              fontSize={{ sm: "lg", lg: "xl" }}
              color={textColor}
              fontWeight='bold'
              ms={{ sm: "8px", md: "0px" }}>
              @{user && user.username}
            </Text>
            <Text
              fontSize={{ sm: "lg", lg: "xl" }}
              color={textColor}
              fontWeight='bold'
              ms={{ sm: "8px", md: "0px" }}>
              {user && user.attributes.name}
            </Text>
            <Text
              fontSize={{ sm: "sm", md: "md" }}
              color={emailColor}
              fontWeight='semibold'>
              {user && user.attributes.email.toLowerCase()}
            </Text>
          </Flex>
        </Flex>
        <Flex
          direction={{ sm: "column", lg: "column" }}
          w={{ sm: "100%", md: "50%", lg: "auto" }}>
          {/* <Button p='0px' bg='transparent' variant='no-effects'>
            <Flex
              align='center'
              w={{ sm: "100%", lg: "135px" }}
              bg={colorMode === "dark" ? "navy.900" : "#fff"}
              borderRadius='8px'
              justifyContent='center'
              py='10px'
              px='1rem'
              boxShadow='0px 2px 5.5px rgba(0, 0, 0, 0.06)'
              cursor='pointer'>
              <Icon color={textColor} as={FaCube} me='6px' />
              <Text fontSize='xs' color={textColor} fontWeight='bold'>
                EDIT
              </Text>
            </Flex>
          </Button> */}
          {/* <Button p='0px' bg='transparent' variant='no-effects'>
            <Flex
              align='center'
              w={{ lg: "135px" }}
              borderRadius='15px'
              justifyContent='center'
              py='10px'
              mx={{ lg: "1rem" }}
              cursor='pointer'>
              <Icon color={textColor} as={IoDocumentsSharp} me='6px' />
              <Text fontSize='xs' color={textColor} fontWeight='bold'>
                TEAMS
              </Text>
            </Flex>
          </Button> */}
          <Button p='0px' bg='transparent' variant='no-effects' my={"1rem"}>
            <Flex
              align='center'
              w={{ sm: "100%", lg: "auto" }}
              bg={colorMode === "dark" ? "navy.900" : "navy.500"}
              borderRadius='8px'
              justifyContent='center'
              py='10px'
              px='1rem'

              boxShadow='0px 2px 5.5px rgba(0, 0, 0, 0.06)'
              cursor='pointer'>
              <Icon color={"white"} as={FaFileAlt} me='6px' />
              <Text fontSize='xs' color={"white"} fontWeight='bold' flexWrap={true}>
                TUTORIALS
              </Text>
            </Flex>
          </Button>
        </Flex>
      </Flex>

      <Grid templateColumns={{ sm: "1fr", xl: "repeat(2, 1fr)" }} gap='22px'>
        <Card p='16px'>
          <CardHeader p='12px 5px' mb='12px'>
            <Text fontSize='lg' color={textColor} fontWeight='bold'>
              PLATFORM CONFIGURATION
            </Text>
          </CardHeader>
          <CardBody px='5px'>
            <Flex direction='column'>
              <Text fontSize='sm' color='gray.400' fontWeight='600' mb='20px'>
                SIGNALS & NOTIFICATIONS
              </Text>
              <Flex align='center' mb='20px'>
                <Switch colorScheme='navy' me='10px' />
                <Text
                  noOfLines={1}
                  fontSize='md'
                  color='gray.400'
                  fontWeight='400'>
                  Push Notifications
                </Text>
              </Flex>
              <Flex align='center' mb='20px'>
                <Switch colorScheme='navy' me='10px' />
                <Text
                  noOfLines={1}
                  fontSize='md'
                  color='gray.400'
                  fontWeight='400'>
                  Email
                </Text>
              </Flex>
              <Flex align='center' mb='20px'>
                <Switch colorScheme='navy' me='10px' />
                <Text
                  noOfLines={1}
                  fontSize='md'
                  color='gray.400'
                  fontWeight='400'>
                  SMS
                </Text>
              </Flex>

              {/* <Text
                fontSize='sm'
                color='gray.400'
                fontWeight='600'
                m='6px 0px 20px 0px'>
                REFER PROGRAM
              </Text>
              <Flex align='center' mb='20px'>
                <Switch colorScheme='navy' me='10px' />
                <Text
                  noOfLines={1}
                  fontSize='md'
                  color='gray.400'
                  fontWeight='400'>
                  Email me when refer somebody
                </Text>
              </Flex>
              <Flex align='center' mb='20px'>
                <Switch colorScheme='navy' me='10px' />
                <Text
                  noOfLines={1}
                  fontSize='md'
                  color='gray.400'
                  fontWeight='400'>
                  SMS me when refer somebody
                </Text>
              </Flex>
              <Flex align='center' mb='20px'>
                <Switch colorScheme='navy' me='10px' />
                <Text
                  noOfLines={1}
                  fontSize='md'
                  color='gray.400'
                  fontWeight='400'>
                  Subscription to news
                </Text>
              </Flex> */}
            </Flex>
          </CardBody>
        </Card>
        <Card p='16px' my={{ sm: "24px", xl: "0px" }}>
          <CardHeader p='12px 5px' mb='12px'>
            <Text fontSize='lg' color={textColor} fontWeight='bold'>
              PROFILE INFORMATION
            </Text>
          </CardHeader>
          <CardBody px='5px'>
            <Flex direction='column'>
              {/* <Text fontSize='md' color='gray.400' fontWeight='400' mb='30px'>
                Hi, I’m Esthera Jackson, Decisions: If you can’t decide, the
                answer is no. If two equally difficult paths, choose the one
                more painful in the short term (pain avoidance is creating an
                illusion of equality).
              </Text> */}
              <Flex align='center' mb='18px'>
                <Text
                  fontSize='md'
                  color={textColor}
                  fontWeight='bold'
                  me='10px'>
                  Complete Name:{" "}
                </Text>
                <Text fontSize='md' color='gray.400' fontWeight='400'>
                  {user && user.attributes.name}
                </Text>
              </Flex>
              <Flex align='center' mb='18px'>
                <Text
                  fontSize='md'
                  color={textColor}
                  fontWeight='bold'
                  me='10px'>
                  Phone Number:{" "}
                </Text>
                <Text fontSize='md' color='gray.400' fontWeight='400'>
                  {user && user.attributes.phone_number}
                </Text>
              </Flex>
              <Flex align='center' mb='18px'>
                <Text
                  fontSize='md'
                  color={textColor}
                  fontWeight='bold'
                  me='10px'>
                  Email:{" "}
                </Text>
                <Text fontSize='md' color='gray.400' fontWeight='400'>
                  {user && user.attributes.email.toLowerCase()}
                </Text>
              </Flex>

              <Flex align='center' mb='18px'>
                <Text
                  fontSize='md'
                  color={textColor}
                  fontWeight='bold'
                  me='10px'>
                  Subscription Status:{" "}
                </Text>
                <Badge
                  bg={(profile && profile.forexSubscription) == true ? "green.400" : "gray.400"}
                  color={"white"}
                  fontSize="16px"
                  p="3px 10px"
                  borderRadius="8px"
                >
                  {profile && (profile.forexSubscription ? "Active" : "Inactive")}
                </Badge>
              </Flex>
              {profile && (profile.forexSubscription ?
                (<Flex align='center' mb='18px'>
                  <Text
                    fontSize='md'
                    color={textColor}
                    fontWeight='bold'
                    me='10px'>
                    Currently Plan:{" "}
                  </Text>
                  <Badge
                    bg={(profile && profile.forexSubscription) == true ? "green.400" : "gray.400"}
                    color={"white"}
                    fontSize="16px"
                    p="3px 10px"
                    borderRadius="8px"
                  >
                    {profile && (profile.forexSubscription ? profile.currentlyPlan : "Inactive")}
                  </Badge>
                </Flex>) : null)
              }


              <Flex align='center' mb='18px'>
                <Text
                  fontSize='md'
                  color={textColor}
                  fontWeight='bold'
                  me='10px'>
                  KYC Verification:{" "}
                </Text>
                <Tooltip title="You have to complete the KYC process to enable all BMaker Features" placement="bottom">
                  <Badge
                    bg={(profile && profile.isCompletedKYC) == true ? "green.400" : "red.400"}
                    color={"white"}
                    fontSize="16px"
                    p="3px 10px"
                    borderRadius="8px"
                  >
                    {profile && (profile.isCompletedKYC ? "Complete" : "Incomplete")}
                  </Badge>
                </Tooltip>

                {profile && (!profile.isCompletedKYC ?
                  <Tooltip title="You have to complete the KYC process to enable all BMaker Features" placement="bottom">
                    <HiBellAlert size={22} color={"#f56565"} style={{ marginLeft: 10 }} /></Tooltip> :
                  null)}

              </Flex>


            </Flex>
          </CardBody>
        </Card>
        {/* <Card p='16px'>
          <CardHeader p='12px 5px' mb='12px'>
            <Text fontSize='lg' color={textColor} fontWeight='bold'>
              Conversations
            </Text>
          </CardHeader>
          <CardBody px='5px'>
            <Flex direction='column' w='100%'>
              <Flex justifyContent='space-between' mb='21px'>
                <Flex align='center'>
                  <Avatar
                    src={avatar2}
                    w='50px'
                    h='50px'
                    borderRadius='15px'
                    me='10px'
                  />
                  <Flex direction='column'>
                    <Text fontSize='sm' color={textColor} fontWeight='bold'>
                      Sophie B.{" "}
                    </Text>
                    <Text fontSize='xs' color='gray.400' fontWeight='400'>
                      Hi! I need more information...
                    </Text>
                  </Flex>
                </Flex>
                <Button p='0px' bg='transparent' variant='no-effects'>
                  <Text
                    fontSize='10px'
                    fontWeight='700'
                    color={iconColor}
                    alignSelf='center'>
                    REPLY
                  </Text>
                </Button>
              </Flex>
              <Flex justifyContent='space-between' mb='21px'>
                <Flex align='center'>
                  <Avatar
                    src={avatar3}
                    w='50px'
                    h='50px'
                    borderRadius='15px'
                    me='10px'
                  />
                  <Flex direction='column'>
                    <Text fontSize='sm' color={textColor} fontWeight='bold'>
                      Sophie B.{" "}
                    </Text>
                    <Text fontSize='xs' color='gray.400' fontWeight='400'>
                      Awesome work, can you change...
                    </Text>
                  </Flex>
                </Flex>
                <Button p='0px' bg='transparent' variant='no-effects'>
                  <Text
                    fontSize='10px'
                    fontWeight='700'
                    color={iconColor}
                    alignSelf='center'>
                    REPLY
                  </Text>
                </Button>
              </Flex>
              <Flex justifyContent='space-between' mb='21px'>
                <Flex align='center'>
                  <Avatar
                    src={avatar4}
                    w='50px'
                    h='50px'
                    borderRadius='15px'
                    me='10px'
                  />
                  <Flex direction='column'>
                    <Text fontSize='sm' color={textColor} fontWeight='bold'>
                      Sophie B.{" "}
                    </Text>
                    <Text fontSize='xs' color='gray.400' fontWeight='400'>
                      Have a great afternoon...
                    </Text>
                  </Flex>
                </Flex>
                <Button p='0px' bg='transparent' variant='no-effects'>
                  <Text
                    fontSize='10px'
                    fontWeight='700'
                    color={iconColor}
                    alignSelf='center'>
                    REPLY
                  </Text>
                </Button>
              </Flex>
              <Flex justifyContent='space-between' mb='21px'>
                <Flex align='center'>
                  <Avatar
                    src={avatar5}
                    w='50px'
                    h='50px'
                    borderRadius='15px'
                    me='10px'
                  />
                  <Flex direction='column'>
                    <Text fontSize='sm' color={textColor} fontWeight='bold'>
                      Sophie B.{" "}
                    </Text>
                    <Text fontSize='xs' color='gray.400' fontWeight='400'>
                      About files I can...
                    </Text>
                  </Flex>
                </Flex>
                <Button p='0px' bg='transparent' variant='no-effects'>
                  <Text
                    fontSize='10px'
                    fontWeight='700'
                    color={iconColor}
                    alignSelf='center'>
                    REPLY
                  </Text>
                </Button>
              </Flex>
              <Flex justifyContent='space-between' mb='21px'>
                <Flex align='center'>
                  <Avatar
                    src={avatar6}
                    w='50px'
                    h='50px'
                    borderRadius='15px'
                    me='10px'
                  />
                  <Flex direction='column'>
                    <Text fontSize='sm' color={textColor} fontWeight='bold'>
                      Sophie B.{" "}
                    </Text>
                    <Text fontSize='xs' color='gray.400' fontWeight='400'>
                      About files I can...
                    </Text>
                  </Flex>
                </Flex>
                <Button p='0px' bg='transparent' variant='no-effects'>
                  <Text
                    fontSize='10px'
                    fontWeight='700'
                    color={iconColor}
                    alignSelf='center'>
                    REPLY
                  </Text>
                </Button>
              </Flex>
            </Flex>
          </CardBody>
        </Card> */}
      </Grid>
      {/* <Card p='16px' my='24px'>
        <CardHeader p='12px 5px' mb='12px'>
          <Flex direction='column'>
            <Text fontSize='lg' color={textColor} fontWeight='bold'>
              Projects
            </Text>
            <Text fontSize='sm' color='gray.400' fontWeight='400'>
              Architects design houses
            </Text>
          </Flex>
        </CardHeader>
        <CardBody px='5px'>
          <Grid
            templateColumns={{ sm: "1fr", md: "1fr 1fr", xl: "repeat(4, 1fr)" }}
            templateRows={{ sm: "1fr 1fr 1fr auto", md: "1fr 1fr", xl: "1fr" }}
            gap='24px'>
            <Flex direction='column'>
              <Box mb='20px' position='relative' borderRadius='15px'>
                <Image src={ImageArchitect1} borderRadius='15px' />
                <Box
                  w='100%'
                  h='100%'
                  position='absolute'
                  top='0'
                  borderRadius='15px'
                  bg='linear-gradient(360deg, rgba(49, 56, 96, 0.16) 0%, rgba(21, 25, 40, 0.88) 100%)'></Box>
              </Box>
              <Flex direction='column'>
                <Text fontSize='md' color='gray.400' fontWeight='600' mb='10px'>
                  Project #1
                </Text>
                <Text
                  fontSize='xl'
                  color={textColor}
                  fontWeight='bold'
                  mb='10px'>
                  Modern
                </Text>
                <Text fontSize='md' color='gray.400' fontWeight='400' mb='20px'>
                  As Uber works through a huge amount of internal management
                  turmoil.
                </Text>
                <Flex justifyContent='space-between'>
                  <Button variant='dark' minW='110px' h='36px'>
                    VIEW ALL
                  </Button>
                  <AvatarGroup size='xs'>
                    <Avatar name='Ryan Florence' src={avatar6} />
                    <Avatar name='Segun Adebayo' src={avatar2} />
                    <Avatar name='Kent Dodds' src={avatar3} />
                    <Avatar name='Prosper Otemuyiwa' src={avatar4} />
                  </AvatarGroup>
                </Flex>
              </Flex>
            </Flex>
            <Flex direction='column'>
              <Box mb='20px' position='relative' borderRadius='15px'>
                <Image src={ImageArchitect2} borderRadius='15px' />
                <Box
                  w='100%'
                  h='100%'
                  position='absolute'
                  top='0'
                  borderRadius='15px'
                  bg='linear-gradient(360deg, rgba(49, 56, 96, 0.16) 0%, rgba(21, 25, 40, 0.88) 100%)'></Box>
              </Box>
              <Flex direction='column'>
                <Text fontSize='md' color='gray.400' fontWeight='600' mb='10px'>
                  Project #2
                </Text>
                <Text
                  fontSize='xl'
                  color={textColor}
                  fontWeight='bold'
                  mb='10px'>
                  Scandinavian
                </Text>
                <Text fontSize='md' color='gray.400' fontWeight='400' mb='20px'>
                  Music is something that every person has his or her own
                  specific opinion about.
                </Text>
                <Flex justifyContent='space-between'>
                  <Button variant='dark' minW='110px' h='36px'>
                    VIEW ALL
                  </Button>
                  <AvatarGroup size='xs'>
                    <Avatar name='Ryan Florence' src={avatar6} />
                    <Avatar name='Segun Adebayo' src={avatar2} />
                    <Avatar name='Kent Dodds' src={avatar3} />
                    <Avatar name='Prosper Otemuyiwa' src={avatar4} />
                  </AvatarGroup>
                </Flex>
              </Flex>
            </Flex>
            <Flex direction='column'>
              <Box mb='20px' position='relative' borderRadius='15px'>
                <Image src={ImageArchitect3} borderRadius='15px' />
                <Box
                  w='100%'
                  h='100%'
                  position='absolute'
                  top='0'
                  borderRadius='15px'
                  bg='linear-gradient(360deg, rgba(49, 56, 96, 0.16) 0%, rgba(21, 25, 40, 0.88) 100%)'></Box>
              </Box>
              <Flex direction='column'>
                <Text fontSize='md' color='gray.400' fontWeight='600' mb='10px'>
                  Project #3
                </Text>
                <Text
                  fontSize='xl'
                  color={textColor}
                  fontWeight='bold'
                  mb='10px'>
                  Minimalist
                </Text>
                <Text fontSize='md' color='gray.400' fontWeight='400' mb='20px'>
                  Different people have different taste, especially various
                  types of music.
                </Text>
                <Flex justifyContent='space-between'>
                  <Button variant='dark' minW='110px' h='36px'>
                    VIEW ALL
                  </Button>
                  <AvatarGroup size='xs'>
                    <Avatar name='Ryan Florence' src={avatar6} />
                    <Avatar name='Segun Adebayo' src={avatar2} />
                    <Avatar name='Kent Dodds' src={avatar3} />
                    <Avatar name='Prosper Otemuyiwa' src={avatar4} />
                  </AvatarGroup>
                </Flex>
              </Flex>
            </Flex>
            <Button
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
            </Button>
          </Grid>
        </CardBody>
      </Card> */}
    </Flex>
  );
}

export default Profile;
