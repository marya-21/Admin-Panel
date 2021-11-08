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
    due: {
      display: "flex",
      justifyContent: "space-between",
    },
  };
});

export default function CardBottom({ cards }) {
  const classes = useStyles();
  return (
    <div className={classes.grid}>
      <Typography variant="h6">Past Order</Typography>
      <Typography variant="caption">Order that are due</Typography>
      <Grid style={{ marginTop: 1 }} container spacing={4}>
        {cards.map((card, i) => (
          <Grid key={i} item xs={12} md={4}>
            <Card style={{ backgroundColor: "#22577A" }}>
              <CardContent>
                <Typography
                  sx={{ fontSize: 14 }}
                  style={{ fontWeight: 600, color: "#adadad" }}
                  gutterBottom
                >
                  #{card.noSeri}
                </Typography>
                <Typography variant="h6">{card.corp}</Typography>
                <Typography
                  sx={{ fontSize: 14 }}
                  style={{ fontWeight: 600, color: "#adadad" }}
                >
                  {card.date}
                </Typography>
                <hr size="1" className={classes.line} />
                <Grid container style={{ justifyContent: "space-between" }}>
                  <Typography variant="body1" align="left">
                    due
                  </Typography>
                  <Typography variant="body1" align="right">
                    ${card.price}
                  </Typography>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
