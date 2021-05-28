import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Answer, AnswerSchema } from 'src/schemas/answer.schema';
import { Question, QuestionSchema } from 'src/schemas/question.schema';
import { User, UserSchema } from 'src/schemas/user.schema';
import { AnswersModule } from '../answers/answers.module';
import { AnswersService } from '../answers/answers.service';
import { QuestionsService } from '../questions/questions.service';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: User.name, schema: UserSchema },
      { name: Answer.name, schema: AnswerSchema },
      { name: Question.name, schema: QuestionSchema },
    ]),
  ],
  controllers: [UsersController],
  providers: [UsersService, AnswersService, QuestionsService],
})
export class UsersModule {}
