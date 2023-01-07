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
            href="https://test-certificate-withoutsign.s3.us-east-1.amazonaws.com/DISCLAIMER%20BMAK.pdf?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQCJRZcvfW716vPl9%2B0U5CSp0v111ET7ZzqFtUAhQFrvogIhAP6jgLRoQ1XeuvI5qEmEnxC7SIcAS5E8bmjuQ2g2%2FK0%2BKuQCCD4QABoMMzgzMzMzNDc5ODMyIgzZls3Bluw62f81sv4qwQKYc0xjd4OHeyFziG3H%2BQU3M5yWxCuBtmoenL%2BsCB3D9UeFPuepO2fTrrYr6wSaJTCdEH9V03gGtoW0vkgU5ux%2Bo2KGCFmwUiKSYU9s%2F7g%2B%2BaUDNgteJklI%2FS%2FoM1CArN1FqXNGPMX%2BfFugHXqgail1Q6pCzHzM9R5BSpqMeWOp8luqmmTtz%2FChoafTb7%2FhL4uGcH2i0JPW6qluHI4tu3WgdA4eiNqJMP6NCjTOTnZOVsY0c4gNANWQmT%2FvS5mO%2FgBr1%2B23KXnHqqPfAotnGEbak9HUCl%2FP5OJ9y9xuj1tkmfyE%2BCbqgLjhgjC3MseKmg%2FAxC2JTjjMhHtuDNU7qA6pRB9BzLyfcc6OzeOty5WhSif8p2ep1Al7RnR7VdE%2BmHfz6HwcRpLu%2F5DLq1JZ94Sch0mp0H5IXH%2FeLoAlyhKrx54w5KvinQY6sgLWJ6rZcBUgTCh%2FHBlltDULPNbfiYTBykeV5IYszhmx8Iz2jFNLf2svmULMYQtu8Gb9oVY0wbvjiEkJrLxOeLJ85yOliQn7p%2BaWYMUtuOCSi8NzdhfIAiEFNCWcw1W9sDK6esidc2OzCdZWW2Jkpgbh9SX53u8QbdUvYKzYwACiNrXrU7XbLvAAyIPcgkvzUDGXcAlqPNdFF7O14nnFsq2Md8UkPFtTmt0colQdlzxbqpstarUw%2FvhhtKX2D8lA5jf2LfvUBQg7jRk17PluxqhkbVq%2By0qqGo33jJe7FhsVEgsjTnF9iLKhhZPTwWd91uzu9BZbUNwBLTsbYhjsV9H%2BDVU%2FEQ7GMqI7EA0nTIy3XMGHLLQtaSAuPJ0i6xaV6wrgbbV4DRMLk%2F3Ye%2BeoXseLdvs%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230107T050547Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIAVSQDUWWMO6VRLT7X%2F20230107%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=0231572b461ad063235e0dcfd5fb666bf45416c9300303b45cf505e5225920fa"
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
