import { DataSource } from 'typeorm';

export const myDataSource = new DataSource({
    type: 'postgres',
    host: 'localhost',
    port: 5433,
    username: 'twitter',
    password: 'twitter',
    database: 'twitter',
    entities: ['dist/src/entity/*.js'],
    logging: true,
    synchronize: true,
});
