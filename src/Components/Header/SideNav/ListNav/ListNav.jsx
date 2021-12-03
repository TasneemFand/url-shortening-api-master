import { List, Button, ListItemText, } from '@material-ui/core';
import React from 'react';
import './ListNav.css';
import Collapse from '@material-ui/core/Collapse';

const ListNav = ({ id, name, names }) => {

    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(!open);
    };

    return (
        <List className="list"
            sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper',}}
            component="nav"
            aria-labelledby={id}
            id={id}
        >
            <Button className={"button1"} onClick={handleClick}>
                <ListItemText secondary={name} />

            </Button>
            <Collapse className="collapse" in={open} timeout="auto" unmountOnExit>
                <List >
                    {
                        names.map((name) => (
                            <Button className="button2"  sx={{ pl: 4 }}>
                                <ListItemText secondary={name} />
                            </Button>
                        ))
                    }
                </List>
            </Collapse>
        </List>
    );
}

export default ListNav;