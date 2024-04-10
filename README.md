# Ditto Full-Stack Interview Boilerplate

This is a simple webapp built with React, Express, and TypeScript.

## Setup

To run this app, you'll need to have `node` and `npm installed on your machine -- at least version 20.

Once that's done, just run `npm install` in this repository.

## Running The App

To start the app, run `npm start` in the root of this repository.
This will kick off two concurrent processes:

- The React app will be served on `http://localhost:3000`, and hot-reload when you save any changes in `/src`
- The Express server will be served on `http://localhost:4000`, and hot-reload when you save any changes to `server.ts`.

## Basic Features

Once you've started the server and the frontend, you can navigate to `http://localhost:3000` in your browser, and things should be working.

- The backend has one route: `GET /counter`. This route increments the server's in-memory variable, `counter`, and returns the new result.
- The frontend is a single React component that holds a value in state, and makes requests to `GET /counter` to increment that value.
