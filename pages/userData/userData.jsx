import { useState, useEffect } from "react";
import axios from 'axios';
import { ChevronRightIcon } from "@chakra-ui/icons";
import {
    Box,
    Flex,
    Heading,
    Icon,
    HStack,
    Text,
    VStack,
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbSeparator,
    Drawer,
    DrawerOverlay,
    DrawerContent,
    IconButton,
    useDisclosure,
    Input,
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Button,
} from "@chakra-ui/react";

import CardHeader from "../../components/_ui/CardHeader";
import styles from "./userData.module.css";



export default function UserData({newUser = true}) {

    const [isNewUser, SetIsNewUser] = useState(newUser);

    return(
        <Flex h="full" w="full" justifyContent="center" p={10}>
            <HStack w={{ base: "100%", sm: "60%" }}>
                <VStack>
                    <CardHeader
                        bgHead="lightgrey"
                        bgBody="white"
                        color="black"
                        title={isNewUser ? "New User": "Change user data"}
                        width="100%"
                    >
                        <div className={styles.form}>
                            <FormControl
                                errortext={"Name Invalido"}
                                p='4'
                                isRequired
                            >
                                <FormLabel>Name</FormLabel>
                                <Input type='text' name='name' placeholder='Name' />
                            </FormControl>

                            <FormControl
                                errortext={"Email Invalido"}
                                p='4'
                                isRequired
                            >
                                <FormLabel>Email</FormLabel>
                                <Input type='email' name='email' placeholder='Email' />
                            </FormControl>

                            <FormControl
                                errortext={"Password Invalido"}
                                p='4'
                                isRequired
                            >
                                <FormLabel>Password</FormLabel>
                                <Input type='text' name='password' placeholder='Password' />
                            </FormControl>

                            <Button>Confirmar</Button>
                        </div>
                    </CardHeader>
                </VStack>

            </HStack>
        </Flex>
    )
}