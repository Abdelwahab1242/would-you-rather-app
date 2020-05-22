## Would you Rather App

This is my project for Udacity's React Nanodegree Program, It's a would you rather game in which users to login, answer questions, create new questions and it contains a leaderboard of top scores.

## Table of Contents

- [Quick Start](#quick-start)
- [Requirements](#Requirements)
- [What is Included](#What-is-Included)
- [Built with](#built-with)

## Quick Start

To get started developing right away:

- Make sure that you have Node.js installed on your local and then clone this repository.
- install all project dependencies with `npm install`
- start the development server with `npm start`

## Requirements

- You need to have [Node.js](https://nodejs.org/en/) installed

## What is Included

```bash
├── README.md - This file.
├── package.json # npm package manager file. It's unlikely that you'll need to modify this.
├── public
│   ├── favicon.ico # React Icon, You may change if you wish.
│   └── index.html # DO NOT MODIFY
└── src
    ├── actions # Basic app actions for the redux store.
    │   ├── authUser.js
    │   ├── questions.js
    |   ├── shared.js
    │   └── users.js
    ├── Components # Basic App Components.
    │   ├── App.js
    │   ├── Home.js
    |   ├── LeaderboardTable.js
    │   ├── Login.js
    │   ├── LoginForm.js
    │   ├── NavBar.js
    │   ├── NewQuestions.js
    │   ├── NoMatch.js
    │   ├── QuestionCard.js
    │   ├── QuestionItem.js
    │   ├── QuestionResult.js
    │   └── UserCard.js
    ├── middleware # Redux Store Middleware.
    │   ├── index.js
    │   └── logger.js
    ├── reducers # Redux Store Reducers
    │   ├── authUser.js
    │   ├── index.js
    │   ├── questions.js
    │   └── users.js
    ├── utils # Helpful files.
    │   ├── _DATA.js # represents a fake database and methods that let you access the data
    │   └── api.js # A fake API to access the database
    ├── index.css # Global styles. You probably won't need to change anything here.
    └── index.js # You should not need to modify this file. It is used for DOM rendering only.
```

## Built with

- React
- Redux
- React-Router
- Semantic UI Elements
- Webpack
- Javascript
