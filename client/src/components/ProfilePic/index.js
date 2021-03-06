import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import pic1 from '../../assets/gymgoer1.jpeg'
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
      image={pic1}
      >
              {/* <CardContent img src={pic1}>
                <Typography
                  className={classes.title}
                  color="textSecondary"
                  gutterBottom
                >
                  Profile Picture Container Profile Picture Container Profile
                  Picture Container Profile Picture Container Profile Picture
                  Container Profile Picture Container Profile Picture Container
                  Profile Picture Container
                </Typography>
              </CardContent> */}
              </CardMedia>
  );
}
export default SimpleCard