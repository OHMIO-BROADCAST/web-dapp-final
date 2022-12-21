import { useState, useEffect } from 'react';
import OnramperWidget from "@onramper/widget";


// Chakra imports
import {
    Box,
    Flex, Text
} from "@chakra-ui/react";
// Custom components
import Card from "../Card/Card.js";
import { Button } from "antd";

const styles = {
    title: {
        fontSize: "30px",
        fontWeight: "600",
    },
    header: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "5px",
    },
    card: {
        boxShadow: "0 0.5rem 1.2rem rgb(189 197 209 / 20%)",
        border: "1px solid #e7eaf3",
        borderRadius: "1rem",
        width: "450px",
        fontSize: "16px",
        fontWeight: "500",
    },
};

import DashboardTableRow from 'components/Tables/DashboardTableRow'
import ReferLink from 'components/ReferLink/ReferLink';

function Distributor() {

    return (
        <Box flexDirection={"column"}>
            Distributors
        </Box>
    )
}

export default Distributor