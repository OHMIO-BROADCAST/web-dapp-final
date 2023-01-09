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
                href="https://test-certificate-withoutsign-383333479832.s3-accesspoint.us-east-1.amazonaws.com/DISCLAIMER%20BMAK.pdf?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLWVhc3QtMSJHMEUCIADrOosYbqlrZJFsIWxABsLH7%2BFr6opXWGK3kWDFriEaAiEA2y1kcXHFmHwnKNcHr%2B4z5kKBcacr0I8HP6Pa3BhjXucq5AIIexAAGgwzODMzMzM0Nzk4MzIiDGH6te578aRJUvCiRirBAucEjl0Vn0u0Awg2HxhVOQQo5GlKAT%2FrYtLVFFtvpQHHkPIaS0e2NqQtCk5Xh5RD0jcRf2qqDafp9P25m7owF79dup2XG3fHdzuwzlxUxNbN%2BQwifUSdz6wXVQzpFCTLjn3mvMNRYfJr2ONBVWnOfkdtDbfcbrDQackraMq35sc3dnToif5nArpsmT0kOJ1qz0NmEBGg7zFMdabaHDGRxPC70U1Ht1T9dSQy5KoFlCDqyKnezo82IajHTCl9TfNyHTicM%2FUpcvY6P0d2PGsHMWObpVUZhzcRhS7ORjGHYES%2Fub98%2BNi6sdCkA8nBsyYJ9awuI4V7n%2FrMJJICfKX%2FWI1sZI0MWByuadCTKi3cH07eLbn6vPpA%2FKxMgLRl4ORYCAOIYxF34viGtlf9M4ZuoYxKB%2BvFyDihmMCO5WBiUcw%2B%2FzC9ifGdBjqzAtHltdLLvj2Hr8bb328QQ26iohXrw2Fr3dVFljiiPwP5b76uwbPVLM6Yes7deEXneZl2AjPccUL0G0YAxPZ%2F1LGXWHR5Aw5W8v5LpHfhOtCzKt5gXVCVbP%2BJZ5fNbvme97d67XBpX83Bv9LH9uKsUzuBp0pX17mZgJseWDkC%2BT%2FVu7%2BJ7VIA527cfiGPglHyMgEHHIy8Cj%2FNZ9z0SRBS2k%2F6CDhFb8jwifGISXts33kRLkwe6%2FWvv%2B3G7YlR0D3fAE0fZv64hT9MfpwMLm499sHhB9RNsXfeSY%2B%2FSoZUT0%2FREsILkTyQzoxY0vkqXxZtCR939AzzfuhV7cackXQxlciZXCRpqnhszuPuv%2FTJjsUE4H%2FTzoEyHCgp61hPxOjQBwNZAI4kN787YeQ%2FAvZA82LmhgE%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230109T180736Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIAVSQDUWWMJQB2TDOX%2F20230109%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=85faebef971f80b8997a01c8524429e0aca1df549d855e39342d20251668b630"
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
                href="https://test-certificate-withoutsign-383333479832.s3-accesspoint.us-east-1.amazonaws.com/DISCLAIMER%20BMAK.pdf?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLWVhc3QtMSJHMEUCIADrOosYbqlrZJFsIWxABsLH7%2BFr6opXWGK3kWDFriEaAiEA2y1kcXHFmHwnKNcHr%2B4z5kKBcacr0I8HP6Pa3BhjXucq5AIIexAAGgwzODMzMzM0Nzk4MzIiDGH6te578aRJUvCiRirBAucEjl0Vn0u0Awg2HxhVOQQo5GlKAT%2FrYtLVFFtvpQHHkPIaS0e2NqQtCk5Xh5RD0jcRf2qqDafp9P25m7owF79dup2XG3fHdzuwzlxUxNbN%2BQwifUSdz6wXVQzpFCTLjn3mvMNRYfJr2ONBVWnOfkdtDbfcbrDQackraMq35sc3dnToif5nArpsmT0kOJ1qz0NmEBGg7zFMdabaHDGRxPC70U1Ht1T9dSQy5KoFlCDqyKnezo82IajHTCl9TfNyHTicM%2FUpcvY6P0d2PGsHMWObpVUZhzcRhS7ORjGHYES%2Fub98%2BNi6sdCkA8nBsyYJ9awuI4V7n%2FrMJJICfKX%2FWI1sZI0MWByuadCTKi3cH07eLbn6vPpA%2FKxMgLRl4ORYCAOIYxF34viGtlf9M4ZuoYxKB%2BvFyDihmMCO5WBiUcw%2B%2FzC9ifGdBjqzAtHltdLLvj2Hr8bb328QQ26iohXrw2Fr3dVFljiiPwP5b76uwbPVLM6Yes7deEXneZl2AjPccUL0G0YAxPZ%2F1LGXWHR5Aw5W8v5LpHfhOtCzKt5gXVCVbP%2BJZ5fNbvme97d67XBpX83Bv9LH9uKsUzuBp0pX17mZgJseWDkC%2BT%2FVu7%2BJ7VIA527cfiGPglHyMgEHHIy8Cj%2FNZ9z0SRBS2k%2F6CDhFb8jwifGISXts33kRLkwe6%2FWvv%2B3G7YlR0D3fAE0fZv64hT9MfpwMLm499sHhB9RNsXfeSY%2B%2FSoZUT0%2FREsILkTyQzoxY0vkqXxZtCR939AzzfuhV7cackXQxlciZXCRpqnhszuPuv%2FTJjsUE4H%2FTzoEyHCgp61hPxOjQBwNZAI4kN787YeQ%2FAvZA82LmhgE%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230109T180736Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIAVSQDUWWMJQB2TDOX%2F20230109%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=85faebef971f80b8997a01c8524429e0aca1df549d855e39342d20251668b630"
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
