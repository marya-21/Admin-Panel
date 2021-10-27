import Grid from "@mui/material/Grid";
import { makeStyles } from "@mui/styles";
import Card from '@mui/material/Card';
import { Typography } from "@mui/material";

const useStyles = makeStyles({
    cardStyle: {
        minWidth: 100,
        minHeight: 100,
        marginTop: 50,
        display: 'flex',
        alignItem: 'center',
        flexDirection: 'column',
        justfyContent: 'center',
        textAlign: 'center'
    },
    icon: {
        minWidth: '100%',
        minHeight: 50,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '20',
        cursor: 'pointer'
    },
    grid : {
        display: 'flex',
        justifyContent: 'space-evenly',
        minWidth: '100%',
        minHeight: 200,
    }
})

export default function NoteCard({notes}) {
    const classes = useStyles()
    return (
        <Grid className={classes.grid}>
            {notes.map((note, i) => (
                <Grid key={i}>
                    <Card style={{backgroundColor: "#22577A"}} className={classes.cardStyle}>
                        <div className={classes.icon}>{note.icon}</div>
                        <Typography>{note.title}</Typography>
                    </Card>
                </Grid>
            ))}
        </Grid>
    )
}