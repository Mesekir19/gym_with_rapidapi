import React from 'react'
import { Box, Typography, Stack } from '@mui/material'
import Logo from "../assets/images/photo_2023-03-30_21-23-12.jpg";

const Footer = () => {
  return (
    <Box mt="80px" bgcolor="#fff3f4">
      <Stack gap="40px" alignItems="center" px="40px" pt="24px">
        <img src={Logo} alt="logo" width="200px" height="200px"/>
        <Typography variant='h5' pb="40px" mt="20px">
          Mesekir Codes 2023
        </Typography>
      </Stack>
    </Box>
  )
}

export default Footer