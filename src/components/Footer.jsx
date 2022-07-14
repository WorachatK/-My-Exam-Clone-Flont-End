import React from 'react'
import {Box,styled,Typography} from '@mui/material'

import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';

const FooterContainer = styled(Box)`
    background-color: #3c4a8b;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    ${props => props.theme.breakpoints.up("md")} {
        height: 30vh;
    }
    ${props => props.theme.breakpoints.down("md")} {
        height: 'auto';
    }
`

const Top = styled(Box)`
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-bottom: 10px;
`
const TopName = styled(Box)`
    padding-bottom: 10px;
`
const TopIcon = styled(Box)`
    display: flex;
`
const SocialIcon = styled(Box)`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: #${props=>props.color};
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 5px;
    cursor: pointer;
`
const Bottom = styled(Box)`
    width: 50%;
    padding: 20px;
    ${props => props.theme.breakpoints.down("md")} {
        width: 90%;
    }
`
const TextBottom =styled(Typography)`
    
`

const Footer = () => {
  return (
    <FooterContainer>
        <Top>
            <TopName>
                <Typography  variant='h4' fontFamily='Lobster'>ANTON</Typography>
            </TopName>
            <TopIcon>
            <SocialIcon color="2e5bd6">
                    <FacebookIcon/>
                </SocialIcon>
                <SocialIcon color="cb3fe7">
                    <InstagramIcon />
                </SocialIcon>
                <SocialIcon color="3081cc">
                    <TwitterIcon />
                </SocialIcon>
                <SocialIcon color="cc3030">
                    <PinterestIcon />
            </SocialIcon>
            </TopIcon>
        </Top>

        <Bottom>
            <TextBottom variant='p'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                Molestias aperiam ea ad voluptate fugit aliquid ex incidunt aspernatur quod, 
            </TextBottom>
        </Bottom>
    </FooterContainer>
  )
}

export default Footer