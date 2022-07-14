import React from 'react'
import { Box, Grid, styled, Typography, Button } from '@mui/material'

import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';

// Fist Container // 

const NameContainer = styled(Grid)`
    background-color: #ca8621;
    height: 35vh;
    
`
const TextNameContainer = styled(Box)`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
`
const TextNameFisrt = styled(Typography)`
    color: white;
    letter-spacing: 10px;
    padding-bottom: 10px;
`
const TextNameSecond = styled(Typography)`
    color: white;
    letter-spacing: 10px;
    font-size: 30px;
    font-weight: bold;
`
// Banner Container // 

const BannerCotainer = styled(Grid)`
    display: flex;
    ${props => props.theme.breakpoints.up("md")} {
        height: 35vh;
    }
    ${props => props.theme.breakpoints.down("md")} {
        height: 'auto';
    }
`
const BannerTextContainer = styled(Box)`
    flex: 1;
    height: 'auto';
`
const BannerText = styled(Box)`
    padding: 20px 30px;
    
`
const BannerPoster = styled(Box)`
    flex: 1;
    padding-bottom: 10px;
`
const HotItem = styled(Box)`
    background-color: #ca8621;
    width: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px;
    color: white;
    margin-bottom: 15px;
`

const TextHeadBanner = styled(Typography)`
    font-size: 38px;
    margin-bottom: 15px;
    font-weight: bolder;
    color: #ca8621;
`
const DescBanner = styled(Typography)`
    margin-bottom: 15px;
    
`
const PriceBanner = styled(Typography)`
    color: #ca8621;
`
const ButtonBanner = styled(Button)`
    background-color: #36599b;
    color:white;
    &:hover{
        background-color: black;
    }
`

// ProductShow Container // 

const ImageProduce = styled(Box)`

`

const ProductShowContainer = styled(Grid)`
    display: flex;
    padding: 40px 30px;
    background-color: #ebe6e6;
    
    ${props => props.theme.breakpoints.up("md")} {
        height: 80vh;
    }
    ${props => props.theme.breakpoints.down("md")} {
        height: 'auto';
    }
`

const ProductShow = styled(Grid)`
    padding: 10px;
`

const ProductList = styled(Box)`
    opacity: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    top:0;
    left: 0;
    background-color: rgba(0,0,0,0.3);
    z-index: 99;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.5s ease;
    &:hover{
        opacity: 1;
    }
`

const Icon =styled(Box)`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;
    transition: all 0.3s ease;
    cursor: pointer;

    &:hover{
        background-color: #d0e9eb;
        transform: scale(1.2);
    }
`

const Product = styled(Box)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    position: relative;
`

const ProductName = styled(Typography)`
    padding-top: 5px;
    font-size: 14px;
`

const ProductPrice = styled(Typography)`
    font-weight: lighter;
`

const products = [
    { photo: "https://i.pinimg.com/564x/56/3b/f4/563bf4848fb90c67faf54a7dcadf241a.jpg", name: "The Briarcliff 1 Light Mini ", price: "$ 120.00" },
    { photo: "https://i.pinimg.com/564x/ef/45/e1/ef45e1b2ec11794456f95a493d2e06e1.jpg", name: "V Studio Salinger 10", price: "$ 150.00" },
    { photo: "https://i.pinimg.com/564x/e6/e3/c3/e6e3c3ff09dba63d9240ff3a001d8ae4.jpg", name: "Fabric Tapered", price: "$ 80.00" },
    { photo: "https://i.pinimg.com/564x/1c/1f/36/1c1f36066979d6c1eb4d01c98f2a3342.jpg", name: "One Light Pandent", price: "$ 75.00" },
]


// Picture Container //
const ImagePoster = styled(Box)`
    height: 80vh;

`

const Lamp = () => {
    return (
        <Box>
            <Grid container spacing={0}>
                <NameContainer item xs={12} md={4}>
                    <TextNameContainer>
                        <TextNameFisrt variant='h6'>HANGING LAMP</TextNameFisrt>
                        <TextNameSecond variant='p'>COLLECTION</TextNameSecond>
                    </TextNameContainer>
                </NameContainer>

                <BannerCotainer item xs={12} md={8}>

                    <BannerTextContainer>
                        <BannerText>
                            <HotItem>
                                <Typography>HOT ITEM</Typography>
                            </HotItem>
                            <TextHeadBanner variant='h3'>WOOFLAMP</TextHeadBanner>
                            <DescBanner>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur obcaecati perspiciatis modi</DescBanner>
                            <Box sx={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                            }}>
                                <PriceBanner>PRICR $99.99</PriceBanner>
                                <ButtonBanner>BUY NOW</ButtonBanner>
                            </Box>
                        </BannerText>
                    </BannerTextContainer>

                    <BannerPoster>
                        <img
                            alt='ImageBanner'
                            src='https://cdn.shopify.com/s/files/1/1520/8686/products/beat6_5c3b8e15-cbd2-4f4b-bf63-59a64ba4305f.jpg?v=1657717853'
                            style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                            }}
                        />
                    </BannerPoster>
                </BannerCotainer>

                <ProductShowContainer item xs={12} md={4}>
                    <Grid container columnSpacing={0}>
                        {products.map(item => (
                            <ProductShow item xs={6}>
                                <Product>
                                    <ImageProduce>
                                        <img
                                            alt='ImageProduct'
                                            src={item.photo}
                                            style={{
                                                width: '100%',
                                                height: 'auto',
                                                objectFit: 'cover'
                                            }}
                                        />
                                    </ImageProduce>
                                    <ProductName variant='h7'>{item.name}</ProductName>
                                    <ProductPrice variant='p'>{item.price}</ProductPrice>
                                    <ProductList>
                                        <Icon>
                                            <ShoppingCartOutlinedIcon />
                                        </Icon>
                                        <Icon>
                                            <SearchOutlinedIcon />
                                        </Icon>
                                        <Icon>
                                            <FavoriteBorderOutlinedIcon />
                                        </Icon>
                                    </ProductList>
                                </Product>
                                
                            </ProductShow>
                        ))}
                    </Grid>
                </ProductShowContainer>

                <Grid item xs={12} md={8}>
                    <ImagePoster>
                        <img
                            alt='ImagePoster'
                            src='https://external-preview.redd.it/oFUwE63G_75qVc7ksQ6qFsdRZTSOola8ZZthOL6iHzY.jpg?width=960&crop=smart&auto=webp&s=f4a05fb3186173d528e36a016bf3ecaadf66a29e'
                            style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover'
                            }}
                        />
                    </ImagePoster>
                </Grid>

            </Grid>
        </Box>
    )
}

export default Lamp