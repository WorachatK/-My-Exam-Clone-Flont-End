import React from 'react'
import {Box,styled,Typography} from '@mui/material'

const ImageContainer = styled(Box)`
    width: '100%';
`

const TextContainer = styled(Box)`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`
const TextTop = styled(Typography)`
    font-size: 45px;
`
const TextBottom = styled(Typography)`
    font-size: 65px;
`

const Home = () => {
  return (
    <Box sx={{position: 'relative'}}>
        <ImageContainer>
            <img 
                src='https://img.freepik.com/premium-photo/living-room-interior-with-fabric-armchair-lamp-book-plants-empty-yellow-wall-background_41470-707.jpg?w=2000'
                style={{
                    width:"100%",
                    height: "70vh",
                    padding: 0,
                    margin: 0,
                    objectFit:'cover',
                }}
            />
        </ImageContainer>
        <TextContainer>
            <TextTop variant='h5'>Furniture</TextTop>
            <TextBottom variant='p'>Collection</TextBottom>
        </TextContainer>
    </Box>
    
  )
}

export default Home