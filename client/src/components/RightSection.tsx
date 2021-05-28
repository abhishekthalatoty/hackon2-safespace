import React from 'react'

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { List } from '@material-ui/icons';

var hour = 0;
const currentIndex = 2;
const date = new Date(Date.now()).toLocaleString().substring(11,12)
hour = parseInt(date);
const sessions = [
    {
        "topic":"Religion",
        "desc":"People from different backgrounds can join and discuss about religion",
    },
    {
        "topic":"Race",
        "desc":"People from different backgrounds can join and discuss about religion",
    },
    {
        "topic":"Gender",
        "desc":"People from different backgrounds can join and discuss about religion",
    },
    {
        "topic":"Nation",
        "desc":"People from different backgrounds can join and discuss about religion"
    }
];
const useStyles = makeStyles({
    root: {
        marginRight: 6,
        paddingBottom: 6,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
        paddingBottom: 12
    },
    pos: {
        paddingBottom: 12,
    },
    topic: {
        paddingBottom: 12
    },
    description: {
        paddingBottom: 12
    }
});


//const classes = useStyles();
const RightSection = () => {



    const classes = useStyles();
    return (
        <div>
            <Card className={classes.root} elevation = {5} >
                <CardContent>
                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                        Current Session
        </Typography>
                    <Typography className={classes.topic} variant="h5" component="h2">
                           {sessions[currentIndex]['topic']}
        </Typography>
                    <Typography className={classes.description} variant="body2" component="p">
                    {sessions[currentIndex]['desc']}
        </Typography>
                </CardContent>
                <CardActions >
                    <Button size="small">Join</Button>
                </CardActions>
            </Card>
            <Typography style={{marginTop: 15, marginBottom: 15}} variant="h5">Upcoming Events</Typography>

                {sessions.map((value, index) => {
                    console.log(hour);
                    var nextIndex = (index + currentIndex + 1)%4;
                    return <Card className={classes.root} elevation={5} style={{marginTop: 12}}>
                    <CardContent>
                        <Typography className={classes.title} color="textSecondary" gutterBottom>
                            {(hour + index + 1).toString() + ":00 - "+ (hour+ 2 + index).toString() + ':00'}
            </Typography>
                        <Typography className={classes.topic} variant="h5" component="h2">
                        {sessions[nextIndex]["topic"]}
            </Typography>
                        <Typography className={classes.description} variant="body2" component="p">
                        {sessions[nextIndex]["desc"]}
            </Typography>
                    </CardContent>
                </Card>    
                })
            }       

            
        </div>
    )
}

export default RightSection
