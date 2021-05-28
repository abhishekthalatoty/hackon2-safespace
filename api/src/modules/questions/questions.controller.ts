import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AnswersService } from '../answers/answers.service';
import { QuestionsService } from './questions.service';

@Controller('questions')
export class QuestionsController {
  constructor(
    private questionsService: QuestionsService,
    private answersService: AnswersService,
  ) {}

  @Get()
  getQuestions() {
    return this.questionsService.getQuestions();
  }

  @Get(':id')
  getQuestionById(@Param() params) {
    return this.questionsService.getQuestionById(params.id);
  }

  @Get(':id/answers')
  getAnswersByQuestionId(@Param() params) {
    return this.answersService.getAnswersByQuestionId(params.id);
  }

  @Post()
  addQuestion(@Body() body) {
    return this.questionsService.addQuestion(body);
  }
}
