import { Button } from "@chakra-ui/react";
import { useState, useEffect } from "react";
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
import CardHeader from "../../components/_ui/CardHeader";
import { useRouter } from "next/router";
import styles from "./Posts.module.css";

export default function Posts() {

    const router = useRouter();

    return(
        <VStack>
            <CardHeader
                bgHead="lightgrey"
                bgBody="white"
                color="black"
                title="Posts"
                width="100%"
            >
                <div className={styles.buttonsBox}>
                    <div className={styles.button}>
                        <Button onClick={() => router.push({pathname:"/postList/postList", query: { postType: "news" } })}>Noticias</Button>
                    </div>
                    <div className={styles.button}>
                        <Button onClick={() => router.push({pathname:"/postList/postList", query: { postType: "newsLinks" } })}>Noticias Link</Button>
                    </div>
                    <div className={styles.button}>
                        <Button onClick={() => router.push({pathname:"/postList/postList", query: { postType: "events" } })}>Eventos</Button>
                    </div>
                </div>
            </CardHeader>
        </VStack>
    );
}