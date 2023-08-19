import React from "react";
import "./App.css";
import {
  Flex,
  Heading,
  IconButton,
  Spacer,
  VStack,
  useColorMode,
} from "@chakra-ui/react";
import {
  FaSun,
  FaMoon,
  FaInstagram,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import Header from "./compoenents/Header";
import Social from "./compoenents/Social";
import Profile from "./compoenents/Profile";
import MyBlog from "./compoenents/MyBlog";

const App = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";

  return (
    <>
      <VStack p={5}>
        <Flex w="100%">
          <Heading ml="8" size="md" fontWeight="semibold" color="cyan.400">
            iamtheak
          </Heading>
          <Spacer></Spacer>
          <IconButton
            icon={<FaLinkedin />}
            isRound="true"
            onClick={toggleColorMode}
          ></IconButton>
          <IconButton
            ml={2}
            icon={<FaInstagram />}
            isRound="true"
            onClick={toggleColorMode}
          ></IconButton>
          <IconButton
            ml={2}
            icon={<FaGithub />}
            isRound="true"
            onClick={toggleColorMode}
          ></IconButton>
          <IconButton
            ml={8}
            icon={isDark ? <FaSun /> : <FaMoon />}
            isRound="true"
            onClick={toggleColorMode}
          ></IconButton>
        </Flex>
        <Header />
        <Social />
        <Profile />
        <MyBlog />
      </VStack>
    </>
  );
};

export default App;
