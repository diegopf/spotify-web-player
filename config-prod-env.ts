const fs = require('fs');
const path = require('path');
const dotenv = require('dotenv');

dotenv.config();

const environmentProdConfig = `export const environment = {
  production: true,
  SPOTIFY_API_KEY: '${process.env.SPOTIFY_API_KEY}'
};
`;

fs.writeFile(
  path.resolve(
    __dirname,
    'apps/spotify-web-player/src/environments/environment.prod.ts'
  ),
  environmentProdConfig,
  (err: any) => {
    if (err) {
      console.error(err);
    }
  }
);
