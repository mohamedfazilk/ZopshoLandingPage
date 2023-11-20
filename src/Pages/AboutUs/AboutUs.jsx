import React from "react";
import { Container, styled } from "@mui/material";
import BackgroundImg from "../../assets/AboutBgrd.svg";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import "../../css/aboutUs.css";

const StyledTypo = styled(Typography)`
  color: #08005f;
  font-family: Inter;
  font-size: 26px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-top: 20px;
`;
const Styledpara = styled(Typography)`
  color: #000;
  font-family: Questrial;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-top: 20px;
  margin-left: -5rem;
`;

const ContentBox = styled(Box)`
  width: 879px;
  margin-top: 45px;
`;
const ContentTypo = styled(Typography)`
  color: #343434;
  text-align: center;
  font-family: Questrial;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 264.023%;
`;
const MainBox = styled(Box)`
  align-items: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;
const StyledHr = styled("hr")`
  width: 100%;
  border: 1px solid blue;
  margin-top: 58px;
`;
const AboutUs = () => {
  return (
    <>
      <div className="about-us-main-div">
        <div
          style={{ background: `url(${BackgroundImg})  center` }}
          className="about-us-div"
        >
          <div className="about-us-main-box">
            <div className="about-us-main-box-div">
              <h4 className="about-u-styled-title">Who are we ?</h4>

              <p className="about-u-styled-para">
                Catch up on the lates news, updates and reports here
              </p>
            </div>

            <div className="about-us-content-box">
              <p className="about-us-content-typo">
                Launched in 2010, Our technology platform connects customers,
                restaurant partners and delivery partners, serving their
                multiple needs. Customers use our platform to search and
                discover restaurants, read and write customer generated reviews
                and view and upload photos, order food delivery, book a table
                and make payments while dining-out at restaurants. On the other
                hand, we provide restaurant partners with industry-specific
                marketing tools which enable them to engage and acquire
                customers to grow their business while also providing a reliable
                We’re here to help you live life the panda way. Spend more time
                doing what you love
              </p>
            </div>
          </div>
        </div>
      </div>
      <StyledHr />
    </>
  );
};

export default AboutUs;
