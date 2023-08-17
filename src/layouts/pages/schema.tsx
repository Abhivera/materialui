import * as yup from "yup";

const validationSchema = yup.object({
  org_name: yup.string().required("Please enter your organisation name"),
  //  locaton: yup.string().required("Please enter location"),
  //industry: yup.string().required("Please enter industry"),
  add_line1: yup.string().required("Please enter Address"),
  add_line2: yup.string(),
  pincode: yup
    .number()
    .typeError("That doesn't look like a pincode ")
    .positive("can't start with a minus")
    .integer("can't include a decimal point")
    .min(6)
    .required("Please enter pincode "),
  //   state: yup.string().required("Please enter state"),
  city: yup.string().required("Please enter city"),
});
export default validationSchema;
