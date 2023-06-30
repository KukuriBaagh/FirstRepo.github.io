
const LoginForm = () => {
  return (
    <VStack 
        as="form"
        mx="auto"
        w={{ base: "90%", md: 500 }}
        h="100vh"
        justifyContent="center"
        >
        <Heading>Sign Up</Heading>
        <FormControl>
            <FormLabel>Username</FormLabel>
            <Input name="username" placeholder="enter username..." />
        </FormControl>
        <FormControl>
            <FormLabel>Password</FormLabel>
            <Input name="password" placeholder="enter password..." />
        </FormControl>
    </VStack>
  )
}

export default LoginForm
