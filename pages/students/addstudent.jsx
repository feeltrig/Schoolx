import {
  Button,
  Flex,
  Text,
  useToast,
  VStack,
  Container,
} from "@chakra-ui/react";
import {Form, Formik} from "formik";
import AxiosInstance from "../../service/axiosInstance";
import addTeacherSchema from "../../Validations/addTeacherSchema";
import CustomInputField from "../../components/addTeacher/CustomInputField";
import CustomSelectField from "../../components/CustomSelectField/CustomSelectField";
import {genderList} from "../../StaticData/Teachers/teachers";
import CustomPhotoInput from "../../components/addTeacher/CustomPhotoInput";
import {useMemo, useState} from "react";
import {toData64URLImage} from "../../Funtions/dataFunctions";
import CustomTextArea from "../../components/CustomTextArea/CustomTextArea";

const AddStudent = () => {
  const toast = useToast();
  const [photo, setphoto] = useState(null);

  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    gender: "",
    phone: null,
    permanentAddress: "",
    photo: "",
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
        title: "Salary",
        name: "salary",
        type: "number",
        placeholder: "Enter annual salary",
        custom: false,
      },
      {
        title: "Permanent Address",
        name: "permanentAddress",
        type: "textarea",
        placeholder: "Enter permanent address",
        custom: true,
        customComponent: (
          <CustomTextArea placeholder="Enter permanent address" size="sm" />
        ),
      },
      {
        title: "Temporary Address",
        name: "temporaryAddress",
        type: "textarea",
        placeholder: "Enter temporary address",
        custom: true,
        customComponent: (
          <CustomTextArea placeholder="Enter temporary address" size="sm" />
        ),
      },
      // {
      //   title: "Photo",
      //   name: "photo",
      //   type: "number",
      //   placeholder: "Enter your experience as a teacher",
      //   custom: true,
      //   customComponent: (
      //     <CustomPhotoInput
      //       photo={photo}
      //       removePhoto={() => {
      //         setphoto(null);
      //       }}
      //       handleChange={(e) => {
      //         toData64URLImage(e.target.files[0], setphoto);
      //       }}
      //     />
      //   ),
      // },
    ],
    [photo, genderList]
  );

  return (
    <Container minW={"full"} m={0} p={"2rem"} bg="white">
      <>
        <Text fontSize={"2xl"} mb={"1rem"}>
          Add Student
        </Text>
        <Formik
          initialValues={initialValues}
          validateOnChange={true}
          validationSchema={addTeacherSchema}
          onSubmit={(values) => {
            console.log(values);
            AxiosInstance.post("addTeacher", values)
              .then((res) => {
                toast({
                  position: "top-right",
                  title: res.data.message,

                  containerStyle: {
                    height: "100vh",
                    padding: "2rem",
                    margin: 0,
                  },
                });
              })
              .catch((err) => console.log(err));
          }}
        >
          {({errors, touched, isValid, handleChange, handleBlur, values}) => (
            <Form>
              {console.log(errors, isValid, values)}
              <VStack align={"start"}>
                <Flex
                  py={"2rem"}
                  flexWrap={"wrap"}
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
                <Button type="submit">SUBMIT</Button>
              </VStack>
            </Form>
          )}
        </Formik>
      </>
    </Container>
  );
};

export default AddStudent;
