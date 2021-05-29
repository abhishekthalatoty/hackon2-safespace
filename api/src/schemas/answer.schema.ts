import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type AnswerDocument = Answer & Document;

@Schema({ versionKey: false })
export class Answer {
  @Prop()
  userId: string;

  @Prop()
  questionId: string;

  @Prop()
  body: string;

  @Prop()
  userDisplayName: string;

  @Prop()
  date: Date;
}

export const AnswerSchema = SchemaFactory.createForClass(Answer);
