import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    credentials: true,
    methods: ['GET', 'POST'],
    origin: 'http://localhost:3000',
  });
  await app.listen(3080);
}
bootstrap();
