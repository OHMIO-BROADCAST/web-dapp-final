import React, { useEffect, useState } from "react";
// Chakra imports
import {
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

import Box from '@mui/material/Box';

import { Step, StepContent, StepLabel, Stepper, Button as ButtonMaterial, CircularProgress } from "@mui/material/";
import { createTheme } from '@mui/material/styles'
import { ThemeProvider } from "@mui/system";
import { blue, green, orange, purple, red } from "@mui/material/colors";
import { pink } from "@material-ui/core/colors";


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
    const [isLoadingRefeer, setIsLoadingRefeer] = useState(false);


    const [profile, setProfile] = useState({});
    const [profileRefeer, setProfileRefeer] = useState({});

    const [message, setMessage] = useState("");
    const [userID, setUserID] = useState("");
    const [currentUser, setCurrentUser] = useState({});
    const [currentUserName, setCurrentUserName] = useState("");

    const history = useHistory();


    const [hasAccepted, setHasAccepted] = useState(false)
    const [activeStep, setActiveStep] = useState(0);

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
    };


    //PROCESO:
    //1. VERIFICAR QUE EL USUARIO ACTUAL NO TENGA REFERIDO, DE LO CONTRARIO MONTAR OTRO MENSAJE Y NO PROCEDER
    //CON LAS OTRAS LLAMADAS

    //2. SI EL USUARIO AUN NO HA SIDO REFERIDO ENTONCES OBTENER USUARIO QUE COMPARTIÓ EL LINK PARA VERIFICAR QUE SI EXISTE
    // SI NO EXISTE SALIR DE INMEDIATO CON UNA ALERTA

    const steps = [
        {
            label: 'Verify Users',
            description: `We need to check the authenticity of the users.`,
        },
        {
            label: 'Creating Refeer',
            description: `Adding user to the system`,
        },
        {
            label: 'Finish',
            description: `Enjoy! Thanks for using BMaker Pro.`,
        },
    ];

    const theme = createTheme({
        palette: {
            navbar: orange[100],
            tag: {
                red: red[200],
                pink: pink[200],
                purple: purple[200],
                blue: blue[200],
                green: green[200],
            },

        },
        typography: {
            fontFamily: [
                "NotoSans",
                "NotoSansThai",
                "Arial",
                "Roboto",
                "'Helvetica Neue'",
                "sans-serif",
            ].join(","),
        },
        shape: {
            borderRadius: 15,
        },
    });
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
            console.log("INVITE El usuario en BD es =>", profile)
            if (profile.isReferred) {
                Swal.fire({
                    title: 'You already has been referred',
                    icon: 'warning',
                    showCancelButton: false,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Accept'
                }).then((result) => {
                    history.push('/profile')
                })
            }
        }
    }

    const isStepFailed = (step) => {
        return step === 1;
    };

    const verifyUserWhoRefeer = async () => {
        if (location != '') {
            const profileReferred = getUserProfileRefeer(location)
            if (profileReferred == null) {
                console.log("Usuario que compartio el link no existe")
            } else {
                if(profileRefeer.id!=null){
                    console.log("Usuario que compartio el link si existe, es", profileReferred)
                }else{
                    console.log("Error con el usuario que compartio el link", profileReferred)
                }

            }
        }
    }

    async function getUserProfileRefeer(nam) {
        setIsLoadingRefeer(true)
        try {
            const filter = {
                username: {
                    match: {
                        username: nam
                    }
                }
            }
            const result = await API.graphql(
                graphqlOperation(queries.searchUsers, { filter: filter})
            )
                .then(result => {
                    console.log("Resultado de la consulta del usuario que compartio link", result.data.getUser)
                    setProfileRefeer(result.data.getUser)
                    setIsLoadingRefeer(false)
                    handleNext()
                    return result.data.getUser;
                })
                .catch(err => {
                    console.log(err)
                    setIsLoadingRefeer(false)
                    Swal.fire({
                        title: 'User not valid',
                        text:'The user who shared the link is not valid',
                        icon: 'error',
                        showCancelButton: false,
                        confirmButtonColor: '#3085d6',
                        cancelButtonColor: '#d33',
                        confirmButtonText: 'Accept'
                    }).then((result) => {
                        history.push('/profile')
                    })
                    
                });
            return result;

        } catch (error) {
            console.log("catch getuser que compartio link")
            const result = error
            return result;
        }
    }

    useEffect(() => {
        if (hasAccepted) {
            console.log("inicia proceso de referido")
            verifyUserWhoRefeer()
        }
        return () => {
            null
        }
    }, [hasAccepted])


    return (
        <Flex
            direction="column"
            pt={{ base: "120px", md: "75px" }}
            alignContent="center"
            alignItems="center"
        ><Card
            style={styles.cardoffline}
        >
                {profile && (profile.isReferred) ?
                    <div
                        style={{
                            width: "auto",
                            height: "auto",
                            justifyContent: 'center',
                            display: 'flex',
                            alignItems: 'center',
                            flexDirection: 'column'
                        }}
                    >
                        <Text align={'center'} fontWeight={'bold'} fontSize={25}>You already has been referred</Text>
                        <Text align={'center'} fontWeight={300}>We work hard to prevent errors, please if persist communicate to support@bmaker.pro</Text>
                    </div>
                    : (
                        <>
                            <div
                                style={{
                                    width: "auto",
                                    height: "auto",
                                    justifyContent: 'center',
                                    display: 'flex',
                                    alignItems: 'center',
                                    flexDirection: 'column'
                                }}
                            >
                                <Text align={'center'} fontWeight={'bold'} fontSize={25}>Welcome to BMaker Reefer System</Text>
                                <Text align={'center'} fontWeight={300}>We are proccessing the Reefer of the user:</Text>
                                {currentPath != '' ? <Text align={'center'} marginTop={"1rem"} marginBottom={"2rem"} fontWeight={"bold"} fontSize={20} textDecorationLine="underline"> {currentPath}</Text> : null}
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
                                        /* Swal.fire({
                                            title: 'Reefer Added',
                                            icon: 'success'
                                        }) */
                                        if (hasAccepted != true) {
                                            setHasAccepted(true)
                                        }
                                    }} leftIcon={<MdCheck size={21} />} >
                                    ACCEPT
                                </Button>
                            </Flex>

                            {hasAccepted == true ?
                                <Flex sx={{ maxWidth: 400 }}>
                                    <ThemeProvider theme={theme}>
                                        <Stepper activeStep={activeStep} orientation="vertical">
                                            {steps && steps.map((step, index) => (
                                                <Step key={step.label}>
                                                    <StepLabel
                                                    >
                                                        {step.label}
                                                    </StepLabel>
                                                    <StepContent>
                                                        <Text>{step.description}</Text>
                                                        <Box sx={{ mb: 2 }}>
                                                            <div>
                                                                {isLoadingRefeer &&
                                                                    <ButtonMaterial
                                                                        variant="contained"
                                                                        sx={{ mt: 1, mr: 1 }}
                                                                    >
                                                                        <CircularProgress size={20} style={{ color: 'white', marginRight: '1rem' }} />
                                                                        {index === steps.length - 1 ? 'Finish' : 'Loading'}
                                                                    </ButtonMaterial>
                                                                }

                                                            </div>
                                                        </Box>
                                                    </StepContent>
                                                </Step>
                                            ))}
                                        </Stepper>
                                        {/* {activeStep === steps.length && (
                                <Flex>
                                    <Text>All steps completed</Text>
                                    <ButtonMaterial onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
                                        Reset
                                    </ButtonMaterial>
                                </Flex>
                            )} */}
                                    </ThemeProvider>
                                </Flex>
                                : null
                            }</>
                    )
                }




            </Card>
        </Flex >
    );
}



