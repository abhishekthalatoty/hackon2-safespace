import {
  Controller,
  Request,
  Get,
  Post,
  UseGuards,
  Res,
  Body,
} from '@nestjs/common';
import { response } from 'express';
import { LocalAuthGuard } from './modules/auth/auth-local-auth-guard';
import { AuthService } from './modules/auth/auth.service';
import { JwtAuthGuard } from './modules/auth/jwt-auth.guard';

@Controller()
export class AppController {
  constructor(private authService: AuthService) {}

  @Get()
  getHello() {
    return { msg: 'hello' };
  }

  // @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Body() body, @Res() response) {
    const { username, password } = body;
    const data = await this.authService.login(username, password);
    if (data) {
      const userDoc = data['user'];
      const userData = {
        _id: userDoc._id,
        username: userDoc.username,
        displayName: userDoc.displayName,
        joinedDate: userDoc.joinedDate,
        dob: userDoc.dob,
      };
      response.json({ user: userData });
    } else {
      response.json({ message: 'Wrong Password / Username' });
    }
  }
}
