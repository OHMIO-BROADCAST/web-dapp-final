import React, { useState, useEffect } from "react";
// Chakra imports
import { CheckboxField, Loader } from "@aws-amplify/ui-react";
import {
    Box,
    Button,
    Flex,
    Grid,
    Icon,
    Spacer,
    Text,
    useColorMode,
    useColorModeValue,
} from "@chakra-ui/react";
// Assets
import BackgroundCard1 from "assets/img/BackgroundCard1.png";
// Custom components
import Card from "components/Card/Card.js";
import Swal from "sweetalert2";

import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import IconBox from "components/Icons/IconBox";
import { MastercardIcon, VisaIcon } from "components/Icons/Icons";
import { HSeparator } from "components/Separator/Separator";
import BillingRow from "components/Tables/BillingRow";
import InvoicesRow from "components/Tables/InvoicesRow";
import TransactionRow from "components/Tables/TransactionRow";
import { BsFileEarmarkLock2, BsFillFileEarmarkFill, BsFillShieldLockFill } from 'react-icons/bs';
import { AiOutlineCaretDown } from "react-icons/ai";
import { MdCheck, MdDoNotDisturbOnTotalSilence, MdNoteAlt } from 'react-icons/md'
import {
    FaPaypal,
    FaPencilAlt,
    FaRegCalendarAlt,
    FaWallet,
} from "react-icons/fa";
import { RiMastercardFill, RiSecurePaymentLine } from "react-icons/ri";
import { TbFileCertificate } from "react-icons/tb";
import {
    billingData,
    invoicesData,
    newestTransactions,
    olderTransactions,
} from "variables/general";
import ModalCertified from "./ModalCertified";

import { Auth, API, graphqlOperation } from "aws-amplify";
import * as queries from "../../graphql/queries.js";
import * as mutations from "../../graphql/mutations";

