import {
  Card,
  CardContent,
  Typography,
  Grid,
  Button,
  TextField,
} from "@material-ui/core";
import { useState } from "react";
import { AnswerCard } from "./AnswerCard";

const answers = [
  {
    displayName: "prateek",
    body: " This is answer for every question, Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec qu.This is answer for every question, Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec qu.This is answer for every question, Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec qu.This is answer for every question, Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec qu.",
  },
  {
    displayName: "Sanjay",
    body: " This is answer for every question, Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec qu.",
  },
  {
    displayName: "Abhishek",
    body: " This is answer for every question, Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec qu.This is answer for every question, Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec qu.This is answer for every question, Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec qu.This is answer for every question, Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec qu.",
  },
];

const AnswerSection = () => {
  const [answerOpen, toggleAnswer] = useState(false);

  return (
    <div style={{ padding: "20px" }}>
      <Typography variant="h4" style={{ textAlign: "left" }}>
        Is mental health really required?
      </Typography>
      <br />

      {answerOpen && (
        <TextField
          placeholder="Enter Your Answer Here"
          fullWidth
          rows={5}
          rowsMax={10}
          variant="outlined"
          multiline
        />
      )}

      <Button
        style={{ float: "right", marginTop: "10px" }}
        color="primary"
        variant="outlined"
        onClick={() => toggleAnswer(!answerOpen)}
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

      <div style={{ paddingTop: 30 }}>
        {answers.map((answer) => {
          return <AnswerCard answer={answer} />;
        })}
      </div>
    </div>
  );
};

export default AnswerSection;
