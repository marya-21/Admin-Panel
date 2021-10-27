import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import { makeStyles } from "@mui/styles";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const useStyles = makeStyles({

})
export default function GraficInfo() {
    const data = [
        {
          name: '01:00',
          "Today": 4000,
          "Yesterday": 2400,
          amt: 2400,
        },
        {
          name: '02:00',
          "Today": 3000,
          "Yesterday": 1398,
          amt: 2210,
        },
        {
          name: '03:00',
          "Today": 2000,
          "Yesterday": 9800,
          amt: 2290,
        },
        {
          name: '04:00',
          "Today": 2780,
          "Yesterday": 3908,
          amt: 2000,
        },
        {
          name: '05:00',
          "Today": 1890,
          "Yesterday": 4800,
          amt: 2181,
        },
        {
          name: '06:00',
          "Today": 2390,
          "Yesterday": 3800,
          amt: 2500,
        },
        {
          name: '07:00',
          "Today": 3490,
          "Yesterday": 4300,
          amt: 2100,
        },
        {
            name: '08:00',
            "Today": 3440,
            "Yesterday": 4450,
            amt: 2100,
        },
        {
            name: '09:00',
            "Today": 3230,
            "Yesterday": 4550,
            amt: 2100,
          },
          {
            name: '10:00',
            "Today": 1890,
            "Yesterday": 2400,
            amt: 2100,
          },
          {
            name: '11:00',
            "Today": 1290,
            "Yesterday": 3400,
            amt: 2100,
          },
          {
            name: '12:00',
            "Today": 3490,
            "Yesterday": 1300,
            amt: 2100,
          },

      ];
    return (
            <Grid>
                <Typography variant='h6'>Daily Visitor</Typography>
                <Typography  variant='caption'>Today vs Yesterday</Typography>
                <div style={{marginTop: 50}}>
                <ResponsiveContainer  width="100%" aspect={2 / 1}>
                <LineChart   data={data}>
                    <XAxis dataKey="name" stroke="white"/>
                    <Line type="monotone" dataKey="Today" stroke="#82ca9d" />
                    <Line type="monotone" dataKey="Yesterday" stroke="#82ca9d" />
                    <YAxis stroke="white"/>
                    <Tooltip />
                </LineChart>
                </ResponsiveContainer>
                </div>
                
            </Grid>
    )
}