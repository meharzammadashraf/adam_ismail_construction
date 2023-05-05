import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { validationSchema } from "../inputConditions/input";
import './login.css'
import { useNavigate } from "react-router-dom";
import {
  FormControl,
  Typography,
  TextField,
  Modal,
  Box,
  Grid,
  Container,
  Stack,
  Button,
} from "@mui/material";

const errorStyle = {
  "& .MuiFormHelperText-root.Mui-error": {
    fontSize: ".9rem",
    lineHeight: "20px",
    mt: ".5rem",
    fontWeight: "100",
  },
};
function Login() {
    const navigate = useNavigate();
  const formik = useFormik({
    initialValues: { password: "", email: "" },
    validationSchema: yup.object({
      password: validationSchema.fields.password.required(
        "Password is a required field"
      ),
      email: validationSchema.fields.email.required(
        "Email is a required field"
      ),
    }),
    onSubmit: async (values) => {
      try {
        formik.resetForm({
          values: { password: "", email: "" },
        });
        navigate("/home");
      } catch (e) {
        // setIsLoading(false);
        if (e.code === "ERR_NETWORK") {
          notify(e.message, "error");
        } else {
          notify("Something went wrong", "error");
        }
      }
    },
  });

  return (
    <div id="loginform">
      <Stack
        width="20rem"
        boxShadow="3"
        backgroundColor="#F7F7F7"
        borderRadius="10px"
        padding={{ xs: "1rem", md: "2.688rem" }}
        margin={{ xs: "0px 1rem", md: "0px 3.75rem" }}
        // height="24.375rem"
        justifyContent="space-around"
        id="modal-modal-description"
        component="form"
      >
        <FormControl
          sx={{
            width: "100%",
            height: "100%",
            justifyContent: "space-around",
            display: "flex",
          }}
        >
          <Box>
            <Typography variant="subtitle1" my="8px">
              Email<sup style={{ color: "red" }}>*</sup>
            </Typography>
            <TextField
              placeholder="Enter Email"
              fullWidth
              id="email"
              variant="outlined"
              size="small"
              color="secondary"
              sx={errorStyle}
              value={formik.values.email}
              onChange={formik.handleChange}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={(formik.touched.email && formik.errors.email) || " "}
              onBlur={formik.handleBlur}
            />
          </Box>
          <Box>
            <Typography variant="subtitle1" my="8px">
              Password<sup style={{ color: "red" }}>*</sup>
            </Typography>
            <TextField
              required
              fullWidth
              placeholder="Enter Password"
              id="password"
              variant="outlined"
              size="small"
              color="secondary"
              sx={errorStyle}
              value={formik.values.password}
              onChange={formik.handleChange}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={
                (formik.touched.password && formik.errors.password) || " "
              }
              onBlur={formik.handleBlur}
            />
          </Box>
          <Button
            onClick={() => formik.handleSubmit()}
            variant="contained"
            color="primary"
            sx={{
              width: { xs: "5rem", sm: "6.75rem" },
              marginTop: "0px",
              height: "2.188rem",
            }}
          >
            Login
          </Button>
        </FormControl>
      </Stack>
    </div>
  );
}

export default Login;
