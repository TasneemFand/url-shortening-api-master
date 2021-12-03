import React from 'react';
import { Typography, Button } from '@material-ui/core';
import useStyles from './Style';
import img from '../../Assets/Images/bg-boost-desktop.svg';
import imgMobile from '../../Assets/Images/bg-boost-mobile.svg';
import { useMediaQuery } from '@material-ui/core';

const Boost = () => {

    const classes = useStyles();
    const isMobile = useMediaQuery('(max-width:375px)');
    let image = null;

    {
        isMobile ? image = imgMobile : image = img;
    }


    return (
        <section className={classes.container}>
            <img src={image} className={classes.img}/>
            <div className={classes.div}>
                <Typography variant='h5' className={classes.Basetitle}>
                Boost your links today
                </Typography>
                <div className={classes.Button} >
                    <Button className={classes.Start}>Get Started</Button>
                </div>
            </div>

        </section>
    );
}

export default Boost;
