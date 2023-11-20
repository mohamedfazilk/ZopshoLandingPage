import { styled } from "@mui/material";
import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import React from "react";
import "../../css/orderContent.css";
const OrderTextBox = styled(Box)(() => ({
  display: "flex",
  gap: "2rem",
  marginTop: "5%",
}));

const OrderContent = styled(Box)(() => ({}));

const OrderTitle = styled(Typography)(() => ({
  fontFamily: "Inter",
  fontSize: "16px",
  fontStyle: "normal",
  fontWeight: "600",
  lineHeight: "normal",
}));
const NumberText = styled(Box)(() => ({
  color: "#120A6C",
  fontFamily: "Inter",
  fontSize: "50px",
  fontStyle: "normal",
  fontWeight: "800",
  lineHeight: "normal",
}));

const OrderContents = () => {
  return (
    <div className="order-content-main-div">
      <div className="order-content-div">
        <div className="order-content-heading">
          <OrderTitle>What you need to do to order</OrderTitle>
        </div>
        <div className="order-content-items-div">
          <OrderTextBox>
            <NumberText>01</NumberText>
            <OrderContent>
              <Typography
                sx={{
                  color: "#08005F",

                  fontFamily: "Inter",
                  fontSize: "22px",
                  fontStyle: "normal",
                  fontWeight: "600",
                  lineHeight: "normal",
                }}
              >
                Select your Store
              </Typography>
              <Typography
                sx={{
                  color: "#828282",
                  marginTop: "5%",
                  fontFamily: "Questrial",
                  fontSize: "14px",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "166.023%",
                }}
              >
                from your morning coffee needs to snacks
                <br /> for your late night binge.
              </Typography>
            </OrderContent>
          </OrderTextBox>

          <OrderTextBox>
            <NumberText>01</NumberText>
            <OrderContent>
              <Typography
                sx={{
                  color: "#08005F",

                  fontFamily: "Inter",
                  fontSize: "22px",
                  fontStyle: "normal",
                  fontWeight: "600",
                  lineHeight: "normal",
                }}
              >
                Select your Store
              </Typography>
              <Typography
                sx={{
                  color: "#828282",
                  marginTop: "5%",
                  fontFamily: "Questrial",
                  fontSize: "14px",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "166.023%",
                }}
              >
                from your morning coffee needs to snacks
                <br /> for your late night binge.
              </Typography>
            </OrderContent>
          </OrderTextBox>

          <OrderTextBox>
            <NumberText>01</NumberText>
            <OrderContent>
              <Typography
                sx={{
                  color: "#08005F",

                  fontFamily: "Inter",
                  fontSize: "22px",
                  fontStyle: "normal",
                  fontWeight: "600",
                  lineHeight: "normal",
                }}
              >
                Select your Store
              </Typography>
              <Typography
                sx={{
                  color: "#828282",
                  marginTop: "5%",
                  fontFamily: "Questrial",
                  fontSize: "14px",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "166.023%",
                }}
              >
                from your morning coffee needs to snacks
                <br /> for your late night binge.
              </Typography>
            </OrderContent>
          </OrderTextBox>
        </div>
      </div>
      <hr style={{ border: "1px solid", color: "blue", marginTop: "58px" }} />
    </div>
    // </Box>
  );
};

export default OrderContents;
