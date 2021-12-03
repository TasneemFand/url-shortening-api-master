import React from 'react';
import { Typography, Button, Grid } from '@material-ui/core';
import Header from '../Header/Header';
import useStyles from './Style';
import Shorten from '../Shorten/Shorten';
import image from '../../Assets/Images/illustration-working.svg';
import { useMediaQuery } from '@material-ui/core';

const Intro = () => {

    const classes = useStyles();
    const isMobile = useMediaQuery('(max-width:375px)');


    return (
        <section className={classes.container}>
            <Header />
            <Grid container direction={isMobile ?
                "row" : "column"} wrap={isMobile ?
                    "wrap-reverse" : "wrap"} columnspacing={{ xs: 1, sm: 2, md: 3 }}
                className={classes.grid}>
                <Grid item xs={12} className={classes.grid1}>
                    <div className={classes.div}>
                        <Typography variant='h5' className={classes.Basetitle}>
                            More than just shorter links
                        </Typography>

                        <Typography variant='h6' className={classes.title}>
                            Build your brand’s recognition and get detailed insights
                            on how your links are performing.
                        </Typography>
                        <div className={classes.Button} >
                            <Button className={classes.Start}>Get Started</Button>
                        </div>
                    </div>


                </Grid>
                <Grid item xs={12} className={classes.grid1}>
                    <div className={classes.divImage}>
                        <img src={image} className={classes.img} />
                    </div>

                </Grid>
            </Grid >

            <Shorten />
        </section >
    );
}

export default Intro;
