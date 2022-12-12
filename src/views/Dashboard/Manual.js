import React, { useState, useEffect, useRef } from "react";
import { Notification as NotificationModel } from "../../models/index";
import { API, DataStore, graphqlOperation } from "aws-amplify";
// Chakra imports
import {
  Button,
  color,
  Flex,
  FormControl,
  FormLabel,
  Select,
  Table,
  Spinner,
  Tbody,
  Text,
  Box,
  Input,
  Th,
  Thead,
  Tr,
  Switch,
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
import { RiSendPlaneFill } from 'react-icons/ri'
import { AiOutlineClear } from 'react-icons/ai';
import { FaPowerOff } from 'react-icons/fa'
import {
  Backdrop,
  CircularProgress,
  Snackbar,
} from '@material-ui/core';
import { tablesProjectData, tablesTableData } from "variables/general";
import { Formik, Field, Form, ErrorMessage } from 'formik';
import Swal from "sweetalert2";
import * as Yup from 'yup';
import { getModo, listNotifications } from "graphql/queries";
import { createNotification, updateModo } from "graphql/mutations";


function Manual() {
  const textColor = useColorModeValue("gray.700", "white");
  const borderColor = useColorModeValue("gray.200", "gray.600");

  const signalToSend = useState({});
  const [showSnackBar, setShowSnackBar] = useState(false)
  const [typeSnackBar, setTypeSnackBar] = useState("success")
  const [descriptionSnackBar, setDescriptionSnackBar] = useState("")
  const [isSynced, setIsSynced] = useState(false)

  const formRef = useRef();

  const [Signals, setSignals] = useState([])
  const [automatic, setAutomatic] = useState(false)
  const [currentVersionMode, setCurrentVersionMode] = useState(0)

  useEffect(() => {
    getAllNotifications()
    requestModo()
    /* 
        //query the initial todolist and subscribe to data updates
        const subscription = DataStore.observeQuery(NotificationModel).subscribe((snapshot) => {
          //isSynced can be used to show a loading spinner when the list is being loaded. 
          const { items, isSynced } = snapshot;
          setIsSynced(isSynced)
          console.log("SEÑALES", items);
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

  async function addNotification() {
    const NotificationSignal = new NotificationModel({
      title: 'titleTest',
      description: 'descriptionTest',
      timestamp: 'timseStamp',
      type: 'BUY',
      price: 1.8,
      pair: 'AUDCAD',
      time12h: '12:20PM',
      date: '06/12/2022',
      position: 'Sell',
      isManual: true
    })
    await DataStore.save(NotificationSignal).then(data => console.log("se añadio señal exitosa", data))
      .catch(error => console.log("error añadiendo señal", error));
  }

  //"b8a7ec00-5a96-43af-899e-b76c1af0c365" ID del modo actual
  async function requestModo() {
    const dataModo = await API.graphql(graphqlOperation(getModo, { id: `b8a7ec00-5a96-43af-899e-b76c1af0c365` }))
    //console.log(dataModo)
    if (dataModo.data.getModo.automatic != null
      && dataModo.data.getModo._version != null) {
      setAutomatic(dataModo.data.getModo.automatic);
      setCurrentVersionMode(dataModo.data.getModo._version);
    }
  }

  async function updateModoOperacion() {
    try {
      const updateModoData = await API.graphql(graphqlOperation(updateModo, { input: { id: `b8a7ec00-5a96-43af-899e-b76c1af0c365`, automatic: (!automatic), _version: currentVersionMode } }))
      console.log(updateModoData)
      if (updateModoData.data.updateModo.automatic != null &&
        updateModoData.data.updateModo._version != null) {
        setAutomatic(updateModoData.data.updateModo.automatic)
        setCurrentVersionMode(updateModoData.data.updateModo._version)
      }
    } catch (error) {
      console.log("error actualizando modo", error)
    }

  }

  return (
    <Flex direction="column" pt={{ base: "120px", md: "75px" }} style={{ justifyContent: 'center', alignItems: 'center' }} >
      <Flex direction={{ lg: "row", xl: "row", sm: 'column', md: 'column' }} display="flex"  >
        <Flex style={{ justifyContent: 'center', alignItems: 'center' }} >
          <Card overflowX={{ sm: "scroll", xl: "hidden" }} style={{ width: '40rem' }} pb="0px" >
            <CardHeader p="0px 0px 0px 0px">
              <Flex direction="column" w={{ sm: '100%' }}>
                <Text fontSize="xl" color={textColor} fontWeight="bold" pb=".5rem">
                  Enviar señal en MODO MANUAL
                </Text>
              </Flex>
            </CardHeader>
            <CardBody>
              <Table variant="simple" color={textColor}>
                <Thead>

                </Thead>
                <Tbody>
                  <Flex style={{ width: '100%', height: 'auto', justifyContent: 'center', alignItems: 'center' }}>
                    <Formik
                      id="formik"
                      innerRef={formRef}
                      initialValues={{
                        pair: '',
                        type: '',
                        price: '',
                        position: ''
                      }}
                      validationSchema={Yup.object({
                        pair: Yup.string()
                          .required('Required'),

                        type: Yup.string()
                          .required('Required'),

                        price: Yup.number()
                          .required('Required'),

                        position: Yup.string()
                          .required('Required')


                      })}
                      onChange={(e) => { console.log(e) }}
                      onSubmit={async (values, { setSubmitting, resetForm }) => {
                        console.log("values", values)
                        /*  id: ID!
                         title: String!*
                         description: String!*
                         timestamp: String!*
                         type: String!*
                         price: Float!*
                         time12h: String!*
                         date: String!*
                         position: String!*
                         isManual: Boolean*
                         pair:String! */

                        if (automatic == true) {
                          Swal.fire({
                            text: 'Para enviar señales, debes encender primero el modo Manual',
                            title: 'Modo Automático Activado',
                            icon: 'warning'
                          })
                        } else {
                          const timestamp = new Date().getTime();
                          const today = new Date();

                          const time12h = new Date().toLocaleTimeString('es-CO', {
                            hour: 'numeric', minute: 'numeric', hour12: true
                          })
                          const yyyy = today.getFullYear();
                          let mm = today.getMonth() + 1; // Months start at 0!
                          let dd = today.getDate();
                          if (dd < 10) dd = '0' + dd;
                          if (mm < 10) mm = '0' + mm;
                          const formattedToday = dd + '/' + mm + '/' + yyyy;

                          let signalToSend = new NotificationModel({
                            pair: values.pair,
                            type: values.type,
                            price: Number(values.price),
                            position: values.position,
                            isManual: true,
                            title: "values.title",
                            description: "values.description",
                            timestamp: timestamp.toString(),
                            time12h: time12h,
                            date: formattedToday
                          })



                          console.log('SUBMIT SIGNAL FINAL:', signalToSend);
                          ////*************************************** */
                          try {
                            const response = await API.graphql(graphqlOperation(createNotification, { input: signalToSend }))
                            // Hooray! Let them use the app now.
                            console.log("exito enviando señal", response);
                            Swal.fire({
                              title: 'Señal enviada',
                              text: 'Por favor revisa la app',
                              icon: 'success',
                              willClose: () => {
                                resetForm()
                              }
                            }
                            )

                          } catch (error) {
                            // Show the error message somewhere and let the user try again.
                            const errorCode = error.code;
                            const errorMessage = error.message;
                            // ..

                            Swal.fire('Revisa e intenta de nuevo', error.message, 'error')

                          }

                          resetForm();
                        }

                      }}
                    >
                      {({
                        errors,
                        handleBlur,
                        handleChange,
                        handleSubmit,
                        isSubmitting,
                        resetForm,
                        touched,
                        values
                      }) => (
                        <>
                          <form onSubmit={handleSubmit}>
                            <FormControl>
                              <FormLabel ms='4px' fontSize='sm' fontWeight='bold'>
                                Par Operado
                              </FormLabel>
                              <Select
                                variant='auth'
                                fontSize='sm'
                                ms='4px'
                                type='text'
                                placeholder='Seleccione un par'
                                size='lg'
                                id="form_pair"
                                name="pair"
                                onChange={handleChange}
                                value={values.pair}
                                border={true}
                                borderWidth={1}
                              >
                                <option value='AUDCAD'>AUDCAD</option>
                                <option value='CADCHF'>CADCHF</option>
                                <option value='EURUSD'>EURUSD</option>
                                <option value='NZDCAD'>NZDCAD</option>
                                <option value='USDCAD'>USDCAD</option>
                              </Select>
                              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '1rem' }}>
                                <ErrorMessage name="pair" style={{ color: 'red' }} />
                              </div>

                              <FormLabel ms='4px' fontSize='sm' fontWeight='bold'>
                                Precio
                              </FormLabel>
                              <Input
                                variant='auth'
                                fontSize='sm'
                                ms='4px'
                                type='text'
                                placeholder='@1.00420'
                                size='lg'
                                id="form_price"
                                name="price"
                                onChange={handleChange}
                                value={values.price}
                              />
                              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '1rem' }}>
                                <ErrorMessage name="price" />
                              </div>

                              <FormLabel ms='4px' fontSize='sm' fontWeight='bold'>
                                Tipo de Orden <FormLabel ms='4px' fontSize='sm' fontWeight='thin'>(Si es para Abrir o Cerrar)</FormLabel>
                              </FormLabel>
                              <Select
                                variant='auth'
                                fontSize='sm'
                                ms='4px'
                                type='type'
                                id="form_type"
                                placeholder='Seleccione un tipo de orden'
                                size='lg'
                                name="type"
                                onChange={handleChange}
                                value={values.type}
                                border={true}
                                borderWidth={1}
                              >
                                <option value='New'>New</option>
                                <option value='Close'>Close</option>
                              </Select>
                              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '1rem' }}>
                                <ErrorMessage name="type" style={{ paddingTop: '0' }} />
                              </div>


                              <FormLabel ms='4px' fontSize='sm' fontWeight='bold'>
                                Tipo de Posición <FormLabel ms='4px' fontSize='sm' fontWeight='thin'>(Si es para Compra o Venta)</FormLabel>
                              </FormLabel>
                              <Select
                                variant='auth'
                                fontSize='sm'
                                ms='4px'
                                type='text'
                                placeholder='Seleccione un tipo de posición'
                                size='lg'
                                id="form_position"
                                name="position"
                                onChange={handleChange}
                                value={values.position}
                                border={true}
                                borderWidth={1}
                              >
                                <option value='Buy'>Buy</option>
                                <option value='Sell'>Sell</option>
                              </Select>
                              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '1rem' }}>
                                <ErrorMessage name="email" style={{ paddingTop: '0' }} />
                              </div>



                              <Flex style={{ marginBottom: '2rem' }}>
                                <Button
                                  fontSize='14px'
                                  variant='dark'
                                  fontWeight='bold'
                                  w='40%'
                                  h='45'
                                  leftIcon={<AiOutlineClear color="#FFFFFF" size={21} />}
                                  backgroundColor={"#ee5438"}
                                  color={"white"}
                                  onClick={() => {
                                    resetForm()
                                  }}
                                >
                                  RESET
                                </Button>

                                <Button
                                  fontSize='14px'
                                  variant='dark'
                                  fontWeight='bold'
                                  w='60%'
                                  h='45'
                                  disabled={isSubmitting}
                                  onClick={handleSubmit}
                                  leftIcon={<RiSendPlaneFill />} >
                                  ENVIAR SEÑAL
                                </Button>
                              </Flex>
                            </FormControl>
                          </form>

                          <Backdrop
                            open={isSubmitting}
                            style={{
                              zIndex: 20,
                              color: '#fff'
                            }}
                          >
                            <CircularProgress color="inherit" style={{ color: '#03CFB3' }} />
                          </Backdrop>
                        </>)}
                    </Formik>
                  </Flex>
                </Tbody>
              </Table>
            </CardBody>
          </Card>
        </Flex>



        <Flex style={{ justifyContent: 'center', alignItems: 'center' }} >



          <Card overflowX={{ sm: "scroll", xl: "hidden" }} style={{ width: '24rem', height: '15rem', margin: '2rem', justifyContent: 'center', alignItems: 'center' }} >
            <CardHeader p="6px 0px 22px 0px">
              <Flex direction="column">
                <Text fontSize="xl" color={textColor} fontWeight="bold" pb=".5rem">
                  Apagar MODO AUTOMATICO
                </Text>
              </Flex>
            </CardHeader>
            <CardBody>
              <Table variant="simple" color={textColor}>
                <Thead>

                </Thead>
                <Tbody>
                  <Flex style={{ width: '15rem', height: 'auto', justifyContent: 'center', alignItems: 'center', flexDirection: "column" }}>


                    <Flex style={{ marginBottom: '2rem' }}>
                      <FormLabel ms='4px' fontSize='sm' fontWeight='bold'>
                        Estado Actual
                      </FormLabel>
                      <Input
                        variant='auth'
                        fontSize='sm'
                        ms='4px'
                        type='text'
                        placeholder='@1.00420'
                        size='lg'
                        id="form_price"
                        name="price"
                        textAlign={'center'}
                        value={automatic ? "Automático" : "Manual"}
                        disabled={true}
                      />
                    </Flex>

                    {/* <Flex style={{ marginBottom: '2rem' }}>
                      <FormLabel ms='4px' fontSize='sm' fontWeight='bold'>
                        Versión de Registro
                      </FormLabel>
                      <Input
                        variant='auth'
                        fontSize='sm'
                        ms='4px'
                        type='text'
                        placeholder='@1.00420'
                        size='lg'
                        id="form_price"
                        name="price"
                        textAlign={'center'}
                        value={currentVersionMode}
                        disabled={true}
                      />
                    </Flex> */}

                    <Flex >
                      <Button
                        fontSize='14px'
                        variant='dark'
                        fontWeight='bold'
                        w='40%'
                        h='45'
                        leftIcon={<HiOutlineRefresh color="#FFFFFF" size={21} />}
                        backgroundColor={"#ee5438"}
                        color={"white"}
                        onClick={() => requestModo()}
                      >
                        ACTUALIZAR
                      </Button>

                      <Button
                        fontSize='14px'
                        variant='dark'
                        fontWeight='bold'
                        w='60%'
                        h='45'
                        onClick={() => updateModoOperacion()}
                        leftIcon={<FaPowerOff />} >
                        ENCENDER/APAGAR
                      </Button>
                    </Flex>

                    {/* <Backdrop
                    open={isSubmitting}
                    style={{
                      zIndex: 20,
                      color: '#fff'
                    }}
                  >
                    <CircularProgress color="inherit" style={{ color: '#03CFB3' }} />
                  </Backdrop> */}


                  </Flex>
                </Tbody>
              </Table >
            </CardBody >
          </Card >
        </Flex>

      </Flex >

      <Card overflowX={{ sm: "scroll", xl: "hidden" }} my={"2rem"}>
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
                <Button onClick={() => getAllNotifications()} leftIcon={<HiOutlineRefresh />}>Actualizar</Button>
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

                  console.log(row)

                  return (
                    <TablesProjectRow
                      id={row.id}
                      pair={row.pair}
                      title={row.title}
                      description={row.description}
                      timestamp={row.timestamp}
                      type={row.type}
                      price={row.price}
                      time12h={row.time12h}
                      date={row.date}
                      position={row.position}
                      isManual={row.isManual}
                      createdAt={row.createdAt}

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
    </Flex >
  );
}

export default Manual;
