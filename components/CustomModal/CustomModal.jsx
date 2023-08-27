import {
  Button,
  Image,
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
  const {isOpen, handleClose, title, bodyContent, buttonArray, size, imageurl} =
    props;
  console.log(props);
  return (
    <>
      <Modal isOpen={isOpen} onClose={handleClose} size={size && size}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{title}</ModalHeader>
          <ModalCloseButton />
          {imageurl && (
            <Image
              my={"3rem"}
              maxW={"100%"}
              objectFit="cover"
              src={imageurl}
              alt="Chakra UI"
              height={"20rem"}
            />
          )}
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
