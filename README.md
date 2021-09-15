![Test](https://github.com/diegopf/spotify-web-player/actions/workflows/test.yml/badge.svg)

# SpotifyWebPlayer

Demo project to play around with Spotify Web API

### Setting Up the project

Install dependecies:

```
npm i
```
In order to run the application locally you must create an `environment.local.ts` file on the path:

`
spotify-web-player/apps/spotify-web-player/src/environments/environment.local.ts
`

and add your spotify api key as SPOTIFY_API_KEY env variable.


Start the application locally:

```
npm start
```

Run unit tests:
```
npm test
```

Run e2e tests:
```
npm run test:e2e
```

Run e2e tests in headless mode:
```
npm run test:e2e:ci
```
