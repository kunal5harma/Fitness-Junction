import React from 'react'
import { Box, Stack, Typography } from '@mui/material'
import Logo from '../assets/images/logo2.png'

const Footer = () => {
  return (
    <Box mt='20px' bgcolor='#fff3f4'>
      <Stack gap='0px' alignItems='center' px='40px' pt='24px'>
        <img src={Logo} alt="logo" width='40px' height='40px' />
        <Typography variant='h5' pb='0px' mt='0px'>
          Fitness Junction
        </Typography>
        <Typography variant='h5' pb='40px' mt='20px'>
          Make Yourself <span style={{ color: "red" }}>Stronger</span> Than Your <span style={{ color: "red" }}>Excuses</span>.
        </Typography>
      </Stack>
    </Box>
  )
}

export default Footer