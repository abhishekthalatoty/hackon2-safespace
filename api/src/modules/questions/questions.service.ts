import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Question, QuestionDocument } from 'src/schemas/question.schema';

@Injectable()
export class QuestionsService {
  constructor(
    @InjectModel(Question.name) private questionModel: Model<QuestionDocument>,
  ) {}

  getQuestions() {
    return this.questionModel.find();
  }

  getQuestionById(id: string) {
    return this.questionModel.findById(id);
  }

  addQuestion(questionData: IQuestion) {
    questionData.date = new Date(Date.now());
    const questionDoc = new this.questionModel(questionData);
    return questionDoc.save();
  }

  getQuestionsByUserId(userId: string) {
    return this.questionModel.find({ userId });
  }
}
