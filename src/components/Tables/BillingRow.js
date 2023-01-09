import {
  Box,
  Button,
  Flex,
  Icon,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import { FaEye, FaPencilAlt, FaPrint, FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

function BillingRow(props) {
  const textColor = useColorModeValue("gray.700", "white");
  const bgColor = useColorModeValue("#F8F9FA", "navy.900");
  const nameColor = useColorModeValue("gray.500", "white");
  const { name, company, email, number } = props;

  return (
    <Box p="24px" bg={bgColor} my="22px" borderRadius="12px">
      <Flex justify="space-between" w="100%">
        <Flex direction="column" maxWidth="70%">
          <Text color={nameColor} fontSize="md" fontWeight="bold" mb="10px">
            {name}
          </Text>
          <Text color="gray.400" fontSize="sm" fontWeight="semibold">
            Company Name:{" "}
            <Text as="span" color={nameColor}>
              {company}
            </Text>
          </Text>
          <Text color="gray.400" fontSize="sm" fontWeight="semibold">
            Email Address:{" "}
            <Text as="span" color={nameColor}>
              {email}
            </Text>
          </Text>
          <Text color="gray.400" fontSize="sm" fontWeight="semibold">
            Document ID:{" "}
            <Text as="span" color={nameColor}>
              {number}
            </Text>
          </Text>
        </Flex>
        <Flex
          direction={{ sm: "column", md: "row" }}
          align="flex-start"
          p={{ md: "24px" }}
        >
          <Button
            p="0px"
            bg="transparent"
            variant="no-effects"
            mb={{ sm: "10px", md: "0px" }}
            me={{ md: "12px" }}
          >
            <Flex color="blue.500" cursor="pointer" align="center" p="12px">
              <Icon as={FaEye} me="4px" />
              <a fontSize="sm" fontWeight="semibold"
                href="https://test-certificate-withoutsign.s3.us-east-1.amazonaws.com/DISCLAIMER%20BMAK.pdf?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLWVhc3QtMSJIMEYCIQC1wvOe5BUkWanYH4%2But4sDENKBS7lFePLpcEp6NgXseAIhAJzyVpt28kGpBPTJvvSFp13Zbda78sWLMUw2AGyj%2F0%2FEKuQCCGoQABoMMzgzMzMzNDc5ODMyIgxZiqXsJK89XGGdU2UqwQIh3yLjkm%2Fcxqt1tsVbAzPIgVCaCsNQTwK4UVczn0ku4Oo8vssuS3Mslhzouym6WN%2BzdiPRM3Ovvs%2Fdq2ocPWb1GPDJCTzRn1z2WczWLVDKOAZGbCK%2Bwa3ur2SNSuMULKXaGmXx6%2F%2FTgSiIDahu8qsx78SUONslW2EtI8tSwuW7KybEpHy4xqqva9HcPW7rNw7W0c5ofGHrQOXSZpE9wwvAw31jmOPTk6rXFJkZ1JDfFnwbrljMdsbkoK3OI%2FALm4dDBWqVenQXWwIGC5Pgn3eJqbRplDAeiPH3EfFiAPRWCh1phPh5LojLtA2ewpvrNpZIyttQxoqkBCV69G6yFrioV%2BjTrCmkJ2GeSrD3Rhjgvi3Lu2oimtAH%2BqC8Qc1%2FeMGMuvdSyJLHTmO9dDRBRCg3XFx0DCAJjfoWGK%2FxYrCevu0ws7jtnQY6sgKijXszP3bpvn%2BdTpFfbjTh2sj0escH7BomjEKmz8Qr3oQlxXcYaOOEhpnNP2j5pFnBOgq6AlFDUECk86bnfZ8x3uMrKBxhP58b%2BFz9f2HQmDsdhKZWy565qS%2BLS2UECmumvoiuk5lvbBA0Z9FhUm%2BCx8%2Ffgba9h%2B4i%2Fr3AYjaiy7%2BFO1k8ISIb5LhPeLW5A5UEe5pq%2BIIJAfJ%2FVOjcZ9%2FiNMNx4weM63MFdVVUGpZT9fACGjqrXvh0ikxKuyxA4s2%2FHsVLh%2FQ9gu3S1fm3UHswu2Ro%2FK8r15AXS%2FL82RshmdQbSWoyHoAb%2Bgl9C%2FBOw9gWwRIxmGFwzXn71q1ieiqdRtrQXgzedNPfeKxiJC30VA%2BsYVOiUtyrUgtBOrcgIs0oMBsN3p5ClTEgIMo2OUuKJyk%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230109T005844Z&X-Amz-SignedHeaders=host&X-Amz-Expires=43200&X-Amz-Credential=ASIAVSQDUWWMKE563TEZ%2F20230109%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=34a0f1729e57dfde06316abcda043a69ee425173431c036a6a9c791f92b8899c"
                target={"_blank"}
                rel="noreferrer"
              >
                VIEW
              </a>
            </Flex>
          </Button>
          <Button p="0px" bg="transparent"
            variant="no-effects">
            <Flex color={textColor} cursor="pointer" align="center" p="12px">
              <Icon as={FaPrint} me="4px" />
              <a fontSize="sm" fontWeight="semibold"
                href="https://test-certificate-withoutsign.s3.us-east-1.amazonaws.com/DISCLAIMER%20BMAK.pdf?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLWVhc3QtMSJIMEYCIQC1wvOe5BUkWanYH4%2But4sDENKBS7lFePLpcEp6NgXseAIhAJzyVpt28kGpBPTJvvSFp13Zbda78sWLMUw2AGyj%2F0%2FEKuQCCGoQABoMMzgzMzMzNDc5ODMyIgxZiqXsJK89XGGdU2UqwQIh3yLjkm%2Fcxqt1tsVbAzPIgVCaCsNQTwK4UVczn0ku4Oo8vssuS3Mslhzouym6WN%2BzdiPRM3Ovvs%2Fdq2ocPWb1GPDJCTzRn1z2WczWLVDKOAZGbCK%2Bwa3ur2SNSuMULKXaGmXx6%2F%2FTgSiIDahu8qsx78SUONslW2EtI8tSwuW7KybEpHy4xqqva9HcPW7rNw7W0c5ofGHrQOXSZpE9wwvAw31jmOPTk6rXFJkZ1JDfFnwbrljMdsbkoK3OI%2FALm4dDBWqVenQXWwIGC5Pgn3eJqbRplDAeiPH3EfFiAPRWCh1phPh5LojLtA2ewpvrNpZIyttQxoqkBCV69G6yFrioV%2BjTrCmkJ2GeSrD3Rhjgvi3Lu2oimtAH%2BqC8Qc1%2FeMGMuvdSyJLHTmO9dDRBRCg3XFx0DCAJjfoWGK%2FxYrCevu0ws7jtnQY6sgKijXszP3bpvn%2BdTpFfbjTh2sj0escH7BomjEKmz8Qr3oQlxXcYaOOEhpnNP2j5pFnBOgq6AlFDUECk86bnfZ8x3uMrKBxhP58b%2BFz9f2HQmDsdhKZWy565qS%2BLS2UECmumvoiuk5lvbBA0Z9FhUm%2BCx8%2Ffgba9h%2B4i%2Fr3AYjaiy7%2BFO1k8ISIb5LhPeLW5A5UEe5pq%2BIIJAfJ%2FVOjcZ9%2FiNMNx4weM63MFdVVUGpZT9fACGjqrXvh0ikxKuyxA4s2%2FHsVLh%2FQ9gu3S1fm3UHswu2Ro%2FK8r15AXS%2FL82RshmdQbSWoyHoAb%2Bgl9C%2FBOw9gWwRIxmGFwzXn71q1ieiqdRtrQXgzedNPfeKxiJC30VA%2BsYVOiUtyrUgtBOrcgIs0oMBsN3p5ClTEgIMo2OUuKJyk%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230109T005844Z&X-Amz-SignedHeaders=host&X-Amz-Expires=43200&X-Amz-Credential=ASIAVSQDUWWMKE563TEZ%2F20230109%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=34a0f1729e57dfde06316abcda043a69ee425173431c036a6a9c791f92b8899c"
                target={"_blank"}
                rel="noreferrer"
              >
                PRINT
              </a>
            </Flex>
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
}

export default BillingRow;
