import { CheckboxField } from "@aws-amplify/ui-react";

const {
  Button,
  Modal,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  ModalOverlay,
  ModalContent,
  Checkbox,
} = require("@chakra-ui/react");

function ModalCertified({
  isOpen,
  onClose,
  userHasSign,
  setUserHasSign,
  updateSignStatus,
}) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} closeOnEsc={true}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          ACCEPT TERMS & CONDITIONS & SIGN DOCUMENT ONLINE
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          By accepting this message you accept the Terms & Conditions and Accept
          the Disclaimer document of OHMIO Broadcast.
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={updateSignStatus}>
            ACCEPT
          </Button>
          <Button variant="ghost" onClick={onClose}>
            CLOSE
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
export default ModalCertified;
