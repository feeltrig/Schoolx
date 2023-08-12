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

const AddTeacher = () => {
  const toast = useToast();

  const fields = [
    {
      title: "First Name",
      name: "firstname",
      placeholder: "Enter your first name",
    },
    {
      title: "Last Name",
      name: "lastname",
      placeholder: "Enter your last name",
    },
    {
      title: "Email",
      name: "email",
      placeholder: "Enter your emailid",
    },
    {
      title: "Phone",
      name: "phone",
      placeholder: "Enter your phone number",
    },
    {
      title: "Experience",
      name: "experience",
      placeholder: "Enter your experience as a teacher",
    },
  ];

  return (
    <Container minW={"full"} m={0} p={0}>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          gender: "",
          phone: null,
        }}
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
                  />
                ))}

                {/* <VStack flex={1} minW={"20rem"}>
                  <Text fontSize={"0.9rem"} as={"label"} htmlFor="firstName">
                    First Name
                  </Text>
                  <Input
                    as={Field}
                    id="firstName"
                    name="firstName"
                    placeholder="Jane"
                    bgGradient="linear(to-br, white, gray.100)"
                    shadow={"md"}
                  />
                  <CustomFormError
                    fieldName={"firstName"}
                    errors={errors}
                    touchFields={touched}
                  />
                </VStack>
                <VStack align="stretch" minW={"20rem"} flex={1}>
                  <Text fontSize={"0.9rem"} as={"label"} htmlFor="lastName">
                    Last Name
                  </Text>
                  <Input
                    as={Field}
                    id="lastName"
                    name="lastName"
                    placeholder="Doe"
                    bgGradient="linear(to-br, white, gray.100)"
                    shadow={"md"}
                  />
                  <CustomFormError
                    fieldName={"lastName"}
                    errors={errors}
                    touchFields={touched}
                  />
                </VStack>
                <VStack align="stretch" minW={"20rem"} flex={1}>
                  <Text fontSize={"0.9rem"} as={"label"} htmlFor="email">
                    Email
                  </Text>
                  <Input
                    as={Field}
                    id="email"
                    name="email"
                    placeholder="jane@acme.com"
                    type="email"
                    bgGradient="linear(to-br, white, gray.100)"
                    shadow={"md"}
                  />
                  <CustomFormError
                    fieldName={"email"}
                    errors={errors}
                    touchFields={touched}
                  />
                </VStack>
                <VStack align="stretch" minW={"20rem"} flex={1}>
                  <Text fontSize={"0.9rem"} as={"label"} htmlFor="email">
                    Phone
                  </Text>
                  <Input
                    as={Field}
                    id="phone"
                    name="phone"
                    placeholder="phone nummber"
                    type="number"
                    bgGradient="linear(to-br, white, gray.100)"
                    shadow={"md"}
                  />
                  <CustomFormError
                    fieldName={"phone"}
                    errors={errors}
                    touchFields={touched}
                  />
                </VStack> */}
                <VStack align="stretch" minW={"20rem"}>
                  <Text fontSize={"0.9rem"} as={"label"} htmlFor="email">
                    Gender
                  </Text>
                  <Select
                    onChange={(e) => {
                      handleChange("gender")(e);
                    }}
                    placeholder="Select option"
                  >
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </Select>
                  <CustomFormError
                    fieldName={"gender"}
                    errors={errors}
                    touchFields={touched}
                  />
                </VStack>
                {/* <VStack align="stretch" minW={"20rem"}>
                  <Text fontSize={"0.9rem"} as={"label"} htmlFor="email">
                    Experience
                  </Text>
                  <Input
                    as={Field}
                    id="experience"
                    name="experience"
                    placeholder="experience as teacher"
                    type="number"
                    bgGradient="linear(to-br, white, gray.100)"
                    shadow={"md"}
                  />
                  <CustomFormError
                    fieldName={"experience"}
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
