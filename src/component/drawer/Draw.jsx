import { Drawer, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material'
import React from 'react'
import { makeStyles } from '@mui/styles';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AddIcon from '@mui/icons-material/Add';
import { useHistory, useLocation } from 'react-router';


const drawerWidth = 240
const useStyles = makeStyles((theme) =>{
    return {
        drawer: {
            width: drawerWidth,
        },
        drawerPaper: {
            width: drawerWidth,
            backgroundColor: "#3D2C8D",
            // margin: 5,
            paddingTop: 20,
        },
        text: {
            // color:"#3D2C8D",
            padding: theme.spacing(2)
        },
        listContainer: {
            paddingTop: 100
        },
        active: {
            background : '#c996cc'
        }
    }
    
})


export default function Draw() {
    const history = useHistory()
    const location = useLocation()
    const classes = useStyles()

    const menuItems = [
        {
            text: 'Dashboard',
            icon: <DashboardIcon color="secondary" />,
            path: '/'
        },
        {
            text: 'Create',
            icon: <AddIcon color="secondary" />,
            path: '/create'
        },

    ]
    return (
        <Drawer
            className={classes.drawer}
            variant="permanent"
            anchor="left"
            classes={{ paper: classes.drawerPaper }}
        >
            <div>
            <Typography 
            variant='h5' color="secondary" className={classes.text}>
                Admin Panel
            </Typography>
            </div>

            {/* list */}
            <div className={classes.listContainer}></div>
            <List style ={{color : "#3D2C8D"}}>
                {menuItems.map(item=>(
                    <ListItem
                    button
                     key={item.text}
                     onClick={() => history.push(item.path)}
                     className={location.pathname === item.path ? classes.active : null}
                    >
                        <ListItemIcon>{item.icon}</ListItemIcon>
                        <ListItemText primary={item.text} />
                    </ListItem>
                ))}
            </List>
        </Drawer>
    )
}
