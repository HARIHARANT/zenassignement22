import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Stack from '@mui/material/Stack';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import CardDesign from './CardDesign';

const pages = ['Home', 'Abount', 'Shop'];

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {     
      top: 13,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: '0 4px',
      right: "-15px",
    },
  }));

  var [cartCount, setCartCount] = React.useState(0);
  const childToParent = (childdata) => {  
    console.log(childdata.cartItem);
    childdata.cartItem ? setCartCount(cartCount-1): setCartCount(cartCount+1);
  }

  return (
    <>
    <AppBar position="static" sx={{background:'white', color: "black"}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
          >
            Start Bootstrap
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center" sx={{ color: "black"}}>{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
          >
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'black', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Stack direction="row" spacing={2}>
              <Button variant="outlined" startIcon={<ShoppingCartIcon />}>                
                <StyledBadge badgeContent={cartCount} color="secondary" sx={{ marginRight: "20px" }}>Cart</StyledBadge>
              </Button>              
            </Stack>
          </Box>          
        </Toolbar>
      </Container>
    </AppBar>
    <section style={{background: "black", paddingTop:"40px",paddingBottom: "70px"}}>
       <h1 style={{ fontSize: "45px", color: "#fff" }}>Shop in style</h1>
       <h5 style={{ fontSize: "15px", color: "gray" }}>With this shop hompeage template</h5>
     </section> 
     <br></br>
     <section>
         <CardDesign childToParent={childToParent} title="Fancy Product" price="$40.00 - $80.00" badge={false} ratings={5}></CardDesign>
         <CardDesign childToParent={childToParent} title="Special Item" price="$40.00 - $80.00" badge={true} ratings={4}></CardDesign>
         <CardDesign childToParent={childToParent} title="Sale Item" price="$40.00 - $80.00" badge={true} ratings={0}></CardDesign>
         <CardDesign childToParent={childToParent} title="Popular Item" price="$140.00 - $180.00" badge={false} ratings={1}></CardDesign>
         <CardDesign childToParent={childToParent} title="Special Product" price="$40.00 - $80.00" badge={true} ratings={5}></CardDesign>
         <CardDesign childToParent={childToParent} title="Fancy Product" price="$240.00 - $380.00" badge={false} ratings={3}></CardDesign>
         <CardDesign childToParent={childToParent} title="Sale Product" price="$40.00 - $80.00" badge={true} ratings={5}></CardDesign>
         <CardDesign childToParent={childToParent} title="Fancy Product" price="$40.00 - $80.00" badge={true} ratings={2}></CardDesign>
      </section>  
      <footer style={{ background: "black", paddingTop: "15px", paddingBottom: "15px" }}>
          <h5 style={{ color: "#fff" }}>Copyright © Your Website 2022</h5>
      </footer>  
    </>    
  );
};
export default ResponsiveAppBar;
