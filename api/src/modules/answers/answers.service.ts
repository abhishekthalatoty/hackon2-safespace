import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Answer, AnswerDocument } from 'src/schemas/answer.schema';

@Injectable()
export class AnswersService {
  constructor(
    @InjectModel(Answer.name) private answerModel: Model<AnswerDocument>,
  ) {}

  async getAllAnswers() {
    return this.answerModel.find().exec();
  }

  async getAnswersByQuestionId(questionId: string) {
    return this.answerModel.find({ questionId }).exec();
  }

  async getRandomAnswerForQuestionId(questionId: string) {
    return this.answerModel.findOne({ questionId }).exec();
  }

  async getAnswerById(id: string) {
    return this.answerModel.findById(id).exec();
  }

  async getAnswersByUserId(userId: string) {
    return this.answerModel.find({ userId }).exec();
  }

  addAnswer(answerData: IAnswer) {
    const answerDoc = new this.answerModel(answerData);
    return answerDoc.save();
  }
}
