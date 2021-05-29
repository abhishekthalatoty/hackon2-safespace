import { Controller, Request, Get, Post, UseGuards, Res } from '@nestjs/common';
import { response } from 'express';
import { LocalAuthGuard } from './modules/auth/auth-local-auth-guard';
import { AuthService } from './modules/auth/auth.service';
import { JwtAuthGuard } from './modules/auth/jwt-auth.guard';

@Controller()
export class AppController {
  constructor(private authService: AuthService) {}

  @Get()
  getHello(): string {
    return 'Hello';
  }

  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Request() req, @Res() response) {
    const data = await this.authService.login(req.user);
    const token = data['access_token'];
    response.cookie('jwt', token);
    response.send('ok');
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }
}
