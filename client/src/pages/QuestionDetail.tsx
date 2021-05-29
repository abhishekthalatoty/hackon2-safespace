import { Grid } from "@material-ui/core";
import React from "react";
import AnswerSection from "../components/AnswerSection";
import { RightSection } from "../components/RightSection";

export const QuestionPage = () => (
  <Grid container style={{ marginTop: 80 }} spacing={2}>
    <Grid item xs={9} style={{ paddingLeft: 20 }}>
      <AnswerSection />
    </Grid>
    <Grid item xs={3}>
      <RightSection />
    </Grid>
  </Grid>
);
