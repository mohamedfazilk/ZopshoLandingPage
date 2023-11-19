import { Title } from "@mui/icons-material";
import { Box, Button, Container, Typography } from "@mui/material";
import React from "react";
import DeliveryImg from "../../assets/deliveryboy.svg";
import HometextImg from "../../assets/curve.svg";
import { styled } from "@mui/material";
import BackroundImg from "../../assets/background.svg";
import Lottie from "react-lottie";
import animation from "../../assets/animation.json";
import arrowImg from "../../assets/arrowoutward.svg";
import "../../css/home.css";

// const MainContainer = styled(Container)`
//   width: 100%;
//   height: 745px;
//   background: #0e0b34 url(${BackroundImg}) repeat-x right;
//   background-size: 600px 442px;
//   background-repeat: no-repeat;
//   display: flex;
// `;
// const StyledContainer = styled(Container)``;
// const StyledLeft = styled(Box)`
//   padding-top: 10rem;
//   margin-bottom: 14px;
// `;

// const StyledHeading = styled(Typography)`
//   color: #fff;
//   font-family: Dela Gothic One;
//   font-size: 40px;
//   font-style: normal;
//   font-weight: 400;
//   line-height: normal;
// `;

// const ArrowImg = styled("img")`
//   margin-left: 17rem;
//   width: 237px;
//   height: 17px;
// `;

// const StyledTypo = styled(Typography)`
//   color: #fff;
//   font-family: Dela Gothic One;
//   font-size: 40px;
//   font-style: normal;
//   font-weight: 400;
//   line-height: normal;
// `;

// const StyledText = styled(Typography)`
//   color: #fff;
//   font-family: Questrial;
//   font-size: 20px;
//   font-style: normal;
//   font-weight: 400;
//   line-height: normal;
// `;

const ButtonBox = styled(Box)`
  display: flex;
  gap: 2rem;
  margin-top: 4.5rem;
`;

const TryItButton = styled(Button)`
  width: 193px;
  height: 47px;
  border-radius: 6px;
  background: linear-gradient(
    268deg,
    #ff1f3f 3.11%,
    rgba(255, 31, 192, 0.79) 99.33%
  );
`;
const TryItText = styled(Typography)`
  font-size: 20px;
  text-transform: none;
  font-weight: 400;
  color: white;
`;
const ContactNowButton = styled(Button)`
  width: 193px;
  height: 47px;
  border-radius: 6px;
  border: 1px solid #e0e0e0;
`;
const ContactNowText = styled(Typography)`
  font-size: 20px;
  text-transform: none;
  font-weight: 400;
  color: white;
  margin-left: 11px;
  white-space: nowrap;
`;

// const LottieWrapper = styled(Box)`
//   position: absolute;
//   top: 65%;
//   right: 12%;
//   width: 122px;
//   height: 122px;
//   transform: translate(-50%, -50%);
// `;

// const RightContainer = styled(Box)`
//   height: 100vh;
//   width: 100%;
// `;
// const StyledImg = styled(Box)`
//   margin-left: 11rem;
//   margin-top: 15rem;
//   width: 303px;

//   @media (max-width: 768px) {
//     width: 100%;
//   }
// `;
// const DeliveryImage = styled("img")`
//   width: 100%;
// `;

const Home = () => {
  const lottieOptions = {
    loop: true,
    autoplay: true,
    animationData: animation,
  };
  return (
    // <MainContainer>
    <div
      className="main-home-div"
      style={{
        background: `#0e0b34 url(${BackroundImg}) repeat-x right`,
        backgroundSize: "600px 442px",
        backgroundRepeat: "no-repeat,",
      }}
    >
      {" "}
      {/* <StyledLeft> */}
      <div className="home-div">
        {" "}
        <div className="home-styled-left">
          {" "}
          <div>
            <h3 className="home-styled-heading">No need to run again</h3>

            <img src={HometextImg} alt="" className="home-arrow-img"></img>

            <h3 className="home-styled-typo">we deliver to you</h3>
          </div>
          <h4 className="home-styled-text">
            Open 8:00 AM to late night everyday
          </h4>
          <ButtonBox>
            <TryItButton size="small">
              <TryItText>Try it now</TryItText>
            </TryItButton>

            <ContactNowButton
              size="small"
              startIcon={
                <img style={{ marginLeft: "5px" }} alt="" src={arrowImg} />
              }
            >
              <ContactNowText>Contact now</ContactNowText>
            </ContactNowButton>
          </ButtonBox>
        </div>
        {/* </StyledLeft> */}
        <div className="home-styled-img">
          <div className="home-lottie-wrapper">
            <Lottie options={lottieOptions} height={122} width={122} />
          </div>
          <img src={DeliveryImg} alt="" className="home-delivery-image"></img>
        </div>
      </div>
    </div>

    // </MainContainer>
  );
};

export default Home;
