import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({

    container: {
        backgroundColor: '#3A3053',
        height: '265px'
    },

    img: {
        width: '100%',
        [theme.breakpoints.down('sm')]: {
            height: '100%'
        },

    },

    div: {
        position: 'relative',
        top: '-70%',
        margin: '0 auto',
        width: '400px',
        [theme.breakpoints.down('sm')]: {
            width: '328px'
        },
    },

    Basetitle: {
        fontSize: '30px', letterSpacing: '1px', color: '#FFFEFA',
        fontWeight: '900', textAlign: 'left', lineHeight: '1',

        [theme.breakpoints.down('sm')]: {
            fontSize: '24px', textAlign: 'center',
        },
    },
    Button: {
        width: '150px',
        margin: '0 auto',
        paddingTop: '30px'

    },

    Start: {
        textTransform: 'unset', fontSize: '16px',
        color: '#FFFEFA',
        '&:hover': { backgroundColor: 'hsl(180, 66%, 49%,0.6)' },
        backgroundColor: 'hsl(180, 66%, 49%)',
        borderRadius: '30px', padding: '8px 12px',
        fontWeight: 600, width: '150px'

    },




}));
