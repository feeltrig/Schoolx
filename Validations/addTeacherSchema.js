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
  phone: Yup.number().required("Please enter valid phone number"),
  experience: Yup.number().required("Please enter valid years of experience"),
});

export default addTeacherSchema;
