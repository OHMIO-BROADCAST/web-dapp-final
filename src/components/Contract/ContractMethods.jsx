import { Button, Card, Form, Input } from "antd";
import Text from "antd/lib/typography/Text";
import { Button as ChakraButton } from "@chakra-ui/react"


const ContractMethods = ({ displayedContractFunctions, responses }) => {
  return displayedContractFunctions.map((item, key) => (
    console.log(item, key),
    <Card
      title={`${key + 1}. ${item?.name}`}
      size="small"
      style={{ marginBottom: "20px" }}
      key={key}
    >
      <Form layout="vertical" name={`${item.name}`}>
        {item.inputs.map((input, key) => (
          <Form.Item
            label={`${input.name} (${input.type})`}
            name={`${input.name}`}
            required
            style={{ marginBottom: "15px" }}
            key={key}
          >
            <Input placeholder="input placeholder" />
          </Form.Item>
        ))}
        <Form.Item style={{ marginBottom: "5px", display: 'flex' }}>
          <Text style={{ display: "block" }}>
            {responses[item.name]?.result &&
              `Response: ${JSON.stringify(responses[item.name]?.result)}`}
          </Text>
          <ChakraButton
            type="primary"
            htmlType="submit"
            loading={responses[item?.name]?.isLoading}
            style={{ alignContent: 'flex-end' }}
          >
            {item.stateMutability === "view" ? "Read🔎" : "Transact💸"}
          </ChakraButton>
        </Form.Item>
      </Form>
    </Card >
  ));
};

export default ContractMethods;
