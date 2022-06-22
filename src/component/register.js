import * as Yup from "yup";
import { useState, useEffect } from "react";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { useFormik, Form, FormikProvider } from "formik";
import { styled } from "@mui/material/styles";
import axios from "axios";

import {
  Stack,
  TextField,
  Button,
  Box,
  Card,
  IconButton,
  InputAdornment,
  Snackbar,
} from "@mui/material";
import Footer from "./footer";
import Header from "./header";
// import { LoadingButton } from "@mui/lab";
// component
import Iconify from "./icon/iconshow";

// ----------------------------------------------------------------------

const SectionStyle = styled(Card)(({ theme }) => ({
  width: "100%",
  maxWidth: 464,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  margin: theme.spacing(2, 0, 2, 2),
}));

export default function Register() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const tempUserInfo = JSON.parse(localStorage.getItem("userInfo"));
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [reNewPassword, setReNewPassword] = useState("");
  const [openToast, setOpenToast] = useState(false);
  const [message, setMessage] = useState("");

  const [bodyUser, setBodyUser] = useState({
    u: "",
    pw: "",
    rpw: "",
    e: "",
    p: "",
    role: "user",
  });

  const handleChangeData = (e) => {
    const { name, value } = e.target;
    setBodyUser((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const handleUpdate = () => {
    async function registerUser() {
      const res = await axios.post(
        `http://localhost:3000/api/v1/signup`,
        bodyUser
      );

      if (res.data.status === "User created") {
        setOpenToast(true);
        setMessage("tạo tài khoản thành công");
        navigate("/my-account");
      } else {
        setOpenToast(true);
        setMessage(
          `tạo tài khoản thất bại do : ${
            res.data.username ? " tài khoản đã tồn tại" : ""
          } ${res.data.email ? " email đã tồn tại" : ""}
          ${res.data.phone ? " số điện thoại đã tồn tại" : ""} `
        );
      }
    }
    registerUser();
  };

  const handleClose = () => {
    setOpenToast(false);
  };

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
          margin: "10px 0",
        }}
      >
        <FormikProvider value={formik} style={{ width: "70%" }}>
          <Form autoComplete="off" noValidate>
            <Stack spacing={3}>
              <Box style={{ display: "flex", justifyContent: "center" }}>
                <TextField
                  fullWidth
                  value={bodyUser.n}
                  name="n"
                  onChange={handleChangeData}
                  label="tên"
                  style={{ marginRight: "20px" }}
                >
                  {" "}
                </TextField>
              </Box>
              <Box style={{ display: "flex", justifyContent: "center" }}>
                <TextField
                  onChange={handleChangeData}
                  style={{ marginRight: "20px" }}
                  value={bodyUser.u}
                  name="u"
                  label="tài khoản"
                />
                <TextField
                  onChange={handleChangeData}
                  style={{ marginRight: "20px" }}
                  value={bodyUser.pw}
                  name="pw"
                  type="Password"
                  label="mật khẩU"
                />
                <TextField
                  value={bodyUser.rpw}
                  onChange={handleChangeData}
                  name="rpw"
                  type="Password"
                  label="nhập lại mật khẩu"
                />
              </Box>

              <Box style={{ display: "flex", justifyContent: "center" }}>
                <TextField
                  fullWidth
                  onChange={handleChangeData}
                  style={{ marginRight: "20px" }}
                  value={bodyUser.e}
                  name="e"
                  label="địa chỉ email"
                />
                <TextField
                  fullWidth
                  value={bodyUser.p}
                  name="p"
                  label="số điện thoại"
                  onChange={handleChangeData}
                />
              </Box>
            </Stack>

            <Button
              style={{ marginTop: "20px" }}
              size="large"
              variant="contained"
              onClick={handleUpdate}
            >
              đăng kí
            </Button>
          </Form>
        </FormikProvider>
      </Box>
      <Footer />
      <Snackbar
        open={openToast}
        autoHideDuration={1000}
        onClose={handleClose}
        message={message}
      />
    </>
  );
}
