import { Button, TextField, Typography } from "@material-ui/core";
import React, { useState } from "react";
import { ApiHelper } from "../services/ApiHelper";
import { AnswerCard } from "./AnswerCard";

const AnswerSection = ({ answers }) => {
  return (
    <div style={{ padding: "20px" }}>
      <div style={{ paddingTop: 30 }}>
        {answers.map((answer) => {
          return <AnswerCard key={answer.id} answer={answer} />;
        })}
      </div>
    </div>
  );
};

export default AnswerSection;
