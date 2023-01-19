import React, { useEffect, useState } from "react";
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

import * as queries from "../../graphql/queries.js";
import * as mutations from "../../graphql/mutations";

import Card from "components/Card/Card.js";

import Swal from "sweetalert2";
import { API, graphqlOperation, Auth } from "aws-amplify";
import { useHistory, useLocation, useParams } from "react-router";

import { MdCancel, MdCheck } from "react-icons/md";
import HorizontalLinearStepper from "components/Stepper/HorizontalLinearStepper.js";
import { Stepper } from "@mui/material";
import { Step, StepLabel } from "@material-ui/core";


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

export default function Invite() {
    // Chakra Color Mode
    const iconBlue = useColorModeValue("navy.500", "navy.500");
    const iconBoxInside = useColorModeValue("white", "white");
    const textColor = useColorModeValue("gray.700", "white");
    const tableRowColor = useColorModeValue("#F7FAFC", "navy.900");
    const borderColor = useColorModeValue("gray.200", "gray.600");
    const textTableColor = useColorModeValue("gray.500", "white");

    const { colorMode } = useColorMode();

    const [user, setuser] = useState()
    const [isLoading, setIsLoading] = useState(false);

    const [profile, setProfile] = useState({});
    const [message, setMessage] = useState("");
    const [userID, setUserID] = useState("");
    const [currentUser, setCurrentUser] = useState({});
    const [currentUserName, setCurrentUserName] = useState("");

    const history = useHistory();


    //PROCESO:
    //1. VERIFICAR QUE EL USUARIO ACTUAL NO TENGA REFERIDO, DE LO CONTRARIO MONTAR OTRO MENSAJE Y NO PROCEDER
    //CON LAS OTRAS LLAMADAS

    //2. SI EL USUARIO AUN NO HA SIDO REFERIDO ENTONCES OBTENER USUARIO QUE COMPARTIÓ EL LINK PARA VERIFICAR QUE SI EXISTE
    // SI NO EXISTE SALIR DE INMEDIATO CON UNA ALERTA


    //*************PROCESO PARA USUARIO NO COMERCIALES OSEA USUARIOS NORMALES */

    //4. SI EXISTE ENTONCES REALIZAR DOS ACTUALIZACIONES
    //+ UNA PARA EL USUARIO QUE COMPARTIO EL LINK => SUMAR 1 AL TOTAL DE REFERIDOS 
    //  listUserReferred = SUMAR ESTE USUARIO AL QUE COMPARTIO EL LINK
    //  totalReward = SUMAR 30 USD
    //  totalReferred = SUMAR UNO
    //  hasReferred -> TRUE

    //+ OTRA PARA EL USUARIO DE LA SESION ACTUAL => EDITAR 
    //  referredBy -> INCLUIR EL USUARIO DE LA URL
    //  isReferred -> TRUE


    //*************PROCESO PARA USUARIOS COMERCIALES *************************/ (VERIFICAR LÓGICA)

    //4. SI EXISTE ENTONCES REALIZAR DOS ACTUALIZACIONES
    //+ UNA PARA EL USUARIO QUE COMPARTIO EL LINK => SUMAR 1 AL TOTAL DE REFERIDOS 
    //  listUserReferred = SUMAR ESTE USUARIO AL QUE COMPARTIO EL LINK
    //  totalReward = SUMAR 30 USD
    //  totalReferred = SUMAR UNO
    //  hasReferred -> TRUE

    // DE ACUERDO A LA FECHA Y CANTIDAD DE USUARIO REFERIDOS DE ESTE USUARIO:
    //  totalEarnCommercial => SUMAR 50 USD 
    //  totalReferredCommercia

    //+ OTRA PARA EL USUARIO DE LA SESION ACTUAL => EDITAR 
    //  referredBy -> INCLUIR EL USUARIO DE LA URL
    //  isReferred -> TRUE

    const location = useLocation();
    const [currentPath, setCurrentPath] = useState();


    useEffect(() => {
        setCurrentPath(location.pathname.slice(8));
        console.log("CURRENT INVITED USER", location.pathname.slice(8))
        return () => {
            null
        }
    }, [location]);


    async function updatePaymentStatus(ID) {
        console.log("updating user with ID", ID)

        const today = new Date();

        const yyyy = today.getFullYear();
        let mm = today.getMonth() + 1 + 1; // Months start at 0! más un mes 
        let dd = today.getDate();
        if (dd < 10) dd = '0' + dd;
        if (mm < 10) mm = '0' + mm;
        const formattedExpirationDate = dd + '/' + mm + '/' + yyyy;
        console.log("fecha de expiración", formattedExpirationDate)

        let userDetailstoUpdate = {
            id: userID,
            isPaymentProcessing: true,
            forexSubscription: true,
            payWithApplePay: false,
            currentlyPlan: "monthly",
            hasPurchasedSomething: true,
            expirationDate: formattedExpirationDate,
            _version: profile._version
        }
        const updateUserPaymentProcessing = await API.graphql(
            { query: mutations.updateUser, variables: { input: userDetailstoUpdate } }
        ).then(data => {
            console.log("Success updating payment status", data)
        }).catch(error => {
            console.log("Failed updating payment status", error)
        });
    }

    /* useEffect(() => {
        Swal.fire({
            title: 'This page is for proccess the refeer',
            icon: 'success'
        })
        if (profile != null) {
            console.log("PURCHASE", user);
            if (userID != null) {
                updatePaymentStatus(userID);
            }
        }; 
        return () => {
            null
        }
    }, [profile]) */




    useEffect(async () => {
        componenteMontado()
        return () => {
            null
        }
    }, [])



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
        } else {
            console.log("El usuario en BD es =>", profile)
        }



    }


    return (
        <Flex
            direction="column"
            pt={{ base: "120px", md: "75px" }}
            alignContent="center"
            alignItems="center"
        ><Card
            style={styles.cardoffline}
        >
                <Stepper alternativeLabel activeStep={1} connector={<QontoConnector />}>
                    {steps.map((label) => (
                        <Step key={label}>
                            <StepLabel StepIconComponent={QontoStepIcon}>{label}</StepLabel>
                        </Step>
                    ))}
                </Stepper>

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
                    <Text align={'center'} fontWeight={'bold'} fontSize={25}>Welcome to BMaker Reefer System</Text>
                    <Text align={'center'} fontWeight={300}>We are proccessing the Reefer of the user:</Text>

                    {currentPath != '' ? <Text align={'center'} marginTop={10} marginBottom={10} fontWeight={"bold"} fontSize={20} textDecorationLine="underline"> {currentPath}</Text> : null}
                </div>

                <Flex style={{ marginBottom: '2rem' }}>
                    <Button
                        fontSize='14px'
                        variant='dark'
                        fontWeight='bold'
                        w='40%'
                        h='45'
                        leftIcon={<MdCancel color="#FFFFFF" size={21} />}
                        backgroundColor={"#ee5438"}
                        color={"white"}
                        onClick={() => {
                            history.push("/dashboard")
                        }}
                    >
                        CANCEL
                    </Button>

                    <Button
                        fontSize='14px'
                        variant='dark'
                        fontWeight='bold'
                        w='60%'
                        h='45'
                        disabled={isLoading}
                        onClick={() => {
                            Swal.fire({
                                title: 'Reefer Added',
                                icon: 'success'
                            })
                        }} leftIcon={<MdCheck size={21} />} >
                        ACCEPT
                    </Button>
                </Flex>

            </Card>
        </Flex >
    );
}



