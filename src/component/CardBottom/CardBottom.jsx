import React from "react";
import { Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

const useStyles = makeStyles((theme) => {
    return {
        grid: {
            marginTop: 20,
            minWidth: "100%",
            minHeight: 200,
          },
          line: {
              marginTop: theme.spacing(2),
              marginBottom: theme.spacing(2),
          },
          due : {
              display: 'flex',
              justifyContent: 'space-between'
          }
    }
});

export default function CardBottom() {
  const classes = useStyles();
  return (
    <div className={classes.grid}>
      <Typography variant="h6">Past Order</Typography>
      <Typography variant="caption">Order that are due</Typography>
      <Grid style={{marginTop: 1}} container spacing={4}>
        <Grid item xs={12} md={4}>
          <Card style={{ backgroundColor: "#22577A" }}>
            <CardContent>
              <Typography
                sx={{ fontSize: 14 }}
                style={{ fontWeight: 600, color: "#adadad" }}
                gutterBottom
              >
                #12345
              </Typography>
              <Typography variant="h6">Google.inc</Typography>
              <Typography
                sx={{ fontSize: 14 }}
                style={{ fontWeight: 600, color: "#adadad" }}
              >
                14-april-2021
              </Typography>
               <hr size ='1' className={classes.line} />
              <div color= "#adadad" className="due">
              <Typography  variant="h7">due</Typography>
              <Typography variant="h7">$12345.0</Typography>
              </div>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <h1>1</h1>
        </Grid>
        <Grid item xs={12} md={4}>
          <h1>1</h1>
        </Grid>
      </Grid>
    </div>
  );
}
