import React from "react";
import Grid from "@mui/material/Grid";
import { makeStyles, Typography } from "@material-ui/core";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { useState, useHistory } from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import Alert from '@mui/material/Alert';

const useStyle = makeStyles((theme) => {
  return {
    root: {
      padding: theme.spacing(2),
      paddingTop: theme.spacing(6),
      height: 520,
      width: "100%",
      backgroundColor: "white",
    },
    multilineColor: {
      color: "black",
      marginTop: 5,
      marginBottom: 5,
      display: "block",
    },
    radio: {
      color: "black",
    },
    button: {
      paddingTop: theme.spacing(1),
    },
  };
});

export default function TambahData() {
  const classes = useStyle()
  const[alert, setAlert] = useState(false)

  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [status, setStatus] = useState("active");
  const [values, setValues] = useState('');

  const handleChange = (event) => {
    setStatus(event.target.value);
  };



  const handleUbah = (event) => {
    setValues(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTimeout(function(){ setAlert(false) }, 3000);
    if (user && email && age && status && values) {
      fetch('http://localhost:8000/list',{
        method: 'POST',
        header: {"Content-type": "application/json"},
        body: JSON.stringify({user,email,age,status,values})
      }).then(() => setAlert(true))
    }
  };
  return (
    <Container className={classes.root}>
      <Typography variant="h5" color="primary">
        Create Data
      </Typography>
      {alert ? <Alert severity="success">Data berhasil ditambah</Alert> : null}
      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <TextField
          id="username"
          onChange={(e) => setUser(e.target.value)}
          label="Username"
          color="secondary"
          variant="outlined"
          InputProps={{
            className: classes.multilineColor,
          }}
          fullWidth
        />
        <TextField
          className={classes.field}
          onChange={(e) => setEmail(e.target.value)}
          id="email"
          label="email"
          color="secondary"
          variant="outlined"
          InputProps={{
            className: classes.multilineColor,
          }}
          fullWidth
        />
        <Grid container spacing={2}>
          <Grid item md={6}>
            <TextField
              className={classes.field}
              onChange={(e) => setAge(e.target.value)}
              id="age"
              label="age"
              type="number"
              color="secondary"
              variant="outlined"
              InputProps={{
                className: classes.multilineColor,
              }}
              fullWidth
            />
          </Grid>
          <Grid item md={6}>
            <FormControl component="fieldset">
              <FormLabel component="legend">Status</FormLabel>
              <RadioGroup
                aria-label="Status"
                row
                name="row-radio-buttons-group"
                value={status}
                onChange={handleChange}
              >
                <FormControlLabel
                  style={{ color: "black" }}
                  value="active"
                  control={<Radio />}
                  label="Active"
                />
                <FormControlLabel
                  style={{ color: "black" }}
                  value="non-active"
                  control={<Radio />}
                  label="Non-Active"
                />
              </RadioGroup>
            </FormControl>
          </Grid>
        </Grid>

        <InputLabel htmlFor="outlined-adornment-amount">
          Transaction Volume
        </InputLabel>
        <OutlinedInput
          id="outlined-adornment-amount"
          value={values}
          onChange={handleUbah}
          startAdornment={<InputAdornment position="start">Rp.</InputAdornment>}
          label="Amount"
          style={{ color: "black" }}
          fullWidth
        />
        
        <Stack className={classes.button} spacing={2} direction="row">
          <Button type='submit' variant="contained">Submit</Button>
          <Button type='reset' color="error" variant="contained">
            Reset
          </Button>
        </Stack>
      </form>
    </Container>
  );
}
