import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Container, styled, } from "@mui/material";
import BackgroundImg from "../../assets/backgroundvector.svg";
import MedicineImg from "../../assets/medicine.svg";
import MedicalLab from "../../assets/medicallab.svg";
import PetMedicine from "../../assets/petmedicine.svg";
import Eyewear from "../../assets/eyewear.svg";
import ArrowIcon from '../../assets/ourServiceIcon.svg'
import "../../css/service.css";

const StyledContainer = styled(Container)`
  width: 593px; 
  height: 330px; 
  background: url(${BackgroundImg})  center;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center,
  text-align:center
  position:relative

`;

const CustomBox = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  gap: "3rem",
  width: "308px",
  height: "297px",
}));

const Textbox = styled(Box)(() => ({

  '@media (min-width: 320px) and (max-width: 480px)':{
    display: 'flex',
    justifyContent:'center',
    alignItems:'center',
    marginTop:'20%',
  }
 
}));

const VerticalDivider = styled("div")({
  background: "#E0E0E0",
  width: "1px",
  flexShrink: "0px",
  height: "83px",
  marginTop: "8%",
  '@media (min-width: 320px) and (max-width: 480px)':{
    height: '76px'
  }

});

const ServiceHeading = styled(Typography)`
color: #172F35;
font-family: Inter;
font-size: 17px;
font-style: normal;
font-weight: 600;
line-height: normal;
@media (min-width: 320px) and (max-width: 480px){
  font-size: 16px;
}
`

const ServiceSubheading = styled(Typography)`
color: #686868;
    font-family: Questrial;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    @media (min-width: 320px) and (max-width: 480px){
      font-size: 15px;
      margin-top: 5px;
    }
`

