module.exports = {
    type: 'postgres',
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    entities: ['src/entities/*.ts'],
    migrations: ['src/entities/typeorm/migrations/*.ts'],
    synchronize: true,
    cli: {
        entitiesDir: 'src/entities',
        migrationsDir: 'src/entities/typeorm/migrations',
    },
};
