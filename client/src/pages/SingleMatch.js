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
import MatchPic from '../components/MatchPic';
import Matchaboutme from '../components/Matchaboutme';
import Matchactivities from '../components/Matchactivities'
import Matchmoreinfo from '../components/Matchmoreinfo'
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
    media: {
        height: '400px',
        width: "400px",
        margin: "10px",
        padding: "40px",
        borderRadius: "80%",
    },
}));
function FullWidthGrid() {
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;
    return (
        <Container maxWidth="md">
            <Container >
                <div style={{ fontSize: '30px' , color: 'white', textAlign: 'center', fontFamily: 'Encode Sans SC', display: 'inline-block' }}>
                    YOU'VE GOT A MATCH,
          </div>
                {'  '}
                <div style={{ fontSize: '60px' ,fontFamily: "permanent marker", color: 'rgba(233, 214, 107, 0.637)', textAlign: 'center', display: 'inline-block' }}>
                    Brandon Johnson
          </div>
            </Container>
            <div className={classes.root}>
                <Grid container spacing={3}>
                    <Grid item xs={2} sm={6} >
                        <MatchPic />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Matchaboutme />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Matchactivities />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Matchmoreinfo />
                        </Grid>
                    </Grid>
        </div>
                <CardActions>
                    <Button className="btn" style={{ backgroundColor: 'rgba(233, 214, 107, 0.637)', fontFamily: 'Encode Sans SC', textAlign: 'center' }} size="lg" variant="contained" color="primary" href="/updateProfile">Muscle Mates</Button>
                    <Button className="btn" style={{ backgroundColor: 'rgba(233, 214, 107, 0.637)', fontFamily: 'Encode Sans SC' }} size="lg" variant="contained" color="primary" href="/UserProfile">My Profile</Button>
                </CardActions>
      </Container>
    );
  }
  export default FullWidthGrid