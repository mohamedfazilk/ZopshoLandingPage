import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import {Container, styled} from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid'
import BackgroundImg from '../../assets/Discoverbackground.svg'
import PhoneImg from '../../assets/phoneimg.svg'
import GooglePlayImg from '../../assets/Googleplay.svg'
import AppstoreImg from '../../assets/Applestore.svg'



const StyledContainer = styled(Container)`
background-position: center center,
text-align:center;
position:relative;
margin-top:2%;
display:flex

`

const MainContainer = styled(Box)`
height: 369px;
background:#FFF9E5 url(${BackgroundImg})  center;
background-repeat: no-repeat;
background-size: 635px 357px ;

`
const StyledImg =styled('img')`
margin-top:36%;
`
const ImageBox = styled(Box)`
margin-left:15.5%;
width: 247px;
height: 278px;
flex-shrink: 0
`
const ContentBox = styled(Box)`
margin-left: 6rem;
margin-top: 8rem;

`
const StyledHeading = styled(Typography)`
x
color: #0E0B34;
font-size: 24px;
font-style: normal;
font-weight: 501;
line-height: normal;
margin-top: 34px;
`

const StyledTypo = styled(Typography)`
color: #0E0B34;
font-family: Questrial;
font-size: 15px;
font-style: normal;
font-weight: 400;
margin-top: 15px;
line-height: normal;
`
const ImageBoxs = styled(Box)`
display: flex;
margin-top: 32px;
justify-content: space-between;

`
const Discoverpage = () => {
  return (
    <>
    <MainContainer>
       <StyledContainer>
        <ImageBox>
            <StyledImg src={PhoneImg}></StyledImg>
        </ImageBox>
        <ContentBox>
        <StyledHeading>
        Discover the new zopsho app
            </StyledHeading>
        <StyledTypo>
        Get what you need, when you need it.
        </StyledTypo>
        <ImageBoxs>
        <Box >
            <img src={GooglePlayImg} ></img>
        </Box>
        <Box>
            <img src={AppstoreImg} style={{marginRight:'15px'}}></img>
        </Box>
        </ImageBoxs>
       
    </ContentBox>
       </StyledContainer>
    </MainContainer>
    </>
  )
}

export default Discoverpage