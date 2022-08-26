import { Box, Flex, Text, useColorModeValue } from "@chakra-ui/react";
import { motion } from "framer-motion";

export const Intro = () => {
  return (
    <Flex
      id="intro"
      alignItems="center"
      height="100vh"
      justifyContent="center"
      flexDir="column"
    >
      <Box>
        <Text
          fontSize="lg"
          fontFamily="monospace"
          as={motion.p}
          animate={{ x: 0 }}
        >
          Hi, I am
        </Text>
        <Text
          fontSize="3xl"
          color={useColorModeValue("green.600", "green.300")}
        >
          Rakshit Arora.
        </Text>
      </Box>
    </Flex>
  );
};
