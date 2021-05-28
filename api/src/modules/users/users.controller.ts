import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AnswersService } from '../answers/answers.service';
import { QuestionsService } from '../questions/questions.service';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(
    private usersService: UsersService,
    private answersService: AnswersService,
    private questionsService: QuestionsService,
  ) {}

  @Get()
  getAllUsers() {
    return this.usersService.getAllUsers();
  }

  @Get(':id')
  getUserById(@Param('id') id) {
    return this.usersService.getUserById(id);
  }

  @Post()
  addUser(@Body() userData) {
    return this.usersService.addUser(userData);
  }

  @Get(':id/questions')
  getUserQuestions(@Param('id') id) {
    return this.questionsService.getQuestionsByUserId(id);
  }

  @Get(':id/answers')
  getUserAnswers(@Param('id') id) {
    return this.answersService.getAnswersByUserId(id);
  }
}
