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
import { useRouter } from "next/router";
import CardHeader from "../../components/_ui/CardHeader";
import styles from "./userData.module.css";



export default function UserData() {

    const router = useRouter();
    const isNewUser = router.query.isNewUser;
    const URL = 'http://localhost:4000';

    const [name, setName] = useState(isNewUser === 'false' ? router.query.name : '');
    const [email, setEmail] = useState(isNewUser === 'false' ? router.query.email : '');
    const [password, setPassword] = useState(isNewUser === 'false' ? router.query.password : '');

    function SubmitForm() {
        if(isNewUser === 'false'){
            axios({
                method: 'put',
                url: URL+'/users/'+router.query.id,
                data: {
                    id: router.query.id,
                    name: name,
                    email: email,
                    password: password,
                    createdAt: router.query.createdAt
                }
            })
            .catch(function (error) {
                console.log(error);
            });
        }
        else {
            const currentDate = new Date();
            const month = currentDate.getMonth()+1;
            axios({
                method: 'post',
                url: URL+'/users',
                data: {
                    id: router.query.lastId,
                    name: name,
                    email: email,
                    password: password,
                    createdAt: currentDate.getDate()+"/"+month+"/"+currentDate.getFullYear()
                }
            })
            .catch(function (error) {
                console.log(error);
            });
        }
        router.push("/adminDashboard/adminDashboard");
    }

    return(
        <Flex h="full" w="full" justifyContent="center" p={10}>
            <HStack w={{ base: "100%", sm: "60%" }}>
                <VStack>
                    <CardHeader
                        bgHead="lightgrey"
                        bgBody="white"
                        color="black"
                        title={isNewUser === 'true' ? "New User": "Change user data"}
                        width="100%"
                    >
                        <div className={styles.form}>
                            <FormControl
                                errortext={"Name Invalido"}
                                p='4'
                                isRequired
                            >
                                <FormLabel>Name</FormLabel>
                                <Input type='text' name='name' value={name} onChange={(e)=>setName(e.target.value)} placeholder='Name' />
                            </FormControl>

                            <FormControl
                                errortext={"Email Invalido"}
                                p='4'
                                isRequired
                            >
                                <FormLabel>Email</FormLabel>
                                <Input type='email' name='email' value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='Email' />
                            </FormControl>

                            <FormControl
                                errortext={"Password Invalido"}
                                p='4'
                                isRequired
                            >
                                <FormLabel>Password</FormLabel>
                                <Input type='text' name='password' value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='Password' />
                            </FormControl>

                            <Button onClick={()=>SubmitForm()}>Confirmar</Button>
                        </div>
                    </CardHeader>
                </VStack>

            </HStack>
        </Flex>
    )
}