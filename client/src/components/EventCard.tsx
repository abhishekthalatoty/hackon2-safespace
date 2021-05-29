import {
  Button,
  Card,
  CardActions,
  CardContent,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React from "react";

const useStyles = makeStyles({
  root: {
    marginRight: 6,
    paddingBottom: 6,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
    paddingBottom: 12,
  },
  pos: {
    paddingBottom: 12,
  },
  topic: {
    paddingBottom: 12,
  },
  description: {
    paddingBottom: 12,
  },
});

export const EventCard = ({ session }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root} elevation={5} style={{ marginTop: 12 }}>
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          9:00 AM - 10:00 AM
        </Typography>
        <Typography className={classes.topic} variant="h5" component="h2">
          {session["topic"]}
        </Typography>
        <Typography
          className={classes.description}
          variant="body2"
          component="p"
        >
          {session["desc"]}
        </Typography>
      </CardContent>
      {session.now && (
        <CardActions>
          <Button variant="outlined" size="small">
            Join
          </Button>
        </CardActions>
      )}
    </Card>
  );
};
