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
import MatchCards from "../components/MatchCards";
import { useQuery } from '@apollo/client';
import { QUERY_USERS } from '../utils/queries';

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

export default function FullWidthGrid() {
  const classes = useStyles();
  const { loading, data } = useQuery(QUERY_USERS);
  const profiles = data?.allUsers || [];
  return (
    <Container maxWidth="lg">
      <div className={classes.root}>
      return (
        <Grid container 
                direction="column"
                justifyContent="flex-start"
                alignItems="center"
        >
                    <Grid xs={12}>

                      {loading ? (
                        <div>...Loading Matches</div>
                      ) : (
                        <MatchCards users={profiles} />
                      )
                      }
                        </Grid>
        </Grid>
      <CardActions>
        <Button size="small" variant="contained" color="primary" href="/userProfile">Back to Profile Page</Button>
      </CardActions>
    )
      </div>
    </Container>
  );
}