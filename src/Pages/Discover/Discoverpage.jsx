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
import '../../css/discover.css'



const StyledContainer = styled(Container)`


`

const MainContainer = styled(Box)`
height: 369px;
background:#FFF9E5 url(${BackgroundImg})  center;
background-repeat: no-repeat;
background-size: 635px 357px ;

`
const StyledImg =styled('img')`
margin-top:36%;

@media (min-width: 320px) and (max-width: 480px) {
    display:none;
}
`
const ImageBox = styled("div")`
margin-left:18.3%;
width: 247px;
height: 278px;
flex-shrink: 0
`
const ContentBox = styled("div")`
margin-left: 6rem;
margin-top: 8rem;

@media (min-width: 320px) and (max-width: 480px) {
    margin-left: -18rem;
    margin-top: 9rem;
}

`
const StyledHeading = styled(Typography)`
x
color: #0E0B34;
font-size: 24px;
font-style: normal;
font-weight: 501;
line-height: normal;
margin-top: 34px;

@media (min-width: 320px) and (max-width: 480px) {
color: #0E0B34;;
font-family: Inter;
font-size: 17px;
font-style: normal;
font-weight: 500;
line-height: normal;
margin-right: 25px;
}
`

const StyledTypo = styled(Typography)`
color: #0E0B34;
font-family: Questrial;
font-size: 15px;
font-style: normal;
font-weight: 400;
margin-top: 15px;
line-height: normal;



@media (min-width: 320px) and (max-width: 480px) {
    color: #0E0B34;
font-family: Questrial;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: normal;
margin-right: 31px;
}
`
const ImageBoxs = styled("div")`
display: flex;
margin-top: 32px;
justify-content: space-between;
@media (min-width: 320px) and (max-width: 480px) {
   
}
`

const PlaystoreBox = styled("div")`

`
const AppstoreBox = styled("div")`


`
const Discoverpage = () => {
  return (
    <div className='discover-main-div' style={{
        background: `#FFF9E5 url(${BackgroundImg}) no-repeat  center`,
        backgroundSize: "635px 357px",
        
        
    }}>
       <div className='discover-div'>
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
        <PlaystoreBox>
            <img className='playstore-img' src={GooglePlayImg} ></img>
        </PlaystoreBox>
        <AppstoreBox>
            <img  className='appstore-img' src={AppstoreImg} style={{marginRight:'15px'}}></img>
        </AppstoreBox>
        </ImageBoxs>
       
    </ContentBox>
       </div>
    </div>
  )
}

export default Discoverpage