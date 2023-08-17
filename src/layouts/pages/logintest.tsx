import MDInput from "components/MDInput";
import { useFormik } from "formik";
import * as yup from "yup";
import Button from "components/MDButton";
import axios from "axios";
import Card from "@mui/material/Card";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import MDBox from "components/MDBox";
import Cookies from "js-cookie";

const validationSchema = yup.object({
  username: yup.string().min(2).max(25).required("Please enter your name"),

  password: yup
    .string()
    .min(8, "Password should be of minimum 8 characters length")
    .required("Password is required"),
});

const Logintest = () => {
  const { values, errors, touched, handleChange, handleBlur, handleSubmit } = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values, action) => {
      axios
        .post(
          "http://10.0.20.133:8000/login",
          {
            username: values.username,
            password: values.password,
          },

          {
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
              Accept: "application/json",
            },
          }
        )
        .then((response) => {
          console.log(response.data.access_token);
          const token = response.data.access_token;
          Cookies.set("tokenbro", token, { expires: 7 });
        })
        .catch((error) => {
          console.log(error);
        });
      console.log(values);

      action.resetForm();
    },
  });

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <Card>
        <form onSubmit={handleSubmit}>
          <MDBox p={4}>
            <div>
              <MDInput
                sx={{ width: 500 }}
                // id="email"
                variant="standard"
                name="username"
                label="Username"
                value={values.username}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.username && Boolean(errors.username)}
                helperText={touched.username && errors.username}
                mb={10}
                mt={10}
              />
            </div>
            <div>
              <MDInput
                sx={{ width: 500 }}
                // id="confirmpassword"
                variant="standard"
                name="password"
                label=" Password"
                type="password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.password && Boolean(errors.password)}
                helperText={touched.password && errors.password}
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

export default Logintest;
