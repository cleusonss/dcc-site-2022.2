//npx json-server --watch ./mock/db.json --port 4000
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
import SideBar from "../../components/layout/Sidebar";
import CardHeader from "../../components/_ui/CardHeader";
import Square from "../../components/_ui/Square";
import { FaUserAlt, FaClipboardList, FaPen, FaChartBar } from "react-icons/fa";
import Dashboard from "../../components/sections/Dashboard/Dashboard";
import Users from "../../components/sections/Users/Users";
import Posts from "../Posts/Posts";

export default function adminDashboard() {

    const [navItemsAdmin, setNavItemsAdmin] = useState([]);
    const [option, setOption] = useState("Dashboard");
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

    function clickedFunc(value) {
        setOption(value);
    }

    return(
        <Flex h="full" w="full" justifyContent="center" p={10}>
            <HStack w={{ base: "100%", sm: "60%" }}>
                <SideBar display={{ base: "none", md: "unset" }} navitems={navItemsAdmin} title="Menu" clickedfunc={clickedFunc}/>
                <Box ml={{ base: 0, md: 60 }} transition=".3s ease" h="full">
                    <VStack>
                        <Box alignSelf="start" px={{ base: 1, md: 5 }}>
                        <Breadcrumb
                            spacing="8px"
                            separator={<ChevronRightIcon color="gray.500" />}
                            fontWeight="bold"
                            fontSize="smaller"
                            textAlign="justify"
                            color="gray.800"
                        >
                            <BreadcrumbItem>
                            <BreadcrumbLink href="/">
                                <HStack spacing={1}>
                                <AiOutlineHome fontSize="16" />
                                <Text>Home</Text>
                                </HStack>
                            </BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbItem>
                            <BreadcrumbLink href="#">DCC</BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbItem isCurrentPage>
                            <BreadcrumbLink href="#">Apresentação</BreadcrumbLink>
                            </BreadcrumbItem>
                        </Breadcrumb>
                        </Box>
                        {
                            option === "Dashboard"
                            ?
                            <Dashboard></Dashboard>
                            :
                            option === "Posts"
                            ?
                            <Posts></Posts>
                            :
                            option === "Users"
                            ?
                            <Users></Users>
                            :
                            <></>
                        }
                    </VStack>
                </Box>
            </HStack>
        </Flex>
    )
}