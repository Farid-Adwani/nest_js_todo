import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { CustomFilter } from './todo/filters/custom.filter';
// import * as morgan from 'morgan';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({transform:true,}))
  // app.useGlobalFilters(new CustomFilter())
  // app.use(new loggerMiddleware)

  await app.listen(3000);
}
bootstrap();
