import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cors from 'cors';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Use CORS middleware
  app.use(cors({
    origin: '*', // Allow all origins
  }));

  await app.listen(3000);
}
bootstrap();
