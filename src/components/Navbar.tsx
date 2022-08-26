import { Flex, IconButton, Text } from "@chakra-ui/react";
import { useColorMode, useColorModeValue } from "@chakra-ui/react";
import { SunIcon, HamburgerIcon } from "@chakra-ui/icons";

export const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Flex
      border={"solid 2px"}
      borderColor={useColorModeValue("gray.400", "gray.600")}
      justifyContent={"space-between"}
      left={"50%"}
      my={6}
      position={"fixed"}
      px={4}
      py={2}
      rounded={"full"}
      transform="translate(-50%, 0)"
      width="85%"
      zIndex={1}
    >
      <IconButton
        aria-label="Light Mode"
        bg={"none"}
        icon={<HamburgerIcon />}
        rounded={"full"}
        size={"sm"}
        color={useColorModeValue("gray.600", "gray.400")}
      />
      <IconButton
        aria-label="Light Mode"
        bg={"none"}
        icon={<SunIcon />}
        rounded={"full"}
        size={"sm"}
        onClick={toggleColorMode}
        color={useColorModeValue("gray.600", "gray.400")}
      />
    </Flex>
  );
};
