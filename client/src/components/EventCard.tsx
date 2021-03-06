import {
  Button,
  Card,
  CardActions,
  CardContent,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React from "react";
import { withRouter } from "react-router-dom";

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

export const EventCard = withRouter(({ history, session }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root} elevation={5} style={{ marginTop: 12 }}>
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          {session.now ? "Current Event" : "Upcoming"}
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
          <Button
            variant="outlined"
            onClick={() => history.push("/chat")}
            size="small"
          >
            Join
          </Button>
        </CardActions>
      )}
    </Card>
  );
});
