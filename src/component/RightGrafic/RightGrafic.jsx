import React from "react";
import Grid from "@mui/material/Grid";
import { makeStyles } from "@mui/styles";
import { Typography } from "@mui/material";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const useStyles = makeStyles((theme) => {
  return {
    grid: {
      marginTop: 42,
      minWidth: "100%",
      minHeight: 200,
    },
  };
});

export default function RightGrafic() {
  const classes = useStyles();
  const data = [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
  ];
  return (
    <Grid className={classes.grid}>
      <Typography variant="h6">Montly Visitor</Typography>
      <Typography variant="h6">117,89</Typography>
      <Typography variant="caption">Likes / Follows</Typography>
      <Typography style={{ marginLeft: 10}} variant="caption">
        117,89 / 234,98
      </Typography>
      <div style={{marginTop: 40}}>
      <ResponsiveContainer width="100%" aspect={2 / 1}>
        <BarChart width={150} height={40} data={data}>
           <Tooltip />
          <Legend />
          <XAxis dataKey="name" stroke="white"/>
          <YAxis stroke="white"/>
          <Bar dataKey="uv" fill="#82ca9d" />
          <Bar dataKey="pv" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
      </div>
    </Grid>
  );
}
