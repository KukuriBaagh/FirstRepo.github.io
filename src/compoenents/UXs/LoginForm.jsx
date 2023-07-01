import React from "react"
import { Input } from "@chakra-ui/input"
import { Heading, VStack } from "@chakra-ui/layout"
import { FormControl, FormErrorMessage, FormLabel } from "@chakra-ui/form-control"
import { Button } from "@chakra-ui/button"
import { Field, Formik, useFormik } from "formik"
import * as Yup from "yup"

const LoginForm = () => {

  return (
    <>
      <Formik
        initialValues={{ username: "", password: "" }}
        validationSchema={Yup.object({
          username: Yup.string().required("Username required").min(2, "Username atleast 2 Characters"),
          password: Yup.string().required("Password is Required").min(6, "Password is too Short"),
        })}
        onSubmit={(values, actions) => {
          alert(JSON.stringify(values, null, 2))
          actions.resetForm()
        }}
      >
        {formik => (
          <VStack 
          as="form"
          mx="auto"
          w={{ base: "90%", md: 500 }}
          h="100vh"
          justifyContent="center"
          onSubmit={formik.handleSubmit}
          >
          <Heading>Sign Up</Heading>
  
          <FormControl isInvalid={formik.errors.username && formik.touched.username}>
              <FormLabel>Username</FormLabel>
              <Field
              as={Input}
               name="username"
              placeholder="enter username..."
              />
              <FormErrorMessage>{formik.errors.username}</FormErrorMessage>
          </FormControl>
  
          <FormControl isInvalid={formik.errors.password && formik.touched.password}>
              <FormLabel>Password</FormLabel>
              <Field
              as={Input}
              name="password"
              type="password"
              placeholder="enter password..."
              />
              <FormErrorMessage>{formik.errors.password}</FormErrorMessage>
          </FormControl>
  
          <Button type="submit" variant="outline" colorScheme="teal">
            Create Account
          </Button>
      </VStack>
        )}

      </Formik>
    </>
  )
}

export default LoginForm