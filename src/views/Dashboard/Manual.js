import React, { useRef, useState } from "react";
// Chakra imports
import {
  Button,
  color,
  Flex,
  FormControl,
  FormLabel,
  Select,
  Table,
  Tbody,
  Text,
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
import { AiOutlineClear } from 'react-icons/ai'
import {
  Backdrop,
  CircularProgress,
  Snackbar,
} from '@material-ui/core';
import { tablesProjectData, tablesTableData } from "variables/general";
import { Formik, Field, Form, ErrorMessage } from 'formik';
import Swal from "sweetalert2";
import * as Yup from 'yup';

function Manual() {
  const textColor = useColorModeValue("gray.700", "white");
  const borderColor = useColorModeValue("gray.200", "gray.600");

  const signalToSend = useState({});
  const [showSnackBar, setShowSnackBar] = useState(false)
  const [typeSnackBar, setTypeSnackBar] = useState("success")
  const [descriptionSnackBar, setDescriptionSnackBar] = useState("")

  const formRef = useRef();


  return (
    <Flex direction="column" pt={{ base: "120px", md: "75px" }} style={{ justifyContent: 'center', alignItems: 'center' }} >
      <Card overflowX={{ sm: "scroll", xl: "hidden" }} style={{ width: '40rem' }} pb="0px">
        <CardHeader p="6px 0px 22px 0px">
          <Flex direction="column">
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
                    console.log('SUBMIT', values)
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
                    const timestamp = new Date().getTime();

                    const today = new Date();
                    let hours = today.getHours();
                    const minute = today.getMinutes();
                    hours = (hours % 12) || 12;
                    var suffix = hours >= 12 ? "PM" : "AM";
                    const time12h = ((hours + 11) % 12 + 1) + suffix;

                    const yyyy = today.getFullYear();
                    let mm = today.getMonth() + 1; // Months start at 0!
                    let dd = today.getDate();

                    if (dd < 10) dd = '0' + dd;
                    if (mm < 10) mm = '0' + mm;

                    const formattedToday = dd + '/' + mm + '/' + yyyy;


                    signalToSend.set("pair", values.pair);
                    signalToSend.set("type", values.type);
                    signalToSend.set("price", values.price);
                    signalToSend.set("position", values.position);

                    signalToSend.set("isManual", true);

                    signalToSend.set("title", "values.title");
                    signalToSend.set("description", "values.description");
                    signalToSend.set("timestamp", timestamp);
                    signalToSend.set("time12h", time12h);
                    signalToSend.set("date", formattedToday);


                    console.log('SUBMIT SIGNAL FINAL:', signalToSend);
                    ////*************************************** */
                    try {
                      const response = await signalToSend.signUp();
                      // Hooray! Let them use the app now.
                      console.log("REGISTER SUCCESSFUL", response)
                      setSubmitting(false);
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
                      setSubmitting(false);
                      setShowSnackBar(true);
                      setTypeSnackBar('error');
                      setDescriptionSnackBar(errorMessage);
                      Swal.fire('Revisa e intenta de nuevo', error.message, 'error')

                    }

                    resetForm();

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
                <Button leftIcon={<HiOutlineRefresh />}>Actualizar</Button>
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
              {tablesProjectData.map((row, index, arr) => {
                return (
                  <TablesProjectRow
                    logo={row.logo}
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

                    isLast={index === arr.length - 1 ? true : false}
                    key={index}
                  />
                );
              })}
            </Tbody>
          </Table>
        </CardBody>
      </Card>
    </Flex >
  );
}

export default Manual;
