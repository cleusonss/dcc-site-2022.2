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
    Button,
} from "@chakra-ui/react";
import { FaPen,FaTrashAlt } from "react-icons/fa";
import CardHeader from "../../components/_ui/CardHeader";
import { useRouter } from "next/router";
import styles from "./postList.module.css";

export default function postList() {

    const [postList, setPostList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [lastId, setLastId] = useState(0);
    const router = useRouter();
    const URL = 'http://localhost:4000';
    const postType = router.query.postType;

    useEffect(() => {
        if(postType === "news"){
            axios({
                method: 'get',
                url: URL+'/news'
            })
            .then(function (res) {
                console.log(res.data)
                setPostList(res.data);
                setLastId(res.data[res.data.length - 1].id + 1 );
                setLoading(false);
            })
            .catch(function (error) {
                console.log(error);
            });
        }
        else if(postType === "newsLinks") {
            axios({
                method: 'get',
                url: URL+'/newsLinks'
            })
            .then(function (res) {
                console.log(res.data)
                setPostList(res.data);
                setLastId(res.data[res.data.length - 1].id + 1 );
                setLoading(false);
            })
            .catch(function (error) {
                console.log(error);
            });
        }
        else{
            axios({
                method: 'get',
                url: URL+'/events'
            })
            .then(function (res) {
                console.log(res.data)
                setPostList(res.data);
                setLastId(res.data[res.data.length - 1].id + 1 );
                setLoading(false);
            })
            .catch(function (error) {
                console.log(error);
            });
        }
    }, [loading, postType]);

    function renderPosts(data, index){
        return(
            <tr key={index}>
                <td>{index + 1}</td>
                <td>{postType==="events" ? data.titulo : data.title}</td>
                <td className={styles.icon}><Icon
                    mx="2"
                    boxSize="4"
                    color="yellow.400"
                    as={FaPen}
                    onClick={() => router.push({pathname:"/postData/postData",
                        query: postType === "news" ? 
                        { isNewPost: false, id: data.id, alt: data.alt, title: data.title, content: data.content } 
                        :
                        postType === "newsLinks" 
                        ?
                        { isNewPost: false, id: data.id, link: data.link, title: data.title } 
                        :
                        { isNewPost: false, id: data.id, titulo: data.titulo, assunto: data.assunto, tipo: data.tipo, dia: data.dia, mes: data.mes, href: data.href } 
                        })
                    }

                /></td>
                <td className={styles.icon}><Icon
                    mx="2"
                    boxSize="4"
                    color="red"
                    as={FaTrashAlt}
                    onClick={() => deletePost(data.id)}
                /></td>
            </tr>
        );
    }

    function deletePost(id){
        if(postType === "news"){
            axios({
                method: 'delete',
                url: URL+'/news/'+id
            })
            .catch(function (error) {
                console.log(error);
            });
        }
        else if(postType === "newsLinks"){
            axios({
                method: 'delete',
                url: URL+'/newsLinks/'+id
            })
            .catch(function (error) {
                console.log(error);
            });
        }
        else if(postType === "events"){
            axios({
                method: 'delete',
                url: URL+'/events/'+id
            })
            .catch(function (error) {
                console.log(error);
            });
        }

        reloadPosts();
    }

    function reloadPosts() {
        setLoading(true);
    }

    return(
        <VStack>
            <CardHeader
                bgHead="lightgrey"
                bgBody="white"
                color="black"
                title={router.query.postType==="news"? "Noticias": router.query.postType==="newsLink" ? "Noticias Link" : "Eventos"}
                width="100%"
            >
                <div className={styles.boxScroll}>
                    <table className={styles.tableStripped}>
                        <thead>
                            <tr>
                                <th>Item</th>
                                <th>Title</th>
                                <th>Editar</th>
                                <th>Deletar</th>
                            </tr>
                        </thead>
            
                        <tbody className={styles.tableBody}>
                            {
                                postList.map(renderPosts)
                            }
                        </tbody>
                    </table>
                </div>
            </CardHeader>
            
            {
                <Button onClick={() => router.push({pathname:"/postData/postData", query: { isNewPost: true, postType: postType, lastId: lastId } })}>Adicionar Noticia</Button>
            }
        </VStack>
    );
}