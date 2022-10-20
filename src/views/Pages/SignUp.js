import React, { useState } from "react";
// Chakra imports
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  HStack,
  Icon,
  Input,
  Link,
  Switch,
  Text,
  useColorModeValue,
  LightMode,
} from "@chakra-ui/react";
// Assets
import BgSignUp from "assets/img/BgSignUp.png";
import { FaGoogle } from "react-icons/fa";

import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import './SignInAnimation.css';

import {
  Backdrop,
  CircularProgress,
  Snackbar,
} from '@material-ui/core';
import { useMoralis, useMoralisCloudFunction } from "react-moralis";
import Swal from "sweetalert2";
import { NavLink } from "react-router-dom";


function SignUp() {
  const bgForm = useColorModeValue("white", "navy.800");
  const titleColor = useColorModeValue("gray.700", "navy.500");
  const textColor = useColorModeValue("gray.700", "white");
  const colorIcons = useColorModeValue("gray.700", "white");
  const bgIcons = useColorModeValue("trasnparent", "navy.700");
  const bgIconsHover = useColorModeValue("gray.50", "whiteAlpha.100");

  const [showSnackBar, setShowSnackBar] = useState(false)
  const [typeSnackBar, setTypeSnackBar] = useState("success")
  const [descriptionSnackBar, setDescriptionSnackBar] = useState("")

  const { login, isAuthenticated, authenticate, Moralis, signup } = useMoralis();

  const userToRegister = new Moralis.User();

  /*  const {
     fetch: callEmailCloudFunction,
     data,
     error,
     isLoading,
   } = useMoralisCloudFunction(
     "sendWelcomeEmail",
     {
       email: email,
       name: username,
     },
     { autoFetch: false }
   );
  */
  async function sendEmailVerification(userCredential, resetForm) {
    userCredential.user.sendEmailVerification()
      .then(() => {
        setShowSnackBar(true);
        setTypeSnackBar('success');
        setDescriptionSnackBar('Email verification sended');
        resetForm()
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
        setShowSnackBar(true);
        setTypeSnackBar('error');
        setDescriptionSnackBar(errorMessage);
      });
  }

  function toggleVisiblePassword() {
    var x = document.getElementById("passwordInput");
    var x2 = document.getElementById("passwordConfirmationInput");

    if (x.type === "password" || x2.type === "password") {
      x.type = "text";
      x2.type = "text";
    } else {
      x.type = "password";
      x2.type = "password";
    }
  }

  return (
    <Flex
      direction='column'
      alignSelf='center'
      justifySelf='center'
      overflow='hidden'>
      <Box
        position='absolute'
        minH={{ base: "70vh", md: "50vh" }}
        maxH={{ base: "70vh", md: "50vh" }}
        w={{ md: "calc(100vw - 50px)" }}
        maxW={{ md: "calc(100vw - 50px)" }}
        left='0'
        right='0'
        bgRepeat='no-repeat'
        overflow='hidden'
        zIndex='-1'
        top='0'
        bgSize='cover'
        mx={{ md: "auto" }}
        mt={{ md: "14px" }}
        borderRadius={{ base: "0px", md: "20px" }}>
        <Box w='100vw' h='100vh' opacity='1' className="bodyAnimation"
        ></Box>
      </Box>
      <Flex
        direction='column'
        textAlign='center'
        justifyContent='center'
        align='center'
        mt='125px'
        mb='30px'>
        <Text fontSize='4xl' color='white' fontWeight='bold'>
          Welcome!
        </Text>
        <Text
          fontSize='md'
          color='white'
          fontWeight='bold'
          mt='10px'
          mb='26px'
          w={{ base: "90%", sm: "60%", lg: "40%", xl: "333px" }}>
          Create new TIPS account. Please use your <text style={{ textDecoration: 'underline' }}>Broker</text> email, this is very important in order to verify your identity.
        </Text>
      </Flex>
      <Flex alignItems='center' justifyContent='center' mb='60px' mt='20px'>
        <Flex
          direction='column'
          w='445px'
          background='transparent'
          borderRadius='15px'
          p='40px'
          mx={{ base: "100px" }}
          bg={bgForm}
          boxShadow={useColorModeValue(
            "0px 5px 14px rgba(0, 0, 0, 0.05)",
            "unset"
          )}>
          <Text
            fontSize='xl'
            color={textColor}
            fontWeight='bold'
            textAlign='center'
            mb='22px'>
            Register With
          </Text>
          {/* <HStack spacing='15px' justify='center' mb='22px'>

            <Flex
              justify='center'
              align='center'
              w='75px'
              h='75px'
              borderRadius='8px'
              border={useColorModeValue("1px solid", "0px")}
              borderColor='gray.200'
              cursor='pointer'
              transition='all .25s ease'
              bg={bgIcons}
              _hover={{ bg: bgIconsHover }}>
              <Link href='#'>
                <Icon
                  as={FaGoogle}
                  color={colorIcons}
                  w='30px'
                  h='30px'
                  _hover={{ filter: "brightness(120%)" }}
                />
              </Link>
            </Flex>
          </HStack> 
          <Text
            fontSize='lg'
            color='gray.400'
            fontWeight='bold'
            textAlign='center'
            mb='22px'>
            or
          </Text>
*/}

          <Formik
            initialValues={{
              fullName: '',
              user: '',
              email: '',
              country: '',
              cellphone: '',
              password: '',
              passwordConfirmation: ''
            }}
            validationSchema={Yup.object({
              user: Yup.string()
                .min(6, 'Must be 6 characters or less')
                .required('Required')
                .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field"),
              fullName: Yup.string()
                .min(10, 'Must be 10 characters or less')
                .required('Required')
                .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field"),
              email: Yup.string().email('Invalid email address')
                .required('Required'),
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

              userToRegister.set("username", values.user);
              userToRegister.set("password", values.password);
              userToRegister.set("email", values.email);
              userToRegister.set("fullName", values.fullName);

              console.log('SUBMIT USER FINAL:', userToRegister);
              ////*************************************** */
              try {
                const response = await userToRegister.signUp();
                // Hooray! Let them use the app now.
                console.log("REGISTER SUCCESSFUL", response)
                setSubmitting(false);
                Swal.fire('Successful Register', 'Please verify your email', 'success')

                try {
                  Moralis.User.requestEmailVerification(values.email)

                } catch (error) {
                  setShowSnackBar(true);
                  setTypeSnackBar('error');
                  setDescriptionSnackBar('Error sennding email verification')
                }

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

              /*  signup(values.user, values.password, values.email)
                 .then((response) => {
                   console.log(response.toJSON())
                   console.log("REGISTER SUCCESSFUL", response)
                   setSubmitting(false);
                   Swal.fire('Successful Register', response, 'success')
                   resetForm();
                 })
                 .catch((error) => {
                   console.log(error)
                   // Show the error message somewhere and let the user try again.
                   const errorCode = error.code;
                   const errorMessage = error.message;
                   // ..
                   setSubmitting(false);
                   setShowSnackBar(true);
                   setTypeSnackBar('error');
                   setDescriptionSnackBar(errorMessage);
                   Swal.fire('Please check and try again', error.message, 'error')
                 }); */

              /* signup(
                values.email,
                values.password
              ).then((userCredential) => {
                // Signed in
                const user = userCredential.user;
          // ...
          console.log(userCredential);

          setSubmitting(false);

          if (userCredential != null && userCredential.user) {
                  const isverified = userCredential.user.emailVerified;
          if (isverified) {
            console.log('user', 'user is verified');
                  } else {
            console.log('user', 'user is NOT verified');
          try {
            sendEmailVerification(userCredential)

          } catch (error) {
            setShowSnackBar(true);
          setTypeSnackBar('error');
          setDescriptionSnackBar('Error sennding email verification')
                    }

                  }
                }
              })
                .catch((error) => {
                  const errorCode = error.code;
          const errorMessage = error.message;
          // ..
          setSubmitting(false);
          setShowSnackBar(true);
          setTypeSnackBar('error');
          alert(errorCode)
          setDescriptionSnackBar(errorMessage);

                })*/
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
                      Full Name
                    </FormLabel>
                    <Input
                      variant='auth'
                      fontSize='sm'
                      ms='4px'
                      type='text'
                      placeholder='Your full name'
                      size='lg'
                      name="fullName"
                      onChange={handleChange}
                      value={values.fullName}
                    />
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '1rem' }}>
                      <ErrorMessage name="fullName" style={{ color: 'red' }} />
                    </div>

                    <FormLabel ms='4px' fontSize='sm' fontWeight='bold'>
                      User
                    </FormLabel>
                    <Input
                      variant='auth'
                      fontSize='sm'
                      ms='4px'
                      type='text'
                      placeholder='Your user nickname. Ej: Jack'
                      size='lg'
                      name="user"
                      onChange={handleChange}
                      value={values.user}
                    />
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '1rem' }}>
                      <ErrorMessage name="user" />
                    </div>

                    <FormLabel ms='4px' fontSize='sm' fontWeight='bold'>
                      Email
                    </FormLabel>
                    <Input
                      variant='auth'
                      fontSize='sm'
                      ms='4px'
                      type='email'
                      placeholder='Your email address'
                      size='lg'
                      name="email"
                      onChange={handleChange}
                      value={values.email}
                    />
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '1rem' }}>
                      <ErrorMessage name="email" style={{ paddingTop: '0' }} />
                    </div>

                    <FormLabel ms='4px' fontSize='sm' fontWeight='bold'>
                      Country
                    </FormLabel>
                    <Input
                      variant='auth'
                      fontSize='sm'
                      ms='4px'
                      type='text'
                      placeholder='Your country'
                      size='lg'
                      name="country"
                      onChange={handleChange}
                      value={values.country}
                    />
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '1rem' }}>
                      <ErrorMessage name="country" style={{ paddingTop: '0' }} />
                    </div>

                    <FormLabel ms='4px' fontSize='sm' fontWeight='bold'>
                      Cellphone
                    </FormLabel>
                    <Input
                      variant='auth'
                      fontSize='sm'
                      ms='4px'
                      type='text'
                      placeholder='Your '
                      size='lg'
                      name="country"
                      onChange={handleChange}
                      value={values.country}
                    />
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '1rem' }}>
                      <ErrorMessage name="country" style={{ paddingTop: '0' }} />
                    </div>


                    <FormControl display='flex' alignItems='center' mb={'1rem'} justifyContent='center'>
                      <Switch
                        id='remember-login'
                        colorScheme='navy'
                        me='10px'
                        name="togglePassword"
                        type="checkbox"
                        onChange={() => toggleVisiblePassword()}
                      />
                      <FormLabel htmlFor='remember-login' fontWeight='bold' alignSelf='center' justifySelf={'center'}>
                        Show Password
                      </FormLabel>
                    </FormControl>

                    <FormLabel ms='4px' fontSize='sm' fontWeight='bold'>
                      Password
                    </FormLabel>
                    <Input
                      variant='auth'
                      fontSize='sm'
                      ms='4px'
                      type='password'
                      placeholder='Your password'
                      size='lg'
                      name="password"
                      id="passwordInput"
                      onChange={handleChange}
                      value={values.password}
                    />
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center', marginBottom: '1rem' }} >
                      <ErrorMessage name="password" />
                    </div>

                    <FormLabel ms='4px' fontSize='sm' fontWeight='bold'>
                      Confirm Password
                    </FormLabel>
                    <Input
                      variant='auth'
                      fontSize='sm'
                      ms='4px'
                      type='password'
                      placeholder='Your password'
                      size='lg'
                      name="passwordConfirmation"
                      onChange={handleChange}
                      id="passwordConfirmationInput"
                      value={values.passwordConfirmation}
                    />
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '1rem' }}>
                      <ErrorMessage name="passwordConfirmation" />
                    </div>

                    <Button
                      fontSize='10px'
                      variant='dark'
                      fontWeight='bold'
                      w='100%'
                      h='45'
                      disabled={isSubmitting}
                      onClick={handleSubmit}>
                      SIGN UP
                    </Button>
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



          <Flex
            flexDirection='column'
            justifyContent='center'
            alignItems='center'
            maxW='100%'
            mt='0px'>
            <Text color={textColor} fontWeight='medium'>
              Already have an account?
              <NavLink
                color={titleColor}
                to="/auth/signin"
                as='span'
                ms='5px'
                href='#'
                fontWeight='bold'>
                <text style={{ textDecoration: 'underline', fontWeight: 'bold', marginLeft: '1rem' }}>Sign In</text>

              </NavLink>
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </Flex >
  );
}

export default SignUp;
