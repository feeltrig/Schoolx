import {
  Button,
  Container,
  Input,
  Text,
  useToast,
  VStack,
} from "@chakra-ui/react";
import {Field, Form, Formik} from "formik";
import * as Yup from "yup";
import CustomFormError from "../components/CustomFormError/CustomFormError";
import AxiosInstance from "../service/axiosInstance";
import customToast from "../components/CustomToast/CustomToast";

const AddTeacher = () => {
  const SignupSchema = Yup.object().shape({
    firstName: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    lastName: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
  });
  const toast = useToast();

  return (
    <Container minW={"full"} m={0} p={0}>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
        }}
        validateOnChange={true}
        validationSchema={SignupSchema}
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
          // await new Promise((r) => setTimeout(r, 500));
          // alert(JSON.stringify(values, null, 2));
        }}
      >
        {({errors, touched, isValid}) => (
          <Form>
            <VStack
              p={"2rem"}
              bgGradient="linear(to-br, gray.100, gray.200)"
              shadow={"md"}
              borderRadius={"md"}
              align="stretch"
              gap="2rem"
              w={"20rem"}
              m={0}
            >
              <VStack align="stretch">
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
              <VStack align="stretch">
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
              <VStack align="stretch">
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
          </Form>
        )}
      </Formik>
    </Container>
  );
};

export default AddTeacher;
