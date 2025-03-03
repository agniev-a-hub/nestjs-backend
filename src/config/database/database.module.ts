import { Module } from '@nestjs/common';
import { EnvModule } from 'src/config/env/env.module';
import { EnvService } from 'src/config/env/env.service';
import { databaseProviders } from './database.providers';

@Module({
  imports: [EnvModule],
  providers: [...databaseProviders, EnvService],
  exports: [...databaseProviders],
})
export class DatabaseModule {}
