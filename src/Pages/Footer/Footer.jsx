import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import {Container, styled,css} from '@mui/material';
import LogoImg from '../../assets/footerlogo.svg'
import WhatsappImg from '../../assets/whatsappColor.svg'
import FacebookImg from '../../assets/facebookColor.svg'
import InstaImg from '../../assets/instaColor.svg'
import LInkedinImg from '../../assets/linkedinColor.svg'
import '../../css/footer.css'
import { Link } from 'react-router-dom';

const MainContainer = styled(Box)`
background: #1F1F1F;
height: 470px;
`


const StyledContainer = styled(Container)`
display: flex;
    justify-content: space-evenly;
    margin-top: 0px;
    padding: 55px;;
`
const LogoBox = styled(Box)`
width: 135px;
height: 47.588px;

${props => css`
@media (min-width: 320px) and (max-width: 480px) {
    width: 103px;
    height: 31.623px;
    flex-shrink: 0;
}
`}
`

const StyledTypo = styled(Typography)`

font-family: Inter;
margin-top:0.6rem;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: 198.023%;
color: #FFF;
${props => css`
@media(min-width: 320px) and (max-width: 508px) {
    font-size: 13px;
}
`}
`
const StyledHeading = styled(Typography)`
color: #FFF;
font-family: Inter;
font-size: 15px;
font-style: normal;
font-weight: 500;
line-height: 159.023%; /* 28.624px */
white-space:nowrap
${props => css`
@media (min-width: 320px) and (max-width: 508px) {
font-size:13px;
}
`}
`
const StyledText = styled(Typography)`
color:white
color: #FFF;
font-family: Inter;
font-size: 12px;
font-style: normal;
font-weight: 400;
line-height: 159.023%;
white-space: nowrap;
${props => css`
@media (min-width: 320px) and (max-width: 480px) {
    font-size:11px;
}
`}
`
const ContentBox = styled(Box)`

`
const BottomContainer = styled(Container)`
display: flex;
justify-content: space-between;

`
const StyledCopyright = styled(Box)`
display: flex;
justify-content: space-between;
gap: 9px;
flex-direction: column;
`

const CopyrightText = styled(Typography)`
color: #A5A4A4;
font-family: Inter;
font-size: 12px;
font-style: normal;
font-weight: 400;
line-height: 159.023%; 

`

const TermsText = styled(Box)`
display: flex;
justify-content: space-between;
gap: 2rem;

@media (min-width: 320px) and (max-width: 480px){
gap: 1rem;
}
`

const StyledIcons = styled('div')`
display: flex;
    justify-content: space-between;
    gap: 1rem;
    margin-top: 3rem;
    @media (min-width: 320px) and (max-width: 480px) {
        display: none;
      }
    

`

const AllrightText = styled(Typography)`
color: #FFF;
font-family: Inter;
font-size: 12px;
font-style: normal;
font-weight: 400;
line-height: 159.023%; /* 22.263px */
margin-top: -2.5rem;
`

const ParaBox = styled(Box)`
margin-top:20px;
display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    gap: 1.5rem;
    color:#fff

`

const   ContentSection = styled(Box)`
display: flex;
    justify-content: space-between;
    gap: 7rem;
    margin-right: 3rem;
`


const MobileIcons = styled("div")`
  display: none;
  @media (min-width: 320px) and (max-width: 480px) {
    display: flex;
    margin-top: -5rem;
    margin-left: 46%;
    gap: 11px;
    margin-bottom: 12%;
}

`;

const Styleddiv  = styled ("div")`

`

const Footer = () => {
  return (
    <>
    <footer className='Main-footer'>
    <div className='footer-div'>
        <Box className='footer-box' sx={{
            marginRight:'14rem',
            "@media (min-width: 320px) and (max-width: 480px)":{
                marginRight:'0px',
                marginLeft:'-19%'
            }
        }}>
            <LogoBox>
            <img src={LogoImg} style={{width:'100%', height:'100%'}}></img>
            </LogoBox>
            <div className='styled-typo'>
            <StyledTypo className='styled-typo-text'>
            Welcome to zopsho, a dynamic and innovative company
             dedicated to driving the success of startups and emerging businesses. 
            </StyledTypo>
            </div>
        </Box>

    <div className='content-section'>
        <div className='service-content'>
    <div>
       <StyledHeading>
       Services
       </StyledHeading>

      <ParaBox>
       <StyledText>
       Website Development
       </StyledText>
       <StyledText>
       UI/UX Designing
       </StyledText>
       <StyledText>
       IT Consulting
       </StyledText>
       <StyledText>
       Graphics Designing
       </StyledText>
       </ParaBox>
      </div>

        <div>
       <StyledHeading>
       Social Link
       </StyledHeading>

        <ParaBox>
       <StyledText>
       Instagram
       </StyledText>
       <StyledText>
       LinkedIn 
       </StyledText>
       <StyledText>
       WhatsApp
       </StyledText>
       </ParaBox>
       
      </div>

      </div>


        <div>
       <StyledHeading>
       Company
       </StyledHeading>

       <ParaBox>
       <StyledText>
       About
       </StyledText>
       <StyledText>
       Career
       </StyledText>
       <StyledText>
       Contact
       </StyledText>
       </ParaBox>
      </div>


      </div>
       </div>

       <MobileIcons>
        <Link  to='https://wa.me/8086447566 '>
        <img src={WhatsappImg}></img>
        </Link>
       
        <img src={FacebookImg}></img>
        <Link to='https://instagram.com/zopsho?igshid=OGQ5ZDc2ODk2ZA== '>
        <img src={InstaImg}></img>
        </Link>
        <Link to='https://www.linkedin.com/company/zopsho/ '>
        <img src={LInkedinImg}></img>
        </Link>
       
          </MobileIcons>

          <div className='horizontal-line-footer'></div>
       <div className='bottom-div'>
        <StyledCopyright>
            <TermsText>
        <CopyrightText>
        Terms of service
        </CopyrightText>
        <CopyrightText>
       Privacy Policy
        </CopyrightText>
        <CopyrightText>
       Cookies
        </CopyrightText>
        </TermsText>

        <div className='copyright'>
        
        <AllrightText>
        Copyright © 2023 zopsho. All rights reserved.
        </AllrightText>
        </div>
        </StyledCopyright>
    
        <StyledIcons className='icons-div'>
        <img src={WhatsappImg}  className='imgstyles'></img>
        <img src={FacebookImg} className='imgstyles'></img>
        <img src={InstaImg} className='imgstyles'></img>
        <img src={LInkedinImg} className='imgstyles'></img>
        </StyledIcons>
       </div>
       </footer>
    </>
  )
}

export default Footer