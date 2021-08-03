import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import pic2 from '../../assets/gymgoer2.jpeg'
import { CardMedia } from '@material-ui/core';
const useStyles = makeStyles({
  root: {
    // minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  media: {
    height: '400px',
    width: "400px",
    margin: "10px",
    padding: "40px",
    borderRadius: "80%", 
  },
});
const  SimpleCard = () => {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  return (
      <CardMedia 
      className={classes.media}
      image={pic2}
      >
              </CardMedia>
  );
}
export default SimpleCard