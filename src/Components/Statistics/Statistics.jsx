import React from 'react';
import { Box, Typography } from '@material-ui/core';
import useStyles from './Style';
import { useMediaQuery } from '@material-ui/core';
import brand from '../../Assets/Images/icon-brand-recognition.svg';
import records from '../../Assets/Images/icon-detailed-records.svg';
import fully from '../../Assets/Images/icon-fully-customizable.svg';
import Card from './Card/Card';
import Divider from '@material-ui/core/Divider';

const Statistics = () => {
    const classes = useStyles();
    const isMobile = useMediaQuery('(max-width:375px)');

    return (
        <section className={classes.container}>
            <div className={classes.div1}>
                <div className={classes.div}>
                    <Typography variant='h5' className={classes.Basetitle}>
                        Advanced Statistics
                    </Typography>
                    <Typography variant='h6' className={classes.title}>
                        Track how your links are performing across the web with our
                        advanced statistics dashboard.
                    </Typography>
                </div>
                <div className={classes.divDivider}>
                    <Divider orientation="horizontal"className={classes.divider} />
                </div>
                <Box className={classes.box}>
                    <div style={{position:'relative', top: '0px'}}>
                        <Card marginRight= {!isMobile ? '25px' : '0px'} marginBottom = {!isMobile ? '0px' : '35px'} left= {!isMobile ? '12%' : '37%'}  img={brand} title='Brand Recognition' p='Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content.' />
                    </div>
                    <div style={{position:'relative', top: '30px'}}>
                        <Card marginRight= {!isMobile ? '25px' : '0px'} marginBottom = {!isMobile ? '0px' : '35px'} left= {!isMobile ? '12%' : '37%'} img={records} title='Detailed Records' p='Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.' />
                    </div>
                    <div style={{position:'relative', top: '60px'}}>
                        <Card marginRight='0px' left= {!isMobile ? '12%' : '37%'} img={fully} title='Fully Customizable' p='  Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.' />
                    </div>

                </Box>
            </div>
        </section>
    );

}

export default Statistics;
