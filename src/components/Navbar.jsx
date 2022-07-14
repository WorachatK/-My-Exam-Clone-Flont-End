import { Box, Container, Toolbar, Typography,Badge,styled,Stack  } from '@mui/material'
import React from 'react'

import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';

const pages = ["Home","Element","Shop","Blog","Page","Contact Us"]

const Header = styled(Container)`
    flex-grow: 1;
`
const ToolBox = styled(Toolbar)`
    display: flex;
    align-items: center;
    ${props => props.theme.breakpoints.down("md")} {
        flex-direction: column;
    }
`
const Logo = styled(Typography)`
    font-family: 'Lobster';
    cursor: pointer;
    transition: all 0.5s ease;
    ${props => props.theme.breakpoints.down("md")} {
        padding-bottom: 10px;
    }
    &:hover {
        color: pink;
        transform: scale(1.1);
    }
`
const PagesHead = styled(Box)`
    margin-left: 30px;
    flex-grow: 3;
    ${props => props.theme.breakpoints.down("md")} {
        padding-bottom: 20px;
    } 
`
const PageText = styled(Typography)`
    margin-right: 15px;
    cursor: pointer;
    padding-bottom: 0;
    transition: all 0.5s ease;
    &:hover {
        border-bottom: 3px solid pink;
        padding-bottom: 5px;
    }
`
const Icon = styled(Stack)`
    flex-grow: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    ${props => props.theme.breakpoints.down("md")} {
        padding-bottom: 10px;
    }
`

const Navbar = () => {
  return (
    <Header>
        <ToolBox>
            <Logo variant='h4'>
                ANTON
            </Logo>
            <PagesHead>
                {pages.map(page=>(
                <PageText variant='p'>
                    {page}
                </PageText>
                ))}
            </PagesHead>

            <Icon spacing={1} direction="row">
                <PermIdentityOutlinedIcon sx={{cursor:'pointer'}}/>
                <SearchOutlinedIcon sx={{cursor:'pointer'}}/>
                <FavoriteBorderOutlinedIcon sx={{cursor:'pointer'}}/>
                <Badge badgeContent={4} color="error" sx={{cursor:'pointer'}}>
                    <NotificationsNoneOutlinedIcon/>
                </Badge>
            </Icon>
        </ToolBox>
    </Header>
  )
}

export default Navbar