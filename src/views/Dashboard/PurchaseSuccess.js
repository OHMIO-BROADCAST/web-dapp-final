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
import * as queries from "../../graphql/queries.js";
import * as mutations from "../../graphql/mutations";

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
import Swal from "sweetalert2";
import { API, graphqlOperation, Auth } from "aws-amplify";

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

export default function PurchaseSuccess() {
    // Chakra Color Mode
    const iconBlue = useColorModeValue("navy.500", "navy.500");
    const iconBoxInside = useColorModeValue("white", "white");
    const textColor = useColorModeValue("gray.700", "white");
    const tableRowColor = useColorModeValue("#F7FAFC", "navy.900");
    const borderColor = useColorModeValue("gray.200", "gray.600");
    const textTableColor = useColorModeValue("gray.500", "white");

    const { colorMode } = useColorMode();

    const [user, setuser] = useState()


    async function updatePaymentStatus(ID) {
        console.log("updating user with ID", ID)
        let userDetailstoUpdate = {
            id: ID,
            isPaymentProcessing: true
        }
        const updateUserPaymentProcessing = await API.graphql(
            { query: mutations.updateUser, variables: { input: userDetailstoUpdate } }
        ).then(data => {
            console.log("Success updating payment status", data)
        }).catch(error => {
            console.log("Failed updating payment status", error)
        });
    }

    useEffect(() => {
        Swal.fire({
            title: 'The Payment is Proccessing',
            icon: 'success'
        })
        Auth.currentAuthenticatedUser().then((user) => {
            console.log("PURCHASE", user);
            setuser(user);
            if (user.attributes.sub != null) {
                updatePaymentStatus(user.attributes.sub);
            }
        });

        return () => {
            null
        }
    }, [])


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
                    <Text align={'center'} fontWeight={'bold'} fontSize={25}>Thank you for your Purchase!</Text>
                    <Text align={'center'} fontWeight={300}>We are proccessing the payment and verifying, please check again in a moment or contact Support if have any trouble.</Text>
                </div>

            </Card>
        </Flex>
    );
}



