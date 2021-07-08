import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'decarbondb.mysql.database.azure.com',
  port: 3306,
  username: 'kcuser@decarbondb',
  password: 'Kpmg2021!',
  database: 'Datsutanso_Schema',
  entities: ['dist/**/*.entity.js'],
  synchronize: false,
};
