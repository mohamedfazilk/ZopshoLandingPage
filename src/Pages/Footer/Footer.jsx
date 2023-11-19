import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import {Container, styled} from '@mui/material';
import LogoImg from '../../assets/footerlogo.svg'
import WhatsappImg from '../../assets/whatsappImg.svg'
import FacebookImg from '../../assets/FaceImg.svg'
import InstaImg from '../../assets/InstaImg.svg'
import LInkedinImg from '../../assets/LinkedIMg.svg'

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
`

const StyledTypo = styled(Typography)`

font-family: Inter;
margin-top:0.6rem;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: 198.023%;
color: #FFF;
`
const StyledHeading = styled(Typography)`
color: #FFF;
font-family: Inter;
font-size: 15px;
font-style: normal;
font-weight: 500;
line-height: 159.023%; /* 28.624px */
white-space:nowrap
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
`

const StyledIcons = styled(Box)`
display: flex;
    justify-content: space-between;
    gap: 1rem;
    margin-top: 3rem;

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

const Footer = () => {
  return (
    <>
    <MainContainer>
    <StyledContainer>
        <Box sx={{
            marginRight:'14rem'
        }}>
            <LogoBox>
            <img src={LogoImg} style={{width:'100%', height:'100%'}}></img>
            </LogoBox>
            <StyledTypo>
            Welcome to zopsho, a dynamic and innovative company
             dedicated to driving the success of startups and emerging businesses. 
            </StyledTypo>
        </Box>

    <ContentSection>

    <ContentBox>
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
      </ContentBox>

        <ContentBox>
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
       
      </ContentBox>


        <ContentBox>
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
      </ContentBox>


      

      </ContentSection>
       </StyledContainer>


       <BottomContainer>
        <StyledCopyright>
            <TermsText>
        <CopyrightText>
        Terms of service
        </CopyrightText>
        <CopyrightText>
        Terms of service
        </CopyrightText>
        <CopyrightText>
        Terms of service
        </CopyrightText>
        </TermsText>

        <Box>
        
        <AllrightText>
        Copyright © 2023 zopsho. All rights reserved.
        </AllrightText>
        </Box>
        </StyledCopyright>
    
        <StyledIcons>
        <img src={WhatsappImg}></img>
        <img src={FacebookImg}></img>
        <img src={InstaImg}></img>
        <img src={LInkedinImg}></img>
        </StyledIcons>
       </BottomContainer>
    </MainContainer>
    </>
  )
}

export default Footer