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
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Container maxWidth="lg">
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={4}>
            <Card className={classes.card}>
              <CardContent>
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
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} sm={8}>
            <Card className={classes.card}>
              <CardContent>
                <Typography
                  className={classes.title}
                  color="textSecondary"
                  gutterBottom
                >
                  <h3 class="mt-3 text-center">My Activities</h3>
                  <p class="font-weight-bold">Running</p>
                  <p class="font-weight-bold">Swimming</p>
                  <p class="font-weight-bold">Biking</p>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={8}>
            <Card className={classes.card}>
              <CardContent>
                <Typography
                  className={classes.title}
                  color="textSecondary"
                  gutterBottom
                >
                  <h3 class="mt-3 text-center">Bio:</h3>
                  <p class="font-weight-bold">Age:</p>
                  <p class="font-weight-bold">Email:</p>
                  <p class="font-weight-bold">Phone:</p>
                  <p class="font-weight-bold">Location:</p>



                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </div>
    </Container>
  );
}