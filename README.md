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

- Navigate to `http://localhost:3000` to access the frontend
- Send requests to `http://localhost:4000` to communicate with the backend
