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
import styles from "./postData.module.css";



export default function PostData() {

    const router = useRouter();
    const isNewPost = router.query.isNewPost;
    const postType = router.query.postType;
    const URL = 'http://localhost:4000';

   // isNewPost: true, postType: postType, lastId: lastId

    const [alt, setAlt] = useState(isNewPost === 'false' ? router.query.alt : '');
    const [title, setTitle] = useState(isNewPost === 'false' ? router.query.title : '');
    const [content, setContent] = useState(isNewPost === 'false' ? router.query.content : '');

    function SubmitForm() {
        if(isNewPost === 'false'){
            if(postType === "news")
            axios({
                method: 'put',
                url: URL+'/news/'+router.query.id,
                data: {
                    id: router.query.id,
                    img: "",
                    alt: alt,
                    title: title,
                    content: content,
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
                        title={isNewPost === 'true' ? "Novo post": "Mudar dados"}
                        width="100%"
                    >
                        <div className={styles.form}>
                            <FormControl
                                errortext={"titulo Invalido"}
                                p='4'
                                isRequired
                            >
                                <FormLabel>Title</FormLabel>
                                <Input type='text' name='title' value={title} onChange={(e)=>setTitle(e.target.value)} placeholder='Title' />
                            </FormControl>

                            <FormControl
                                errortext={"alt Invalido"}
                                p='4'
                                isRequired
                            >
                                <FormLabel>Alt</FormLabel>
                                <Input type='text' name='alt' value={alt} onChange={(e)=>setAlt(e.target.value)} placeholder='Alt' />
                            </FormControl>

                            <FormControl
                                errortext={"content Invalido"}
                                p='4'
                                isRequired
                            >
                                <FormLabel>Content</FormLabel>
                                <Input type='text' name='content' value={content} onChange={(e)=>setContent(e.target.value)} placeholder='Content' />
                            </FormControl>

                            <Button onClick={()=>SubmitForm()}>Confirmar</Button>
                        </div>
                    </CardHeader>
                </VStack>

            </HStack>
        </Flex>
    )
}