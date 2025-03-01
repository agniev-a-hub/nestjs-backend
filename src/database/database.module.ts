import { Module } from '@nestjs/common';
import { EnvModule } from 'src/env/env.module';
import { EnvService } from 'src/env/env.service';
import { databaseProviders } from './database.providers';

@Module({
  imports: [EnvModule],
  providers: [...databaseProviders, EnvService],
  exports: [...databaseProviders],
})
export class DatabaseModule {}