const Service = () => {
  return (
    <>
<div className="service-main-div"    style={{
        background: ` url(${BackgroundImg}) no-repeat center center`,
        backgroundSize: "635px 357px",
      }}>
        <div className="service-div">
          <CustomBox>
            <Card
              sx={{
                display: "flex",
                width: "285px",
                height: "124px",
                backgroundColor: "transparent",
                border: "1px solid #CBCBCB",
                borderRadius: "12px",
                justifyContent: "center",
                gap: "2rem",
                boxShadow: "none",
                marginLeft:'5%',
              }}
            >
              <CardMedia
                component="img"
                alt="Live from space album cover"
                image={MedicineImg}
                sx={{ width: 49, height: 59.316, marginTop: "11%", marginLeft:'17px' }}
              />
              <VerticalDivider />
              <Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}>
                <CardContent sx={{ flex: "1 0 auto", mt:'37px',padding:'3px'  }}>
                  <ServiceHeading component="div" variant="subtitle">
                    Medicine
                  </ServiceHeading>
                  <ServiceSubheading
                    variant="subtitle1"
                    color="text.secondary"
                    component="div"
                  >
                    Delivery service
                  </ServiceSubheading>
                </CardContent>
              </Box>
            </Card>
            <Card
              sx={{
                display: "flex",
                width: "285px",
                height: "124px",
                backgroundColor: "transparent",
                border: "1px solid #CBCBCB",
                borderRadius: "12px",
                justifyContent: "center",
                boxShadow: "none",
                gap: "2rem",
                marginLeft:'5%',
                
              }}
            >
              <CardMedia
                component="img"
                alt="Live from space album cover"
                image={PetMedicine}
                sx={{ width: 57, height: 51.571, marginTop: "11%", marginLeft:'17px' }}
              />
              <VerticalDivider />
              <Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}>
                <CardContent sx={{ flex: "1 0 auto", mt:'46px', padding:'3px' }}>
                  <ServiceHeading component="div" variant="subtitle">
                    Pet Medicine
                  </ServiceHeading>
                  <ServiceSubheading
                    variant="subtitle1"
                    color="text.secondary"
                    component="div"
                    style={{

                    }}
                  >
                    Delivery service
                  </ServiceSubheading>
                </CardContent>
              </Box>
            </Card>
          </CustomBox>
          <Textbox
            sx={{
              display: "flex",
              whiteSpace: "nowrap",
              flexDirection: "column",
              // marginTop: "22%",
            }}
          >
            <Typography
              sx={{
                color: "#0E0B34",
                fontFamily: "Questrial",
                fontWeight: "400",
                fontSize: "18px",
              }}
            >
              Services are with in minutes{" "}
            </Typography>
            <Typography
              sx={{
                color: "#08005F",
                fontFamily: "Inter",
                fontWeight: "700",
                fontSize: "30px",
              }}
            >
              Our services
            </Typography>
          </Textbox>
          <CustomBox>
            <Card
              sx={{
                display: "flex",
                width: "285px",
                height: "124px",
                backgroundColor: "transparent",
                border: "1px solid #CBCBCB",
                borderRadius: "12px",
                justifyContent: "center",
                boxShadow: "none",
                gap: "2rem",
                marginLeft:'3%',
               
              }}
            >
              <CardMedia
                component="img"
                alt="Live from space album cover"
                image={MedicalLab}
                sx={{ width: 41, height: 58.938, marginTop: "11%", marginLeft:'42px' }}
              />
              <VerticalDivider />
              <Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}>
                <CardContent sx={{ flex: "1 0 auto",ml:'-2rem', mt:'35px' }}>
                  <ServiceHeading component="div" variant="subtitle">
                    Medical Lab
                  </ServiceHeading>
                  <ServiceSubheading
                    variant="subtitle1"
                    color="text.secondary"
                    component="div"
                  >
                    Delivery service
                  </ServiceSubheading>
                </CardContent>
              </Box>
            </Card>
            <Card
              sx={{
                display: "flex",
                width: "285px",
                height: "124px",
                backgroundColor: "transparent",
                border: "1px solid #CBCBCB",
                borderRadius: "12px",
                justifyContent: "center",
                boxShadow: "none",
                gap: "2rem",
                marginLeft:'3%',
              }}
            >
              <CardMedia
                component="img"
                alt="Live from space album cover"
                image={Eyewear}
                sx={{ width: 41, height: 38.95, marginTop: "11%", marginLeft:'42px',
                 marginTop:'52px'  }}
              />
              <VerticalDivider />
              <Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}>
                <CardContent sx={{ flex: "1 0 auto", ml:'-2rem', mt:'35px' }}>
                  <ServiceHeading component="div" variant="subtitle">
                    Eye Wear
                  </ServiceHeading>
                  <ServiceSubheading
                    variant="subtitle1"
                    color="text.secondary"
                    component="div"
                  >
                    Delivery service
                  </ServiceSubheading>
                </CardContent>
              </Box>
            </Card>
          </CustomBox>
        </div>
      </div>

     <div className="mobile-div">
     <Textbox
            sx={{
              display: "flex",
              whiteSpace: "nowrap",
              flexDirection: "column",
              // marginTop: "22%",
            }}
          >
            <Typography
              sx={{
                color: '#0E0B34',
                fontFamily: "Questrial",
                fontWeight: "400",
                fontSize: "15px",
              }}
            >
              Services are with in minutes{" "}
            </Typography>
            <div className="Ourservice-div">
            <img src={ArrowIcon}/>
            <Typography
              sx={{
                color: "#172F35",
                fontFamily: "Inter",
                fontWeight: "700",
                fontSize: "20px",
              }}
            >
             
          Our services
            </Typography>
            </div>
          </Textbox>
     <div className="Main-slider-div">
     <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="firstIndicator active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1" className="Indicatorsecond"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2" className="Indicatorthird"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <div>
    <Card
              sx={{
                display: "flex",
                width: "285px",
                height: "124px",
                backgroundColor: "transparent",
                border: "1px solid #CBCBCB",
                borderRadius: "12px",
                justifyContent: "center",
                gap: "2rem",
                boxShadow: "none",
              }}
            >
              <CardMedia
                component="img"
                alt="Live from space album cover"
                image={MedicineImg}
                sx={{ width: 49, height: 59.316, marginTop: "11%", marginLeft:'17px' }}
              />
              <VerticalDivider />
              <Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}>
                <CardContent sx={{ flex: "1 0 auto", mt:'18px',padding:'3px'  }}>
                  <ServiceHeading component="div" variant="subtitle">
                    Medicine
                  </ServiceHeading>
                  <ServiceSubheading
                    variant="subtitle1"
                    color="text.secondary"
                    component="div"
                  >
                    Delivery service
                  </ServiceSubheading>
                </CardContent>
              </Box>
            </Card>
            </div>
    </div>
    <div class="carousel-item">
            <Card
              sx={{
                display: "flex",
                width: "285px",
                height: "124px",
                backgroundColor: "transparent",
                border: "1px solid #CBCBCB",
                borderRadius: "12px",
                justifyContent: "center",
                boxShadow: "none",
                gap: "2rem",
              }}
            >
              <CardMedia
                component="img"
                alt="Live from space album cover"
                image={PetMedicine}
                sx={{ width: 57, height: 51.571, marginTop: "11%", marginLeft:'17px' }}
              />
              <VerticalDivider />
              <Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}>
                <CardContent sx={{ flex: "1 0 auto", mt:'18px', padding:'3px' }}>
                  <ServiceHeading component="div" variant="subtitle">
                    Pet Medicine
                  </ServiceHeading>
                  <ServiceSubheading
                    variant="subtitle1"
                    color="text.secondary"
                    component="div"
                    style={{

                    }}
                  >
                    Delivery service
                  </ServiceSubheading>
                </CardContent>
              </Box>
            </Card>
    </div>

    <div class="carousel-item">
    <Card
              sx={{
                display: "flex",
                width: "285px",
                height: "124px",
                backgroundColor: "transparent",
                border: "1px solid #CBCBCB",
                borderRadius: "12px",
                justifyContent: "center",
                boxShadow: "none",
                gap: "2rem",
              }}
            >
              <CardMedia
                component="img"
                alt="Live from space album cover"
                image={MedicalLab}
                sx={{ width: 41, height: 58.938, marginTop: "11%", marginLeft:'42px' }}
              />
              <VerticalDivider />
              <Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}>
                <CardContent sx={{ flex: "1 0 auto",ml:'-2rem', mt:'18px' }}>
                  <ServiceHeading component="div" variant="subtitle">
                    Medical Lab
                  </ServiceHeading>
                  <ServiceSubheading
                    variant="subtitle1"
                    color="text.secondary"
                    component="div"
                  >
                    Delivery service
                  </ServiceSubheading>
                </CardContent>
              </Box>
            </Card>         
    </div>

    <div class="carousel-item">
    <Card
              sx={{
                display: "flex",
                width: "285px",
                height: "124px",
                backgroundColor: "transparent",
                border: "1px solid #CBCBCB",
                borderRadius: "12px",
                justifyContent: "center",
                boxShadow: "none",
                gap: "2rem",
              }}
            >
              <CardMedia
                component="img"
                alt="Live from space album cover"
                image={Eyewear}
                sx={{ width: 41, height: 38.95, marginTop: "11%", marginLeft:'42px',
                 marginTop:'41px'  }}
              />
              <VerticalDivider />
              <Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}>
                <CardContent sx={{ flex: "1 0 auto", ml:'-2rem', mt:'18px' }}>
                  <ServiceHeading component="div" variant="subtitle">
                    Eye Wear
                  </ServiceHeading>
                  <ServiceSubheading
                    variant="subtitle1"
                    color="text.secondary"
                    component="div"
                  >
                    Delivery service
                  </ServiceSubheading>
                </CardContent>
              </Box>
            </Card>
 </div>
  </div>
</div>
      </div>    
      </div>      



  
      <hr className="horizontal-line" style={{ border: "1px solid", color: '#525260', marginTop: "58px" }} />
    </>


  );
};

export default Service;
