import { makeStyles} from '@material-ui/core/styles';

const drawerWidth = 0;

export default makeStyles((theme) => ({
  appBar: {
    boxShadow: 'none',
    borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
    marginBottom: '50px',
    backgroundColor: '#FFE475',
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  title: {
    flexGrow: 1,
    alignItems: 'center',
    display: 'flex',
    textDecoration: 'none',
    fontWeight: 'bold',
  },
  image: {
    marginRight: '10px',
  },
  Options: {
    display:'flex',
    flex: 10,
  },

  grow: {
    flexGrow: 1,
  },
  button: {
    backgroundColor: 'white',
    boxShadow: '0px 3px 6px rgba(0, 0, 0, 0.16)',
    borderRadius: '100px',
    display: 'flex',
    width: '77px',
    height: '34px',
    justifyContent: 'center',
    alignItems: 'center'
  }
}));
