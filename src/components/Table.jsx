import React from 'react'
import { Box, Grid, styled, Typography, Button } from '@mui/material'

import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';

// Fist Container // 

const NameContainer = styled(Grid)`
    background-color: #68bcd1;
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
    flex: 2;
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
    background-color: #68bcd1;
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
    color: #68bcd1;
`
const DescBanner = styled(Typography)`
    margin-bottom: 15px;
    
`
const PriceBanner = styled(Typography)`
    color: #68bcd1;
`
const ButtonBanner = styled(Button)`
    background-color: #3e4c5f;
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
    {photo: "https://cdn11.bigcommerce.com/s-wmxjxjtb2t/images/stencil/800x800/products/480244/1483635/41BoloMHq-L._SL500___02538.1655704255.jpg?c=1", name: "SEI Furniture Simondley End Table", price: "$ 120.00" },
    {photo:"https://assets.onekingslane.com/m/457772631a56b050/Product_Zoom-Product_797379013976" , name:"Maud Nesting Tables",price:"$ 605.00"},
    {photo:"https://cdn.shopify.com/s/files/1/0266/1954/3596/products/home-design_e029ace6-e494-4e79-b69f-8e6b4e60c2d0_1800x1800.jpg?v=1613560457" , name:"Malibu Round Dining Table",price:"$ 1470.00"},
    {photo:"https://ak1.ostkcdn.com/images/products/is/images/direct/34d7f1b245f71750c1ff0e52b42088bbce3c26e4/Dining-Table-Herval-Furniture-74x43%2C-6-Seats%2C-Oval%2C-Solid-Wood.jpg" , name:"Dining Table Herval Furniture",price:"$ 818.00"},
]


// Picture Container //
const ImagePoster = styled(Box)`
    height: 80vh;

`

const Table = () => {
    return (
        <Box>
            <Grid container spacing={0}>
                <NameContainer item xs={12} md={4}>
                    <TextNameContainer>
                        <TextNameFisrt variant='h6'>WOOD TABLE</TextNameFisrt>
                        <TextNameSecond variant='p'>COLLECTION</TextNameSecond>
                    </TextNameContainer>
                </NameContainer>

                <BannerCotainer item xs={12} md={8}>

                    <BannerTextContainer>
                        <BannerText>
                            <HotItem>
                                <Typography>TRENDING ITEM</Typography>
                            </HotItem>
                            <TextHeadBanner variant='h3'>WOOF TABLE</TextHeadBanner>
                            <DescBanner>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur obcaecati perspiciatis modi</DescBanner>
                            <Box sx={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                            }}>
                                <PriceBanner>PRICR $90.00</PriceBanner>
                                <ButtonBanner>BUY NOW</ButtonBanner>
                            </Box>
                        </BannerText>
                    </BannerTextContainer>

                    <BannerPoster>
                        <img
                            src='https://cdn11.bigcommerce.com/s-3ldm2uoznc/images/stencil/1280x1280/products/13516/69493/track-round-dining-table-828__01721.1635275700.jpg?c=1'
                            style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'scale-down',
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
                            src='https://i0.wp.com/literallydarling.com/wp-content/uploads/2015/10/photo-1416339684178-3a239570f315.jpg?resize=1110%2C1065&ssl=1'
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

export default Table