import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { useQuery } from '@apollo/client';
import { QUERY_PROFILE } from '../../utils/queries';

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
    // margin: "10px",
    // padding: "10px",
    // border: "1px solid grey",
    backgroundColor:'rgba(233, 214, 107, 0.02)', 
    color:'white',
 },
});
const SimpleCard = ({ activities }) => {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  const { loading, data } = useQuery(QUERY_PROFILE);
  const profile = data?.user || {};
  const checkData = () => {
    console.log(profile);
  }
  return (
    <Card className={classes.card}>
    <CardContent>
      <Typography
        className={classes.title}
        gutterBottom
      >
        <h3 className="mt-3 text-center" style={{fontFamily:'Arial Narrow'}}>My Activities</h3>
        <p>{profile.activities}</p>
      </Typography>
    </CardContent>
  </Card>
  );
}
export default SimpleCard