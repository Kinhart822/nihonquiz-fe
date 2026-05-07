# NIHONQUIZ FE

## Tech Stack

- **Frontend:** React, Vite, TypeScript, Tailwind CSS, React Router v6
- **Package Manager:** Yarn

## Packages Used

- [framer-motion](https://www.framer.com/motion/) (for animations)
- [react-router-dom](https://reactrouter.com/) (for SPA navigation)
- [highlight.js](https://www.npmjs.com/package/highlight.js) (for syntax highlighting)
- [react-confetti](https://www.npmjs.com/package/react-confetti)
- [react-loader-spinner](https://www.npmjs.com/package/react-loader-spinner)
- [react-icons](https://react-icons.github.io/react-icons/)
- [react-use](https://github.com/streamich/react-use) (for the `useAudio()` hook)
- [eventsource-parser](https://www.npmjs.com/package/eventsource-parser) (for parsing OpenAI streams on the backend)

## How to Run Locally

Open a terminal in the root directory of the project and run:

```bash
yarn install
yarn dev
```

Vite will start the development server (usually on `http://localhost:5000`) and automatically proxy `/api` requests to the backend server.
