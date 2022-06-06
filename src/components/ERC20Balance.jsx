import { useMoralis, useERC20Balances } from "react-moralis";
import { Skeleton, Table } from "antd";
import { getEllipsisTxt } from "../helpers/formatters";
// Chakra imports
import {
  Flex,
} from "@chakra-ui/react";
import Card from "../components/Card/Card.js";
import Address from "./Address/Address";

function ERC20Balance(props) {
  const { data: assets } = useERC20Balances(props);
  const { Moralis } = useMoralis();

  const columns = [
    {
      title: "",
      dataIndex: "logo",
      key: "logo",
      render: (logo) => (
        <img
          src={logo || "https://etherscan.io/images/main/empty-token.png"}
          alt="nologo"
          width="28px"
          height="28px"
        />
      ),
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (name) => name,
    },
    {
      title: "Symbol",
      dataIndex: "symbol",
      key: "symbol",
      render: (symbol) => symbol,
    },
    {
      title: "Balance",
      dataIndex: "balance",
      key: "balance",
      render: (value, item) =>
        parseFloat(Moralis?.Units?.FromWei(value, item.decimals)).toFixed(6),
    },
    {
      title: "Address",
      dataIndex: "token_address",
      key: "token_address",
      render: (address) => {
        // getEllipsisTxt(address, 5);
        return <Address address={getEllipsisTxt(address, 5)} copyable={true} />
      },
    },
  ];

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
      width: "auto",
      fontSize: "16px",
      fontWeight: "500",
    },
  };

  return (
    <Flex
      direction="column"
      pt={{ base: "120px", md: "75px" }}
      alignContent="center"
      alignItems="center"
    >
      <Card
        style={styles.card}
        title={
          <div style={styles.header}>
            <h1>💰Token Balances</h1>

          </div>
        }
      >
        <div style={{ width: "65vw", padding: "15px" }}>
          <Skeleton loading={!assets}>
            <Table
              dataSource={assets}
              columns={columns}
              rowKey={(record) => {
                return record.token_address;
              }}
            />
          </Skeleton>
        </div>
      </Card>
    </Flex>
  );
}
export default ERC20Balance;
