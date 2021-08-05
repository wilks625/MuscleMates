import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
// import PhotoCamera from '@material-ui/icons/PhotoCamera';
const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  input: {
    display: 'none',
  },
}));
const  UploadButtons = () => {
  const classes = useStyles();
  return (
    <div className={classes.root} style={{textAlign: 'center'}}>
      <input
        accept="image/*"
        className={classes.input}
        id="contained-button-file"
        multiple
        type="file"
      />
      <label htmlFor="contained-button-file">
        <Button className="btn" style={{backgroundColor: 'rgba(233, 214, 107, 0.637)', fontFamily: 'Arial Narrow'}} variant="contained" color="primary" component="span">
          Photo Upload
        </Button>
      </label>
      <input accept="image/*" className={classes.input} id="icon-button-file" type="file" />
      <label htmlFor="icon-button-file">
        <IconButton color="primary" aria-label="upload picture" component="span">
          {/* <PhotoCamera /> */}
        </IconButton>
      </label>
    </div>
  );
}
export default UploadButtons