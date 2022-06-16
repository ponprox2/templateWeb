import * as Yup from "yup";
import { useState, useEffect } from "react";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { useFormik, Form, FormikProvider } from "formik";
import { styled } from "@mui/material/styles";
import axios from "axios";

import { Stack, TextField, Button, Box, Card } from "@mui/material";
import Footer from "./footer";
import Header from "./header";
// import { LoadingButton } from "@mui/lab";
// component
// import Iconify from '../../../components/Iconify';

// ----------------------------------------------------------------------

const SectionStyle = styled(Card)(({ theme }) => ({
  width: "100%",
  maxWidth: 464,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  margin: theme.spacing(2, 0, 2, 2),
}));

export default function ProFile() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const tempUserInfo = JSON.parse(localStorage.getItem("userInfo"));
  const [bodyUser, setBodyUser] = useState({
    password:''
  });

  const handleChangeData = (e) => {
    const { name, value } = e.target;
    setBodyUser((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const handleUpdate = () => {
    async function updateUser() {
      await axios.patch(
        `http://localhost:3000/api/v1/users/${tempUserInfo.id}`,
        bodyUser
      );
    }
    updateUser();
  };
//   useEffect(() => {
//     async function getUserInfo() {
//       const res = await axios.get(
//         `http://localhost:3000/api/v1/users/${tempUserInfo.id}`
//       );

//       setBodyUser({
//         password:'': res.data[0].passw,

//       });
//     }
//     getUserInfo();
//   }, []);
  const LoginSchema = Yup.object().shape({
    email: Yup.string()
      .email("Email must be a valid email address")
      .required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      remember: true,
    },
    validationSchema: LoginSchema,
    onSubmit: () => {
      navigate("/dashboard", { replace: true });
    },
  });

  const { errors, touched, values, isSubmitting, handleSubmit, getFieldProps } =
    formik;

  const handleShowPassword = () => {
    setShowPassword((show) => !show);
  };

  return (
    <>
      <Header />
      <Box
        style={{
          display: "flex",
          width: "100%",
          justifyContent: "space-evenly",
          margin: "50px 0",
        }}
      >
        <FormikProvider value={formik} style={{ width: "40%" }}>
          <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
            <Stack spacing={3}>
              <TextField
                fullWidth
                value={bodyUser.name}
                name="name"
                onChange={handleChangeData}
              >
                {" "}
              </TextField>

              <Box style={{ display: "flex", justifyContent: "center" }}>
                <TextField
                  onChange={handleChangeData}
                  style={{ marginRight: "20px" }}
                  value={bodyUser.age}
                  name="age"
                />
                <TextField
                  onChange={handleChangeData}
                  style={{ marginRight: "20px" }}
                  value={bodyUser.gender}
                  name="gender"
                />
                <TextField
                  value={bodyUser.phone}
                  onChange={handleChangeData}
                  name="phone"
                />
              </Box>

              <Box style={{ display: "flex", justifyContent: "center" }}>
                <TextField
                  fullWidth
                  onChange={handleChangeData}
                  style={{ marginRight: "20px" }}
                  value={bodyUser.address}
                  name="address"
                />
                <TextField
                  fullWidth
                  value={bodyUser.email}
                  name="email"
                  onChange={handleChangeData}
                />
              </Box>
            </Stack>

            <Button
              style={{ marginTop: "20px" }}
              fullWidth
              size="large"
              type="submit"
              variant="contained"
              onClick={handleUpdate}
            >
              Lưu thông tin người dùng
            </Button>
          </Form>
        </FormikProvider>
      </Box>
      <Footer />
    </>
  );
}
