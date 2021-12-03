import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    RightButtons: {
        display: 'flex', alignItems: 'center',
        [theme.breakpoints.down('sm')]: { display: 'none' },
    },
    Button: {
        height: '100%', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',

    },

    box: {
        display:'flex', alignItems:'center', position:"relative", right:"25%",
        [theme.breakpoints.down('sm')]: { display: 'none' },

    },

    ButtonMenu: {
        padding: '6px 10px', color: 'hsl(257, 7%, 63%)', textTransform :'unset', fontWeight: '700', fontSize: '16px',
        '&:hover': { backgroundColor: 'unset' , color: '#37343D'}, 

    },
    Login: {
        color: 'hsl(257, 7%, 63%)', textTransform: 'unset', fontSize: '16px',

        '&:hover': { backgroundColor: 'unset' }, fontWeight: '700'

    },

    Sign: {
        color: '#FFFEFA', textTransform: 'unset', fontSize: '16px',
        marginLeft: '15px', fontWeight: '700',
        '&:hover': {backgroundColor: 'hsl(180, 66%, 49%,0.3)'},
        borderRadius: '30px', padding: '5px 18px',
        backgroundColor: 'hsl(180, 66%, 49%)', 

    },



    Toolbar: {
        display: 'flex', justifyContent: 'space-between',
        alignItems: 'center',
    },
    AppBar: {
        background: 'unset', padding: '40px 90px', color: '#FFFEFA', boxShadow: 'none',
        [theme.breakpoints.down('sm')]: { padding: '25px 20px' },
    }
}));
