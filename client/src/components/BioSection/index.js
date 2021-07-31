import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { useQuery } from '@apollo/client';
import { QUERY_PROFILE } from '../../utils/queries';
import { numberFormat } from '../../utils/helpers';

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
    border: "1px solid grey",
  },
});

export default function SimpleCard() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  const { data } = useQuery(QUERY_PROFILE);
  return (
    
<Card className={classes.card}>
<CardContent>
  <Typography
    className={classes.title}
    color="textSecondary"
    gutterBottom
  >
    <h3 class="mt-3 text-center">Bio:{data.user.bio}</h3>
    <p class="font-weight-bold">Age: {data.user.age}</p>
    <p class="font-weight-bold">Email: {data.user.email}</p>
    <p class="font-weight-bold">Phone: {numberFormat(data.user.phoneNumber)}</p>
    <p class="font-weight-bold">Location: {data.user.location}</p>



  </Typography>
</CardContent>
</Card>
  );
}