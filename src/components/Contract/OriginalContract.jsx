/* eslint-disable */

import { Card, Form, notification } from "antd";
import { useMemo, useState, useEffect } from "react";
import Address from "components/Address/Address";
import { useMoralis, useMoralisQuery, useWeb3ExecuteFunction } from "react-moralis";
import { getEllipsisTxt } from "helpers/formatters";
import ContractMethods from "./ContractMethods";
import contractInfo from "contracts/LicencseToken.json";
import { Button, Spinner } from "@chakra-ui/react";
import Web3 from "web3";
import Account from "components/Account/Account";


export default function OriginalContract() {
    const { Moralis, chainId, isAuthenticated, account } = useMoralis();
    const [responses, setResponses] = useState({});
    const [contract, setContract] = useState(contractInfo);
    const [address, setAddress] = useState();

    useEffect(() => {
        setAddress((isAuthenticated && account));
    }, [account, isAuthenticated]);

    /**Moralis Live query for displaying contract's events*/
    const { data } = useMoralisQuery("Events", (query) => query, [], {
        live: true,
    });

    /** Automatically builds write and read components for interacting with contract*/
    const displayedContractFunctions = useMemo(() => {
        if (!contract?.abi) return [];
        return contract.abi.filter((method) => method["type"] === "function");
    }, [contract]);

    /** Returns true in case if contract is deployed to active chain in wallet */
    const isDeployedToActiveChain = useMemo(() => {
        if (!contract?.networks) return undefined;
        return [parseInt(chainId, 16)] in contract.networks;
    }, [contract, chainId]);

    const contractAddress = useMemo(() => {
        if (!isDeployedToActiveChain) return null;
        return contract.networks[parseInt(chainId, 16)]?.["address"] || null;
    }, [chainId, contract, isDeployedToActiveChain]);

    /** Default function for showing notifications*/
    const openNotification = ({ message, description }) => {
        notification.open({
            placement: "bottomRight",
            message,
            description,
        });
    };


    //CONTRACT INTERACTION

    //console.log("CONTRACT INFO", contract)
    console.log("CONTRACT INFO; abi", contract.abi)
    //console.log("CONTRACT INFO; address", contract.address)


    // Variables
    const { error, fetch, isFetching, isLoading } = useWeb3ExecuteFunction()

    //FOR PURCHASE:

    // THIS IS WHEN USER IS REFEERED BY SOMEONE ELSE:

    /* *********************
    1. USDC approve (contract address, amount)
    2. invite(senderAddress, receiverAddress)
    3. makingTree(receiveAddress)
    4. giveLicense(account address)
    5. licensePriceTransfer(from address)
    6. activate(tokenId, deviceId)
    7. isLicenseActive(account address, tokenId)
    8. handleExpiredLicense(account address, tokenId) ******************** */

    // THIS IS WHEN USER IS not**** REFEERED BY SOMEONE ELSE:

    /* 1. USDC approve (contract address, amount)
    4. giveLicense(account address)
    5. licensePriceTransfer(from address)
    6. activate(tokenId, deviceId)
    7. isLicenseActive(account address, tokenId)
    8. handleExpiredLicense(account address, tokenId) */

    // IN VIDEO:

    /* 1. USDC approve (contract address, amount)
    4. giveLicense(account address)
    5. licensePriceTransfer(from address)
    6. invite(senderAddress, receiverAddress)
    7. makingTree
    8. reward */

    const giveLicense = (functionName, description) => {
        //account, type

        const parameterAccount = Web3.utils.toBN

        contract.abi.forEach(async function (item) {
            if (item.name === functionName) {
                let options = {
                    contractAddress: contract.address,
                    functionName: functionName,
                    abi: [item],
                    params: {
                        //_account: Web3.utils.toBN(String(address) + "0".repeat(18)),
                        // _account: Integer.parseInt(address)
                    }
                };
                await fetch({
                    params: options,
                    onSuccess: (data) => {
                        notification.open({
                            placement: "bottomRight",
                            type: 'success',
                            message: "Success GiveLicense",
                            description: data,
                            onClick: () => {
                                console.log("Notification Clicked! - NEXT STEP");
                            }
                        })
                    },
                    onComplete: () => {
                        notification.open({
                            placement: "bottomRight",
                            type: 'info',
                            message: "Request Complete",
                            onClick: () => {
                                console.log("Notification Clicked! - NEXT STEP");
                            }
                        })
                    },
                    onError: (error) => {
                        notification.open({
                            placement: "bottomRight",
                            type: 'error',
                            message: "Error GiveLicense",
                            description: error,
                            onClick: () => {
                                console.log("Notification Clicked! - NEXT STEP");
                            }
                        })
                    },
                });

            }
        })
    }

    const licensePriceTransfer = () => {
        //from, to
    }

    const invite = () => { //OPTIONAL
        //senderAddress, receiverAddress
    }

    const makingTree = () => { //OPTIONAL
        //receiveAddress
    }

    const reward = () => { //OPTIONAL
        //masterAddress
    }

    return (
        <>
            <div
                style={{
                    margin: "auto",
                    display: "flex",
                    gap: "20px",
                    marginTop: "25",
                    width: "70vw",
                }}
            >
                <Account />
                <Card
                    title={
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                            }}
                        >
                            HFT Robot | 600 USDC (Polygon)
                        </div>
                    }
                    size="large"
                    style={{
                        width: "60%",
                        boxShadow: "0 0.5rem 1.2rem rgb(189 197 209 / 20%)",
                        border: "1px solid #e7eaf3",
                        borderRadius: "0.5rem",
                    }}
                >
                    <Button
                        onClick={() =>
                            giveLicense(
                                "giveLicense",
                                "First Step to buy"
                            )}
                        isLoading={isLoading}
                        loadingText='Proccessing'>
                        BUY
                    </Button>
                    {isDeployedToActiveChain === false && (
                        <>{`The contract is not deployed to the active ${chainId} chain. Switch your chain to Polygon or try agan later.`}</>
                    )}
                </Card>
                <Card
                    title={"Estado actual de la Licencia"}
                    size="large"
                    style={{
                        width: "40%",
                        boxShadow: "0 0.5rem 1.2rem rgb(189 197 209 / 20%)",
                        border: "1px solid #e7eaf3",
                        borderRadius: "0.5rem",
                    }}
                >

                    <Card
                        title={"Tipo de Licencia:"}
                        size="small"
                        style={{ marginBottom: "20px" }}
                    >
                        INACTIVO
                    </Card>

                </Card>
            </div>

        </>
    );
}