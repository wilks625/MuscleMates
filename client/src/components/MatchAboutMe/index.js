import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
const useStyles = makeStyles({
    root: {
      minWidth: 275,
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
    card: {
      // height: '300px',
      // width: "300px",
    //   margin: "10px",
      padding: "10px",
    //   border: "1px solid grey",
    backgroundColor:'rgba(233, 214, 107, 0.02)', 
    color: 'white',
    },
  });
  const  SimpleCard = () => {
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;
    return (
  <Card className={classes.card}>
  <CardContent>
    <Typography
      className={classes.title}
      gutterBottom
    >
      <h3 class="mt-3 text-center" style={{fontFamily:'Arial Narrow'}}>About Me</h3>
      <p class="font-weight-bold" style={{fontSize:'20px', fontFamily:'Arial Narrow', fontWeight:'bold'}} >Bio: </p><p>This is my matches bio. I like to lift too. :)</p>
      <p class="font-weight-bold" style={{fontSize:'20px',fontFamily:'Arial Narrow', fontWeight:'bold'}}>Age: </p><p>32</p>
      <p class="font-weight-bold" style={{fontSize:'20px',fontFamily:'Arial Narrow', fontWeight:'bold'}}>Email: </p><p>test@tesing.com</p>
      <p class="font-weight-bold" style={{fontSize:'20px',fontFamily:'Arial Narrow', fontWeight:'bold'}}>Phone: </p><p>(804)123-4567</p>
      <p class="font-weight-bold" style={{fontSize:'20px',fontFamily:'Arial Narrow', fontWeight:'bold'}}>Location: </p><p>Richmond</p>
    </Typography>
  </CardContent>
  </Card>
    );
  }
  export default SimpleCard