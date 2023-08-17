import MDInput from "components/MDInput";
import { useFormik } from "formik";
import * as yup from "yup";
import Button from "components/MDButton";
import axios from "axios";
import Card from "@mui/material/Card";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Cookies from "js-cookie";
// import { MarkerBuilder } from "@react-jvectormap/core";
import MDBox from "components/MDBox";

const validationSchema = yup.object({
  email: yup.string().email("Enter a valid email").required("Email is required"),

  current_password: yup
    .string()
    .min(8, "Password should be of minimum 8 characters length")
    .required("Password is required"),
  new_password: yup
    .string()
    .min(8, "Password should be of minimum 8 characters length")
    .required("Password is required"),
});

const Test1 = () => {
  const token = Cookies.get("tokenbro");
  console.log(token, "This is token");
  const formik = useFormik({
    initialValues: {
      email: "",
      current_password: "",
      new_password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values, action) => {
      axios
        .post(
          "http://10.0.20.133:8000/reset-password",
          {
            email: values.email,
            current_password: values.current_password,
            new_password: values.new_password,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });

      action.resetForm();
    },
  });

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <Card>
        <form onSubmit={formik.handleSubmit}>
          <MDBox p={4}>
            <div>
              <MDInput
                sx={{ width: 500 }}
                // id="email"
                variant="standard"
                name="email"
                label="Email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
                mb={10}
                mt={10}
              />
            </div>
            <div>
              <MDInput
                sx={{ width: 500 }}
                // id="confirmpassword"
                variant="standard"
                name="current_password"
                label="Current Password"
                type="password"
                value={formik.values.current_password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.current_password && Boolean(formik.errors.current_password)}
                helperText={formik.touched.current_password && formik.errors.current_password}
                mb={10}
              />
            </div>
            <div>
              <MDInput
                sx={{ width: 500 }}
                // id="password"
                variant="standard"
                name="new_password"
                label="New Password"
                type="password"
                value={formik.values.new_password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.new_password && Boolean(formik.errors.new_password)}
                helperText={formik.touched.new_password && formik.errors.new_password}
                mb={10}
              />
            </div>

            <Button color="primary" variant="contained" type="submit">
              Submit
            </Button>
          </MDBox>
        </form>
      </Card>
    </DashboardLayout>
  );
};

export default Test1;
