/* eslint-disable */

import { Card, Timeline, Typography } from "antd";
import React, { useMemo, useEffect, useState } from "react";

// Chakra imports
import { Flex } from "@chakra-ui/react";

const { Text } = Typography;

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

export default function QuickStart({ isServerInfo }) {
  return (
    <Flex
      direction="column"
      pt={{ base: "120px", md: "75px" }}
      alignContent="center"
      alignItems="center"
    >
      <Card style={styles.cardoffline}>
        <div
          style={{
            width: "auto",
            height: "300px",
            justifyContent: "center",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Text>Quickstart</Text>
        </div>
      </Card>
    </Flex>
  );
}
