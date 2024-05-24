import {useState} from 'react';
import {AppBar, Avatar, Box, Container, IconButton, Menu, MenuItem, Toolbar, Tooltip, Typography} from "@mui/material";
import logo from '../../../assets/img/logo-pokemon.png';
import {pages, settingMenu} from "../../../utils/constants";
import {NavLink} from "react-router-dom";
import {MdMenu} from "react-icons/md";
import "./styles.css"
import TeamIcon from "../../home/TeamIcon";

const Navbar = ({setStateDrawer, stateDrawer}) => {
    const [anchorElNav, setAnchorElNav] = useState(null);
    const [anchorElUser, setAnchorElUser] = useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };
    return (
        <AppBar position="fixed" sx={{m:0}}>
            <Container maxWidth="false">
                <Toolbar disableGutters sx={{display: 'flex', justifyContent: 'space-between'}}>

                    <Box sx={{flexGrow: 1, display: {xs: 'none', md: 'flex'}, mr: 1}} >
                        <NavLink to="/">
                            <img style={{maxWidth: "100%", height: 50}} src={logo} alt="logo"/>
                        </NavLink>
                    </Box>

                    <Box sx={{flexGrow: 1, display: {xs: 'none', md: 'flex'}}}>
                        {pages.map((page) => (
                            <NavLink
                                className={({ isActive, isPending, isTransitioning }) =>
                                    [
                                        isPending ? "pending" : "",
                                        isActive ? "active" : "",
                                        isTransitioning ? "transitioning" : "",
                                        "textLink"
                                    ].join(" ")}
                                key={page.name}
                                to={page.link}
                            >
                                {page.name}
                            </NavLink>
                        ))}
                    </Box>

                    <Box sx={{flexGrow: 1, display: {xs: 'flex', md: 'none'}}}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MdMenu/>
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
                                display: {xs: 'block', md: 'none'},
                            }}
                        >
                            {pages.map((page) => (
                                <MenuItem key={page.name} onClick={handleCloseNavMenu} >
                                    <NavLink
                                        className={({ isActive, isPending }) =>
                                            isPending ? "pending" : isActive ? "active" : ""
                                        }
                                        color="#ffcb05"
                                        to={page.link}
                                        style={{ color: '#ffcb05' }}
                                    >
                                        {page.name}
                                    </NavLink>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>

                    <Box sx={{flexGrow: 1, display: {xs: 'flex', md: 'none'}, mr: 1}}>
                        <img style={{maxWidth: "100%", height: 50}} src={logo} alt="logo"/>
                    </Box>

                    <Box sx={{flexGrow: 0}}>
                        <TeamIcon setStateDrawer={setStateDrawer} stateDrawer={stateDrawer}/>

                        <Menu
                            sx={{mt: '45px'}}
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
                            {settingMenu.map((setting) => (
                                <MenuItem key={setting} onClick={handleCloseUserMenu}>
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
