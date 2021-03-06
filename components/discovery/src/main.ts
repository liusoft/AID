import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import config from './config'
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const options = new DocumentBuilder()
    .setTitle('AID Discovery')
    .setDescription('The AID Discovery API description')
    .setVersion('1.0')
    .addTag('Model')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);
  console.info("[discovery]: will listen on port " + config.PORT)
  app.enableCors();
  await app.listen(config.PORT);
}
bootstrap();