function CertificatesTest() {
    // Chakra color mode
    const iconBlue = useColorModeValue("navy.500", "navy.500");
    const textColor = useColorModeValue("gray.700", "white");
    const borderColor = useColorModeValue("#dee2e6", "transparent");
    const { colorMode } = useColorMode();

    const [isLoading, setIsLoading] = useState(false);

    const [isOpenModalTermsConditions, setIsOpenModalTermsConditions] = useState(false)

    const [userHasSigned, setUserHasSigned] = useState(false)
    const [profile, setProfile] = useState({});
    const [message, setMessage] = useState("");
    const [userID, setUserID] = useState("");
    const [currentUser, setCurrentUser] = useState({});
    const [currentUserName, setCurrentUserName] = useState("");

    const [isSigning, setIsSigning] = useState(false)

    console.log(colorMode);


    const updateSignStatus = async () => {
        setIsOpenModalTermsConditions(false)
        setIsSigning(true)
        console.log("firmar usuario con ID", profile.id)

        const today = new Date();

        const yyyy = today.getFullYear();
        let mm = today.getMonth() + 1; // Months start at 0!
        let dd = today.getDate();
        if (dd < 10) dd = '0' + dd;
        if (mm < 10) mm = '0' + mm;
        const formattedSignDate = dd + '/' + mm + '/' + yyyy;
        console.log("fecha de firma", formattedSignDate)

        let userDetailstoUpdate = {
            id: profile.id,
            hasSigned: true,
            dateSigned: formattedSignDate,
            _version: profile._version
        }

        const updateUserSigning = await API.graphql(graphqlOperation(mutations.updateUser, { input: userDetailstoUpdate }))
            .then(data => {
                console.log("Success signing status", data)
                setIsSigning(false)
                setUserHasSigned(true)
                Swal.fire({
                    title: 'The sign was success',
                    icon: 'success'
                })
                componenteMontado()
            }).catch(error => {
                console.log("Failed signing status", error)
                setIsSigning(false)
                setUserHasSigned(false)
                Swal.fire({
                    title: 'Something Happen, please try again',
                    icon: 'error'
                })
            });

    }

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
                    if (result.data.getUser.hasSigned !== null && result.data.getUser.hasSigned == true) {
                        setUserHasSigned(true)
                    }
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
            console.log("LAPUTAAAAAA", profile.hasSigned)
        }

    }


    useEffect(async () => {
        componenteMontado()
    }, [])

    useEffect(() => {
        if (profile.hasSigned == true) {
            setUserHasSigned(profile.hasSigned)
        }
    }, [profile])



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

    return (
        <Flex direction='column' pt={{ base: "120px", md: "75px" }}>
            <Grid templateColumns={{ sm: "1fr", lg: "2fr 1.2fr" }} templateRows='1fr'>
                <Box>
                    <Grid
                        templateColumns={{
                            sm: "1fr",
                            md: "1fr 1fr",
                            xl: "1fr 1fr 1fr 1fr",
                        }}
                        templateRows={{ sm: "auto auto auto", md: "1fr auto", xl: "1fr" }}
                        gap='26px'>
                        <Card
                            backgroundImage={
                                colorMode === "dark"
                                    ? "linear-gradient(180deg, #3182CE 0%, #63B3ED 100%)"
                                    : BackgroundCard1
                            }
                            backgroundRepeat='no-repeat'
                            background='cover'
                            bgPosition='10%'
                            p='16px'
                            h={{ sm: "220px", xl: "100%" }}
                            gridArea={{ md: "1 / 1 / 2 / 3", xl: "1 / 1 / 2 / 3" }}>
                            <CardBody h='100%' w='100%'>
                                <Flex
                                    direction='column'
                                    color='white'
                                    h='100%'
                                    p='0px 10px 20px 10px'
                                    w='100%'>
                                    <Flex justify='space-between' align='center'>
                                        <Text fontSize='md' fontWeight='bold'>
                                            CERTIFICATE STATUS
                                        </Text>
                                        <Icon
                                            as={BsFillShieldLockFill}
                                            w='48px'
                                            h='auto'
                                            color='gray.400'
                                        />
                                    </Flex>
                                    <Spacer />
                                    <Flex direction='column'>
                                        <Box>
                                            <Text
                                                fontSize='2xl'
                                                letterSpacing='2px'
                                                fontWeight='bold'>
                                                {userHasSigned == true ? "SIGNED" : "NOT SIGNED"}
                                            </Text>

                                        </Box>
                                        <Flex mt='14px'>
                                            <Flex direction='column' me='34px'>
                                                <Text fontSize='xs'>LAST UPDATE</Text>
                                                <Text fontSize='xs' fontWeight='bold'>

                                                    {userHasSigned == true ? (profile.dateSigned == null ? "06/01/2023" : profile.dateSigned) : "06/01/2023"}

                                                </Text>
                                            </Flex>
                                            <Flex direction='column'>
                                                <Text fontSize='xs'>TYPE OF FILE</Text>
                                                <Text fontSize='xs' fontWeight='bold'>
                                                    Disclaimer / PDF
                                                </Text>
                                            </Flex>
                                        </Flex>
                                    </Flex>
                                </Flex>
                            </CardBody>
                        </Card>
                        <Card p='16px' display='flex' align='center' justify='center'>
                            <CardBody>
                                <Flex direction='column' align='center' w='100%' py='14px'>
                                    <IconBox as='box' h={"60px"} w={"60px"} bg={iconBlue}>
                                        <Icon h={"24px"} w={"24px"} color='white' as={TbFileCertificate} />
                                    </IconBox>
                                    <Flex
                                        direction='column'
                                        m='14px'
                                        justify='center'
                                        textAlign='center'
                                        align='center'
                                        w='100%'>
                                        <Text fontSize='md' color={textColor} fontWeight='bold'>
                                            Main Purpouse
                                        </Text>
                                        <Text
                                            mb='24px'
                                            fontSize='xs'
                                            color='gray.400'
                                            mt="1"
                                            fontWeight='semibold'>
                                            Discharge of Responsability that comes with Financial Advices.
                                        </Text>
                                        <HSeparator />
                                    </Flex>
                                    <Text fontSize='lg' color={textColor} fontWeight='bold'>
                                        Financial Advice
                                    </Text>
                                </Flex>
                            </CardBody>
                        </Card>
                        <Card p='16px' display='flex' align='center' justify='center'>
                            <CardBody>
                                <Flex
                                    direction='column'
                                    align='center'
                                    justify='center'
                                    w='100%'
                                    py='14px'>
                                    <IconBox as='box' h={"60px"} w={"60px"} bg={iconBlue}>
                                        <Icon h={"24px"} w={"24px"} color='white' as={BsFileEarmarkLock2} />
                                    </IconBox>
                                    <Flex
                                        direction='column'
                                        m='14px'
                                        justify='center'
                                        textAlign='center'
                                        align='center'
                                        w='100%'>
                                        <Text fontSize='md' color={textColor} fontWeight='bold'>
                                            Second Purpouse
                                        </Text>
                                        <Text
                                            mb='24px'
                                            fontSize='xs'
                                            color='gray.400'
                                            mt="1"
                                            fontWeight='semibold'>
                                            Discharge of Responsability that comes with High Risk investments and High Volatile markets.
                                        </Text>
                                        <HSeparator />
                                    </Flex>
                                    <Text fontSize='lg' color={textColor} fontWeight='bold'>
                                        Risk Investments
                                    </Text>
                                </Flex>
                            </CardBody>
                        </Card>
                    </Grid>
                    <Card p='16px' mt='24px' style={{ borderColor: '#F9A640', borderWidth: 3 }}>
                        <CardHeader>
                            <Flex
                                justify='space-between'
                                align='center'
                                minHeight='60px'
                                w='100%'>
                                <Text fontSize='lg' color={textColor} fontWeight='bold'>
                                    Sign online
                                </Text>
                                {userHasSigned != true ? <Button variant={colorMode === "dark" ? "primary" : "dark"} onClick={() => setIsOpenModalTermsConditions(true)}>
                                    SIGN CERTIFICATE
                                </Button> : null}

                            </Flex>
                        </CardHeader>
                        <CardBody>
                            <Flex
                                direction={{ sm: "column", md: "row" }}
                                align='center'
                                w='100%'
                                justify='center'
                                py='1rem'>
                                <Flex
                                    p='1rem'
                                    bg={colorMode === "dark" ? "navy.900" : "transparent"}
                                    borderRadius='15px'
                                    width='100%'
                                    border='1px solid'
                                    borderColor={"#F9A640"}
                                    align='center'
                                    mb={{ sm: "24px", md: "0px" }}
                                    me={{ sm: "0px", md: "24px" }}>
                                    <IconBox me='10px' w='25px' h='22px'
                                        onClick={() => {
                                            if (!userHasSigned) {
                                                setIsOpenModalTermsConditions(true)
                                            }
                                        }
                                        }
                                    >

                                        <CheckboxField w='100%' h='100%' checked={userHasSigned}
                                            readOnly
                                            disabled
                                        />
                                    </IconBox>
                                    <Text color='gray.400' fontSize='md' fontWeight='semibold'>
                                        ACCEPT TERMS & CONDITIONS
                                    </Text>
                                    <ModalCertified
                                        isOpen={isOpenModalTermsConditions}
                                        onClose={() => setIsOpenModalTermsConditions(false)}
                                        userHasSigned={userHasSigned}
                                        setUserHasSigned={setUserHasSigned}
                                        updateSignStatus={updateSignStatus}
                                    />
                                    <Spacer />
                                    {/* <Button p='0px' w='16px' h='16px' variant='no-effects'>
                                        <Icon
                                            as={AiOutlineCaretDown}
                                            color={colorMode === "dark" && "white"}
                                        />
                                    </Button> */}
                                </Flex>
                                <Flex
                                    p='16px'
                                    bg={colorMode === "dark" ? "navy.900" : "transparent"}
                                    borderRadius='15px'
                                    width='100%'
                                    border='1px solid'
                                    borderColor={borderColor}
                                    align='center'>
                                    <IconBox me='10px' w='25px' h='25px'>
                                        {isSigning && <Loader w='100%' h='100%' />}
                                        {!isSigning && <>
                                            {userHasSigned == true ? <MdNoteAlt w='100%' h='100%' size={22} /> : <MdDoNotDisturbOnTotalSilence w='100%' h='100%' size={22} />}
                                        </>}


                                    </IconBox>
                                    <Text color='gray.400' fontSize='md' fontWeight='semibold'>
                                        STATUS: {userHasSigned == true ? "SIGNED" : "NOT SIGNED"}


                                    </Text>
                                    <Spacer />
                                    {userHasSigned == true ? <MdCheck w='100%' h='100%' size={22} /> : <Button
                                        p='0px'
                                        bg='transparent'
                                        w='16px'
                                        h='16px'
                                        variant='no-effects'>                                        <Icon
                                            as={FaPencilAlt}
                                            color={colorMode === "dark" && "white"}
                                            onClick={() => setIsOpenModalTermsConditions(true)}
                                        />
                                    </Button>}


                                </Flex>
                            </Flex>
                        </CardBody>
                    </Card>
                </Box>
                <Card
                    p='22px'
                    my={{ sm: "24px", lg: "0px" }}
                    ms={{ sm: "0px", lg: "24px" }}
                    style={{ height: '' }}
                >
                    <CardHeader>
                        <Flex justify='space-between' align='center' mb='1rem' w='100%'>
                            <Text fontSize='lg' color={textColor} fontWeight='bold'>
                                Certificates
                            </Text>
                            <Button
                                variant='outlined'
                                color={colorMode === "dark" && "white"}
                                borderColor={colorMode === "dark" && "white"}
                                _hover={colorMode === "dark" && "none"}
                                minW='110px'
                                maxH='35px'
                                onClick={() => Swal.fire({
                                    title: 'In this moment we only have the Disclaimer Certificate',
                                    icon: 'info'
                                })}>
                                VIEW ALL
                            </Button>
                        </Flex>
                    </CardHeader>
                    <CardBody>
                        <Flex direction='column' w='100%'>
                            {invoicesData.map((row, idx) => {
                                return (
                                    <InvoicesRow
                                        date={row.date}
                                        code={row.code}
                                        price={row.price}
                                        logo={row.logo}
                                        format={row.format}
                                        key={idx}
                                    />
                                );
                            })}
                        </Flex>
                    </CardBody>
                </Card>
            </Grid>
            <Grid templateColumns={{ sm: "1fr", lg: "1fr" }}>
                <Card my={{ lg: "24px" }} me={{ lg: "24px" }}>
                    <Flex direction='column'>
                        <CardHeader py='12px'>
                            <Text color={textColor} fontSize='lg' fontWeight='bold'>
                                Disclaimer of Responsability
                            </Text>
                        </CardHeader>
                        <CardBody>
                            <Flex direction='column' w='100%'>
                                {billingData.map((row, key) => {
                                    return (
                                        <BillingRow
                                            name={row.name}
                                            company={row.company}
                                            email={row.email}
                                            number={row.number}
                                            key={key}
                                        />
                                    );
                                })}
                            </Flex>
                        </CardBody>
                    </Flex>
                </Card>
                {/* <Card my='24px' ms={{ lg: "24px" }}>
                    <CardHeader mb='12px'>
                        <Flex direction='column' w='100%'>
                            <Flex
                                direction={{ sm: "column", lg: "row" }}
                                justify={{ sm: "center", lg: "space-between" }}
                                align={{ sm: "center" }}
                                w='100%'
                                my={{ md: "12px" }}>
                                <Text
                                    color={textColor}
                                    fontSize={{ sm: "lg", md: "xl", lg: "lg" }}
                                    fontWeight='bold'>
                                    Your Transactions
                                </Text>
                                <Flex align='center'>
                                    <Icon
                                        as={FaRegCalendarAlt}
                                        color='gray.400'
                                        fontSize='md'
                                        me='6px'></Icon>
                                    <Text color='gray.400' fontSize='sm' fontWeight='semibold'>
                                        23 - 30 March 2022
                                    </Text>
                                </Flex>
                            </Flex>
                        </Flex>
                    </CardHeader>
                    <CardBody>
                        <Flex direction='column' w='100%'>
                            <Text
                                color='gray.400'
                                fontSize={{ sm: "sm", md: "md" }}
                                fontWeight='semibold'
                                my='12px'>
                                NEWEST
                            </Text>
                            {newestTransactions.map((row, idx) => {
                                return (
                                    <TransactionRow
                                        name={row.name}
                                        logo={row.logo}
                                        date={row.date}
                                        price={row.price}
                                        key={idx}
                                    />
                                );
                            })}
                            <Text
                                color='gray.400'
                                fontSize={{ sm: "sm", md: "md" }}
                                fontWeight='semibold'
                                my='12px'>
                                OLDER
                            </Text>
                            {olderTransactions.map((row, idx) => {
                                return (
                                    <TransactionRow
                                        name={row.name}
                                        logo={row.logo}
                                        date={row.date}
                                        price={row.price}
                                        key={idx}
                                    />
                                );
                            })}
                        </Flex>
                    </CardBody>
                </Card> */}
            </Grid>
        </Flex >
    );
}

export default CertificatesTest;
