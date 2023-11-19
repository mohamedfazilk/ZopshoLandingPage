import {styled} from '@mui/material';
import { Box,Typography } from '@mui/material'
import Grid from '@mui/material/Grid';
import React from 'react'
   
const OrderTextBox = styled(Box)(()=>({
  display:'flex',
  gap:'2rem',
  marginTop:'5%',

}))

const OrderContent = styled(Box)(()=>({

}))

const OrderTitle = styled(Typography)(()=>({
  fontFamily:'Inter',
  fontSize:'16px',
  fontStyle:'normal',
  fontWeight:'600',
  lineHeight:'normal',
}))
const NumberText = styled(Box)(()=>({
  color: '#120A6C',
  fontFamily:'Inter',
  fontSize:'50px',
  fontStyle:'normal',
  fontWeight:'800',
  lineHeight:'normal',
}))

const Order_content = () => {
  return (
    <Box style={{width: '100%',  height:'342px' , background: '#FFFCFC',}}
    sx={{
       width:'100%',
      marginTop:'52px'
    }} >
      <Box sx={{
        marginLeft:'7rem'
      }}>

       <Box sx={{
           background:'linear-gradient(90deg, #1F168B 4.12%, rgba(200, 53, 106, 0.96) 85.37%)',
           backgroundClip:'text',
           WebkitBackgroundClip:'text',
           WebkitTextFillColor:'transparent'
       }}>
        <OrderTitle >
        What you need to do to order
        </OrderTitle>
       </Box>
       <Box sx={{display:'flex', justifyContent:'space-between'}}>
       <OrderTextBox>
        <NumberText>
          01
        </NumberText>
        <OrderContent>
          <Typography sx={{color: '#08005F',

fontFamily: 'Inter',
fontSize: '22px',
fontStyle: 'normal',
fontWeight: '600',
lineHeight: 'normal',}}>
          Select your Store
          </Typography>
          <Typography sx={{color: '#828282',
          marginTop:'5%',
    fontFamily:'Questrial',
    fontSize:'14px',
    fontStyle:'normal',
    fontWeight:'400',
    lineHeight:'166.023%',}}>
          from your morning coffee needs to snacks<br/> for your late night binge.
          </Typography>
        </OrderContent>
       </OrderTextBox>

       <OrderTextBox>
        <NumberText>
          01
        </NumberText>
        <OrderContent>
          <Typography sx={{color: '#08005F',

fontFamily: 'Inter',
fontSize: '22px',
fontStyle: 'normal',
fontWeight: '600',
lineHeight: 'normal',}}>
          Select your Store
          </Typography>
          <Typography sx={{color: '#828282',
          marginTop:'5%',
    fontFamily:'Questrial',
    fontSize:'14px',
    fontStyle:'normal',
    fontWeight:'400',
    lineHeight:'166.023%',}}>
          from your morning coffee needs to snacks<br/> for your late night binge.
          </Typography>
        </OrderContent>
       </OrderTextBox>

       <OrderTextBox>
        <NumberText>
          01
        </NumberText>
        <OrderContent>
          <Typography sx={{color: '#08005F',

fontFamily: 'Inter',
fontSize: '22px',
fontStyle: 'normal',
fontWeight: '600',
lineHeight: 'normal',}}>
          Select your Store
          </Typography>
          <Typography sx={{color: '#828282',
          marginTop:'5%',
    fontFamily:'Questrial',
    fontSize:'14px',
    fontStyle:'normal',
    fontWeight:'400',
    lineHeight:'166.023%',}}>
          from your morning coffee needs to snacks<br/> for your late night binge.
          </Typography>
        </OrderContent>
       </OrderTextBox>
       </Box>
       </Box>

       <hr  style={{border:'1px solid',
    color:'blue',
    marginTop:'58px',}}/>
    </Box>
  )
}

export default Order_content
{/* <Box>

<Box>
    <Typography>
        01
    </Typography>
</Box>
<Box>

<Box>
    <Typography>
    Select your Store
    </Typography>
    <Typography>
    from your morning coffee needs to snacks for your late night binge.
    </Typography>
</Box>

</Box>
<Box>
    <Typography>
        01
    </Typography>
</Box>
<Box>
<Box>
    <Typography>
    Select your Store
    </Typography>
    <Typography>
    from your morning coffee needs to snacks for your late night binge.
    </Typography>
</Box>

</Box>

</Box> */}
