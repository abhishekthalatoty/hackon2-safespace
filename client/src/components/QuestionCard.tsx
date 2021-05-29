import { Card, CardContent, Typography, Grid, Link } from "@material-ui/core";
import React from "react";
import { Question } from "../models/Question";

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
              by {question.displayName}
            </Typography>
          </Grid>

          <Grid xs={6}>
            <Typography style={{ color: "grey", textAlign: "right" }}>
              {question.date}
            </Typography>
          </Grid>
        </Grid>
        <Typography style={{ textAlign: "left" }}>
          <Link href="#">View Answer</Link>
        </Typography>
        <Typography style={{ fontSize: 15, textAlign: "left" }}>
          This is answer for every question, Lorem ipsum dolor sit amet,
          consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean
          massa. Cum sociis natoque penatibus et magnis dis parturient montes,
          nascetur ridiculus mus. Donec qu.
        </Typography>
      </CardContent>
    </Card>
  );
};
