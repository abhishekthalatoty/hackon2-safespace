import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AnswersService } from './answers.service';

@Controller('answers')
export class AnswersController {
  constructor(private answersService: AnswersService) {}

  @Get(':id')
  getAnswerById(@Param('id') id) {
    return this.answersService.getAnswerById(id);
  }

  @Post()
  addAnswers(@Body() answerData) {
    return this.answersService.addAnswer(answerData);
  }

  @Get()
  getAllDebug() {
    return this.answersService.getAllAnswers();
  }
}
