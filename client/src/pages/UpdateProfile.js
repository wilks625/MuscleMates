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
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormLabel from "@material-ui/core/FormLabel";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import PhotoUpload from "../components/UploadPhotoBtn";
import FormGroup from "@material-ui/core/FormGroup";
import Checkbox from "@material-ui/core/Checkbox";
import { useState, useEffect } from "react";
import { useQuery, useMutation } from "@apollo/client";
import { QUERY_PROFILE } from "../utils/queries";
import { UPDATE_USER } from "../utils/mutations";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  formControl: {
    margin: theme.spacing(3),
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  card: {
    margin: "30px",
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
  const { data, loading, error } = useQuery(QUERY_PROFILE);
  const [state, setState] = React.useState();
  useEffect(() => {
    if (loading === false && data) {
      setState(data);
    }
  }, [loading, data]);

  const profile = data?.user || {};
  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.value });
  };
  const [updateUser] = useMutation(UPDATE_USER);
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      console.log("SUCCESS!!!");
    } catch (error) {
      console.log("THERE WAS AN ERROR", error);
    }
  };
  const checkData = () => {
    console.log(profile, state);
  };
  return (
    <>
      <div>
        <h1
          style={{
            textAlign: "center",
            fontSize: "60px",
            fontFamily: "permanent marker",
            color: "white",
          }}
        >
          Update Profile
        </h1>
      </div>
      <Container
        style={{ backgroundColor: "rgb(30, 30, 30)", textAlign: "center" }}
        maxWidth="x-lg"
      >
        <div className={classes.root + " " + classes.card}>
          <Grid container spacing={3}>

            <Grid item xs={12} sm={4}>
              <TextField
                style={{ backgroundColor: "white" }}
                id="outlined-textarea"
                label="Activity Goals"
                placeholder="Get stronger!"
                multiline
                rows={4}
                // variant="outlined"
              />
            </Grid>

            <Grid item xs={12} sm={4}>
              <TextField
                style={{ backgroundColor: "white" }}
                id="outlined-textarea"
                label="Bio"
                placeholder="I like to lift things up and place them back down"
                multiline
                rows={4}
                // variant="outlined"
              />
            </Grid>

            <Grid item xs={12} sm={4}>
              <form className={classes.container} noValidate>
                <TextField
                  style={{ backgroundColor: "white" }}
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

            <Grid item xs={12} sm={4}>
              <FormControl style={{ color: "white" }} component="fieldset">
                <FormLabel
                  style={{
                    color: "white",
                    fontSize: "35px",
                    fontFamily: "Encode Sans SC",
                  }}
                  component="legend"
                >
                  Pronoun
                </FormLabel>
                <RadioGroup
                  aria-label="Pronoun"
                  name="Pronoun1"
                  // value={state.user.pronouns}
                  onChange={handleChange}
                >
                  <FormControlLabel
                    value="She/Her"
                    control={
                      <Radio style={{ color: "rgba(233, 214, 107, 0.637)" }} />
                    }
                    label="She/Her"
                  />
                  <FormControlLabel
                    value="He/Him"
                    control={
                      <Radio style={{ color: "rgba(233, 214, 107, 0.637)" }} />
                    }
                    label="He/Him"
                  />
                  <FormControlLabel
                    value="They/Them"
                    control={
                      <Radio style={{ color: "rgba(233, 214, 107, 0.637)" }} />
                    }
                    label="They/Them"
                  />
                </RadioGroup>
              </FormControl>
              </Grid >

              <Grid item xs={12} sm={4}>
                <FormControl
                  component="fieldset"
                  className={classes.formControl}
                >
                  <FormLabel
                    style={{
                      color: "white",
                      fontSize: "35px",
                      fontFamily: "Encode Sans SC",
                    }}
                    component="legend"
                  >
                    Activities
                  </FormLabel>
                 

                    <TextField
                      style={{ backgroundColor: "white" }}
                      id="outlined-textarea"
                      label="Activity Goals"
                      placeholder="Get stronger!"
                      multiline
                      rows={4}
                      // variant="outlined"
                    />
                </FormControl>
              </Grid>

              <Grid item xs={12} sm={4}>
                <FormControl
                  component="fieldset"
                  className={classes.formControl}
                >
                  <FormLabel
                    style={{
                      color: "white",
                      fontSize: "35px",
                      fontFamily: "Encode Sans SC",
                    }}
                    component="legend"
                  >
                    {" "}
                    Time
                  </FormLabel>
                  <FormGroup style={{ color: "white" }}>
                    <FormControlLabel
                      control={
                        <Checkbox
                          style={{ color: "rgba(233, 214, 107, 0.637)" }}
                          checked={false}
                          onChange={handleChange}
                          name="morning"
                        />
                      }
                      label="Morning"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          style={{ color: "rgba(233, 214, 107, 0.637)" }}
                          checked={false}
                          onChange={handleChange}
                          name="afternoon"
                        />
                      }
                      label="Afternnon"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          style={{ color: "rgba(233, 214, 107, 0.637)" }}
                          checked={false}
                          onChange={handleChange}
                          name="night"
                        />
                      }
                      label="Night"
                    />
                  </FormGroup>
                </FormControl>
              </Grid>

              <Grid item xs={12} sm={12}>
              <div className={classes.root}>
                {" "}
                <label
                  style={{
                    color: "white",
                    fontSize: "35px",
                    fontFamily: "Encode Sans SC",
                  }}
                  id="loginlabel"
                  htmlFor="pwd"
                >
                  Location:
                </label>
                <input
                  style={{ color: "white" }}
                  placeholder="City"
                  name="password"
                  type="password"
                  id="pwd"
                />
              </div>
                  </Grid>
              
              <Grid item xs={12} sm={12}>
                <PhotoUpload />
              </Grid>

            </Grid>
        </div>

        <CardActions style={{ justifyContent: "center" }}>
          <Button
            className="btn"
            style={{
              backgroundColor: "rgba(233, 214, 107, 0.637)",
              fontFamily: "Encode Sans SC",
            }}
            size="lg"
            variant="contained"
            color="primary"
            onClick={handleFormSubmit}
          >
            Save Changes
          </Button>
          <Button
            className="btn"
            style={{
              backgroundColor: "rgba(233, 214, 107, 0.637)",
              fontFamily: "Encode Sans SC",
            }}
            size="lg"
            variant="contained"
            color="primary"
            href="/userProfile"
          >
            Back to Profile Page
          </Button>
          <Button
            className="btn"
            style={{
              backgroundColor: "rgba(233, 214, 107, 0.637)",
              fontFamily: "Encode Sans SC",
            }}
            size="lg"
            variant="contained"
            color="primary"
            onClick={checkData}
          >
            Check Data
          </Button>
        </CardActions>
      </Container>
    </>
  );
}
