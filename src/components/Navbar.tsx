import { Flex, IconButton, Text, useDisclosure } from "@chakra-ui/react";
import { useColorMode, useColorModeValue } from "@chakra-ui/react";
import { MoonIcon, SunIcon, HamburgerIcon } from "@chakra-ui/icons";

interface props {
  isOpen: boolean;
  onClose: () => void;
  onOpen: () => void;
}

export const Navbar = ({ isOpen, onClose, onOpen }: props) => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <>
      <Flex
        border={"solid 2px"}
        borderColor={useColorModeValue("gray.400", "gray.600")}
        justifyContent={"space-between"}
        left={"50%"}
        my={6}
        position={"fixed"}
        px={4}
        py={1}
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
          color={useColorModeValue("gray.600", "gray.400")}
          onClick={() => {
            isOpen ? onClose() : onOpen();
          }}
        />
        <IconButton
          aria-label="Light Mode"
          bg={"none"}
          icon={colorMode == "dark" ? <MoonIcon /> : <SunIcon />}
          rounded={"full"}
          onClick={toggleColorMode}
          color={useColorModeValue("gray.600", "gray.400")}
        />
      </Flex>
    </>
  );
};
