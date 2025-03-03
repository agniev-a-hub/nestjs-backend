import 'reflect-metadata';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app/app.module';
import { EnvService } from './config/env/env.service';

async function start() {
  const app = await NestFactory.create(AppModule);
  /* CORS */
  app.enableCors({
    methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE', 'OPTIONS'],
    allowedHeaders: '*',
    credentials: true,
  });

  /* Swagger */
  const config = new DocumentBuilder().setTitle('Blog').setDescription('Description TODO').setVersion('0.0').addTag('tag1', 'tag2').build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api-doc', app, document);

  /* Env */
  const configService = app.get<EnvService>(EnvService);
  const port = configService.get('PORT');

  /* Run */
  await app.listen(port);

  console.log(`Application is running on: ${await app.getUrl()}`);
}

start();
