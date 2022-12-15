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
import CardHeader from "../../_ui/CardHeader";
import { useRouter } from "next/router";
import styles from "./Users.module.css";

export default function Users() {

    const [usersList, setUsersList] = useState([]);
    const router = useRouter();
    const URL = 'http://localhost:4000';

    useEffect(() => {
        axios({
            method: 'get',
            url: URL+'/users'
        })
        .then(function (res) {
            setUsersList(res.data);
        })
        .catch(function (error) {
            console.log(error);
        });
    }, [usersList]);

    function renderUsers(data, index){
        return(
            <tr key={index}>
                <td>{index + 1}</td>
                <td>{data.name}</td>
                <td>{data.email}</td>
                <td>{data.createdAt}</td>
                <td className={styles.icon}><Icon
                    mx="2"
                    boxSize="4"
                    color="yellow.400"
                    as={FaPen}
                /></td>
                <td className={styles.icon}><Icon
                    mx="2"
                    boxSize="4"
                    color="red"
                    as={FaTrashAlt}
                    onClick={() => deleteUser(data.id)}
                /></td>
            </tr>
        );
    }

    function deleteUser(id){
        axios({
            method: 'delete',
            url: URL+'/users/'+id
        })
        .catch(function (error) {
            console.log(error);
        });

        reloadUsers();
    }

    function reloadUsers() {
        axios({
            method: 'get',
            url: URL+'/users'
        })
        .then(function (res) {
            console.log(res.data);
            setUsersList(res.data);
        })
        .catch(function (error) {
            console.log(error);
        });
    }

    return(
        <VStack>
            <CardHeader
                bgHead="lightgrey"
                bgBody="white"
                color="black"
                title="All Users"
                width="100%"
            >
                <div className={styles.boxScroll}>
                    <table className={styles.tableStripped}>
                        <thead>
                            <tr>
                                <th>Item</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Joined</th>
                                <th>Editar</th>
                                <th>Deletar</th>
                            </tr>
                        </thead>
            
                        <tbody className={styles.tableBody}>
                            {
                                usersList.map(renderUsers)
                            }
                        </tbody>
                    </table>
                </div>
            </CardHeader>

            <Button onClick={() => router.push("/userData/userData")}>Adicionar Usuário</Button>
        </VStack>
    );
}