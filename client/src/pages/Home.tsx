import { Grid } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import QuestionList from "../components/LeftSection";
import { RightSection } from "../components/RightSection";
import { Question } from "../models/Question";
import { ApiHelper } from "../services/ApiHelper";

export const HomePage = () => {
  const [questions, updateQuestions] = useState([] as Question[]);

  useEffect(() => {
    ApiHelper.getInstance()
      .getQuestions()
      .then((questions) => {
        updateQuestions(questions);
      });
  }, []);

  return (
    <Grid container style={{ marginTop: 80 }} spacing={2}>
      <Grid item md={9} style={{ paddingLeft: 20 }}>
        <QuestionList questions={questions} />
      </Grid>
      <Grid item md={3}>
        <RightSection />
      </Grid>
    </Grid>
  );
};
