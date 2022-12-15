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
} from "@chakra-ui/react";

import { AiOutlineHome } from "react-icons/ai";
import SideBar from "../../layout/Sidebar";
import CardHeader from "../../_ui/CardHeader";
import Square from "../../_ui/Square";
import { FaUserAlt, FaClipboardList, FaPen, FaChartBar } from "react-icons/fa";
import styles from "./Dashboard.module.css";

export default function Dashboard() {

    const [navItemsAdmin, setNavItemsAdmin] = useState([]);
    const URL = 'http://localhost:4000';

    useEffect(() => {
        axios({
            method: 'get',
            url: URL+'/navItemsAdmin'
        })
        .then(function (res) {
            setNavItemsAdmin(res.data);
        })
        .catch(function (error) {
            console.log(error);
        });
    }, []);

    return(
        <VStack>
            <CardHeader
                bgHead="brand.700"
                bgBody="white"
                color="white"
                title="Website Overview"
                >
                
                <div className={styles.squaresRow}>

                <div className={styles.square}>
                        <Square
                            className={styles.square}
                            bgBody="lightgrey"
                            color="white"
                        >
                            <div className={styles.squareTitle}>
                                <Icon
                                    mx="4"
                                    boxSize="8"
                                    _groupHover={{
                                    color: "brand.400",
                                    }}
                                    as={FaUserAlt}
                                />
                                <h2>203</h2>
                            </div>
                            <div className={styles.squareSubTitle}>
                                <span>Users</span>
                            </div>
                        </Square>
                    </div>
                    
                    <div className={styles.square}>
                        <Square
                            className={styles.square}
                            bgBody="lightgrey"
                            color="white"
                        >
                            <div className={styles.squareTitle}>
                                <Icon
                                    mx="4"
                                    boxSize="8"
                                    _groupHover={{
                                    color: "brand.400",
                                    }}
                                    as={FaClipboardList}
                                />
                                <h2>12</h2>
                            </div>
                            <div className={styles.squareSubTitle}>
                                <span>Pages</span>
                            </div>
                        </Square>
                    </div>

                    <div className={styles.square}>
                        <Square
                            className={styles.square}
                            bgBody="lightgrey"
                            color="white"
                        >
                            <div className={styles.squareTitle}>
                                <Icon
                                    mx="4"
                                    boxSize="8"
                                    _groupHover={{
                                    color: "brand.400",
                                    }}
                                    as={FaPen}
                                />
                                <h2>33</h2>
                            </div>
                            <div className={styles.squareSubTitle}>
                                <span>Posts</span>
                            </div>
                        </Square>
                    </div>

                    <div className={styles.square}>
                        <Square
                            className={styles.square}
                            bgBody="lightgrey"
                            color="white"
                        >
                            <div className={styles.squareTitle}>
                                <Icon
                                    mx="4"
                                    boxSize="8"
                                    _groupHover={{
                                    color: "brand.400",
                                    }}
                                    as={FaChartBar}
                                />
                                <h2>12,334</h2>
                            </div>
                            <div className={styles.squareSubTitle}>
                                <span>Visitors</span>
                            </div>
                        </Square>
                    </div>

            </div>
                
            </CardHeader>

            <CardHeader
                bgHead="lightgrey"
                bgBody="white"
                color="black"
                title="Latest Users"
                width="100%"
            >
                <table className={styles.tableStripped}>
                    <thead>
                        <tr>
                            <th>Item</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Joined</th>
                        </tr>
                    </thead>
        
                    <tbody className={styles.tableBody}>
                        <tr>
                            <td>1</td>
                            <td>Rohit</td>
                            <td>Rohit@email.com</td>
                            <td>Dec 12, 2022</td>
                        </tr>
        
                        <tr>
                            <td>2</td>
                            <td>Virat</td>
                            <td>Virat@email.com</td>
                            <td>Dec 12, 2022</td>
                        </tr>
        
                        <tr>
                            <td>3</td>
                            <td>Rahul</td>
                            <td>Rahul@email.com</td>
                            <td>Dec 12, 2022</td>
                        </tr>
        
                        <tr>
                            <td>4</td>
                            <td>Rishabh</td>
                            <td>Rishabh@email.com</td>
                            <td>Dec 12, 2022</td>
                        </tr>
                    </tbody>
                </table>
            </CardHeader>
        </VStack>
    )
}