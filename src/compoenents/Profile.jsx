import {
  Flex,
  useMediaQuery,
  Box,
  Heading,
  Text,
  Icon,
} from "@chakra-ui/react";
import React from "react";
import { GiReceiveMoney, GiAnvilImpact } from "react-icons/gi";
import { DiWordpress } from "react-icons/di";

const Profile = () => {
  const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");

  return (
    <Flex
      direction={isNotSmallerScreen ? "row" : "column"}
      w="100%"
      maxWidth={{ base: "100vh", md: "130vh", lg: "130vh", xl: "130vh" }}
    >
      <Box alignSelf="center" px="32" py="16">
        <Heading fontWeight="extrabold" color="cyan.500" size="4xl">
          3+
        </Heading>
        <Text fontSize="2xl" color="gray.400">
          Years of Experience
        </Text>
      </Box>
      <Box alignSelf="center" px="32" py="16">
        <Text fontWeight="bold" fontSize="2xl">
          Full Stack Web Developer and Designer, Specialised in Project
          Deployment on Premise | Cloud
        </Text>
        <Flex direction={isNotSmallerScreen ? "row" : "column"} mt={8}>
          <Flex
            rounded="xl"
            direction="column"
            mt={4}
            bg="blue.400"
            h="30vh"
            w="30vh"
            justify="flex-end"
            _hover={{ bg: "red.900" }}
          >
            <Icon color="white" p="4" as={GiReceiveMoney} w="24" h="24" />
            <Text color="white" p="4" fontSize="xl">
              Expense Tracker App - MERN
            </Text>
          </Flex>

          <Flex
            rounded="xl"
            direction="column"
            mt={4}
            ml={isNotSmallerScreen ? 4 : 0}
            bg="gray.100"
            h="30vh"
            w="30vh"
            justify="flex-end"
            _hover={{ bg: "teal.400" }}
          >
            <Icon color="black" p="4" as={DiWordpress} w="24" h="24" />
            <Text color="black" p="4" fontSize="xl">
              WordPress Website
            </Text>
          </Flex>

          <Flex
            rounded="xl"
            direction="column"
            mt={4}
            ml={isNotSmallerScreen ? 4 : 0}
            bg="gray.100"
            h="30vh"
            w="30vh"
            justify="flex-end"
            _hover={{ bg: "green.400" }}
          >
            <Icon color="black" p="4" as={GiAnvilImpact} w="24" h="24" />
            <Text color="black" p="4" fontSize="xl">
              Coming Soon...
            </Text>
          </Flex>
        </Flex>
      </Box>
    </Flex>
  );
};

export default Profile;
