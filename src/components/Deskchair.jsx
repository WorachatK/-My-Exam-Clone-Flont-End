import React from 'react'
import {Box,Grid,styled,Typography,Button} from '@mui/material'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';

// Fist Container // 

const NameContainer = styled(Grid)`
    background-color: #182d68;
    height: 40vh;
    
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
        height: 40vh;
    }
    ${props => props.theme.breakpoints.down("md")} {
        height: 'auto';
    }
`
const BannerTextContainer = styled(Box)`
    flex: 1.5;
    height: 'auto';
`
const BannerText = styled(Box)`
    padding: 20px 30px;
    display: flex;
    flex-direction: column;
`
const BannerPoster = styled(Box)`
    flex: 1;
`
const HotItem = styled(Box)`
    background-color: #182d68;
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
    color: #182d68;
`
const DescBanner = styled(Typography)`
    margin-bottom: 15px;
    
`
const PriceBanner = styled(Typography)`
    color: #1642bb;
`
const ButtonBanner = styled(Button)`
    background-color: #ca667f;
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
    padding-top: 10px;
    font-size: 12px;
`

const ProductPrice = styled(Typography)`
    font-weight: lighter;
`


const products = [
    {photo:"https://cdn.shopify.com/s/files/1/0012/2005/1002/products/431341b3d1ba8f45951af8fadb89ac342a342cd6_ed04ea1f-d19b-409e-ace6-4750c6042b5e.jpg?v=1649053654" , name:"Fiber Bar + Counter Stool",price:"$ 479.00"},
    {photo:"https://secure.img1-fg.wfcdn.com/im/39084840/resize-h445%5Ecompr-r85/1959/195977073/Jordan+Side+Chair.jpg" , name:"Aeon Furniture Paris-2 Dining Chair",price:"$ 250.00"},
    {photo:"https://ak1.ostkcdn.com/images/products/is/images/direct/903bfb27e23301f4485d63797fc295319cc327b9/Carson-Carrington-Silkeborg-Guest-Chair.jpg" , name:"Carson Carrington Silkeborg Guest Chair",price:"$ 180.00"},
    {photo:"https://assets.pbimgs.com/pbimgs/ab/images/dp/wcm/202213/0124/img44z.jpg" , name:"Eco-Friendly Stacking Dining Chair",price:"$ 430.00"},
]

// Picture Container //
const ImagePoster = styled(Box)`
    height: 80vh;

`

const Deskchair = () => {
  return (
    <Box>
        <Grid container spacing={0}>

            <BannerCotainer item xs={12} md={8}>  
                <BannerPoster>
                    <img 
                        src='https://secure.img1-fg.wfcdn.com/im/94658837/resize-h445%5Ecompr-r85/1546/154650730/30.00%2527%2527+Wide+Tufted+Lounge+Chair.jpg'
                        style={{
                            width:'100%',
                            height: '100%',
                            objectFit:'scale-down',
                        }}
                    />
                </BannerPoster>

                <BannerTextContainer>
                    <BannerText>
                        <HotItem>
                            <Typography>ITEM SALE</Typography>
                        </HotItem>
                        <TextHeadBanner variant='h3'>DESKCHAIR FROM IKEA</TextHeadBanner>
                        <DescBanner>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur obcaecati perspiciatis modi</DescBanner>
                        <Box sx={{
                            display:'flex',
                            justifyContent:'space-between',
                            alignItems:'center',
                        }}>
                            <ButtonBanner>BUY NOW</ButtonBanner>
                            <PriceBanner>PRICR $175.35</PriceBanner>
                        </Box>
                    </BannerText>
                </BannerTextContainer>

            </BannerCotainer>

            <NameContainer item xs={12} md={4}>
                <TextNameContainer>
                    <TextNameFisrt variant='h6'>SERIES CHAIR</TextNameFisrt>
                    <TextNameSecond variant='p'>COLOURED</TextNameSecond>
                </TextNameContainer>
            </NameContainer>

            <Grid item xs={12} md={8}>
                <ImagePoster>
                    <img 
                        src='https://www.dailydreamdecor.com/wp-content/uploads/2016/10/scandi-grey-dinning.jpg'
                        style={{
                            width:'100%',
                            height: '100%',
                            objectFit:'cover'
                        }}
                    />
                </ImagePoster>
            </Grid>

            <ProductShowContainer item xs={12} md={4}>
                <Grid container columnSpacing={0}>
                    {products.map(item=>(
                    <ProductShow item xs={6}>
                        <Product>
                            <ImageProduce>
                            <img 
                                src={item.photo}
                                style={{
                                    width:'100%',
                                    height: '100%',
                                    objectFit:'cover'
                                }}
                                />
                            </ImageProduce>
                            <ProductName variant='h7'>{item.name}</ProductName>
                            <ProductPrice variant='p'>{item.price}</ProductPrice>
                            <ProductList>
                                <Icon>
                                    <ShoppingCartOutlinedIcon/>
                                </Icon>
                                <Icon>
                                    <SearchOutlinedIcon/>
                                </Icon>
                                <Icon>
                                    <FavoriteBorderOutlinedIcon/>
                                </Icon>
                            </ProductList>
                        </Product>
                        
                    </ProductShow>
                    ))}
                </Grid>
            </ProductShowContainer>

        </Grid>
    </Box>
  )
}

export default Deskchair