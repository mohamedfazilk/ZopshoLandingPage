import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import {Container, styled} from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid'
import '../../css/getTouch.css'
import animation from '../../assets/location.json'
import Lottie from 'react-lottie';
import WhatsappImg from '../../assets/whatsappColor.svg'
import FacebookImg from '../../assets/facebookColor.svg'
import InstaImg from '../../assets/instaColor.svg'
import LInkedinImg from '../../assets/linkedinColor.svg'
import { Link } from 'react-router-dom';

const MainContainer = styled(Container)`
width: 1535px;
height: 267px;
flex-shrink: 0;
`

const VerticalDivider = styled('div')({
    background: '#E0E0E0',
    width:'1px',
    flexShrink:'0px',
    height: '141px',
    marginTop:'2%',
  });

  const StyledCard = styled(Card)`
  display: flex;
  width: 856px;
  height: 174px;
  background-color: transparent;
  margin-top: 49px;
  border: 1px solid #797979;
  border-radius: 8px;
  justify-content: center;
  gap: 2rem;
  box-shadow: none;
  @media (min-width: 320px) and (max-width: 480px) {
    display: flex;
    flex-direction: column;
  width: 856px;
  height: 304px;
  background-color: transparent;
  border: 1px solid #797979;
  border-radius: 8px;
  justify-content: center;
  gap: 2rem;
  box-shadow: none;
  margin-top: -1rem;
   
  }
`;

const StyledCardContent = styled("div")`
display: flex;
    flex-direction: column;
    gap: 5px;
`;

const StyledHeading = styled(Typography)`

color: #08005F;
font-family: Inter;
font-size: 26px;
font-style: normal;
font-weight: 700;
line-height: normal;
@media (min-width: 320px) and (max-width: 480px) {
  color:white;
  font-size: 20px;
  margin-top: 5%;
}
`
const Styledsubheading = styled(Typography)`
color: #191919;
font-family: Questrial;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: normal;
@media (min-width: 320px) and (max-width: 480px) {
  color:white;
  font-size: 14px;
}
`

const StyledDetails = styled(Typography)`

color: #6E6E6E;
font-family: Questrial;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: 150%;
width: 360px;
height:48px;
width: 296px;
margin-left: 4%;

@media (min-width: 320px) and (max-width: 480px) {
  color:white;
  margin-left: 0rem;

}
`
const StyledWeb = styled(Typography)`
color: #191919;
font-family: Inter;
font-size: 16px;
font-style: normal;
font-weight: 501;
line-height: normal;
width: 180px;
height:22px;
margin-left: 17%;

@media (min-width: 320px) and (max-width: 480px) {
  color:white;
  font-weight: 500;
  font-size:15px;
  margin-left: 0;
}

`
const StyledIcons = styled ('div')`
display: flex;
justify-content: space-between;
gap: 1.2rem;
margin-top: 10%;
}
`
const MobileIcons = styled ("div")`
  display: none;
  @media (min-width: 320px) and (max-width: 480px) {
    display: flex;
    gap: 1rem;
  }

`;

const StyledDetailsContainer = styled("div")`
  display: flex;
  align-items: center;
  gap: 10px;
  @media (min-width: 320px) and (max-width: 480px) {
    display:none;
  }
`;

const GetTouch = () => {

  const lottieOptions = {
    loop: true,
    autoplay: true,
    animationData: animation,
  };

  return (
    <div className='gettouch-main-div'>
      <div className='gettouch-div'>
        <Grid container justifyContent="center" className='grid-container'>
        <StyledCard className='main-card'>
          <Box sx={{ display: 'flex',
           alignItems: 'center',
            pl: 1, pb: 1
            
            }}>
        <StyledCardContent>
          <Styledsubheading>
          Services are with in minuets 
          </Styledsubheading>
          <StyledHeading>
          Get in touch
          </StyledHeading>
        </StyledCardContent>
        </Box>
    <VerticalDivider className='verticaldivider' />
      <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1,mt:'12%',
     '@media   (min-width: 320px) and (max-width: 508px)': {
      mt: '0%',
    }, }}>
        <CardMedia>

        </CardMedia>
        <StyledCardContent className='card-leftcontent'>
        <StyledDetailsContainer>
          <Lottie  options={lottieOptions} width={34} height={34}/>
          <StyledDetails>

          42/89 A1 First Floor, Kakkanad , Kakkand Road , Eranakulam, India, Kerala
          </StyledDetails>
          </StyledDetailsContainer>
          <StyledDetails className='mobile-only'>
    42/89 A1 First Floor, Kakkanad, Kakkand Road, Eranakulam, India, Kerala
  </StyledDetails>
          <StyledWeb>
          helpus@zopsho.com
          </StyledWeb>
          <MobileIcons>
          <StyledIcons>
          <Link to='https://wa.me/8086447566 '>
        <img src={WhatsappImg} style={{width:'22px', height:'22px',color:'red'}}></img>
        </Link>
        <Link to=''>
        <img src={FacebookImg}  style={{width:'22px', height:'22px',color:'#20B038'}}></img>
        </Link>
        <Link to='https://instagram.com/zopsho?igshid=OGQ5ZDc2ODk2ZA== '>
        <img src={InstaImg} style={{width:'22px', height:'22px',color:'#20B038'}}></img>
        </Link>
        <Link to='https://www.linkedin.com/company/zopsho/ '>
        <img src={LInkedinImg} style={{width:'22px', height:'22px',color:'#20B038'}}></img>
        </Link>
    
        </StyledIcons>
          </MobileIcons>
        </StyledCardContent>
        </Box>
     
    </StyledCard>
    </Grid>
    </div>
 

    </div>
  )
}

export default GetTouch