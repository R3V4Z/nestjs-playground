import { ConfigService } from '@nestjs/config';
import { DataSource, DataSourceOptions } from 'typeorm';
import { config } from 'dotenv';
config();

const configService = new ConfigService();

export default new DataSource({
  type: 'mysql',
  host: configService.get<string>('MYSQL_HOST'),
  port: configService.get<number>('MYSQL_PORT'),
  username: configService.get<string>('MYSQL_USERNAME'),
  password: configService.get<string>('MYSQL_PASSWORD'),
  database: configService.get<string>('MYSQL_DATABASE'),
  entities: [`${__dirname}/../src/**/**/*.entity{.ts,.js}`],
  synchronize: configService.get('nodenv') === 'development',
  logging: configService.get('nodenv') === 'development',
  migrations: [`${__dirname}/migrations/*{.ts,.js}`],
  migrationsTableName: 'migrations',
} as DataSourceOptions);
