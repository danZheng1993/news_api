# News Fetcher

This is a simple backend api to return news fetched from GNews.

## Features

- One endpoint to accept `keyword`, `lang`, `country` to fetch news from GNews search endpoint and returns it

## Environment
- Built with node 19.8.1
- express: 4.16.1

## Scripts
- `npm start`: Run the server
- `npm run dev`: Run the server in dev mode

## Environment Variables
- `PORT`: Server will be running on this port. If not assigned, then default will be `3000`
- `NEWS_BASE_URL`: GNews search api base url and required
- `NEWS_API_KEY`: GNews api key and required

## How to run the server
- Create `.env` file and set variables listed above
 Sample Env file
  ```
    PORT=3030
    NEWS_BASE_URL=https://gnews.io/api/v4/search
    NEWS_API_KEY=b6b193cb033a703ded97769f0d15b3a5
  ```
- Run the server using `npm start` or `npm run dev` script