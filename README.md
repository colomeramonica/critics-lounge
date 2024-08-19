# Critic's Lounge
An app for the enjoyers of movies and tv shows. Here you catch up with the latest releases and leave your review!

App created to serve as a study of React, Vite and Tailwind in addition to good practices.

## Features

- *React + Vite*: In the latest version
- *TailwindCSS*: Utility-first CSS framework.
- *Jest*: For unit testing.
- *Husky*: Git hooks to ensure code quality before commits.
- *ESLint & Prettier*: For consistent code formatting and linting.

## Getting Started

### Prerequisites

- Node.js >= 14
- npm or Yarn

### Installation

Clone the repository and install dependencies:

``` bash
https://github.com/colomeramonica/critics-lounge.git
cd critics-lounge
npm install
```

### Development

To start the development server:

bash
npm start


This will launch the application in development mode with hot reloading.

### Production Build

To create a production build:

bash
npm run build


The output will be in the `dist` directory, ready to be deployed.

### Linting & Formatting

To check for linting errors:

bash
npm run lint


To automatically fix linting errors and format the code:

bash
npm run lint:fix
npm run prettier:fix


### Testing

To run tests:

bash
npm test


### Git Hooks with Husky

Husky is configured to run Prettier and ESLint before every commit. This ensures that only well-formatted and lint-free code is committed.

## License

This project is licensed under the MIT License.