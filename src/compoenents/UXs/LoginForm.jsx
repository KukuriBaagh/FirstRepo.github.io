import React from "react"
import { Input } from "@chakra-ui/input"
import { Heading, VStack } from "@chakra-ui/layout"
import { Button } from "@chakra-ui/button"
import { Field, Formik, useFormik } from "formik"
import * as Yup from "yup"
import TextField from "./TextField"

const LoginForm = () => {

  return (
    <>
      <Formik
        initialValues={{ username: "", password: "" }}
        validationSchema={Yup.object({
          username: Yup.string().required("Username required").min(2, "Username atleast 2 Characters"),
          password: Yup.string().required("Password is Required").min(6, "Password is too Short"),
          email: Yup.string().email("invalid email").required("required email")
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
          <TextField name="username" type="username" placeholder="enter username" />
          <TextField name="email" type="email" placeholder="enter email" />
          <TextField name="password" type="password" placeholder="enter password" />
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