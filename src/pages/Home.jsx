import React from "react";
import {useState} from 'react'
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import NoteCard from "../component/NoteCard/NoteCard";
import CardBottom from "../component/CardBottom/CardBottom";
import GraficInfo from "../component/GraficInfo/GraficInfo";
import RightCard from "../component/RightCard/RightCard";
import DashboardIcon from '@mui/icons-material/Dashboard';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import FastRewindIcon from '@mui/icons-material/FastRewind';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import PowerIcon from '@mui/icons-material/Power';

export default function Home() {
    const [notes, setNotes] = useState([
        {title: 'Dashboard', icon: <DashboardIcon />},
        {title: 'Videos', icon: <OndemandVideoIcon />},
        {title: 'WIP', icon: <FastRewindIcon />},
        {title: 'For Sale', icon: < MonetizationOnIcon /> },
        {title: 'Boosted', icon: <PowerIcon />}
    ])

    const [cards, seCards] = useState([
      {id: 17334, corp: 'Google', date: '10-12-2021', price: 19987.0},
      {id: 17335, corp: 'Facebook', date: '02-11-2021', price: 14637.0}
    ])
  return (
    <Container>
      <Grid container>
        <Grid item sm={12} md={8}>
          <NoteCard notes={notes} />
          <GraficInfo />
          <CardBottom carts={cards} />
        </Grid>
        <Grid item sm={12} md={4}>
          <RightCard />
        </Grid>
      </Grid>
    </Container>
  );
}
