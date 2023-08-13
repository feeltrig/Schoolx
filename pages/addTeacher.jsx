import {Button, Container, Flex, useToast, VStack} from "@chakra-ui/react";
import {Form, Formik} from "formik";
import AxiosInstance from "../service/axiosInstance";
import addTeacherSchema from "../Validations/addTeacherSchema";
import CustomInputField from "../components/addTeacher/CustomInputField";
import CustomSelectField from "../components/CustomSelectField/CustomSelectField";
import {genderList} from "../StaticData/Teachers/teachers";
import CustomPhotoInput from "../components/addTeacher/CustomPhotoInput";
import {useMemo, useState} from "react";
import {toData64URLImage} from "../Funtions/dataFunctions";

const AddTeacher = () => {
  const toast = useToast();
  const [photo, setphoto] = useState(null);

  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    gender: "",
    phone: null,
  };

  const fields = useMemo(
    () => [
      {
        title: "First Name",
        name: "firstName",
        type: "text",
        placeholder: "Enter your first name",
        custom: false,
      },
      {
        title: "Last Name",
        name: "lastName",
        type: "text",
        placeholder: "Enter your last name",
        custom: false,
      },
      {
        title: "Email",
        name: "email",
        type: "email",
        placeholder: "Enter your emailid",
        custom: false,
      },
      {
        title: "Phone",
        name: "phone",
        type: "number",
        placeholder: "Enter your phone number",
        custom: false,
      },
      {
        title: "Gender",
        name: "gender",
        type: "gender",
        placeholder: "Enter your gender",
        custom: true,
        customComponent: (
          <CustomSelectField list={genderList} name={"gender"} />
        ),
      },
      {
        title: "Experience",
        name: "experience",
        type: "number",
        placeholder: "Enter your experience as a teacher",
        custom: false,
      },
      {
        title: "Photo",
        name: "photo",
        type: "number",
        placeholder: "Enter your experience as a teacher",
        custom: true,
        customComponent: (
          <CustomPhotoInput
            photo={photo}
            removePhoto={() => {
              setphoto(null);
            }}
            handleChange={(e) => {
              toData64URLImage(e.target.files[0], setphoto);
            }}
          />
        ),
      },
    ],
    [photo, genderList]
  );

  return (
    <Container minW={"full"} m={0} p={0}>
      <Formik
        initialValues={initialValues}
        validateOnChange={true}
        validationSchema={addTeacherSchema}
        onSubmit={async (values) => {
          AxiosInstance.post("addTeacher", values)
            .then((res) => {
              console.log(res);
              toast({
                position: "top-right",
                title: res.data.message,

                containerStyle: {
                  height: "100vh",
                  padding: "2rem",
                  margin: 0,
                  background:
                    "linear-gradient(180deg, rgba(255,255,255,0.5), transparent)",
                },
              });
            })
            .catch((err) => console.log(err));
        }}
      >
        {({errors, touched, isValid, handleChange, handleBlur, values}) => (
          <Form>
            <VStack align={"start"}>
              <Flex
                p={"2rem"}
                flexWrap={"wrap"}
                bgGradient="linear(to-br, gray.100, gray.200)"
                shadow={"md"}
                borderRadius={"md"}
                align="stretch"
                gap="1rem"
                m={0}
              >
                {fields.map((fieldItem, fieldItemIndex) => (
                  <CustomInputField
                    handleBlur={handleBlur}
                    title={fieldItem.title}
                    key={fieldItemIndex}
                    name={fieldItem.name}
                    placeholder={fieldItem.placeholder}
                    errors={errors}
                    touched={touched}
                    type={fieldItem.type}
                    customField={fieldItem.custom}
                    customComponent={fieldItem.customComponent}
                    customHandleChange={handleChange}
                  />
                ))}
              </Flex>
              <Button
                _hover={{
                  color: "gray.100",
                  bg: "gray.900",
                  shadow: "xl",
                }}
                disabled={!isValid}
                type="submit"
              >
                SUBMIT
              </Button>
            </VStack>
            {console.log(touched)}
          </Form>
        )}
      </Formik>
    </Container>
  );
};

export default AddTeacher;
