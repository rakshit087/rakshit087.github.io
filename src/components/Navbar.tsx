import { Flex, IconButton, Text } from "@chakra-ui/react";
import { SunIcon, HamburgerIcon } from "@chakra-ui/icons";

export const Navbar = () => {
  return (
    <Flex
      border={"solid 2px"}
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
      />
      <IconButton
        aria-label="Light Mode"
        bg={"none"}
        icon={<SunIcon />}
        rounded={"full"}
        size={"sm"}
      />
    </Flex>
  );
};
