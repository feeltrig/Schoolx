import {Center, CloseButton} from "@chakra-ui/react";
import Image from "next/image";
import React, {useRef} from "react";
import CustomFormError from "../CustomFormError/CustomFormError";

const CustomPhotoInput = (props) => {
  const {photo, handleChange, removePhoto, errors, touched, name} = props;
  const inputref = useRef();
  return (
    <>
      {!photo && (
        <Center
          borderRadius={"2xl"}
          shadow={"md"}
          width={200}
          height={200}
          onClick={() => {
            inputref.current.click();
          }}
        >
          <h2>Upload Image</h2>
          <input
            type="file"
            ref={inputref}
            onChange={handleChange}
            style={{display: "none"}}
          />
          {/* <CustomFormError
            fieldName={name}
            errors={errors}
            touchFields={touched}
          /> */}
        </Center>
      )}
      {photo && (
        <div style={{position: "relative"}}>
          <Image
            src={photo}
            style={{borderRadius: "1rem"}}
            width={200}
            height={200}
          />
          <CloseButton
            onClick={removePhoto}
            style={{
              position: "absolute",
              right: "1rem",
              top: "1rem",
              background: "white",
              borderRadius: "20rem",
            }}
            size="sm"
          />
        </div>
      )}
    </>
  );
};

export default CustomPhotoInput;
