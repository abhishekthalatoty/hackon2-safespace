import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import { Link } from "react-router-dom";

export const QuestionCard = ({ question }) => {
  return (
    <Card elevation={2} style={{ marginBottom: 20 }}>
      <CardContent>
        <Typography style={{ textAlign: "left" }} variant="h5">
          {question.body}
        </Typography>
        <Grid container style={{ marginTop: 5 }}>
          <Grid xs={6}>
            <Typography style={{ color: "grey", textAlign: "left" }}>
              by {question.userDisplayName}
            </Typography>
          </Grid>
          <Grid xs={6}>
            <Typography style={{ color: "grey", textAlign: "right" }}>
              {question.date.toDateString()}
            </Typography>
          </Grid>
        </Grid>
        <Typography style={{ textAlign: "left" }}>
          <Link to={{ pathname: "/answers", question }}>
            {question.randomAnswer ? "View Answers" : "Answer This"}
          </Link>
        </Typography>
        <Typography style={{ fontSize: 15, textAlign: "left" }}>
          {question.randomAnswer}
        </Typography>
      </CardContent>
    </Card>
  );
};
