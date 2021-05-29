import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type QuestionDocument = Question & Document;

@Schema({ versionKey: false })
export class Question {
  @Prop()
  userId: string;

  @Prop()
  body: string;

  @Prop()
  date: Date;

  @Prop()
  userDisplayName: string;

  @Prop()
  tags: [string];
}

export const QuestionSchema = SchemaFactory.createForClass(Question);
