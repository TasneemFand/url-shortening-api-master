import * as React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import useStyles from './Style';

const FadeMenu = ({ ButtonName, data }) => {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <Button
                id="fade-button"
                aria-controls="fade-menu"
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                className= {classes.ButtonMenu}
            >
                {ButtonName}
            </Button>
            <Menu
                id="fade-menu"
                MenuListProps={{
                    'aria-labelledby': 'fade-button',
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                // TransitionComponent={Fade}
                classes={{paper: classes.paper}}
                style={{ top: '6%'}}
            >
                {
                    data.map(name => (
                        <MenuItem style={{padding: '10px 20px'}} onClick={handleClose}>{name}</MenuItem>
                    ))
                }
            </Menu>
        </div>
    );
}

export default FadeMenu;
