import * as Yup from "yup";

const addTeacherSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  lastName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  phone: Yup.number()
    .required("Please enter valid phone number")
    .max(1000000000000000000),
  experience: Yup.number()
    .required("Please enter valid years of experience")
    .max(60),
  salary: Yup.number().required("Please enter annual salary").max(1000000),
  photo: Yup.string().required("Please upload photo of teacher"),
  permanentAddress: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Please enter permanenet address of teacher"),
  temporaryAddress: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Please enter temporary address of teacher"),
  gender: Yup.string().required("Please select the gender"),
});

export default addTeacherSchema;
