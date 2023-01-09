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
            href="https://test-certificate-withoutsign-383333479832.s3-accesspoint.us-east-1.amazonaws.com/DISCLAIMER%20BMAK.pdf?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLWVhc3QtMSJHMEUCIADrOosYbqlrZJFsIWxABsLH7%2BFr6opXWGK3kWDFriEaAiEA2y1kcXHFmHwnKNcHr%2B4z5kKBcacr0I8HP6Pa3BhjXucq5AIIexAAGgwzODMzMzM0Nzk4MzIiDGH6te578aRJUvCiRirBAucEjl0Vn0u0Awg2HxhVOQQo5GlKAT%2FrYtLVFFtvpQHHkPIaS0e2NqQtCk5Xh5RD0jcRf2qqDafp9P25m7owF79dup2XG3fHdzuwzlxUxNbN%2BQwifUSdz6wXVQzpFCTLjn3mvMNRYfJr2ONBVWnOfkdtDbfcbrDQackraMq35sc3dnToif5nArpsmT0kOJ1qz0NmEBGg7zFMdabaHDGRxPC70U1Ht1T9dSQy5KoFlCDqyKnezo82IajHTCl9TfNyHTicM%2FUpcvY6P0d2PGsHMWObpVUZhzcRhS7ORjGHYES%2Fub98%2BNi6sdCkA8nBsyYJ9awuI4V7n%2FrMJJICfKX%2FWI1sZI0MWByuadCTKi3cH07eLbn6vPpA%2FKxMgLRl4ORYCAOIYxF34viGtlf9M4ZuoYxKB%2BvFyDihmMCO5WBiUcw%2B%2FzC9ifGdBjqzAtHltdLLvj2Hr8bb328QQ26iohXrw2Fr3dVFljiiPwP5b76uwbPVLM6Yes7deEXneZl2AjPccUL0G0YAxPZ%2F1LGXWHR5Aw5W8v5LpHfhOtCzKt5gXVCVbP%2BJZ5fNbvme97d67XBpX83Bv9LH9uKsUzuBp0pX17mZgJseWDkC%2BT%2FVu7%2BJ7VIA527cfiGPglHyMgEHHIy8Cj%2FNZ9z0SRBS2k%2F6CDhFb8jwifGISXts33kRLkwe6%2FWvv%2B3G7YlR0D3fAE0fZv64hT9MfpwMLm499sHhB9RNsXfeSY%2B%2FSoZUT0%2FREsILkTyQzoxY0vkqXxZtCR939AzzfuhV7cackXQxlciZXCRpqnhszuPuv%2FTJjsUE4H%2FTzoEyHCgp61hPxOjQBwNZAI4kN787YeQ%2FAvZA82LmhgE%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230109T180736Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIAVSQDUWWMJQB2TDOX%2F20230109%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=85faebef971f80b8997a01c8524429e0aca1df549d855e39342d20251668b630"
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
