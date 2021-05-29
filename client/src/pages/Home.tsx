import { Grid } from "@material-ui/core";
import React from "react";
import QuestionList from "../components/LeftSection";
import { RightSection } from "../components/RightSection";

export const HomePage = () => {
  return (
    <Grid container style={{ marginTop: 80 }} spacing={2}>
      <Grid item xs={9} style={{ paddingLeft: 20 }}>
        <QuestionList />
      </Grid>
      <Grid item xs={3}>
        <RightSection />
      </Grid>
    </Grid>
  );
};
