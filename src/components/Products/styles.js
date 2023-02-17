import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  content: {
    display: 'flex',
    flexDirection:'row',
    backgroundColor: theme.palette.background.default,
    textAlign: "left",
    marginBottom:'10px',
    marginTop: '70px',
    "@media (max-width: 450px)": {
      flexDirection:'column',
      marginTop: '56px',
    }
  },

  root: {
    flexGrow: 1,

  },
  container: {
    overflowX: 'visible',
  },
  categorylist: {
    display: 'flex',
    flexDirection: 'column',
    position: 'fixed',
    height: '100%',
    overflow: 'scroll',
    padding: '1rem',
    backgroundColor: theme.palette.background.default,
    '&::-webkit-scrollbar': {
      width: '0.4em'
    },
    '&::-webkit-scrollbar-track': {
      '-webkit-box-shadow': 'inset 0 0 6px #a88080'
    },
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: 'black',
      outline: '1px solid slategrey'
    },
    "@media (max-width: 450px)": {
      flexDirection:'row',
      paddingTop: '10px',
      height:'8%',
      zIndex: 1,
      maxWidth: '100%',
      "&::-webkit-scrollbar": {
        display: 'none',
      }
     
    }
  },
  
  button: {
    margin: '10px',
    color: 'black'
  },
  active:{
    backgroundColor: '#5DA9E9',
    color:'white',
    "&:hover": {
      color: "black"
    },
  },
  productlist: {
    marginLeft: '15rem',
    "@media (max-width: 450px)": {
      margin: '5rem 5rem',
    }
    
  },
}));