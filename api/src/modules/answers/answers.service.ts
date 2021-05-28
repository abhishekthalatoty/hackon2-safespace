import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Answer, AnswerDocument } from 'src/schemas/answer.schema';

@Injectable()
export class AnswersService {
  constructor(
    @InjectModel(Answer.name) private answerModel: Model<AnswerDocument>,
  ) {}

  getAllAnswers() {
    return this.answerModel.find();
  }

  getAnswersByQuestionId(questionId: string) {
    return this.answerModel.find({ questionId });
  }

  getAnswerById(id: string) {
    return this.answerModel.findById(id);
  }

  getAnswersByUserId(userId: string) {
    return this.answerModel.find({ userId });
  }

  addAnswer(answerData: IAnswer) {
    const answerDoc = new this.answerModel(answerData);
    return answerDoc.save();
  }
}
