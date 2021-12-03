import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({

    container: {
        backgroundColor: '#232027',
        [theme.breakpoints.down('sm')]: { textAlign: 'center' },
    },
    box: {
        display: 'flex', padding: '20px', width: 'unset',
        justifyContent: 'center',
        [theme.breakpoints.down('sm')]: { display: 'block', },
        // marginRight: '10%'

    },

    divContainer: {
        display: 'flex', alignItems: 'baseline', justifyContent: 'space-around', paddingTop: '70px',
        [theme.breakpoints.down('sm')]: { display: 'block', paddingTop: '0px' },
    },

    div: {

        marginLeft: '30%',
        [theme.breakpoints.down('sm')]: { marginLeft: '0px', marginBottom: '15%' },

    },

    image: {

        [theme.breakpoints.down('sm')]: { marginTop: '20%', marginBottom: '7%' },
        filter: 'brightness(10)',

    },

    boxIcons: {
        display: 'flex',
        [theme.breakpoints.down('sm')]: {
            justifyContent: 'center'
        },
    },



    div2: {
        // marginLeft: '20%', //marginTop: '30px', 
        // [theme.breakpoints.down('sm')]: { marginLeft: '0px'},

    },

    title: {
        color: '#FFFEFA', marginBottom: '30px'

    },



    title2: {
        color: 'hsl(240, 2%, 79%)', cursor: 'pointer', '&:hover': { textDecorationLine: 'underline' },
        fontSize: '16px', marginBottom: '7px',
        '&:hover': {
            color: 'hsl(180, 66%, 49%)',
        },

    },

    icons: {
        cursor: 'pointer', marginLeft: '30px',
        [theme.breakpoints.down('sm')]: { marginBottom: '50px' },
    },

    icon: {
        '&:hover': {
            filter: 'invert(6%) sepia(97%) saturate(902%) hue-rotate(118deg) brightness(100%) contrast(60%)'
        },

    },



    attribution: {
        [theme.breakpoints.down('sm')]: {
            display: 'grid',
            justifyItems: 'start'
        },
        display: 'flex',
        justifyContent: 'center',
        '& span': {
            color: '#FFFEFA',
            marginBottom: '7px',
            marginRight: '6px', 
            [theme.breakpoints.down('sm')]: {
                marginTop: '16px'
            },    
        },
        padding: '20px',
        marginTop: '20px',
        paddingBottom: '20%'

    },


    a: {

        color: 'hsl(180, 66%, 49%)',
        marginRight: '20px'

    }

}));
