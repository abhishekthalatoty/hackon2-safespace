import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema({ versionKey: false })
export class User extends Document {
  @Prop()
  username: string;

  @Prop()
  displayName: string;

  @Prop()
  joinedDate: Date;

  @Prop()
  dob: Date;
}

export const UserSchema = SchemaFactory.createForClass(User);
