import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

import * as bodyParser from 'body-parser';


declare const module: any;


async function bootstrap() {
  const app = await NestFactory.create(
    AppModule
  );
  app.use(bodyParser.json({ limit: '50mb' }));
  app.use(bodyParser.urlencoded({ limit: '50mb', extended: true, parameterLimit: 1000000 }));
  app.enableCors();
  await app.listen(3000);

  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }

}
bootstrap();