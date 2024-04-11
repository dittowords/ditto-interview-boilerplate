# Ditto Full-Stack Interview Boilerplate

This is a simple webapp built with React, Express, and TypeScript.

## Setup

1. Install Node.js v20 - we recommend using Node Version Manager; follow these [installation instructions](https://github.com/nvm-sh/nvm?tab=readme-ov-file#install--update-script), then execute the commands below:

```
nvm install v20
nvm alias default v20
```

2. Run `npm run setup` in the root of this repository to install all dependencies.

## Running The App

From the root of this repository:

```
npm start
```

This will kick off two concurrent processes:

- The React app will be served on `http://localhost:3000`, and hot-reload when you save any changes in `/src`
- The Express server will be served on `http://localhost:4000`, and hot-reload when you save any changes to `server.ts`.

You can also run the frontend and backend as separate processes using the following commands:

```
npm run start:frontend
npm run start:backend
```

## Basic Features

Once you've started the server and the frontend, you can navigate to `http://localhost:3000` in your browser, and things should be working.

- Server:
  - The server has one route: `GET /counter`.
  - This route increments the server's in-memory variable, `counter`, and returns the new value in a JSON object.
  - The backend will log a timestamp to stdout whenever a request is made.
  - The backend is set up to allow CORS requests from any origin.
- Frontend:
  - The dev server serves a single React component
  - The component holds a value in state, and makes requests to `GET /counter` to increment that value.
