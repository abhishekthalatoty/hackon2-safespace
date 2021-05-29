import { Button, Grid, TextField, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import AnswerSection from "../components/AnswerSection";
import { RightSection } from "../components/RightSection";
import { Question } from "../models/Question";
import { ApiHelper } from "../services/ApiHelper";

export const QuestionPage = (props) => {
  const question = props.location.question;

  const [answers, updateAnswers] = useState([]);
  const [answerOpen, toggleAnswer] = useState(false);
  const [answer, changeAnswer] = useState("");

  const getAnswers = () => {
    ApiHelper.getInstance()
      .getAnswersForQuestionId(question.id)
      .then((answers) => updateAnswers(answers));
  };

  const submitAnswer = () => {
    ApiHelper.getInstance()
      .submitAnswer(answer, question.id)
      .then(() => {
        changeAnswer(null);
        getAnswers();
      });
  };

  useEffect(() => {
    getAnswers();
  }, []);

  return (
    <Grid container style={{ marginTop: 80 }} spacing={2}>
      <Grid item md={9} style={{ paddingLeft: 20 }}>
        <Grid item style={{ marginLeft: 20 }}>
          <Typography variant="h4" style={{ textAlign: "left" }}>
            {question.body}
            <Typography
              style={{ marginLeft: 10, color: "#565656" }}
              variant="body2"
            >
              asked by {question.userDisplayName}
            </Typography>
          </Typography>
          {answerOpen && (
            <TextField
              placeholder="Enter Your Answer Here"
              fullWidth
              rows={5}
              rowsMax={10}
              variant="outlined"
              multiline
              value={answer}
              onChange={(event) => {
                changeAnswer(event.target.value);
              }}
            />
          )}

          <Button
            style={{ float: "right", marginTop: "10px" }}
            color="primary"
            variant="outlined"
            onClick={() => {
              if (answerOpen) {
                submitAnswer();
              }

              toggleAnswer(!answerOpen);
            }}
          >
            {answerOpen ? "Sumbit" : "Answer"}
          </Button>

          {answerOpen && (
            <Button
              style={{ float: "right", marginTop: "10px", marginRight: "30px" }}
              color={answerOpen ? "secondary" : "primary"}
              variant="outlined"
              onClick={() => toggleAnswer(!answerOpen)}
            >
              Cancel
            </Button>
          )}
        </Grid>
        <AnswerSection answers={answers} />
      </Grid>
      <Grid item md={3}>
        <RightSection />
      </Grid>
    </Grid>
  );
};
