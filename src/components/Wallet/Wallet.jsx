import Transfer from "./components/Transfer";
import NativeBalance from "../NativeBalance";
import Address from "../Address/Address";
import Blockie from "../Blockie";

// Chakra imports
import { Flex } from "@chakra-ui/react";
// Custom components
import Card from "../../components/Card/Card.js";

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

function Wallet() {
  return (
    <Flex
      direction="column"
      pt={{ base: "120px", md: "75px" }}
      alignContent="center"
      alignItems="center"
    >
      <Card
        style={styles.card}
        title={<div style={styles.header}>Download</div>}
      ></Card>
    </Flex>
  );
}

export default Wallet;
