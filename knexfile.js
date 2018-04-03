require('dotenv').load();

module.exports = {
  
    development: {
      client: "pg",
      connection: "postgres://localhost/games"
    },
    production: {
      client: "pg",
      connection: `${process.env.DATABASE_URL}?ssl=true`
    }
  
  };
