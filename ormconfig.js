module.exports = [
  {
    name: "sqlite",
    type: "sqlite",
    database: "database.sqlite",
    synchronize: true,
    logging: true,
    entities: ["src/entities/**/*.ts"],
    migrations: ["src/migration/**/*.ts"],
    subscribers: ["src/subscriber/**/*.ts"],
    cli: {
      entitiesDir: "src/entity",
      migrationsDir: "src/migration",
      subscribersDir: "src/subscriber"
    }
  },
  {
    name: "postgres",
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "test",
    password: "test",
    database: "github-changes",
    synchronize: true,
    logging: true,
    entities: ["src/entities/**/*.ts"],
    migrations: ["src/migration/**/*.ts"],
    subscribers: ["src/subscriber/**/*.ts"],
    cli: {
      entitiesDir: "src/entity",
      migrationsDir: "src/migration",
      subscribersDir: "src/subscriber"
    }
  }
];
