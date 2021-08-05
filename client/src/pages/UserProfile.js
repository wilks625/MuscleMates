import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import ProfilePic from '../components/ProfilePic'
import BioSection from '../components/BioSection'
import ActivitiesSection from '../components/ActivitiesSection'
import Moreinfo from '../components/MoreInfo'
import { useQuery } from '@apollo/client';
import { QUERY_PROFILE } from '../utils/queries';
import { numberFormat, calcAge } from '../utils/helpers';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  card: {
    margin: "10px",
    padding: "10px",
    border: "1px solid grey",
  },
}));
function FullWidthGrid() {
  const classes = useStyles();
  const { loading, data } = useQuery(QUERY_PROFILE);
  const profile = data?.user || {};
  const checkData = () => {
    console.log(profile);
  }
  return (
    <Container maxWidth="md">
      <Container style={{fontSize: '60px'}}>
        <div style={{color:'white', textAlign:'center', fontFamily:'Arial Narrow', display: 'inline-block'}}>
        WELCOME,
        </div>
        {'  '}
        {loading ? (<div>...Loading</div>) : (
        <div style={{fontFamily: "permanent marker", color:'rgba(233, 214, 107, 0.637)', textAlign:'center', display: 'inline-block'}}>
          {profile.firstname} {profile.lastname}
        </div>
  )}
      </Container>
      <div className={classes.root}>
        <Grid container  spacing={3}>
          <Grid item xs={2} sm={6} >
            <ProfilePic />
          </Grid>
          <Grid item xs={12} sm={6}>
            {loading ? (
              <div>...Loading</div>
            ) : (
          <BioSection bio={profile.bio ? (profile.bio) : (" ")} age={profile.birthday ? (calcAge(profile.birthday)) : (" ")} email={profile.email ? (profile.email) : (" ")} phone={profile.phoneNumber ? (numberFormat(profile.phoneNumber)) : (" ")} />
            )}
          </Grid>
          <Grid item xs={12} sm={6}>{loading ? (
            <div>...Loading</div>
          ) : (
          <ActivitiesSection activities={profile.activities ? (profile.activities) : (" ")} />
          )}
          </Grid>
          <Grid item xs={12} sm={6}>
            <Moreinfo />
          </Grid>
        </Grid>
      </div>
      <CardActions>
        <Button className="btn" style={{backgroundColor: 'rgba(233, 214, 107, 0.637)', fontFamily: 'Arial Narrow', textAlign:'center'}} size="lg" variant="contained" color="primary"  href="/updateProfile">Update Profile Information</Button>
        <Button  className="btn" style={{backgroundColor: 'rgba(233, 214, 107, 0.637)', fontFamily: 'Arial Narrow'}} size="lg" variant="contained" color="primary" href="/matches">Find MuscleMates!</Button>
        <Button  className="btn" style={{backgroundColor: 'rgba(233, 214, 107, 0.637)', fontFamily: 'Arial Narrow'}} size="lg" variant="contained" color="primary" onClick={checkData}>Check Data</Button>
      </CardActions>
    </Container>
  );
}
export default FullWidthGrid