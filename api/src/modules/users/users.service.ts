import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from 'src/schemas/user.schema';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async addUser(userData) {
    userData.joinedDate = new Date(Date.now());
    const userDoc = await this.userModel
      .find({ username: userData.username })
      .exec();
    if (userDoc.length == 0) {
      const userDo = new this.userModel(userData);
      const newUser = await userDo.save();
      return {
        user: {
          _id: newUser._id,
          username: newUser.username,
          displayName: newUser.displayName,
          dob: newUser.dob,
          joinedDate: newUser.joinedDate,
        },
      };
    } else {
      return { message: 'username already exists' };
    }
  }

  getAllUsers() {
    return this.userModel.find();
  }

  getUserByUsername(username: string) {
    return this.userModel.findOne({ username });
  }

  getUserById(id: string) {
    return this.userModel.findById(id);
  }

  editUser(userData) {}
}
