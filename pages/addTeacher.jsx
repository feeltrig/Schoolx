import {
  Button,
  Container,
  Flex,
  Input,
  Select,
  Text,
  useToast,
  VStack,
} from "@chakra-ui/react";
import {Field, Form, Formik} from "formik";
import CustomFormError from "../components/CustomFormError/CustomFormError";
import AxiosInstance from "../service/axiosInstance";
import addTeacherSchema from "../Validations/addTeacherSchema";
import CustomInputField from "../components/addTeacher/CustomInputField";
import CustomSelectField from "../components/CustomSelectField/CustomSelectField";
import {genderList} from "../StaticData/Teachers/teachers";

const AddTeacher = () => {
  const toast = useToast();
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    gender: "",
    phone: null,
  };

  const fields = [
    {
      title: "First Name",
      name: "firstname",
      type: "text",
      placeholder: "Enter your first name",
      custom: false,
    },
    {
      title: "Last Name",
      name: "lastname",
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
      customComponent: "CustomSelectField",
    },
    {
      title: "Experience",
      name: "experience",
      type: "number",
      placeholder: "Enter your experience as a teacher",
      custom: false,
    },
  ];

  return (
    <Container minW={"full"} m={0} p={0}>
      <Formik
        initialValues={initialValues}
        validateOnChange={true}
        validationSchema={addTeacherSchema}
        onSubmit={async (values) => {
          AxiosInstance.post("addTeacher", values)
            .then((res) =>
              toast({
                position: "top-right",
                title: "awdawdawd",
                containerStyle: {
                  border: "20px solid red",
                  height: "100vh",
                },
              })
            )
            .catch((err) => console.log(err));
        }}
      >
        {({errors, touched, isValid, handleChange, values}) => (
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
                    title={fieldItem.title}
                    key={fieldItemIndex}
                    name={fieldItem.name}
                    placeholder={fieldItem.placeholder}
                    errors={errors}
                    touched={touched}
                    type={fieldItem.type}
                    customField={fieldItem.custom}
                    customComponent={
                      <fieldItem.customComponent
                        list={genderList}
                        onChange={(e) => {
                          handleChange(fieldItem.name)(e);
                        }}
                      />
                    }
                  />
                ))}

                {/* <VStack align="stretch" minW={"20rem"}>
                  <Text fontSize={"0.9rem"} as={"label"} htmlFor="email">
                    Gender
                  </Text>

                  <CustomFormError
                    fieldName={"gender"}
                    errors={errors}
                    touchFields={touched}
                  />
                </VStack> */}
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
            {console.log(values)}
          </Form>
        )}
      </Formik>
    </Container>
  );
};

export default AddTeacher;
