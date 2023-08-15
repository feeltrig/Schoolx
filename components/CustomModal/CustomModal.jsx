import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import React from "react";

const CustomModal = (props) => {
  const {isOpen, handleClose, title, bodyContent, buttonArray} = props;
  return (
    <>
      <Modal isOpen={isOpen} onClose={handleClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>{bodyContent}</ModalBody>

          <ModalFooter>
            {buttonArray &&
              buttonArray.map((btnItem, btnItemIndex) => (
                <Button
                  key={btnItemIndex}
                  colorScheme="blue"
                  mr={3}
                  onClick={() => {
                    btnItem.onClick && btnItem.onClick();
                  }}
                >
                  {btnItem.title}
                </Button>
              ))}
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default CustomModal;
