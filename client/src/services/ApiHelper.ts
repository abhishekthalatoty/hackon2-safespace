import axios from "axios";
import Cookies from "js-cookie";
import { Question } from "../models/Question";
import { User } from "../models/User";

export class ApiHelper {
  private static instance: ApiHelper;
  baseUrl = "https://hackon2-safespace.herokuapp.com";
  user;

  async signup(username, displayName, password) {
    const res = await axios.post(`${this.baseUrl}/users`, {
      username,
      displayName,
      password,
    });
    const response = res.data;
    if (response && response.user) {
      this.user = new User(response.user);
      Cookies.set("user", JSON.stringify(this.user));
      return this.user;
    } else return response;
  }

  async logout() {
    this.user = null;
    Cookies.remove("user");
    return { msg: "ok" };
  }

  async login(username, password) {
    const res = await fetch(`${this.baseUrl}/auth/login`, {
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

    const response = await res.json();

    if (response && response.user) {
      this.user = new User(response.user);
      console.log(this.user);
      Cookies.set("user", JSON.stringify(this.user)); //change to user
      return this.user;
    } else return;
  }

  async getQuestions(): Promise<Question[]> {
    const data = await axios.get(`${this.baseUrl}/questions`);

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
