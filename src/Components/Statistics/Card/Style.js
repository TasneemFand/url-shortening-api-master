import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({

    card: {
        width: '300px',
        height: '270px',
        // marginRight: '20px'
    },

    content: {
        padding: '25px',
        position: 'relative',
        top:'20%'
    },

    img: {
        objectFit: 'none',
        backgroundColor: '#3B2F53',
        borderRadius: '50%',
        height: '25%',
        width:'unset',
        position: 'absolute',
        top: '-12%',

    },

    title: {
        fontSize: '18px', letterSpacing: '1px', color: '#37343D',
        fontWeight: '800', textAlign: 'left',  lineHeight: '1',

        [theme.breakpoints.down('sm')]: { letterSpacing: '0px', textAlign: 'center'
     },
    },

    p: {
        fontSize: '16px', color: '#AAA9AE',
        textAlign: 'left', marginTop: '20px',
        [theme.breakpoints.down('sm')]: { fontSize: '14px' , textAlign: 'center', lineHeight: '1.7'},
    },



}));
