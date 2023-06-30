import React from 'react'
import ReactDOM from 'react-dom/client'
import { ChakraProvider } from '@chakra-ui/react'

function Navbar(){
    return (
        <ChakraProvider>
        <h1>Navbar Chakra UI</h1>
        </ChakraProvider>
    )
}

export default Navbar