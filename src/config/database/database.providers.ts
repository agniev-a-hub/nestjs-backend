import { EnvService } from 'src/env/env.service';
import { User } from 'src/user/entities/user.entity';
import { DataSource } from 'typeorm';

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    inject: [EnvService],
    useFactory: async (envService: EnvService) => {
      const dataSource = new DataSource({
        type: 'postgres',
        host: envService.get('POSTGRES_HOST'),
        username: envService.get('POSTGRES_USER'),
        database: envService.get('POSTGRES_DB'),
        password: envService.get('POSTGRES_PASSWORD'),
        port: envService.get('POSTGRES_PORT'),
        synchronize: Boolean(process.env.NODE_ENV === 'development'),
        entities: [User],
      });
      return dataSource.initialize();
    },
  },
];
