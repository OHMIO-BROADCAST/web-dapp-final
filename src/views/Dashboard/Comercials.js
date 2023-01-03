// Chakra imports
import {
    Box,
    Button,
    Flex,
    Grid,
    Progress,
    SimpleGrid,
    Stat,
    StatLabel,
    StatNumber,
    Table,
    Tbody,
    Td,
    Text,
    Th,
    Thead,
    Tr,
    useColorMode,
    useColorModeValue,
} from "@chakra-ui/react";
// Custom components
import React, { useEffect, useState } from "react";

import Card from "components/Card/Card.js";
import BarChart from "components/Charts/BarChart";
import LineChart from "components/Charts/LineChart";
import IconBox from "components/Icons/IconBox";
// Custom icons
import {
    CartIcon,
    DocumentIcon,
    GlobeIcon,
    WalletIcon,
} from "components/Icons/Icons.js";
// Variables
import {
    barChartData,
    barChartOptions,
    lineChartData,
    lineChartOptions,
} from "variables/charts";
import { pageVisits, socialTraffic } from "variables/general";

const styles = {
    title: {
        fontSize: "20px",
        fontWeight: "700",
    },
    text: {
        fontSize: "16px",
    },
    card: {
        boxShadow: "0 0.5rem 1.2rem rgb(189 197 209 / 20%)",
        border: "1px solid #e7eaf3",
        borderRadius: "0.5rem",
    },
    timeline: {
        marginBottom: "-45px",
    },
    cardoffline: {
        boxShadow: "0 0.5rem 1.2rem rgb(189 197 209 / 20%)",
        border: "1px solid #e7eaf3",
        borderRadius: "1rem",
        width: "450px",
        fontSize: "16px",
        fontWeight: "500",
    },
};

export default function Comercials() {
    // Chakra Color Mode
    const iconBlue = useColorModeValue("navy.500", "navy.500");
    const iconBoxInside = useColorModeValue("white", "white");
    const textColor = useColorModeValue("gray.700", "white");
    const tableRowColor = useColorModeValue("#F7FAFC", "navy.900");
    const borderColor = useColorModeValue("gray.200", "gray.600");
    const textTableColor = useColorModeValue("gray.500", "white");

    const { colorMode } = useColorMode();


    return (
        <Flex
            direction="column"
            pt={{ base: "120px", md: "75px" }}
            alignContent="center"
            alignItems="center"
        ><Card
            style={styles.cardoffline}

        >
                <div
                    style={{
                        width: "auto",
                        height: "300px",
                        justifyContent: 'center',
                        display: 'flex',
                        alignItems: 'center',
                        flexDirection: 'column'
                    }}
                >
                    <Text align={'center'} fontWeight={'bold'} fontSize={25}>Comercials | Coming Soon</Text>
                    <Text align={'center'} fontWeight={300}>We are working on this feature right now.</Text>
                </div>

            </Card>
        </Flex>
    );
}



