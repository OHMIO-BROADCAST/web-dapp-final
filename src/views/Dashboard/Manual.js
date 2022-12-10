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
                    fullName: '',
                    user: '',
                    email: '',
                    country: '',
                    phone: '',
                    country: '',
                    password: '',
                    passwordConfirmation: ''
                  }}
                  validationSchema={Yup.object({
                    user: Yup.string()
                      .min(6, 'Must be 6 characters or more')
                      .max(12, 'Must be 12 characters or less')
                      .required('Required')
                      .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field"),
                    fullName: Yup.string()
                      .min(10, 'Must be 10 characters or more')
                      .max(20, 'Must be 25 characters or less')
                      .required('Required')
                      .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field"),
                    email: Yup.string().email('Invalid email address')
                      .required('Required'),
                    phone: Yup.string()
                      .min(10, 'Must be 10 characters or more')
                      .max(15, 'Must be 15 characters or less')
                      .matches(/^[1-9]+[0-9]*$/, "Only valid phone numbers are allowed for this field")
                      .required('Required'),
                    country: Yup.string()
                      .required('Required')
                      .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field"),
                    password: Yup.string()
                      .required('Password is required')
                      .matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
                        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
                      ),
                    passwordConfirmation: Yup.string()
                      .oneOf([Yup.ref('password'), null], 'Passwords must match')
                  })}
                  onChange={(e) => { console.log(e) }}
                  onSubmit={async (values, { setSubmitting, resetForm }) => {
                    console.log('SUBMIT', values)

                    signalToSend.set("username", values.user);
                    signalToSend.set("password", values.password);
                    signalToSend.set("email", values.email);
                    signalToSend.set("phone", values.phone);
                    signalToSend.set("country", values.country);
                    signalToSend.set("fullName", values.fullName);

                    console.log('SUBMIT USER FINAL:', signalToSend);
                    ////*************************************** */
                    try {
                      const response = await signalToSend.signUp();
                      // Hooray! Let them use the app now.
                      console.log("REGISTER SUCCESSFUL", response)
                      setSubmitting(false);
                      Swal.fire({
                        title: 'Successful Register',
                        text: 'Please verify your email',
                        icon: 'success',
                        willClose: () => {
                          history.push('/signin')
                        }
                      }
                      )

                      /* try {
                        Moralis.User.requestEmailVerification(values.email)
      
                      } catch (error) {
                        setShowSnackBar(true);
                        setTypeSnackBar('error');
                        setDescriptionSnackBar('Error sennding email verification')
                      } */

                    } catch (error) {
                      // Show the error message somewhere and let the user try again.
                      const errorCode = error.code;
                      const errorMessage = error.message;
                      // ..
                      setSubmitting(false);
                      setShowSnackBar(true);
                      setTypeSnackBar('error');
                      setDescriptionSnackBar(errorMessage);
                      Swal.fire('Please check and try again', error.message, 'error')

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
                            id="form_fullname"
                            name="fullName"
                            onChange={handleChange}
                            value={values.fullName}
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
                            <ErrorMessage name="fullName" style={{ color: 'red' }} />
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
                            id="form_user"
                            name="user"
                            onChange={handleChange}
                            value={values.user}
                          />
                          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '1rem' }}>
                            <ErrorMessage name="user" />
                          </div>

                          <FormLabel ms='4px' fontSize='sm' fontWeight='bold'>
                            Tipo de Orden <FormLabel ms='4px' fontSize='sm' fontWeight='thin'>(Si es para Abrir o Cerrar)</FormLabel>
                          </FormLabel>
                          <Select
                            variant='auth'
                            fontSize='sm'
                            ms='4px'
                            type='email'
                            id="form_email"
                            placeholder='Seleccione un tipo de orden'
                            size='lg'
                            name="email"
                            onChange={handleChange}
                            value={values.email}
                            border={true}
                            borderWidth={1}
                          >
                            <option value='New'>New</option>
                            <option value='Close'>Close</option>
                          </Select>
                          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '1rem' }}>
                            <ErrorMessage name="email" style={{ paddingTop: '0' }} />
                          </div>


                          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '1rem' }}>
                            <ErrorMessage name="phone" style={{ paddingTop: '0' }} />
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
                            id="form_country"
                            name="country"
                            onChange={handleChange}
                            value={values.country}
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
                              color={"white"}>
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
