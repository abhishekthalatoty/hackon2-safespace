import { Answer } from "../models/Answer";
import Cookies from "js-cookie";
import axios from "axios";
import { Question } from "../models/Question";
import { useRadioGroup } from "@material-ui/core";

export class ApiHelper {
  private static instance: ApiHelper;
  baseUrl = "http://localhost:3080";
  user = {
    id: "userId",
    displayName: "SathvikVro",
  };

  answers = [
    {
      id: "qid1",
      userDisplayName: "prateek",
      body: " This is answer for every question, Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec qu.This is answer for every question, Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec qu.This is answer for every question, Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec qu.This is answer for every question, Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec qu.",
    },
    {
      id: "qid2",
      userDisplayName: "Sanjay",
      body: " This is answer for every question, Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec qu.",
    },
    {
      id: "qid13",
      userDisplayName: "Abhishek",
      body: " This is answer for every question, Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec qu.This is answer for every question, Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec qu.This is answer for every question, Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec qu.This is answer for every question, Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec qu.",
    },
  ] as any;

  questions = [
    {
      body: "what is ur age 10 years back, plz tell me",
      questionId: "1",
      date: "12/05/21",
      userDisplayName: "prateek",
    },
    {
      body: "Is mental health really required?",
      questionId: "2",
      date: "20/05/21",
      userDisplayName: "Sanjay",
    },
    {
      body: "what is the necesity of having religion?",
      questionId: "3",
      date: "28/05/21",
      userDisplayName: "Abhishek",
    },
    {
      body: "what is ur age 10 years back, plz tell me",
      questionId: "1",
      date: "12/05/21",
      userDisplayName: "prateek",
    },
    {
      body: "Is mental health really required?",
      questionId: "2",
      date: "20/05/21",
      userDisplayName: "Sanjay",
    },
    {
      body: "what is the necesity of having religion?",
      questionId: "3",
      date: "28/05/21",
      userDisplayName: "Abhishek",
    },
  ];

  async signup(username, password) {
    /// implement later
    const res = await fetch("http://localhost:3080/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({
        username,
        password,
      }),
    });
  }
  async logout() {
    this.user = null;
    Cookies.remove("user");
    return { msg: "ok" };
  }

  async login(username, password) {
    const res = await fetch("http://localhost:3080/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({
        username,
        password,
      }),
    });

    const user = await res.json();
    this.user = user;
    Cookies.set("user", "user"); //change to user
    return user;
  }

  async getQuestions(): Promise<Question[]> {
    const data = await axios.get(`${this.baseUrl}/questions`);
    console.log(data);

    return data["data"].map((ques) => new Question(ques));
  }

  async getAnswersForQuestionId(questionId: string) {
    const doc = await axios.get(
      `${this.baseUrl}/questions/${questionId}/answers`
    );
    return doc["data"];
  }

  async submitAnswer(answer, questionId) {
    const user = this.user;
    const answerDoc = {
      body: answer,
      userId: user.id,
      userDisplayName: user.displayName,
      date: new Date(Date.now()),
      questionId,
    };
    const doc = await axios.post(`${this.baseUrl}/answers`, answerDoc);
    return;
  }

  async submitQuestion(question) {
    const questionDoc = {
      body: question,
      userId: this.user.id,
      userDisplayName: this.user.displayName,
      date: new Date(Date.now()),
    };
    const result = await axios.post(`${this.baseUrl}/questions`, questionDoc);
  }

  static getInstance() {
    if (this.instance == null) this.instance = new ApiHelper();
    return this.instance;
  }
}
