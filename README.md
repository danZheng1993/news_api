# News Fetcher

This is a simple backend api to return news fetched from GNews.

## Features

- Two endpoints for search the news and get top headlines.

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
- Run `npm install`
- Run the server using `npm start` or `npm run dev` script

## Endpoint detail
- GET /news/search
  Allows you to search news using keyword and other options

| Parameter Name | Default Value | Description                                                   |
| -------------- | ------------- | ------------------------------------------------------------- |
| q              | None          | This parameter allows you to specify your search keywords     |
| lang           | Any           | This parameter allows you to specify the language of the news |
| country        | Any           | This parameter allows you to specify the country              |
| max            | 10            | This parameter allows you to specify the number of news       |
| from           | None          | This parameter is for filter the articles by publication date |
| to             | None          | This parameter is for filter the articles by publication date |

- GET /news/headlines
  Allows you to get top headlines with options
  
| Parameter Name | Default Value | Description                                                   |
| -------------- | ------------- | ------------------------------------------------------------- |
| category       | general       | This parameter allows you to specify your filter category     |
| lang           | Any           | This parameter allows you to specify the language of the news |
| country        | Any           | This parameter allows you to specify the country              |
| max            | 10            | This parameter allows you to specify the number of news       |
| from           | None          | This parameter is for filter the articles by publication date |
| to             | None          | This parameter is for filter the articles by publication date |
