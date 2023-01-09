import {
  Box,
  Button,
  Flex,
  Icon,
  Spacer,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";

function InvoicesRow(props) {
  const textColor = useColorModeValue("gray.700", "white");
  const { date, code, price, format, logo } = props;

  return (
    <Flex my={{ sm: "1rem", xl: "10px" }} alignItems="center">
      <Flex direction="column">
        <Text fontSize="md" color={textColor} fontWeight="bold">
          {date}
        </Text>
        <Text fontSize="sm" color="gray.400" fontWeight="semibold" me="16px">
          {code}
        </Text>
      </Flex>
      <Spacer />
      <Box me="12px">
        <Text fontSize="md" color="gray.400" fontWeight="semibold">
          {price}
        </Text>
      </Box>
      <Button p="0px" bg="transparent" variant="no-effects" >
        <Flex alignItems="center" p="12px">
          <Icon as={logo} w="20px" h="auto" me="5px" color={textColor} />
          <a fontSize="md" color={textColor} fontWeight="bold"
            href="https://test-certificate-withoutsign.s3.us-east-1.amazonaws.com/DISCLAIMER%20BMAK.pdf?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLWVhc3QtMSJIMEYCIQC1wvOe5BUkWanYH4%2But4sDENKBS7lFePLpcEp6NgXseAIhAJzyVpt28kGpBPTJvvSFp13Zbda78sWLMUw2AGyj%2F0%2FEKuQCCGoQABoMMzgzMzMzNDc5ODMyIgxZiqXsJK89XGGdU2UqwQIh3yLjkm%2Fcxqt1tsVbAzPIgVCaCsNQTwK4UVczn0ku4Oo8vssuS3Mslhzouym6WN%2BzdiPRM3Ovvs%2Fdq2ocPWb1GPDJCTzRn1z2WczWLVDKOAZGbCK%2Bwa3ur2SNSuMULKXaGmXx6%2F%2FTgSiIDahu8qsx78SUONslW2EtI8tSwuW7KybEpHy4xqqva9HcPW7rNw7W0c5ofGHrQOXSZpE9wwvAw31jmOPTk6rXFJkZ1JDfFnwbrljMdsbkoK3OI%2FALm4dDBWqVenQXWwIGC5Pgn3eJqbRplDAeiPH3EfFiAPRWCh1phPh5LojLtA2ewpvrNpZIyttQxoqkBCV69G6yFrioV%2BjTrCmkJ2GeSrD3Rhjgvi3Lu2oimtAH%2BqC8Qc1%2FeMGMuvdSyJLHTmO9dDRBRCg3XFx0DCAJjfoWGK%2FxYrCevu0ws7jtnQY6sgKijXszP3bpvn%2BdTpFfbjTh2sj0escH7BomjEKmz8Qr3oQlxXcYaOOEhpnNP2j5pFnBOgq6AlFDUECk86bnfZ8x3uMrKBxhP58b%2BFz9f2HQmDsdhKZWy565qS%2BLS2UECmumvoiuk5lvbBA0Z9FhUm%2BCx8%2Ffgba9h%2B4i%2Fr3AYjaiy7%2BFO1k8ISIb5LhPeLW5A5UEe5pq%2BIIJAfJ%2FVOjcZ9%2FiNMNx4weM63MFdVVUGpZT9fACGjqrXvh0ikxKuyxA4s2%2FHsVLh%2FQ9gu3S1fm3UHswu2Ro%2FK8r15AXS%2FL82RshmdQbSWoyHoAb%2Bgl9C%2FBOw9gWwRIxmGFwzXn71q1ieiqdRtrQXgzedNPfeKxiJC30VA%2BsYVOiUtyrUgtBOrcgIs0oMBsN3p5ClTEgIMo2OUuKJyk%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230109T005844Z&X-Amz-SignedHeaders=host&X-Amz-Expires=43200&X-Amz-Credential=ASIAVSQDUWWMKE563TEZ%2F20230109%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=34a0f1729e57dfde06316abcda043a69ee425173431c036a6a9c791f92b8899c"
            target={"_blank"}
            rel="noreferrer">
            {format}
          </a>
        </Flex>
      </Button>
    </Flex>
  );
}

export default InvoicesRow;
