import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import {Container, styled} from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid'
import '../../css/getTouch.css'
// import animation from '../../assets/location.json'
import Lottie from 'react-lottie';

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
`;

const StyledCardContent = styled(CardContent)`
display: flex;
    flex-direction: column;
    gap: 5px;
}
`;

const StyledHeading = styled(Typography)`

color: #08005F;
font-family: Inter;
font-size: 26px;
font-style: normal;
font-weight: 700;
line-height: normal;
`
const Styledsubheading = styled(Typography)`
color: #191919;
font-family: Questrial;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: normal;
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

`
const GetTouch = () => {

  const lottieOptions = {
    loop: true,
    autoplay: true,
    // animationData: animation,
  };

  return (
    <div className='gettouch-main-div'>
      <div className='gettouch-div'>
        <Grid container justifyContent="center" >
        <StyledCard>
          <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
        <StyledCardContent>
          <Styledsubheading>
          Services are with in minuets 
          </Styledsubheading>
          <StyledHeading>
          Get in touch
          </StyledHeading>
        </StyledCardContent>
        </Box>
    <VerticalDivider />
      <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
        <CardMedia>

        </CardMedia>
        <StyledCardContent>
          <div>
          <Lottie options={lottieOptions} height={122} width={122} />
          </div>
          <StyledDetails>
          42/89 A1 First Floor, Kakkanad , Kakkand Road , Eranakulam, India, Kerala
          </StyledDetails>
          <StyledWeb>
          helpus@zopsho.com
          </StyledWeb>
        </StyledCardContent>
        </Box>
     
    </StyledCard>
    </Grid>
    </div>
 

    </div>
  )
}

export default GetTouch