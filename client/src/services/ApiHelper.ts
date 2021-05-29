import { Answer } from "../models/Answer";
import { Question } from "../models/Question";

export class ApiHelper {
  private static instance: ApiHelper;
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

  async getQuestions(): Promise<Question[]> {
    return this.questions.map((ques) => new Question(ques));
  }

  async getAnswersForQuestionId(questionId: string) {
    return this.answers;
  }

  async submitAnswer(answer, questionId) {
    const user = this.user;
    const answerDoc = {
      body: answer,
      userId: user.id,
      userDisplayName: user.displayName,
      date: new Date(Date.now()).toDateString(),
      questionId,
    };
    this.answers.push(answerDoc);
    return;
  }

  static getInstance() {
    if (this.instance == null) this.instance = new ApiHelper();
    return this.instance;
  }
}
