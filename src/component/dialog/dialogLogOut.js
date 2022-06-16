import React, { useState } from "react";
import { Box, Button, InputAdornment, Typography } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import { styled } from "@mui/material/styles";
import { useNavigate } from "react-router";

const TypographyText = styled(Typography)({
  fontFamily: "SFProTextRegular",
  fontWeight: "500",
  fontStyle: "normal",
  fontSize: "17px",
  lineHeight: "20px",
  color: "gray",
  textAlign: "center",
});

const ButtonDialog = styled(Button)({
  backgroundColor: "#00AD4F",
  color: "white",
  width: "141px",
  height: "48px",
  borderRadius: "8px",
  flex: "none",
});
const BoxNewType = styled(Box)({
  backgroundColor: "white",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: "13px",
  width: "343px",
  height: "125px",
});
function DialogLogOut({ openDialog, setOpenDialog }) {
  const navigate = useNavigate();
  //   const [logOut, setLogOut] = useState(false);

  const handleClickAway = () => {
    setOpenDialog(false);
  };

  const handleLogOut = () => {
    navigate("/my-account");
  };

  const handleRefuseNewType = () => {
    setOpenDialog(false);
  };

  return (
    <Box sx={{ height: "100%" }}>
      <Dialog
        open={openDialog}
        onClose={handleClickAway}
        sx={{
          "& .MuiDialog-paper.MuiPaper-rounded": {
            borderRadius: "8px !important",
            backgroundColor: "white",
            boxShadow: "none",
          },
        }}
      >
        <BoxNewType className="">
          <TypographyText>Bạn có muốn thoát ?</TypographyText>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-evenly",
              alignItems: "center",
              gap: "13px",
            }}
          >
            <ButtonDialog
              sx={{
                color: "black",
                backgroundColor: "white",
                border: `1px solid ${"black"}`,
                "&.MuiButtonBase-root.MuiButton-root:hover": {
                  backgroundColor: "white",
                },
              }}
              onClick={handleRefuseNewType}
            >
              Từ chối
            </ButtonDialog>
            <ButtonDialog
              sx={{
                "&.MuiButtonBase-root.MuiButton-root:hover": {
                  backgroundColor: "black",
                },
                backgroundColor: "black",
              }}
              onClick={handleLogOut}
            >
              Xác nhận
            </ButtonDialog>
          </Box>
        </BoxNewType>{" "}
      </Dialog>
    </Box>
  );
}

export default DialogLogOut;
