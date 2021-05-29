import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Question, QuestionDocument } from 'src/schemas/question.schema';
import { AnswersService } from '../answers/answers.service';

@Injectable()
export class QuestionsService {
  constructor(
    @InjectModel(Question.name) private questionModel: Model<QuestionDocument>,
    private answersService: AnswersService,
  ) {}

  async getQuestions() {
    const questions = await this.questionModel.find().exec();

    const questionAnswers = await Promise.all(
      questions.map(async (ques) => {
        const randomAnswer =
          await this.answersService.getRandomAnswerForQuestionId(ques._id);
        return {
          _id: ques.id,
          body: ques.body,
          userDisplayName: ques.userDisplayName,
          userId: ques.userId,
          randomAnswer: randomAnswer?.body.substring(0, 300),
          date: ques.date,
        };
      }),
    );
    return questionAnswers;
  }

  async getQuestionById(id: string) {
    return this.questionModel.findById(id).exec();
  }

  async addQuestion(questionData: IQuestion) {
    questionData.date = new Date(Date.now());
    const questionDoc = new this.questionModel(questionData);
    return questionDoc.save();
  }

  async getQuestionsByUserId(userId: string) {
    return this.questionModel.find({ userId }).exec();
  }
}
