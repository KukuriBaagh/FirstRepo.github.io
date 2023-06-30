import React from 'react';
import Navbar from './compoenents/UXs/Navbar';
import LoginForm from './compoenents/UXs/LoginForm';
import { ChakraProvider } from '@chakra-ui/react';

function App(){
    return (
        <>
        <ChakraProvider>
        < Navbar />
        <LoginForm />
        </ChakraProvider>
        </>
    )
}


export default App;
