import React from 'react';
import { Typography, Box } from '@material-ui/core';
import useStyles from './Style';
import { useMediaQuery } from '@material-ui/core';
import logo from '../../Assets/Images/logo.svg';
import FacebookIcon from '../../Assets/Images/icon-facebook.svg';
import instagramiIcon from '../../Assets/Images/icon-instagram.svg';
import pinterestIcon from '../../Assets/Images/icon-pinterest.svg';
import twitterIcon from '../../Assets/Images/icon-twitter.svg';

const Footer = () => {
    const classes = useStyles();

    return (
        <section className={classes.container} >
            <div className={classes.divContainer}>
                <img className={classes.image} src={logo} alt="logo" />
                <Box className={classes.box} >
                    <div className={classes.div} style={{ marginLeft: '0px' }}   >
                        <Typography variant='h6' className={classes.title}>
                            Features
                        </Typography>
                        <div className={classes.div2}>
                            <Typography variant='h6' className={classes.title2}>
                                Link Shortening
                            </Typography>
                            <Typography variant='h6' className={classes.title2}>
                                Branded Links
                            </Typography>
                            <Typography variant='h6' className={classes.title2}>
                                Analytics
                            </Typography>
                        </div>

                    </div>
                    <div className={classes.div} >
                        <Typography variant='h6' className={classes.title}>
                            Resources

                        </Typography>
                        <div className={classes.div2}>
                            <Typography variant='h6' className={classes.title2}>
                                Blog
                            </Typography>
                            <Typography variant='h6' className={classes.title2}>
                                Developers
                            </Typography>
                            <Typography variant='h6' className={classes.title2}>
                                Support
                            </Typography>
                        </div>
                    </div>
                    <div className={classes.div} >
                        <Typography variant='h6' className={classes.title}>
                            Company
                        </Typography>
                        <div className={classes.div2}>
                            <Typography variant='h6' className={classes.title2}>
                                About
                            </Typography>
                            <Typography variant='h6' className={classes.title2}>
                                Our Team
                            </Typography>
                            <Typography variant='h6' className={classes.title2}>
                                Careers
                            </Typography>
                            <Typography variant='h6' className={classes.title2}>
                                Contact
                            </Typography>

                        </div>
                    </div>
                </Box>
                <Box className={classes.boxIcons}>
                    <div style={{ display: 'flex' }}>
                        <div className={classes.icons} style={{ marginLeft: '0' }} >
                            <img src={FacebookIcon} className={classes.icon} />

                        </div>
                        <div className={classes.icons} >
                            <img src={instagramiIcon} className={classes.icon} />

                        </div>
                        <div className={classes.icons} >
                            <img src={twitterIcon} className={classes.icon} />

                        </div>
                        <div className={classes.icons} >
                            <img src={pinterestIcon} className={classes.icon} />

                        </div>

                    </div>
                </Box>
            </div>
            <div className={classes.attribution}>
                <span>Challenge by</span> <a className={classes.a} href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor.</a>
                <span>Coded by</span> <a className={classes.a} href="#">Tasnim Fandakli.</a>
            </div>
        </section>

    );
}

export default Footer;
