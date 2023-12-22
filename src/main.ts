import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {NestExpressApplication} from "@nestjs/platform-express";
import * as path from "path";
 import { ValidationPipe } from '@nestjs/common';
 import * as cors from 'cors';
import { env } from 'process';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.useStaticAssets(path.join(__dirname , "../uploads"));
  app.useGlobalPipes(new ValidationPipe());
  app.use(cors());
  await app.listen(process.env.PORT || 3000);
}
bootstrap();