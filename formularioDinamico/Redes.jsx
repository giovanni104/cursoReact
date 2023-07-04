import React from 'react'
import Stack from '@mui/material/Stack';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PinterestIcon from '@mui/icons-material/Pinterest';
import YouTubeIcon from '@mui/icons-material/YouTube';
export const Redes = () => {
  return (
    <Stack spacing={2} direction={'row'}>
        
        <FacebookIcon style={{color:'blue',cursor:'pointer'}}/> 
        <InstagramIcon style={{color:'blue',cursor:'pointer'}}/> 
        <LinkedInIcon style={{color:'blue',cursor:'pointer'}}/> 
        <PinterestIcon style={{color:'blue',cursor:'pointer'}}/>
        <YouTubeIcon style={{color:'blue',cursor:'pointer'}}/>
         </Stack>
  )
}
