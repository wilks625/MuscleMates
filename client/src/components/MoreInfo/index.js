import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
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
    margin: "10px",
    padding: "10px",
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
    <h3 class="mt-3 text-center" style={{fontFamily:'Encode Sans SC'}}>More Info:</h3>
    <p class="font-weight-bold" style={{fontSize:'20px', fontFamily:'Encode Sans SC', fontWeight:'bold'}} >Pronoun:</p> <p>He/Him</p>
    <p class="font-weight-bold" style={{fontSize:'20px', fontFamily:'Encode Sans SC', fontWeight:'bold'}} >Workout Time Preference:</p> <p>Morning</p>
    <p class="font-weight-bold" style={{fontSize:'20px', fontFamily:'Encode Sans SC', fontWeight:'bold'}} >Birthday:</p> <p>December 12, 1989</p>
    <p class="font-weight-bold" style={{fontSize:'20px', fontFamily:'Encode Sans SC', fontWeight:'bold'}} >Activity Gols:</p><p>Become stronger</p>
  </Typography>
</CardContent>
</Card>
  );
}
export default SimpleCard