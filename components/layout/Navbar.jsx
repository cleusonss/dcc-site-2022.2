import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Box,
  Flex,
  useColorModeValue,
  VisuallyHidden,
  HStack,
  Button,
  useDisclosure,
  VStack,
  IconButton,
  CloseButton,
  Link,
  Text,
  Heading,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  Drawer,
  DrawerOverlay,
  DrawerContent,
} from "@chakra-ui/react";

import { useRouter } from "next/router";

import NextLink from "next/link";
import { AiOutlineMenu } from "react-icons/ai";
import Logo from "../_ui/Logo";
import NavbarMobile from "./NavbarMobile";
import { FiMenu } from "react-icons/fi";

export default function Navbar() {
  const router = useRouter();

  const bg = useColorModeValue("gray.50", "gray.800");
  const navbarMobile = useDisclosure();
  const integrations = useDisclosure();

  return (
    <Box
      as="header"
      bg={bg}
      w="full"
      px={{
        base: 2,
        sm: 4,
      }}
      py={4}
      shadow="md"
    >
      <Drawer
        isOpen={navbarMobile.isOpen}
        onClose={navbarMobile.onClose}
        placement="left"
      >
        <DrawerOverlay />
        <DrawerContent>
          <NavbarMobile w="full" borderRight="none" navm={navbarMobile} />
        </DrawerContent>
      </Drawer>

      <Flex
        alignItems="center"
        justifyContent="space-between"
        mx="auto"
        w={{ base: "100%", sm: "70%" }}
      >
        <Flex>
          <NextLink
            href="/"
            title="DCC Page"
            display="flex"
            alignItems="center"
            passHref
          >
            <Link>
              <Logo src="/images/logos/logo-dcc-01.png" w={40} />
            </Link>
          </NextLink>
        </Flex>
        <HStack display="flex" alignItems="center" spacing={1}>
          <HStack
            spacing={1}
            mr={1}
            color="brand.600"
            display={{
              base: "none",
              md: "inline-flex",
            }}
          >
            <Menu>
              <MenuButton
                as={Button}
                variant="ghost"
                rightIcon={<ChevronDownIcon />}
              >
                DCC
              </MenuButton>
              <MenuList fontSize="smaller">
                <MenuItem onClick={() => router.push("/dcc/apres")}>
                  Apresenta????o
                </MenuItem>
                <MenuItem>Chefia e Coordena????es</MenuItem>
                <MenuItem>Miss??o e Valores</MenuItem>
              </MenuList>
            </Menu>
            <Menu>
              <MenuButton
                as={Button}
                variant="ghost"
                rightIcon={<ChevronDownIcon />}
              >
                Ensino
              </MenuButton>
              <MenuList fontSize="smaller">
                <MenuItem>Bacharelado em Ci??ncia da Computa????o</MenuItem>
                <MenuItem>Licenciatura em Inform??tica</MenuItem>
              </MenuList>
            </Menu>
            <Menu>
              <MenuButton
                as={Button}
                variant="ghost"
                rightIcon={<ChevronDownIcon />}
              >
                Pesquisa
              </MenuButton>
              <MenuList fontSize="smaller">
                <MenuItem>Mestrato Profissional em Computa????o</MenuItem>
                <MenuItem>TCCs e Artigos</MenuItem>
                <MenuItem>Inicia????o Cient??fica</MenuItem>
              </MenuList>
            </Menu>
            <Menu>
              <MenuButton
                as={Button}
                variant="ghost"
                rightIcon={<ChevronDownIcon />}
              >
                Extens??o
              </MenuButton>
              <MenuList fontSize="smaller">
                <MenuItem>Projetos</MenuItem>
                <MenuItem>Programas UFRR</MenuItem>
              </MenuList>
            </Menu>
            <Menu>
              <MenuButton
                as={Button}
                variant="ghost"
                rightIcon={<ChevronDownIcon />}
              >
                Pessoas
              </MenuButton>
              <MenuList fontSize="smaller">
                <MenuItem>Professores</MenuItem>
                <MenuItem>Alunos</MenuItem>
                <MenuItem>Ex-alunos</MenuItem>
              </MenuList>
            </Menu>
          </HStack>
          <Box
            display={{
              base: "inline-flex",
              md: "none",
            }}
          >
            <IconButton
              aria-label="Menu"
              display={{ base: "inline-flex", md: "none" }}
              onClick={navbarMobile.onOpen}
              icon={<FiMenu />}
              size="lg"
            />
          </Box>
        </HStack>
        <Flex>
          <Button
            onClick={() => router.push("/adminDashboard/adminDashboard")}
            bg="brand.600"
            color="white"
            size="xs"
            _hover={{ bg: "brand.800" }}
            _active={{
              bg: "brand.800",
              transform: "scale(0.98)",
              borderColor: "brand.800",
            }}
          >
            DCC Admin
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
}
