import React from 'react'
import { makeStyles } from '@mui/styles';
import Draw from './drawer/Draw';
import Navbar from "./navbar/Navbar";

const useStyles = makeStyles((theme) => {
    return{
        page: {
            width: '100%',
            color: '#ffff',
            background: '#3D2C8D',
            padding: theme.spacing(2)
        }, 
        root: {
            display: 'flex'
        }
    } 
})

export default function Layout({children}) {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            {/* <Navbar /> */}
            <Draw />
            <div className={classes.page}>
             {children}
            </div>    
        </div>
    )
}
