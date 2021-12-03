import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { Typography } from '@material-ui/core';
import { useMediaQuery} from '@material-ui/core';
import useStyles from './Style';


export default function MediaCard({ img, title, p, marginRight, left, marginBottom }) {
    const classes = useStyles();

    return (
        <Card style={{marginRight: marginRight , marginBottom: marginBottom} } className={classes.card} sx={{ maxWidth: 345 }}>
            <CardMedia
                className={classes.img}
                style={{left: left}}
                component="img"
                height="50"
                image={img}
                alt=""
            />
            <CardContent className={classes.content}>
                <Typography className={classes.title} gutterBottom variant="h5" component="div">
                    {title}
                </Typography>
                <Typography className={classes.p} variant="body2" color="text.secondary">
                    {p}
                </Typography>
            </CardContent>
        </Card>
    );
}
