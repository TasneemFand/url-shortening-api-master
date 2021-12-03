import React from 'react';
import { AppBar, Toolbar, Box, Button } from '@material-ui/core';
import useStyles from './Style';
import SideNav from './SideNav/SideNav';
import { useMediaQuery } from '@material-ui/core';
import logo from '../../Assets/Images/logo.svg';
import FadeMenu from './Menu/mEnu';

const Header = () => {

    const classes = useStyles();
    const isMobile = useMediaQuery('(max-width:375px)');

    const data = [
        {
            id: "demo-customized-button-Features", name: "Features",
            MenuItem: ['Link Shortening', 'Branded Links', 'Analytics'],
        },

        {
            id: "demo-customized-button-Pricing", name: "Pricing",
            MenuItem: ['Blog','Developers', 'Support'],
        },

        {
            id: "demo-customized-button-Resources", name: "Resources",
            MenuItem: ['About', 'Our Team', 'Careers', 'Contact'],

        }
    ];

    let Drawer = null;

    isMobile ? Drawer = (
        <SideNav data={data}/>
    ) : Drawer = null;


return (
    <AppBar position='static' className={classes.AppBar}>
        <Toolbar className={classes.Toolbar}>
            <img src={logo} alt="Logo" />
            <Box className={classes.box}>
                <FadeMenu ButtonName = 'Features' data = {data[0].MenuItem}/>
                <FadeMenu ButtonName = 'Pricing' data = {data[1].MenuItem}/>
                <FadeMenu ButtonName = 'Resources' data = {data[2].MenuItem} />
            </Box>

            <Box display='flex' alignItems='center'>
                <div className={classes.RightButtons}>
                    <div className={classes.Button} >
                        <Button className={classes.Login}>Login</Button>
                    </div>
                    <div className={classes.Button}>
                        <Button className={classes.Sign}>Sign Up</Button>
                    </div>
                </div>
                {Drawer}
            </Box>
        </Toolbar >
    </AppBar >
);

}

export default Header;
