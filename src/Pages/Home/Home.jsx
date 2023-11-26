import { Title } from "@mui/icons-material";
import { Box, Button, Container, Typography } from "@mui/material";
import React from "react";
import DeliveryImg from "../../assets/deliveryboy.svg";
import HometextImg from "../../assets/curve.svg";
import { styled,css } from "@mui/material";
import BackroundImg from "../../assets/background.svg";
import Lottie from "react-lottie";
import animation from "../../assets/animation.json";
import arrowImg from "../../assets/arrowoutward.svg";
import "../../css/home.css";

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

  ${props => css`
    @media (min-width: 320px) and (max-width: 480px) {
      font-size: 14px;
    }
  `}
`;


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
        background: `#0e0b34 url(${BackroundImg}) no-repeat right center`,
        backgroundSize: "600px 442px",
        
      }}
    >
      {" "}
      {/* <StyledLeft> */}
      <div className="home-div">
        {" "}
        <div className="home-styled-left">
          {" "}
          <div className="home-styled-main">
            <h3 className="home-styled-heading">No need to run again</h3>

            <img src={HometextImg} alt="" className="home-arrow-img"></img>

            <h3 className="home-styled-typo">we deliver to you</h3>
          </div>
          <h4 className="home-styled-text">
            Open 8:00 AM to late night everyday
          </h4>
          <div className="home-button-box">
            <Button
              size="small"
              sx={{
                "@media (max-width: 600px)": {
                  width: "180x",
                  height: "35px",
                  borderRadius: " 6px",
                  background:
                    "linear-gradient(268deg, #ff1f3f 3.11%, rgba(255, 31, 192, 0.79) 99.33%)",
                  fontSize: "15px",
                  textTransform: "none",
                  fontWeight: 400,
                  color: "white",
                },
                "@media (min-width: 601px) and (max-width: 960px)": {
                  width: "193px",
                  height: "47px",
                  borderRadius: " 6px",
                  background:
                    "linear-gradient(268deg, #ff1f3f 3.11%, rgba(255, 31, 192, 0.79) 99.33%)",
                  fontSize: "20px",
                  textTransform: "none",
                  fontWeight: 400,
                  color: "white",
                },
                "@media (min-width: 970px) ": {
                  width: "193px",
                  height: "47px",
                  borderRadius: " 6px",
                  background:
                    "linear-gradient(268deg, #ff1f3f 3.11%, rgba(255, 31, 192, 0.79) 99.33%)",
                  fontSize: "20px",
                  textTransform: "none",
                  fontWeight: 400,
                  color: "white",
                },
                "@media (min-width: 320px) and (max-width: 480px)":{
                  width:"113px",
                  height:"34px",
                  fontSize:'13px',

                }
              }}
            >
              Try it now
            </Button>

            <Button
              sx={{
                "@media (max-width: 600px)": {
                  width: "180px",
                  height: "35px",
                  borderRadius: " 6px",
                  border: "1px solid #e0e0e0",
                  fontSize: "15px",
                  textTransform: "none",
                  fontWeight: 400,
                  color: "white",
                  marginLeft: "11px",
                  whiteSpace: "nowrap",
                },
                "@media (min-width: 601px) and (max-width: 960px)": {
                  width: "193px",
                  height: "47px",
                  borderRadius: " 6px",
                  border: "1px solid #e0e0e0",
                  fontSize: "20px",
                  textTransform: "none",
                  fontWeight: 400,
                  color: "white",
                  marginLeft: "11px",
                  whiteSpace: "nowrap",
                },
                "@media (min-width: 970px) ": {
                  width: "193px",
                  height: "47px",
                  borderRadius: " 6px",
                  border: "1px solid #e0e0e0",
                  fontSize: "20px",
                  textTransform: "none",
                  fontWeight: 400,
                  color: "white",
                  marginLeft: "11px",
                  whiteSpace: "nowrap",
                },

                "@media (min-width: 320px) and (max-width: 480px) ":{
                  width: '91px',
                  height:'18px',
                  border:'none',
                  fontSize: "14px",
                  marginTop:'3%',
                }
              }}
              size="small"
              startIcon={
                <img style={{ marginLeft: "5px" }} className="contact-arrow" alt="" src={arrowImg} />
              }
            >
              <ContactNowText>Contact now</ContactNowText>
            </Button>
          </div>
        </div>
        {/* </StyledLeft> */}
        <div className="home-styled-img">
          <div className="home-lottie-wrapper">
            <Lottie className='lottie-icon' options={lottieOptions} height={122} width={122} />
          </div>
          <img src={DeliveryImg} alt="" className="home-delivery-image"></img>
        </div>
      </div>
    </div>

    // </MainContainer>
  );
};

export default Home;
