import { alpha, makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    container: {
        backgroundColor: '#3A3053',
        height: '150px',
        width: '1100px',
        margin: '0 auto',
        borderRadius: '10px',
        position: 'relative',
        top: '75%',
        [theme.breakpoints.down('sm')]: {
            width: '300px',
            height: '170px',
            top: '78%'
        },
    },

    img: {
        width: '100%',
        height: '100%',
        borderRadius: '10px',
        [theme.breakpoints.down('sm')]: {
            height: '70%',
        },


    },
    div: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        top: '-70%',
        [theme.breakpoints.down('sm')]: {
            display: 'block',
            top: '-60%',
            padding: '10px 20px'
        },


    },

    nullClicked: {
        color: 'hsl(0, 87%, 67%)',
    },




    title1: {
        color: 'hsl(257, 27%, 26%)',
        fontWeight:'600'
    },

    paper: {
        borderRadius: '10px'
    },

    EndIcon: {
        right: '20px'
    },


    search: {
        position: 'relative',
        borderRadius: '10px',
        backgroundColor: '#FFFEFA',
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: { marginLeft: theme.spacing(3), width: 'auto'},
        [theme.breakpoints.down('sm')]: {
            width: '260px',
            marginRight: 0,
            marginBottom: '12px'
        },
        height: '48px'
    },
    label: {
        color: 'hsl(0, 87%, 67%)', position: 'relative' , top: '5px',
        fontStyle: 'italic', fontSize: '12px'
    },

    inputRoot: {
        height: '50px', fontWeight: '600', width: '700px',
        [theme.breakpoints.down('sm')]: {
            width: '260px',
        },

    },

    inputRootNull: {
        color: 'hsl(0, 87%, 67%)', height: '50px', fontWeight: '600', width: '700px',
        border: '3px solid hsl(0, 87%, 67%)',
        borderRadius: '10px',
        [theme.breakpoints.down('sm')]: {
            width: '260px',
        },

    },

    inputInput: {
        padding: theme.spacing(1, 1, 1, 0), paddingLeft: '25px', transition: theme.transitions.create('width'), width: '100%',
        [theme.breakpoints.down('sm')]: {
            width: '8ch',
        },
    },

    Start: {
        textTransform: 'unset', fontSize: '16px',
        color: '#FFFEFA',
        '&:hover': { backgroundColor: 'hsl(180, 66%, 49%,0.6)' },
        backgroundColor: 'hsl(180, 66%, 49%)',
        borderRadius: '10px', padding: '10px 12px',
        fontWeight: 600, width: '150px',
        [theme.breakpoints.down('sm')]: {
            width: '260px', textAlign: 'center'
        },



    },

}));
