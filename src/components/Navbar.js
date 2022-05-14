import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { useNavigate } from 'react-router-dom';



const Navbar = (pages) => {
  const customerPages = ['Foods','Order Status','Cart'];
  const sellerPages = ['Add Dish','My Orders','My Dishes'];
  const settings = ['Profile', 'Logout'];
  const navigate = useNavigate()
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const navPages = (e) => {
    console.log("Navbar", e.target.textContent)
    if(e.target.textContent === "Foods"){
      navigate("/userHome")
    }
    if(e.target.textContent === "Order Status"){
      navigate("/orderStatus")
    }
    if(e.target.textContent === "Cart"){
      navigate("/cart")
    }
    if(e.target.textContent === "Add Dish"){
      navigate("/sellerHome")
    }
    if(e.target.textContent === "My Orders"){
      navigate("/myOrders")
    }
    if(e.target.textContent === "My Dishes"){
      navigate("/myDishes")
    }
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null)
  }
  const settingsFunction = ( e , index ) => {
    if(e.target.textContent === "Logout"){
      navigate("/")
    }
    else{
      console.log(e.target.textContent,index)
      
    }
  }

  return (
    <AppBar position="static" className='appbar'>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
            {/* Icon here */}
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            FoodFreaks
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
              {localStorage.getItem("Role") === "customer" ? customerPages.map((page) => (
                <MenuItem key={page} onClick={navPages}>
                  <Typography textAlign="center" sx={{fontWeight:600}} >{page}</Typography>
                </MenuItem>
              )): sellerPages.map((page) => (
                <MenuItem key={page} onClick={navPages}>
                  <Typography textAlign="center" sx={{fontWeight:600}} >{page}</Typography>
                </MenuItem>)) }
            </Menu>
          </Box>
            {/* Icon here */}
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            FoodFreaks
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } ,justifyContent:"center" }}>
            {localStorage.getItem("Role")=== "customer" ? customerPages.map((page) => (
              <Button
                key={page}
                onClick={navPages}
                sx={{ my: 2, color: 'white', display: 'block' ,textTransform: 'capitalize' ,fontWeight:500 ,fontSize:"16px" }}
              >
                {page}
              </Button>
            )):sellerPages.map((page) => (
              <Button
                key={page}
                onClick={navPages}
                sx={{ my: 2, color: 'white', display: 'block' ,textTransform: 'capitalize' ,fontWeight:500 ,fontSize:"16px" }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting,index) => (
                <MenuItem key={setting} onClick={(e)=>settingsFunction( e ,index )}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;
