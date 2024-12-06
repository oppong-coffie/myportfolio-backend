import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Enable CORS to allow requests from any origin
  app.enableCors({
    origin: '*', // Allow all origins
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS', // Allow necessary HTTP methods
    allowedHeaders: 'Content-Type, Authorization', // Allow required headers
  });

  await app.listen(3000);
}
bootstrap();
