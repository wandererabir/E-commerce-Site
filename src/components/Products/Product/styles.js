import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  root: {
    // maxWidth: 345, original width style
    maxWidth: '100%',
    
  },
  media: {
    height: '200px',
    width: '180px',
    position: 'relative',
    paddingTop: '56.25%', // 16:9
    zIndex:0
  },
  cardActions: {
    display: 'flex',
    position: 'absolute',
    bottom: 0,
    right: 0,
    justifyContent: 'flex-end'
  },
  cardContent: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
}));