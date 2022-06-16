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

export default function ProFile() {
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
    name: "",
    age: "",
    phone: "",
    address: "",
    email: "",
    gender: "",
    password: "",
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
  const handleUpdatePassword = () => {
    const data = {
      p: oldPassword,
      np: newPassword,
      rnp: reNewPassword,
    };
    async function updateUser() {
      await axios.patch(
        `http://localhost:3000/api/v1/users/${tempUserInfo.id}/account`,
        data
      );
    }

    if (bodyUser.password !== oldPassword) {
      setOpenToast(true);
      setMessage("nhập sai mật khẩu hiện tại vui lòng nhập lại");
    } else if (!oldPassword || !reNewPassword || !newPassword) {
      setOpenToast(true);
      setMessage(
        "không được để trống các ô nhập vui lòng nhập đầy đủ thông tin"
      );
    } else if (newPassword !== reNewPassword) {
      setOpenToast(true);
      setMessage("mật khẩu nhập lại sai vui lòng nhập lại");
    } else {
      updateUser();
      setOpenToast(true);
      setMessage("thay đỔi mật khẩu thành công");
      setTimeout(() => {
        setOpen(true);
      }, 1000);
    }
  };

  const handleClose = () => {
    setOpenToast(false);
  };
  useEffect(() => {
    async function getUserInfo() {
      const res = await axios.get(
        `http://localhost:3000/api/v1/users/${tempUserInfo.id}`
      );

      setBodyUser({
        name: res.data[0].name,
        age: res.data[0].age,
        phone: res.data[0].phone,
        address: res.data[0].address,
        email: res.data[0].email,
        gender: res.data[0].gender,
        password: res.data[0].account.password,
      });
    }
    getUserInfo();
  }, []);
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
          margin: "10px 0",
        }}
      >
        <Box>
          <Box
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              marginBottom: "50px",
            }}
          >
            {!open ? (
              <Button
                style={{ marginTop: "20px" }}
                size="large"
                type="submit"
                variant="contained"
                onClick={() => setOpen(true)}
              >
                thay đổi thông tin người dùng
              </Button>
            ) : (
              <Button
                style={{ marginTop: "20px" }}
                size="large"
                type="submit"
                variant="contained"
                onClick={() => {
                  setOpen(false);
                }}
              >
                thay đỔi mật khẩu
              </Button>
            )}
          </Box>
          {open ? (
            <FormikProvider value={formik} style={{ width: "70%" }}>
              <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
                <Stack spacing={3}>
                  <TextField
                    fullWidth
                    value={bodyUser.name}
                    name="name"
                    onChange={handleChangeData}
                    label="tên"
                  >
                    {" "}
                  </TextField>

                  <Box style={{ display: "flex", justifyContent: "center" }}>
                    <TextField
                      onChange={handleChangeData}
                      style={{ marginRight: "20px" }}
                      value={bodyUser.age}
                      name="age"
                      label="tuổi"
                    />
                    <TextField
                      onChange={handleChangeData}
                      style={{ marginRight: "20px" }}
                      value={bodyUser.gender}
                      name="gender"
                      label="giới tính"
                    />
                    <TextField
                      value={bodyUser.phone}
                      onChange={handleChangeData}
                      name="phone"
                      label="số điện thoại"
                    />
                  </Box>

                  <Box style={{ display: "flex", justifyContent: "center" }}>
                    <TextField
                      fullWidth
                      onChange={handleChangeData}
                      style={{ marginRight: "20px" }}
                      value={bodyUser.address}
                      name="address"
                      label="dịa chỉ"
                    />
                    <TextField
                      fullWidth
                      value={bodyUser.email}
                      name="email"
                      label="địa chỉ email"
                      onChange={handleChangeData}
                    />
                  </Box>
                </Stack>

                <Button
                  style={{ marginTop: "20px" }}
                  size="large"
                  type="submit"
                  variant="contained"
                  onClick={handleUpdate}
                >
                  Lưu thông tin người dùng
                </Button>
              </Form>
            </FormikProvider>
          ) : (
            <FormikProvider value={formik} style={{ width: "30%" }}>
              <Form autoComplete="off">
                <Stack spacing={3}>
                  <TextField
                    label="mật khẩu hiện tại"
                    value={oldPassword}
                    name="setOldPassword"
                    onChange={(e) => setOldPassword(e.target.value)}
                    type={showPassword ? "text" : "password"}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton onClick={handleShowPassword} edge="end">
                            <Iconify
                              icon={
                                showPassword
                                  ? "eva:eye-fill"
                                  : "eva:eye-off-fill"
                              }
                            />
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  >
                    {" "}
                  </TextField>

                  <TextField
                    label="mật khẩu mới"
                    value={newPassword}
                    name="newPassword"
                    onChange={(e) => setNewPassword(e.target.value)}
                    type={showPassword ? "text" : "password"}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton onClick={handleShowPassword} edge="end">
                            <Iconify
                              icon={
                                showPassword
                                  ? "eva:eye-fill"
                                  : "eva:eye-off-fill"
                              }
                            />
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  >
                    {" "}
                  </TextField>
                  <TextField
                    label="nhập lại mật khẩu mới"
                    value={reNewPassword}
                    name="setOldPassword"
                    onChange={(e) => setReNewPassword(e.target.value)}
                    type={showPassword ? "text" : "password"}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton onClick={handleShowPassword} edge="end">
                            <Iconify
                              icon={
                                showPassword
                                  ? "eva:eye-fill"
                                  : "eva:eye-off-fill"
                              }
                            />
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  >
                    {" "}
                  </TextField>
                </Stack>

                <Button
                  style={{ marginTop: "20px" }}
                  size="large"
                  type="submit"
                  variant="contained"
                  onClick={handleUpdatePassword}
                >
                  cập nhập mật khấu
                </Button>
              </Form>
            </FormikProvider>
          )}
        </Box>
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
