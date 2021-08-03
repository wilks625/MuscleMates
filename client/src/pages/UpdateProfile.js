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

import TextField from "@material-ui/core/TextField";
import Slider from "@material-ui/core/Slider";

import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import { useQuery } from "@apollo/client";
import { UPDATE_USER } from '../utils/mutations';

import PhotoUpload from '../components/UploadPhotoBtn'





const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  card: {
    margin: "10px",
    padding: "10px",
  },
}));

function valuetext(value) {
  return `${value}°C`;
}

// function handleChange() {

// }
// function value() {

// }

export default function FullWidthGrid() {
  const classes = useStyles();

  const [value, setValue] = React.useState({});

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const submitChanges = () => {

  };

  return (
    <Container maxWidth="lg">
      <div className={classes.root + " " + classes.card}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={12}>
            <TextField
              id="outlined-textarea"
              label="Activity Goals"
              placeholder="Get stronger!"
              multiline
              rows={4}
              variant="outlined"
            />
          </Grid>

          <Grid item xs={12} sm={12}>            <TextField
              id="outlined-textarea"
              label="Bio"
              placeholder="I like to lift things up and place them back down"
              multiline
              rows={4}
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} sm={12}>
            <form className={classes.container} noValidate>
              <TextField
                id="date"
                label="Birthday"
                type="date"
                defaultValue="1995-05-24"
                className={classes.textField}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </form>
          </Grid>
        
          <Grid item xs={12} sm={12}>
            <FormControl component="fieldset">
              <FormLabel component="legend">Pronoun</FormLabel>
              <RadioGroup
                aria-label="Pronoun"
                name="Pronoun1"
                value={value}
                onChange={handleChange}
              >
                <FormControlLabel
                  value="Female"
                  control={<Radio />}
                  label="She/Her"
                />
                <FormControlLabel
                  value="Male"
                  control={<Radio />}
                  label="He/Him"
                />
                <FormControlLabel
                  value="Non-Binary"
                  control={<Radio />}
                  label="They/Them"
                />
              </RadioGroup>
            </FormControl>
          </Grid>

          <Grid item xs={6} sm={3}>
           
          </Grid>

          <Grid item xs={12} sm={12}>
            <PhotoUpload />
          </Grid>


          <Grid item xs={12} sm={12}>
            <Paper className={classes.paper}>xs=6 sm=3</Paper>
          </Grid>

        </Grid>
      </div>
      <CardActions>
        <Button size="small" variant="contained" color="primary" onClick={submitChanges}>Save Changes</Button>
        <Button size="small" variant="contained" color="primary" href="/userProfile">Back to Profile Page</Button>
      </CardActions>
    </Container>
  );
}
