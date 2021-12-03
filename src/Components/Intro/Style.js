import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({

    container: {
        height: '120vh',
        [theme.breakpoints.down('sm')]: {
            height: '120vh',
        },
    },

    grid: {
        display: 'flex',
        alignContent: 'center',
        overflow: 'hidden',
        height: '600px'

    },

    grid1: {
        display: 'flex', alignItems: 'center'
    },

    img: {
        width: '100%',
        [theme.breakpoints.down('sm')]: {
            width: '130%'
        },
    },

    div: {
        padding: '20px 40px',
        width: '500px',
        [theme.breakpoints.down('sm')]: {
            textAlign: 'center',
            width: 'unset'
        },

    },

    divImage: {
        width: '900px',
        [theme.breakpoints.down('sm')]: {
            width: 'unset'
        },

        position: 'relative',
        right: '-10%',
        // top: '-5%'
    },

    Basetitle: {
        fontSize: '50px', letterSpacing: '1px', color: '#37343D',
        fontWeight: '800', textAlign: 'left',  lineHeight: '1',

        [theme.breakpoints.down('sm')]: { fontSize: '30px', letterSpacing: '0px', textAlign: 'center'
     },
    },

    title: {
        fontSize: '18px', color: '#AAA9AE',
        textAlign: 'left', marginTop: '7px',
        [theme.breakpoints.down('sm')]: { textAlign: 'center' , fontSize: '16px' },
    },

    Button: {
         marginTop: '25px', 

    },
    Start: {
        textTransform: 'unset', fontSize: '16px',
        color: '#FFFEFA',
        '&:hover': { backgroundColor: 'hsl(180, 66%, 49%,0.3)' },
        backgroundColor: 'hsl(180, 66%, 49%)',
        borderRadius: '30px', padding: '8px 12px',
        fontWeight: 600, width: '150px'

    },


}));
