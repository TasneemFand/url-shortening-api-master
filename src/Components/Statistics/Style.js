import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({

    container: {
        backgroundColor: '#F0F1F6',
        height: '130vh',
        [theme.breakpoints.down('sm')]: {
            height: '190vh'
        },

    },

    div1: {
        padding: '40px',
        [theme.breakpoints.down('sm')]: {
            padding: '20px 20px',
            paddingTop: '150px'
        },

    },

    box: {
        display: 'flex', marginTop: '10%', justifyContent: 'center', position: 'relative',
        [theme.breakpoints.down('sm')]: {
            display: 'block',
            paddingTop: '25%',
            width: '300px',
            margin: '0 auto'
        },
    },

    div: {
        // marginTop: '10%',
        width: '500px',
        margin: '0 auto',
        [theme.breakpoints.down('sm')]: {
            // marginTop: '50%',
            width: '310px'

        },

    },

    divDivider: {
        width: '700px',
        position: 'relative',
        top: '19rem',
        left: '20rem'

    },

    divider: {
        height: '6px',
        backgroundColor: 'hsl(180, 66%, 49%)',
        // margin
    },



    Basetitle: {
        fontSize: '30px', letterSpacing: '1px', color: '#37343D',
        fontWeight: '800', textAlign: 'center', lineHeight: '1',

        [theme.breakpoints.down('sm')]: {
            fontSize: '25px', letterSpacing: '0px',
        },
    },

    title: {
        fontSize: '18px', color: '#AAA9AE',
        textAlign: 'center', marginTop: '20px',
        [theme.breakpoints.down('sm')]: { fontSize: '16px' },
    },



}));
