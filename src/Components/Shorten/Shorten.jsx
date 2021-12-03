import React from 'react';
import { InputBase, Box, Button } from '@material-ui/core';
import useStyles from './Style';
import img from '../../Assets/Images/bg-shorten-desktop.svg';
import imgMobile from '../../Assets/Images/bg-shorten-mobile.svg';
import { useMediaQuery } from '@material-ui/core';
import Autocomplete, { createFilterOptions } from '@material-ui/lab/Autocomplete';

const Shorten = () => {

    const classes = useStyles();
    const isMobile = useMediaQuery('(max-width:375px)');
    let image = null;

    {
        isMobile ? image = imgMobile : image = img;
    }

    const top3URLs = [
        { title: 'https://www.frontendmentor.io' },
        { title: 'https://twitter.com/frontendmentor' },
        { title: 'https://www.linkedin.com/company/frontend-mentor' },

    ];

    const filter = createFilterOptions();
    const [value, setValue] = React.useState(null);
    const [Null, setNull] = React.useState(false);

    const CheckNull = () => {
        if (value == null)
            setNull(true);

    }

    const NotNull = () => {
        if (Null)
            setNull(false);
    }

    let label = null;

    if (Null)
        label = <span className={classes.label}>Please add a link</span>;


    return (
        <section className={classes.container}>
            <img src={image} className={classes.img} />
            <Box className={classes.div}>

                <div className={classes.search}>
                    <Autocomplete
                        value={value}
                        onChange={(event, newValue) => {
                            if (typeof newValue === 'string') {
                                setValue({
                                    title: newValue,
                                });
                            } else if (newValue && newValue.inputValue) {
                                // Create a new value from the user input
                                setValue({
                                    title: newValue.inputValue,
                                });
                            } else {
                                setValue(newValue);
                            }
                        }}
                        filterOptions={(options, params) => {
                            const filtered = filter(options, params);

                            const { inputValue } = params;
                            const isExisting = options.some((option) => inputValue === option.title);
                            if (inputValue !== '' && !isExisting) {
                                filtered.push({
                                    inputValue,
                                    title: `Add "${inputValue}"`,
                                });
                            }
                            return filtered;
                        }}
                        selectOnFocus
                        clearOnBlur
                        handleHomeEndKeys
                        id="free-solo-demo"
                        options={top3URLs}
                        getOptionLabel={(option) => {
                            if (typeof option === 'string') {
                                return option;
                            }
                            if (option.inputValue) {
                                return option.inputValue;
                            }
                            return option.title;
                        }}
                        renderOption={(option) => <li className={classes.list} >
                            <div className={classes.title1}>{option.title}</div>
                        </li>}
                        sx={{ width: 300 }}
                        freeSolo
                        classes={{ endAdornment: classes.EndIcon, paper: classes.paper, groupUl: classes.groupUl }}
                        renderInput={(params) => {
                            const { InputLabelProps, InputProps, ...rest } = params;
                            return (
                                <InputBase  {...params.InputProps} {...rest} placeholder="Shorten a link here..." onFocus={NotNull} classes={{ root: !Null ? classes.inputRoot : classes.inputRootNull, input: classes.inputInput }} />
                            )
                        }}
                    />
                    {label}

                </div>

                <div className={classes.Button} >
                    <Button className={classes.Start} onClick={CheckNull}>Shorten It!</Button>
                </div>
            </Box>

        </section>
    );

}


export default Shorten;
