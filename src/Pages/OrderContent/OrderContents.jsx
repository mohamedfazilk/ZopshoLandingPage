import { styled } from "@mui/material";
import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import React from "react";
import "../../css/orderContent.css";
import Slider from "react-slick";

const OrderTextBox = styled(Box)(() => ({
  display: "flex",
  gap: "2rem",
  marginTop: "5%",
  '@media (min-width: 320px) and (max-width: 480px)': {
    marginTop: "13%",
}
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
  '@media (min-width: 320px) and (max-width: 480px)' :{
    marginTop: '1%',
    color: "rgba(255, 31, 63, 0.21)",
  }
}));

const OrderContents = () => {
  const orders = [
    {
      number: "01",
      title: "Select your Store",
      description:
        "From your morning coffee needs to snacks for your late night binge.",
    },
    {
      number: "02",
      title: "Select your Store",
      description:
        "From your morning to night, no need to run away.",
    },
    {
      number: "03",
      title: "Select your Store",
      description:
        "From your morning coffee needs to snacks for your late night binge.",
    },
  
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="order-content-main-div">
      <div className="order-content-div">
        <div className="order-content-heading">
          <OrderTitle>What you need to do to order</OrderTitle>
        </div>
        <div className="order-content-items-div">
        {orders.map((order, index) => (
        <OrderTextBox key={index}>
            <NumberText>{order.number}</NumberText>
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
             {order.title}
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
              {order.description}
              </Typography>
            </OrderContent>
          </OrderTextBox>
                   ))}
        </div>
        <div className="main-slider-div">
        {/* <Slider className="main-slider" {...settings}>
        {orders.map((order, index) => (
        <OrderTextBox className="slider-box" key={index}>
            <NumberText>{order.number}</NumberText>
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
             {order.title}
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
              {order.description}
              </Typography>
            </OrderContent>
          </OrderTextBox>
                   ))}
          </Slider> */}
          <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
        <OrderTextBox className="slider-box">
            <NumberText>01</NumberText>
            <OrderContent>
              <Typography
                sx={{
                  color: "#2A3335",

                  fontFamily: "Inter",
                  fontSize: "15px",
                  fontStyle: "normal",
                  fontWeight: "600",
                  lineHeight: "normal",
                  whiteSpace:'nowrap',
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
             From your morning coffee needs to snacks for your late night binge.
              </Typography>
            </OrderContent>
          </OrderTextBox>
    </div>
    <div class="carousel-item">
    <OrderTextBox className="slider-box">
            <NumberText>02</NumberText>
            <OrderContent>
              <Typography
                sx={{
                  color: "#2A3335",

                  fontFamily: "Inter",
                  fontSize: "15px",
                  fontStyle: "normal",
                  fontWeight: "600",
                  lineHeight: "normal",
                  whiteSpace:'nowrap',
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
             From your morning coffee needs to snacks for your late night binge.
              </Typography>
            </OrderContent>
          </OrderTextBox>
    </div>
    <div class="carousel-item">
    <OrderTextBox className="slider-box">
            <NumberText>03</NumberText>
            <OrderContent>
              <Typography
                sx={{
                  color: "#2A3335",

                  fontFamily: "Inter",
                  fontSize: "15px",
                  fontStyle: "normal",
                  fontWeight: "600",
                  lineHeight: "normal",
                  whiteSpace:'nowrap',
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
             From your morning coffee needs to snacks for your late night binge.
              </Typography>
            </OrderContent>
          </OrderTextBox>
    </div>
  </div>
</div>
        </div>
         <div className='horizontal-line'></div>
       
      </div>
      <hr className="horizontal-line" style={{ border: "1px solid", color: "blue", marginTop: "58px" }} />
    </div>
    // </Box>
  );
};

export default OrderContents;
