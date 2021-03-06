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
    console.log(typeof name);
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
      setMessage("nh???p sai m???t kh???u hi???n t???i vui l??ng nh???p l???i");
    } else if (!oldPassword || !reNewPassword || !newPassword) {
      setOpenToast(true);
      setMessage(
        "kh??ng ???????c ????? tr???ng c??c ?? nh???p vui l??ng nh???p ?????y ????? th??ng tin"
      );
    } else if (newPassword !== reNewPassword) {
      setOpenToast(true);
      setMessage("m???t kh???u nh???p l???i sai vui l??ng nh???p l???i");
    } else {
      updateUser();
      setOpenToast(true);
      setMessage("thay ?????i m???t kh???u th??nh c??ng");
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
                thay ?????i th??ng tin ng?????i d??ng
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
                thay ?????i m???t kh???u
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
                    label="t??n"
                  >
                    {" "}
                  </TextField>

                  <Box style={{ display: "flex", justifyContent: "center" }}>
                    <TextField
                      onChange={handleChangeData}
                      style={{ marginRight: "20px" }}
                      value={bodyUser.age}
                      name="age"
                      label="tu???i"
                    />
                    <TextField
                      onChange={handleChangeData}
                      style={{ marginRight: "20px" }}
                      value={bodyUser.gender}
                      name="gender"
                      label="gi???i t??nh"
                    />
                    <TextField
                      value={bodyUser.phone}
                      onChange={handleChangeData}
                      name="phone"
                      label="s??? ??i???n tho???i"
                    />
                  </Box>

                  <Box style={{ display: "flex", justifyContent: "center" }}>
                    <TextField
                      fullWidth
                      onChange={handleChangeData}
                      style={{ marginRight: "20px" }}
                      value={bodyUser.address}
                      name="address"
                      label="d???a ch???"
                    />
                    <TextField
                      fullWidth
                      value={bodyUser.email}
                      name="email"
                      label="?????a ch??? email"
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
                  L??u th??ng tin ng?????i d??ng
                </Button>
              </Form>
            </FormikProvider>
          ) : (
            <FormikProvider value={formik} style={{ width: "30%" }}>
              <Form autoComplete="off">
                <Stack spacing={3}>
                  <TextField
                    label="m???t kh???u hi???n t???i"
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
                    label="m???t kh???u m???i"
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
                    label="nh???p l???i m???t kh???u m???i"
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
                  c???p nh???p m???t kh???u
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
