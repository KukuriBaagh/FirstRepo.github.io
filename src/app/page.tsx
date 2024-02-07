import React from 'react';
// import './App.css';
// import {
//   Flex,
//   Heading,
//   IconButton,
//   Spacer,
//   VStack,
//   useColorMode,
// } from '@chakra-ui/react';
// import {
//   FaSun,
//   FaMoon,
//   FaInstagram,
//   FaGithub,
//   FaLinkedin,
// } from 'react-icons/fa';
// import Header from './components/Header';
// import Social from './components/Social';
// import Profile from './components/Profile';
// import MyBlog from './components/MyBlog';
// import ReduxComponent from './components/ReduxComponent';
// import image from './assets/IMG_20190118_145234.jpg';

const App = () => {
  // const { colorMode, toggleColorMode } = useColorMode();
  // const isDark = colorMode === 'dark';

  return (
    <>
      {/* <VStack p={5}>
        <Flex w='100%'>
          <Heading ml='8' size='md' fontWeight='semibold' color='cyan.400'>
            iamtheak
          </Heading>
          <Spacer></Spacer>
          <IconButton
            aria-label='dark'
            icon={<FaLinkedin />}
            isRound={true}
            onClick={toggleColorMode}
          ></IconButton>
          <IconButton
            aria-label='dark'
            ml={2}
            icon={<FaInstagram />}
            isRound={true}
            onClick={toggleColorMode}
          ></IconButton>
          <IconButton
            aria-label='dark'
            ml={2}
            icon={<FaGithub />}
            isRound={true}
            onClick={toggleColorMode}
          ></IconButton>
          <IconButton
            aria-label='dark'
            ml={8}
            icon={isDark ? <FaSun /> : <FaMoon />}
            isRound={true}
            onClick={toggleColorMode}
          ></IconButton>
        </Flex>
        <Header />
        <Social />
        <Profile />
        <MyBlog />
        <ReduxComponent />
      </VStack> */}
      <h1>My Portfolio NextJs App</h1>
    </>
  );
};

export default App;
