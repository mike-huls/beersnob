module.exports = {
  development: {
    username: "mhuls",
    password: "pindakaasmetsambal",
    database: "dnxmap_dev",
    host: "localhost",
    port: "54321",
    dialect: "postgres"
  },
  production: {
    dialect: 'mssql',
    database: 'Test',
    username: 'testaccount',
    host: 'localhost',
    port: '1433',
    password: 'mike230889',
    logging: true,

  }
}
